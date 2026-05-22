"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const links = [
  { label: "Eventos", href: "#eventos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Contacto", href: "#contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
          ? "bg-[#0d0d0d]/90 backdrop-blur-md border-b border-[#1f1f1f]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <Image
            src="/logos/techtrek-logo.png"
            alt="Tech Trek"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span
            className="font-heading font-700 text-white text-lg tracking-tight"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
          >
            Tech Trek
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#999999] hover:text-white transition-colors duration-200 tracking-wide uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#sponsors"
            className="btn-gold px-5 py-2 bg-[#eec416] text-[#0d0d0d] text-sm font-700 rounded-full hover:bg-[#f5d038] transition-all duration-200 tracking-wide uppercase"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
          >
            Ser Sponsor
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-[#0d0d0d] border-t border-[#1f1f1f] px-6 py-6 flex flex-col gap-6"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-white uppercase tracking-widest"
              style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#sponsors"
            onClick={() => setMenuOpen(false)}
            className="btn-gold inline-block w-fit px-6 py-3 bg-[#eec416] text-[#0d0d0d] font-700 rounded-full uppercase tracking-wide"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
          >
            Ser Sponsor
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
