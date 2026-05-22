"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { team, siteConfig } from "@/data/content";
import AnimatedSection from "@/components/ui/AnimatedSection";

const initials = (name: string) =>
  name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);

const COLLAPSED_H = 180;

export default function About() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="nosotros" className="py-24 md:py-32 px-6 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: text */}
          <div>
            <AnimatedSection className="mb-8">
              <Image
                src="/logos/techtrek-logo-full.png"
                alt="Tech Trek"
                width={160}
                height={160}
                className="object-contain"
              />
            </AnimatedSection>

            <AnimatedSection className="mb-4">
              <p className="text-[#eec416] text-xs uppercase tracking-[0.3em]" style={{ fontFamily: "var(--font-inter)" }}>
                Quienes somos
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="mb-8">
              <h2
                className="text-white uppercase text-5xl md:text-6xl leading-none tracking-tighter"
                style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}
              >
                Somos{" "}
                <span className="bg-[#eec416]/30 text-white px-1.5">6</span>
                <br />
                <span className="text-[#eec416]">estudiantes</span>
                <br />
                del ITBA
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="mb-8 space-y-4">
              <p className="text-[#999999] text-lg leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                No somos una empresa. No somos una ONG. Somos estudiantes que
                creen que el ecosistema emprendedor argentino necesita mas
                conexion con la proxima generacion de fundadores.
              </p>
              <p className="text-[#999999] text-lg leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                Tech Trek nacio en el ITBA para acercar a estudiantes de
                ingenieria, administracion y carreras afines con emprendedores,
                inversores y empresas que estan cambiando las reglas del juego.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <a
                href={siteConfig.itbaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-[#1f1f1f] rounded-xl px-5 py-3 bg-[#0f0f0f] hover:border-[#124e74] transition-colors duration-200"
              >
                <Image src="/logos/itba-logo.png" alt="ITBA" width={32} height={32} className="object-contain" />
                <div>
                  <p className="text-white text-sm font-medium" style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}>ITBA</p>
                  <p className="text-[#555] text-xs" style={{ fontFamily: "var(--font-inter)" }}>Instituto Tecnologico de Buenos Aires</p>
                </div>
              </a>
            </AnimatedSection>
          </div>

          {/* Right: team grid */}
          <div>
            <AnimatedSection delay={0.1} className="mb-6">
              <p className="text-[#555] text-xs uppercase tracking-[0.3em]" style={{ fontFamily: "var(--font-inter)" }}>
                El equipo
              </p>
            </AnimatedSection>

            {/* Preload all hover photos so they're ready on first hover */}
            <div className="hidden" aria-hidden>
              {team.map((member, i) => member.photoCompressed && (
                <Image key={i} src={member.photoCompressed} alt="" width={1} height={1} priority />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {team.map((member, i) => {
                const isLeft = i % 2 === 0;
                const isHovered = hovered === i;
                const isNeighbor = hovered !== null
                  && Math.floor(hovered / 2) === Math.floor(i / 2)
                  && !isHovered;

                const cardWidth = isMobile
                  ? "100%"
                  : isHovered
                  ? "calc(150% + 6px)"
                  : isNeighbor
                  ? "50%"
                  : "100%";

                const photoSrc = isNeighbor && member.photoCompressed
                  ? member.photoCompressed
                  : member.photo;

                return (
                  <AnimatedSection key={i} delay={0.15 + i * 0.08} direction="left">
                    <div
                      className="relative"
                      style={{ height: COLLAPSED_H }}
                      onMouseEnter={() => { if (!isMobile) setHovered(i); }}
                      onMouseLeave={() => { if (!isMobile) setHovered(null); }}
                      onClick={() => { if (isMobile) setHovered(hovered === i ? null : i); }}
                    >
                      <motion.div
                        animate={{
                          width: cardWidth,
                          borderColor: isHovered ? "rgba(238,196,22,0.4)" : "rgba(31,31,31,1)",
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className="absolute top-0 rounded-xl overflow-hidden bg-[#0f0f0f] border"
                        style={{
                          height: COLLAPSED_H,
                          ...(isLeft ? { left: 0 } : { right: 0 }),
                          zIndex: isHovered ? 20 : 1,
                        }}
                      >
                        <AnimatePresence mode="wait" initial={false}>
                          {isHovered ? isMobile ? (
                            /* Mobile expanded: photo fills card, text overlay at bottom */
                            <motion.div
                              key="expanded-mobile"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="relative w-full h-full"
                            >
                              {member.photo && (
                                <Image src={member.photo} alt={member.name} fill className="object-cover" />
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
                              <div className="absolute inset-x-0 top-0 p-3 flex gap-2" onClick={e => e.stopPropagation()}>
                                  <a
                                    href={`mailto:${member.email}`}
                                    className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#666] active:text-[#eec416]"
                                  >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                    </svg>
                                  </a>
                                  {member.linkedin && (
                                    <a
                                      href={member.linkedin}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#666] active:text-[#eec416]"
                                    >
                                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                      </svg>
                                    </a>
                                  )}
                              </div>
                              <div className="absolute inset-x-0 bottom-0 p-4">
                                <p className="text-[#eec416] text-sm leading-tight mb-0.5" style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}>
                                  {member.name}
                                </p>
                                <p className="text-[#eec416]/60 text-xs uppercase tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>
                                  {member.role}
                                </p>
                              </div>
                            </motion.div>
                          ) : (
                            /* Desktop expanded: photo left + text right */
                            <motion.div
                              key="expanded"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.15 }}
                              className="flex h-full"
                              style={{ height: COLLAPSED_H }}
                            >
                              {/* Photo — left, square */}
                              <div className="relative shrink-0" style={{ width: COLLAPSED_H }}>
                                {member.photo ? (
                                  <Image src={member.photo} alt={member.name} fill className="object-cover" />
                                ) : (
                                  <div className="w-full h-full bg-[#eec416]/10 flex items-center justify-center">
                                    <span className="text-[#eec416] text-2xl" style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}>
                                      {initials(member.name)}
                                    </span>
                                  </div>
                                )}
                              </div>

                              {/* Text */}
                              <div className="flex flex-col justify-center px-5 flex-1 min-w-0">
                                <p className="text-[#eec416] leading-tight mb-1" style={{ fontFamily: "var(--font-syne)", fontWeight: 600, fontSize: "1rem" }}>
                                  {member.name}
                                </p>
                                <p className="text-[#eec416]/50 text-xs uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-inter)" }}>
                                  {member.role}
                                </p>
                                <p className="text-[#666] text-xs leading-snug mb-3" style={{ fontFamily: "var(--font-inter)" }}>
                                  {member.career}
                                </p>
                                <div className="flex flex-col gap-1.5 mt-1">
                                  <a href={`mailto:${member.email}`} className="inline-flex items-center gap-1.5 text-[#555] text-xs hover:text-[#eec416] transition-colors duration-200 truncate" style={{ fontFamily: "var(--font-inter)" }}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                    </svg>
                                    {member.email}
                                  </a>
                                  {member.linkedin && (
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#555] text-xs hover:text-[#eec416] transition-colors duration-200" style={{ fontFamily: "var(--font-inter)" }}>
                                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                      </svg>
                                      LinkedIn
                                    </a>
                                  )}
                                </div>
                              </div>
                            </motion.div>
                          ) : isNeighbor ? (
                            /* Compressed neighbor — just the photo filling the card */
                            <motion.div
                              key="compressed"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.15 }}
                              className="relative w-full h-full"
                            >
                              {photoSrc ? (
                                <Image
                                  src={photoSrc}
                                  alt={member.name}
                                  fill
                                  className="object-cover"
                                />
                              ) : (
                                <div className="w-full h-full bg-[#eec416]/10 flex items-center justify-center">
                                  <span className="text-[#eec416] text-2xl" style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}>
                                    {initials(member.name)}
                                  </span>
                                </div>
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
                              <div className="absolute inset-x-0 bottom-0 p-3">
                                <p className="text-white text-xs leading-tight mb-0.5" style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}>
                                  {member.name}
                                </p>
                                <p className="text-[#eec416]/60 text-[10px] uppercase tracking-wider leading-tight" style={{ fontFamily: "var(--font-inter)" }}>
                                  {member.role}
                                </p>
                              </div>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="collapsed"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.15 }}
                              className="relative p-6"
                              style={{ height: COLLAPSED_H }}
                            >
                              <div className="w-12 h-12 rounded-full overflow-hidden mb-3 border border-[#2a2a2a]">
                                {member.photo ? (
                                  <Image src={member.photo} alt={member.name} width={48} height={48} className="object-cover w-full h-full" />
                                ) : (
                                  <div className="w-full h-full bg-[#eec416]/10 flex items-center justify-center">
                                    <span className="text-[#eec416] text-xs" style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}>
                                      {initials(member.name)}
                                    </span>
                                  </div>
                                )}
                              </div>
                              <p className="text-white text-sm font-medium leading-snug mb-1" style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}>
                                {member.name}
                              </p>
                              <p className="text-[#555] text-xs uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-inter)" }}>
                                {member.role}
                              </p>
                              <p className="text-[#444] text-xs leading-snug" style={{ fontFamily: "var(--font-inter)" }}>
                                {member.career}
                              </p>
                              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0f0f0f] to-transparent pointer-events-none" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
