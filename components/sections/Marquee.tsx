"use client";

import { marqueeKeywords } from "@/data/content";

function MarqueeRow({
  direction = "left",
  offset = 0,
}: {
  direction?: "left" | "right";
  offset?: number;
}) {
  const keywords = [...marqueeKeywords, ...marqueeKeywords];
  const trackClass =
    direction === "left" ? "marquee-track-left" : "marquee-track-right";

  return (
    <div className="overflow-hidden py-3">
      <div className={`flex whitespace-nowrap gap-0 ${trackClass}`}>
        {keywords.map((word, i) => (
          <span
            key={i}
            className="flex items-center"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}
          >
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
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="py-12 border-y border-[#1f1f1f] overflow-hidden bg-[#0d0d0d]">
      <MarqueeRow direction="left" offset={0} />
      <MarqueeRow direction="right" offset={1} />
    </section>
  );
}
