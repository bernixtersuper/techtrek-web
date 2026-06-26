"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { instagramReels, siteConfig } from "@/data/content";
import { useLanguage } from "@/lib/i18n";

export default function Interviews() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 px-6 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="mb-4">
          <p
            className="text-[#eec416] text-xs uppercase tracking-[0.3em]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {t.interviews.eyebrow}
          </p>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <AnimatedSection delay={0.1}>
            <h2
              className="text-white uppercase text-4xl md:text-7xl leading-none tracking-tighter"
              style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}
            >
              {t.interviews.heading1}
              <br />
              <span className="text-[#eec416]">{t.interviews.heading2}</span>
              <br />
              {t.interviews.heading3}
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="max-w-sm">
            <p
              className="text-[#999999] leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {t.interviews.description}
            </p>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#eec416] hover:text-white transition-colors duration-200 uppercase tracking-widest"
              style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}
            >
              {t.interviews.cta}
            </a>
          </AnimatedSection>
        </div>

        {/* Reels grid */}
        <div className="flex flex-wrap gap-6 justify-center">
          {instagramReels.map((reel, i) => (
            <AnimatedSection key={reel.id} delay={i * 0.1}>
              <div className="rounded-2xl overflow-hidden border border-[#1f1f1f]">
                <iframe
                  src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                  width="320"
                  height="568"
                  frameBorder="0"
                  scrolling="no"
                  allow="encrypted-media"
                  className="block"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
