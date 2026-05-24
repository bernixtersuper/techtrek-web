"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function TTSV() {
  return (
    <Link href="/events/ttsv" className="block group">
      <section
        id="silicon-valley"
        className="relative py-24 md:py-32 px-6 overflow-hidden bg-[#0d0d0d] cursor-pointer"
      >
        {/* Yellow tint on hover */}
        <div className="absolute inset-0 bg-[#eec416]/0 group-hover:bg-[#eec416]/[0.04] transition-colors duration-500 pointer-events-none z-[1]" />

        {/* Desktop only: full-bleed photo on the left */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-[60%] pointer-events-none overflow-hidden">
          <Image
            src="/images/ttsv25.png"
            alt="Tech Trek Silicon Valley 2025 — Golden Gate Bridge"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="60vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#0d0d0d] via-[#0d0d0d]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/40 via-transparent to-[#0d0d0d]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="md:flex md:justify-end">
            <div className="max-w-lg">
              <AnimatedSection className="mb-4">
                <p
                  className="text-[#eec416] text-xs uppercase tracking-[0.3em]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Tech Trek Silicon Valley
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1} className="mb-8">
                <h2
                  className="text-white uppercase text-4xl md:text-6xl leading-none tracking-tighter"
                  style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}
                >
                  Un viaje
                  <br />
                  <span className="text-[#eec416]">único</span>
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.2} className="mb-8">
                <p
                  className="text-[#999999] leading-relaxed max-w-md"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "0.95rem" }}
                >
                  Dos semanas en Silicon Valley y San Francisco: visitas a
                  empresas, cenas con ingenieros de la NASA, founders y
                  emprendedores, y una forma distinta de pensar el mundo.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3} className="mb-10 md:mb-0">
                <div className="flex items-center gap-6">
                  <div className="inline-flex items-center gap-3 border border-[#eec416]/20 rounded-full px-5 py-2.5 bg-[#eec416]/5">
                    <span
                      className="text-[#eec416] text-xs uppercase tracking-[0.25em]"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Único en el ITBA
                    </span>
                  </div>
                  <span
                    className="flex items-center gap-2 text-[#eec416] text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Ver edición 2025
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </AnimatedSection>

              {/* Mobile only: photo below text */}
              <AnimatedSection delay={0.35} className="md:hidden mt-10">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#1f1f1f]">
                  <Image
                    src="/images/ttsv25.png"
                    alt="Tech Trek Silicon Valley 2025 — Golden Gate Bridge"
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
}
