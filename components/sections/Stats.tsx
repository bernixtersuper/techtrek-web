"use client";

import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { stats } from "@/data/content";
import AnimatedSection from "@/components/ui/AnimatedSection";

function CountUp({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <AnimatedSection className="mb-16 text-center">
          <p
            className="text-[#eec416] text-xs uppercase tracking-[0.3em]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Números que hablan
          </p>
        </AnimatedSection>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#1f1f1f]">
          {stats.map((stat, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.15}
              className="px-16 py-8 sm:py-0 flex flex-col items-center gap-3 text-center"
            >
              <div className="stat-number">
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  inView={isInView}
                />
              </div>
              <p
                className="text-[#999999] text-sm leading-snug"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {stat.label}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
