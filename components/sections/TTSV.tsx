import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function TTSV() {
  return (
    <section id="silicon-valley" className="relative py-24 md:py-32 px-6 overflow-hidden bg-[#0d0d0d]">
      {/* Desktop only: full-bleed photo on the left */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-[60%] pointer-events-none">
        <Image
          src="/images/ttsv25.png"
          alt="Tech Trek Silicon Valley 2025 — Golden Gate Bridge"
          fill
          className="object-cover object-center"
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
                className="text-white uppercase text-5xl md:text-6xl leading-none tracking-tighter"
                style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}
              >
                El viaje que
                <br />
                <span className="text-[#eec416]">ningún otro</span>
                <br />
                hace
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="mb-8 space-y-4">
              <p
                className="text-[#999999] text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Llevamos a un grupo de estudiantes del ITBA directo al corazón
                del ecosistema emprendedor global: Silicon Valley.
              </p>
              <p
                className="text-[#999999] leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Visitas a empresas, reuniones con founders y una inmersión real
                en la cultura que define cómo se construyen los negocios del
                futuro.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="mb-10 md:mb-0">
              <div className="inline-flex items-center gap-3 border border-[#eec416]/20 rounded-full px-5 py-2.5 bg-[#eec416]/5">
                <span
                  className="text-[#eec416] text-xs uppercase tracking-[0.25em]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Único en el ITBA
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
  );
}
