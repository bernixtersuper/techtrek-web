import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/sections/Footer";
import EventNav from "@/components/sections/EventNav";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ttsvEditions } from "@/data/content";
import EventFooterNav from "@/components/ui/EventFooterNav";
import TeamAccordion from "@/components/ui/TeamAccordion";

export const metadata: Metadata = {
  title: "TTSV — Tech Trek",
  description:
    "Tech Trek Silicon Valley: un viaje para aprender del ecosistema emprendedor y llevar ese conocimiento a Argentina.",
};

export default function TTSVPage() {
  return (
    <>
      <EventNav eventName="TTSV" />
      <main className="bg-[#0d0d0d] min-h-screen">
        {/* Page hero */}
        <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-12 max-w-7xl mx-auto">
          <AnimatedSection>
            <p
              className="text-[#eec416] text-xs uppercase tracking-[0.3em] mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Viaje a Silicon Valley
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1
              className="text-white uppercase leading-none tracking-tighter mb-8"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(4rem, 14vw, 11rem)",
              }}
            >
              Tech Trek
              <br />
              <span className="text-[#eec416]">Silicon Valley</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p
              className="text-[#777] text-lg leading-relaxed max-w-xl"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Un viaje para aprender del ecosistema emprendedor global y llevar
              ese conocimiento a la comunidad argentina.
            </p>
          </AnimatedSection>
        </section>

        {/* Editions */}
        {ttsvEditions.map((edition, i) => (
          <article key={edition.year} id={`ttsv-${edition.year}`} className="mb-8 md:mb-12">
            {/* Cover image */}
            <AnimatedSection direction="none">
              <div className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden">
                <Image
                  src={edition.coverImage}
                  alt={`Tech Trek Silicon Valley ${edition.year}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/20 to-transparent" />
                <span
                  className="absolute top-6 right-6 md:top-10 md:right-12 text-[#eec416]/10 select-none leading-none"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 800,
                    fontSize: "clamp(5rem, 15vw, 12rem)",
                    lineHeight: 1,
                  }}
                >
                  {edition.year}
                </span>
                <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12">
                  <p
                    className="text-[#eec416] text-xs uppercase tracking-[0.3em] mb-3"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {edition.dates} · {edition.location}
                  </p>
                  <h2
                    className="text-white uppercase leading-none tracking-tighter"
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontWeight: 800,
                      fontSize: "clamp(2.5rem, 8vw, 7rem)",
                    }}
                  >
                    TTSV {edition.year}
                  </h2>
                </div>
              </div>
            </AnimatedSection>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-4">
              {/* Story paragraphs */}
              <div className="max-w-2xl mb-6 space-y-5">
                {edition.paragraphs.map((para, j) => (
                  <AnimatedSection key={j} delay={j * 0.05}>
                    <p
                      className="text-[#777] text-base md:text-lg leading-relaxed"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {para}
                    </p>
                  </AnimatedSection>
                ))}
              </div>

              {/* Byline */}
              <AnimatedSection delay={0.2} className="max-w-2xl mb-14">
                <p
                  className="text-[#444] text-sm"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Tadeo Scardilli, {edition.year}
                </p>
              </AnimatedSection>

              {/* Photo grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mb-14">
                {edition.images.map((img, j) => (
                  <AnimatedSection key={j} delay={j * 0.06} direction="up">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl group">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <TeamAccordion year={edition.year} team={edition.teamMembers} />
            </div>

            {i < ttsvEditions.length - 1 && (
              <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-20">
                <div className="h-px bg-[#1f1f1f]" />
              </div>
            )}
          </article>
        ))}

        <EventFooterNav current="ttsv" />
      </main>
      <Footer />
    </>
  );
}
