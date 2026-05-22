"use client";

import Image from "next/image";
import { events } from "@/data/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

const eventMedia: Record<string, { src: string; alt: string }> = {
  hub: { src: "/images/hub/alumnosenelhub25.JPG", alt: "Tech Trek Hub" },
  talks: { src: "/images/talks/HKazah1.jpg", alt: "TT Talks" },
  biohack: { src: "/images/biohack.png", alt: "BioHackathon" },
  visits: { src: "/images/talks/talk-complif.jpg", alt: "TT Visits" },
};

const eventNumbers: Record<string, string> = {
  hub: "01",
  visits: "02",
  talks: "03",
  biohack: "04",
};

export default function Events() {
  return (
    <section id="eventos" className="py-24 md:py-32 px-6 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="mb-4">
          <p
            className="text-[#eec416] text-xs uppercase tracking-[0.3em]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Lo que hacemos
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="mb-16">
          <h2
            className="text-white uppercase text-4xl md:text-7xl leading-none tracking-tighter"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}
          >
            Nuestros
            <br />
            <span className="text-[#eec416]">Eventos</span>
          </h2>
        </AnimatedSection>

        {/* Events — vertical stack */}
        <div className="flex flex-col gap-4">
          {events.map((event, i) => {
            const media = eventMedia[event.id];
            const num = eventNumbers[event.id];

            return (
              <AnimatedSection key={event.id} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25 }}
                  className="relative border border-[#1f1f1f] rounded-2xl overflow-hidden flex flex-col md:flex-row group cursor-default min-h-[280px]"
                >
                  {/* Photo — left side on desktop */}
                  <div className="relative w-full md:w-[45%] min-h-[200px] md:min-h-0 shrink-0">
                    <Image
                      src={media.src}
                      alt={media.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f0f0f] hidden md:block" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0f0f] md:hidden" />
                  </div>

                  {/* Content — right side */}
                  <div className="relative z-10 flex flex-col justify-between p-8 md:p-10 bg-[#0f0f0f] flex-1">
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-6">
                      <span
                        className="text-[10px] uppercase tracking-[0.25em] bg-[#eec416] text-[#0d0d0d] rounded-full px-3 py-1 font-semibold"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {event.tag}
                      </span>
                      <span
                        className="text-[#eec416]/15 select-none leading-none"
                        style={{ fontFamily: "var(--font-syne)", fontWeight: 600, fontSize: "4rem", lineHeight: 1 }}
                      >
                        {num}
                      </span>
                    </div>

                    {/* Name + description */}
                    <div className="flex-1">
                      <h3
                        className="text-white uppercase leading-none tracking-tight mb-4 text-2xl md:text-4xl"
                        style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}
                      >
                        {event.name}
                      </h3>
                      <p
                        className="text-[#999999] leading-relaxed max-w-md"
                        style={{ fontFamily: "var(--font-inter)", fontSize: "0.95rem" }}
                      >
                        {event.description}
                      </p>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#1f1f1f]">
                      <span
                        className="text-xs text-[#555] uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {event.date}
                      </span>
                      <span className="text-[#333] text-xs">·</span>
                      <span
                        className="text-xs text-[#555]"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {event.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
