import Image from "next/image";
import { pastSponsors } from "@/data/content";
import AnimatedSection from "@/components/ui/AnimatedSection";

const doubled = [...pastSponsors, ...pastSponsors];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-4">
          <p
            className="text-[#eec416] text-xs uppercase tracking-[0.3em]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Sponsors
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mb-16 text-center">
          <h2
            className="text-white uppercase text-5xl md:text-7xl leading-none tracking-tighter"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}
          >
            Sé parte
            <br />
            <span className="text-[#eec416]">del cambio</span>
          </h2>
        </AnimatedSection>
      </div>

      {/* Logo marquee — full bleed */}
      <AnimatedSection delay={0.2} className="mb-6">
        <p
          className="text-[#333] text-xs uppercase tracking-[0.3em] mb-8 px-6 max-w-7xl mx-auto"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Confiaron en nosotros
        </p>
        <div
          className="overflow-hidden bg-[#eec416]/10 py-6"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
          }}
        >
          <div className="flex items-center marquee-track-left">
            {doubled.map((sponsor, i) => (
              <div
                key={i}
                className="shrink-0 mx-6 md:mx-12 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={sponsor.src}
                  alt={sponsor.name}
                  width={160}
                  height={60}
                  className="h-7 md:h-[52px] w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection delay={0.3} className="text-center mt-16">
          <p
            className="text-[#999999] text-lg mb-3"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            ¿Querés sumarte?
          </p>
          <p
            className="text-[#555] mb-8 max-w-md mx-auto"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Escribinos y te contamos todas las formas de colaborar con nosotros.
          </p>
          <a
            href="mailto:techtrek@itba.edu.ar?subject=Consulta%20de%20Sponsorship"
            className="btn-gold inline-flex items-center gap-2 px-8 py-4 bg-[#eec416] text-[#0d0d0d] rounded-full text-sm uppercase tracking-widest hover:bg-[#f5d038] transition-all duration-200 hover:scale-105 active:scale-100"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
          >
            techtrek@itba.edu.ar
            <span className="text-base">→</span>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
