"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/lib/i18n";

const allEvents = [
  { id: "hub",    name: "TT Hub",    tag: "Evento Principal",    tagEn: "Main Event" },
  { id: "visits", name: "TT Visits", tag: "Visitas a Empresas",  tagEn: "Company Visits" },
  { id: "talks",  name: "TT Talks",  tag: "Serie de Charlas",    tagEn: "Talk Series" },
  { id: "ttsv",   name: "TT SV",     tag: "Viaje a Silicon Valley", tagEn: "Silicon Valley Trip" },
];

interface EventFooterNavProps {
  current: "hub" | "visits" | "talks" | "ttsv";
}

export default function EventFooterNav({ current }: EventFooterNavProps) {
  const { lang, t } = useLanguage();
  const base = lang === "en" ? "/en" : "";
  const homeHref = lang === "en" ? "/en" : "/";

  const others = allEvents.filter((e) => e.id !== current);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
      <AnimatedSection>
        <div className="h-px bg-[#1f1f1f] mb-12" />
        <p
          className="text-[#eec416] text-xs uppercase tracking-[0.3em] mb-8"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {t.eventFooterNav.explore}
        </p>
      </AnimatedSection>

      <div className={`grid gap-3 ${others.length >= 3 ? "grid-cols-1 md:grid-cols-3" : others.length === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 max-w-md"}`}>
        {others.map((event, i) => (
          <AnimatedSection key={event.id} delay={i * 0.1} className="h-full">
            <Link href={`${base}/events/${event.id}`} className="block h-full">
              <motion.div
                whileHover={{ y: -3, borderColor: "rgba(238,196,22,0.4)" }}
                transition={{ duration: 0.25 }}
                style={{ borderColor: "rgba(31,31,31,1)" }}
                className="border rounded-2xl p-8 md:p-10 group cursor-pointer flex items-start justify-between h-full min-h-[140px]"
              >
                <div>
                  <p
                    className="text-[#eec416] text-[10px] uppercase tracking-[0.25em] mb-3"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {lang === "en" ? event.tagEn : event.tag}
                  </p>
                  <h3
                    className="text-white uppercase leading-none tracking-tighter"
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontWeight: 800,
                      fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
                    }}
                  >
                    {event.name.split(" ")[0]}{" "}
                    <span className="text-[#eec416]">
                      {event.name.split(" ").slice(1).join(" ")}
                    </span>
                  </h3>
                </div>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#333] group-hover:text-[#eec416] group-hover:translate-x-1 transition-all duration-300 shrink-0 ml-4"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </motion.div>
            </Link>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.2}>
        <div className="flex justify-center mt-12">
          <Link
            href={homeHref}
            className="flex flex-col items-center gap-3 group text-[#444] hover:text-[#eec416] transition-colors duration-300"
          >
            <Image
              src="/logos/techtrek-logo-full.png"
              alt="Tech Trek"
              width={32}
              height={32}
              className="rounded-full opacity-30 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span
              className="text-xs uppercase tracking-[0.3em]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {t.eventFooterNav.backHome}
            </span>
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
}
