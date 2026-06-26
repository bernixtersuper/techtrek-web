"use client";

import { createContext, useContext, type ReactNode } from "react";
import { translations, type Lang, type Translations } from "./translations";

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "es",
  t: translations.es,
});

export function LanguageProvider({
  lang,
  children,
}: {
  lang: Lang;
  children: ReactNode;
}) {
  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
