"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

const allEvents = [
  {
    href: "/events/hub",
    name: "TT Hub",
    shortName: "Hub",
    tag: "Evento Principal",
  },
  {
    href: "/events/visits",
    name: "TT Visits",
    shortName: "Visits",
    tag: "Visitas a Empresas",
  },
  {
    href: "/events/talks",
    name: "TT Talks",
    shortName: "Talks",
    tag: "Serie de Charlas",
  },
];

interface EventFooterNavProps {
  current: "hub" | "visits" | "talks";
}

export default function EventFooterNav({ current }: EventFooterNavProps) {
  const others = allEvents.filter((e) => e.shortName.toLowerCase() !== current);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
      <AnimatedSection>
        <div className="h-px bg-[#1f1f1f] mb-12" />
        <p
          className="text-[#eec416] text-xs uppercase tracking-[0.3em] mb-8"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Seguir explorando
        </p>
      </AnimatedSection>

      <div className={`grid gap-3 ${others.length === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 max-w-md"}`}>
        {others.map((event, i) => (
          <AnimatedSection key={event.href} delay={i * 0.1}>
            <Link href={event.href}>
              <motion.div
                whileHover={{ y: -3, borderColor: "rgba(238,196,22,0.4)" }}
                transition={{ duration: 0.25 }}
                style={{ borderColor: "rgba(31,31,31,1)" }}
                className="border rounded-2xl p-8 md:p-10 group cursor-pointer flex items-end justify-between min-h-[140px]"
              >
                <div>
                  <p
                    className="text-[#eec416] text-[10px] uppercase tracking-[0.25em] mb-3"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {event.tag}
                  </p>
                  <h3
                    className="text-white uppercase leading-none tracking-tighter"
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontWeight: 800,
                      fontSize: "clamp(1.8rem, 4vw, 3rem)",
                    }}
                  >
                    {event.name.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="text-[#eec416]">
                      {event.name.split(" ").at(-1)}
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
            href="/"
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
              Volver a inicio
            </span>
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
}
