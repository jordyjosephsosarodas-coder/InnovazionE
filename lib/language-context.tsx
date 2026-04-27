"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { translations, type Language } from "./translations"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.en
}

const defaultValue: LanguageContextType = {
  language: "en",
  setLanguage: () => {},
  t: translations.en,
}

const LanguageContext = createContext<LanguageContextType>(defaultValue)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const value = {
    language,
    setLanguage,
    t: translations[language],
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextType {
  return useContext(LanguageContext)
}
