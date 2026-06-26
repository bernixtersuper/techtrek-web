"use client";

import { LanguageProvider } from "@/lib/i18n";
import type { Lang } from "@/lib/translations";
import type { ReactNode } from "react";

export function Providers({
  lang,
  children,
}: {
  lang: Lang;
  children: ReactNode;
}) {
  return <LanguageProvider lang={lang}>{children}</LanguageProvider>;
}
