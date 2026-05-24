"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { TeamMember } from "@/data/content";

interface TeamAccordionProps {
  year: string;
  team: TeamMember[];
}

export default function TeamAccordion({ year, team }: TeamAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-[#1f1f1f] pt-8 pb-6">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-3 group w-full text-left"
      >
        <p
          className="text-[#eec416] text-xs uppercase tracking-[0.3em]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Equipo {year}
        </p>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#eec416]/60 group-hover:text-[#eec416] transition-colors duration-200"
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-6">
              {team.map((member) => (
                <div
                  key={member.email}
                  className="border border-[#1f1f1f] rounded-xl p-4"
                >
                  <p
                    className="text-white text-sm mb-1"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {member.name}
                  </p>
                  <p
                    className="text-[#eec416] text-[10px] uppercase tracking-[0.2em] mb-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {member.role}
                  </p>
                  <p
                    className="text-[#555] text-xs"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {member.email}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
