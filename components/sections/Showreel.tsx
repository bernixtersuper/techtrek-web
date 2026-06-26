"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/lib/i18n";

export default function Showreel() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="mb-4">
          <p
            className="text-[#eec416] text-xs uppercase tracking-[0.3em]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {t.showreel.eyebrow}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mb-12">
          <h2
            className="text-white uppercase text-4xl md:text-7xl leading-none tracking-tighter"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}
          >
            {t.showreel.heading1}{" "}
            <span className="text-[#eec416]">{t.showreel.heading2}</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative rounded-2xl overflow-hidden border border-[#1f1f1f] bg-[#0f0f0f]">
            <video
              controls
              playsInline
              className="w-full aspect-video"
              poster="/images/hub/alumnosenelhub25.JPG"
            >
              <source src="/videos/hub-interviews.mp4" type="video/mp4" />
            </video>
          </div>
          <p
            className="text-[#555] text-xs mt-4 text-center"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {t.showreel.caption}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
