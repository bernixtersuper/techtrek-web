"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0d0d0d] px-6 pt-20">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/videos/hub-background.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/60 via-transparent to-[#0d0d0d]" />

      {/* Glow blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#eec416] opacity-[0.04] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* ITBA badge */}
        <motion.a
          href={siteConfig.itbaUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center border border-[#1f1f1f] rounded-full px-4 py-2 mb-10 bg-[#111111] hover:border-[#124e74] hover:bg-[#124e74]/10 transition-colors duration-200"
        >
          <Image
            src="/logos/itba-logo.png"
            alt="ITBA"
            width={36}
            height={36}
          />
        </motion.a>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-white uppercase leading-none tracking-tighter mb-8"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 600,
            fontSize: "clamp(2.8rem, 9vw, 7.5rem)",
          }}
        >
          Donde el{" "}
          <span className="text-[#eec416]">talento</span>
          <br />
          se encuentra con el{" "}
          <br className="hidden md:block" />
          <span className="relative inline-block">
            futuro
            <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#eec416] rounded-full" />
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[#999999] text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Acercamos el emprendedurismo a los estudiantes universitarios a través del
          Hub, Talks y BioHackathon.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#eventos"
            className="btn-gold px-8 py-4 bg-[#eec416] text-[#0d0d0d] rounded-full text-sm uppercase tracking-widest hover:bg-[#f5d038] transition-all duration-200 hover:scale-105 active:scale-100"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
          >
            Ver Eventos
          </a>
          <a
            href="#sponsors"
            className="px-8 py-4 border border-[#333333] text-white rounded-full text-sm uppercase tracking-widest hover:border-[#eec416] hover:text-[#eec416] transition-all duration-200"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
          >
            Ser Sponsor
          </a>
        </motion.div>
      </div>

    </section>
  );
}
