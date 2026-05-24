"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function EventNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-gradient-to-r from-[#0d0d0d]/95 via-[#eec416]/[0.06] to-[#0d0d0d]/95"
          : "bg-gradient-to-b from-[#0d0d0d]/70 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Back link */}
        <Link
          href="/#eventos"
          className="flex items-center gap-2 text-[#777] hover:text-[#eec416] transition-colors duration-200 text-sm uppercase tracking-wider"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" /><path d="M12 5l-7 7 7 7" />
          </svg>
          Inicio
        </Link>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logos/techtrek-logo-full.png"
            alt="Tech Trek"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span
            className="text-white text-base tracking-tight hidden sm:block"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
          >
            Tech Trek
          </span>
        </Link>

        {/* Spacer to keep logo centered */}
        <div className="w-24" />
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-px bg-[#eec416]"
        animate={{ width: scrolled ? "100%" : "0%", opacity: scrolled ? 0.35 : 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </motion.nav>
  );
}
