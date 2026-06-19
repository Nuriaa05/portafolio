"use client"

import { createContext, useCallback, useContext, useState, type ReactNode } from "react"

import { translations, type Language, type TranslationShape } from "@/lib/translations"

interface LanguageContextValue {
  language: Language
  toggleLanguage: () => void
  setLanguage: (language: Language) => void
  t: TranslationShape
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"))
  }, [])

  const t = translations[language] as TranslationShape

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
