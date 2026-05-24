"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { pastSponsors } from "@/data/content";

type Sponsor = (typeof pastSponsors)[number];

interface SponsorMarqueeProps {
  sponsors: Sponsor[];
}

export default function SponsorMarquee({ sponsors }: SponsorMarqueeProps) {
  // Triple the items so the loop is invisible even on very wide screens
  const track = [...sponsors, ...sponsors, ...sponsors];

  return (
    <div
      className="overflow-hidden bg-[#eec416]/10 py-10"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
      }}
    >
      <motion.div
        className="flex items-center"
        style={{ width: "max-content" }}
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {track.map((sponsor, i) => (
          <div
            key={i}
            className="shrink-0 mx-8 md:mx-14 opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            <Image
              src={sponsor.src}
              alt={sponsor.name}
              width={160}
              height={60}
              className="h-7 md:h-12 w-auto"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
