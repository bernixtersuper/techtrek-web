"use client";

import { pastSponsors } from "@/data/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SponsorMarquee from "@/components/ui/SponsorMarquee";
import { useLanguage } from "@/lib/i18n";

export default function Sponsors() {
  const { t } = useLanguage();

  return (
    <section id="sponsors" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-4">
          <p
            className="text-[#eec416] text-xs uppercase tracking-[0.3em]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {t.sponsors.eyebrow}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mb-16 text-center">
          <h2
            className="text-white uppercase text-4xl md:text-7xl leading-none tracking-tighter"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}
          >
            {t.sponsors.heading1}
            <br />
            <span className="text-[#eec416]">{t.sponsors.heading2}</span>
          </h2>
        </AnimatedSection>
      </div>

      {/* Logo marquee — full bleed */}
      <AnimatedSection delay={0.2} className="mb-6">
        <p
          className="text-[#333] text-xs uppercase tracking-[0.3em] mb-8 px-6 max-w-7xl mx-auto"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {t.sponsors.trusted}
        </p>
        <SponsorMarquee sponsors={pastSponsors} />
      </AnimatedSection>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection delay={0.3} className="text-center mt-16">
          <p
            className="text-[#999999] text-lg mb-3"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {t.sponsors.cta}
          </p>
          <p
            className="text-[#555] mb-8 max-w-md mx-auto"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {t.sponsors.ctaDesc}
          </p>
          <a
            href="mailto:techtrek@itba.edu.ar?subject=Consulta%20de%20Sponsorship"
            className="btn-gold inline-flex items-center gap-2 px-8 py-4 bg-[#eec416] text-[#0d0d0d] rounded-full text-sm uppercase tracking-widest hover:bg-[#f5d038] transition-all duration-200 hover:scale-105 active:scale-100"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
          >
            techtrek@itba.edu.ar
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
