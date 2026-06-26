import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/sections/Footer";
import EventNav from "@/components/sections/EventNav";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { talkEditions } from "@/data/content";
import EventFooterNav from "@/components/ui/EventFooterNav";

export const metadata: Metadata = {
  title: "TT Talks — Tech Trek",
  description: "Intimate talks with real entrepreneurs at ITBA.",
};

export default function EnTalksPage() {
  return (
    <>
      <EventNav eventName="TT Talks" />
      <main className="bg-[#0d0d0d] min-h-screen">
        <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-12 max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-[#eec416] text-xs uppercase tracking-[0.3em] mb-6" style={{ fontFamily: "var(--font-inter)" }}>
              Talk Series
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1
              className="text-white uppercase leading-none tracking-tighter mb-8"
              style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(4rem, 14vw, 11rem)" }}
            >
              TT
              <br />
              <span className="text-[#eec416]">Talks</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-[#777] text-lg leading-relaxed max-w-xl" style={{ fontFamily: "var(--font-inter)" }}>
              Intimate talks with real entrepreneurs. Not corporate figures, people with concrete stories to tell.
            </p>
          </AnimatedSection>
        </section>

        {talkEditions.map((edition, i) => (
          <article key={edition.id} id={edition.id} className="mb-8 md:mb-12">
            <AnimatedSection direction="none">
              <div className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden">
                <Image src={edition.coverImage} alt={edition.speaker} fill className="object-cover" sizes="100vw" priority={i === 0} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/20 to-transparent" />
                <span
                  className="absolute top-6 right-6 md:top-10 md:right-12 text-[#eec416]/10 select-none leading-none"
                  style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(5rem, 15vw, 12rem)", lineHeight: 1 }}
                >
                  0{i + 1}
                </span>
                <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12">
                  <p className="text-[#eec416] text-xs uppercase tracking-[0.3em] mb-3" style={{ fontFamily: "var(--font-inter)" }}>
                    {edition.date} · {edition.location}
                  </p>
                  <h2
                    className="text-white uppercase leading-none tracking-tighter"
                    style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
                  >
                    {edition.speaker}
                  </h2>
                  <p className="text-[#888] text-sm mt-2 uppercase tracking-widest" style={{ fontFamily: "var(--font-inter)" }}>
                    {edition.speakerRole}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-4">
              <AnimatedSection delay={0.1}>
                <p className="text-[#777] text-base md:text-lg leading-relaxed max-w-2xl mb-10" style={{ fontFamily: "var(--font-inter)" }}>
                  {edition.descriptionEn ?? edition.description}
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                {edition.images.map((img, j) => (
                  <AnimatedSection key={j} delay={j * 0.06} direction="up">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl group">
                      <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 33vw" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {i < talkEditions.length - 1 && (
              <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-20">
                <div className="h-px bg-[#1f1f1f]" />
              </div>
            )}
          </article>
        ))}

        <EventFooterNav current="talks" />
      </main>
      <Footer />
    </>
  );
}
