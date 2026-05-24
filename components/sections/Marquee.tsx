"use client";

import { motion } from "framer-motion";
import { marqueeKeywords } from "@/data/content";

function MarqueeRow({
  direction = "left",
  offset = 0,
  duration = 25,
}: {
  direction?: "left" | "right";
  offset?: number;
  duration?: number;
}) {
  const track = [...marqueeKeywords, ...marqueeKeywords, ...marqueeKeywords];
  const animate =
    direction === "left"
      ? { x: ["0%", "-33.333%"] }
      : { x: ["-33.333%", "0%"] };

  return (
    <div className="overflow-hidden py-3">
      <motion.div
        className="flex whitespace-nowrap"
        style={{ width: "max-content" }}
        animate={animate}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {track.map((word, i) => (
          <span key={i} className="flex items-center" style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}>
            <span
              className={`text-2xl md:text-3xl uppercase tracking-wide px-4 ${
                (i + offset) % 3 === 0 ? "text-white" : "text-[#2a2a2a]"
              }`}
            >
              {word}
            </span>
            <span className="text-[#eec416] text-2xl px-2">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="py-12 border-y border-[#1f1f1f] overflow-hidden bg-[#0d0d0d]">
      <MarqueeRow direction="left"  offset={0} duration={25} />
      <MarqueeRow direction="right" offset={1} duration={32} />
    </section>
  );
}
