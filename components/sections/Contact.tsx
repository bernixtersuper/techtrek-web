"use client";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/data/content";

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-24 md:py-32 px-6 bg-[#0d0d0d] border-t border-[#1f1f1f]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left */}
          <div>
            <AnimatedSection className="mb-4">
              <p
                className="text-[#eec416] text-xs uppercase tracking-[0.3em]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Contacto
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="mb-8">
              <h2
                className="text-white uppercase text-5xl md:text-6xl leading-none tracking-tighter"
                style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}
              >
                Hablemos
                <br />
                <span className="text-[#eec416]">juntos</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p
                className="text-[#999999] text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Ya sea que quieras ser sponsor, colaborar en un evento, o
                simplemente saber mas sobre lo que hacemos — tenes nuestro mail.
              </p>
            </AnimatedSection>
          </div>

          {/* Right: contact card */}
          <AnimatedSection delay={0.2} direction="left">
            <div className="border border-[#1f1f1f] rounded-2xl p-8 md:p-10 bg-[#0f0f0f]">
              {/* Email */}
              <div className="mb-8">
                <p
                  className="text-[#555] text-xs uppercase tracking-[0.2em] mb-3"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-xl md:text-2xl text-white hover:text-[#eec416] transition-colors duration-200 break-all"
                  style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
                >
                  {siteConfig.email}
                </a>
              </div>

              {/* Divider */}
              <div className="border-t border-[#1f1f1f] mb-8" />

              {/* Socials */}
              <div className="flex items-center gap-4 mb-8">
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#555] hover:text-[#eec416] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#555] hover:text-[#eec416] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  <InstagramIcon />
                  Instagram
                </a>
              </div>

              {/* Divider */}
              <div className="border-t border-[#1f1f1f] mb-8" />

              {/* Quick reasons */}
              <div className="mb-8 space-y-3">
                {[
                  "Sponsorship del Hub",
                  "Colaboracion en Talks",
                  "Propuesta de BioHackathon",
                  "Consultas generales",
                ].map((reason, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-sm text-[#999999]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#eec416] shrink-0" />
                    {reason}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#eec416] text-[#0d0d0d] rounded-full text-sm uppercase tracking-widest hover:bg-[#f5d038] transition-all duration-200 hover:scale-[1.02] active:scale-100"
                style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
              >
                Escribirnos
                <span>→</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
