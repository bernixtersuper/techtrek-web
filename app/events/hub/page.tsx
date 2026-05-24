import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/sections/Footer";
import EventNav from "@/components/sections/EventNav";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { hubPage } from "@/data/content";
import EventFooterNav from "@/components/ui/EventFooterNav";

export const metadata: Metadata = {
  title: "Tech Trek Hub — Tech Trek",
  description:
    "El evento principal de Tech Trek. Más de 300 estudiantes, empresas líderes y emprendedores en un mismo lugar.",
};

export default function HubPage() {
  return (
    <>
      <EventNav />
      <main className="bg-[#0d0d0d] min-h-screen">
        {/* Page hero */}
        <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-12 max-w-7xl mx-auto">
          <AnimatedSection>
            <p
              className="text-[#eec416] text-xs uppercase tracking-[0.3em] mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Evento Principal
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
              <span className="text-[#eec416]">Hub</span>
            </h1>
          </AnimatedSection>
        </section>

        {/* Editions */}
        {hubPage.editions.map((edition, i) => (
          <article key={edition.year} id={`hub-${edition.year}`}>
            {/* Edition cover / header */}
            {i === 0 ? (
              /* First edition: full-width cover photo with year overlay */
              <AnimatedSection direction="none">
                <div className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden">
                  <Image
                    src={hubPage.coverImage}
                    alt={`Tech Trek Hub ${edition.year}`}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/15 to-transparent" />
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
                      {edition.date} · {edition.location}
                    </p>
                    <h2
                      className="text-white uppercase leading-none tracking-tighter"
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontWeight: 800,
                        fontSize: "clamp(2.5rem, 8vw, 7rem)",
                      }}
                    >
                      Hub {edition.year}
                    </h2>
                  </div>
                </div>
              </AnimatedSection>
            ) : (
              /* Subsequent editions: section header with divider */
              <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 md:mt-28">
                <AnimatedSection>
                  <div className="flex items-end justify-between pb-6 border-b border-[#1f1f1f] mb-10">
                    <div>
                      <p
                        className="text-[#eec416] text-xs uppercase tracking-[0.3em] mb-2"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Edición anterior
                      </p>
                      <h2
                        className="text-white uppercase leading-none tracking-tighter"
                        style={{
                          fontFamily: "var(--font-syne)",
                          fontWeight: 800,
                          fontSize: "clamp(2rem, 5vw, 4rem)",
                        }}
                      >
                        Hub {edition.year}
                      </h2>
                    </div>
                    <span
                      className="text-[#eec416]/10 select-none leading-none hidden md:block"
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontWeight: 800,
                        fontSize: "5rem",
                        lineHeight: 1,
                      }}
                    >
                      {edition.year}
                    </span>
                  </div>
                </AnimatedSection>
              </div>
            )}

            {/* Photo grid */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-4">
              <AnimatedSection delay={0.1}>
                <p
                  className="text-[#777] text-base md:text-lg leading-relaxed max-w-2xl mb-10"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {edition.description}
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
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
            </div>
          </article>
        ))}

        <EventFooterNav current="hub" />
      </main>
      <Footer />
    </>
  );
}
