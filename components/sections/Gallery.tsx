"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { galleryImages } from "@/data/content";

// Pattern repeats every 6 photos. Defines [colSpan, rowSpan] on desktop (3-col grid).
// Mobile is always col-span-1 row-span-1 except the first which is col-span-2.
const PATTERN: [number, number][] = [
  [1, 2], // tall
  [2, 1], // wide
  [1, 1], // square
  [1, 1], // square
  [1, 2], // tall
  [1, 1], // square
];

function spanClass(col: number, row: number) {
  const c = col === 2 ? "md:col-span-2" : "md:col-span-1";
  const r = row === 2 ? "md:row-span-2" : "md:row-span-1";
  return `${c} ${r}`;
}

export default function Gallery() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="mb-4">
          <p
            className="text-[#eec416] text-xs uppercase tracking-[0.3em]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Momentos reales
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="mb-12">
          <h2
            className="text-white uppercase text-5xl md:text-7xl leading-none tracking-tighter"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}
          >
            Así se
            <br />
            <span className="text-[#eec416]">vive</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {galleryImages.map((photo, i) => {
            const [col, row] = PATTERN[i % PATTERN.length];
            const mobileClass = i === 0 ? "col-span-2" : "col-span-1";
            const desktopClass = spanClass(col, row);
            const minH = row === 2 ? "360px" : "220px";

            return (
              <AnimatedSection
                key={i}
                delay={i * 0.06}
                className={`${mobileClass} ${desktopClass} overflow-hidden rounded-2xl group cursor-pointer`}
              >
                <div
                  className="relative w-full h-full overflow-hidden rounded-2xl"
                  style={{ minHeight: minH }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                    <span
                      className="text-white/60 text-xs uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-300"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {photo.label}
                    </span>
                    <span className="h-px bg-[#eec416]/0 group-hover:bg-[#eec416]/80 w-0 group-hover:w-6 transition-all duration-500" />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
