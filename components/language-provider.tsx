"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

import { defaultLanguage, translations } from "@/lib/translations"
import type { LanguageCode, TranslationContent } from "@/lib/translations"

type LanguageContextValue = {
  language: LanguageCode
  setLanguage: (language: LanguageCode) => void
  t: TranslationContent
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const STORAGE_KEY = "portfolio-language"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(defaultLanguage)

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const stored = window.localStorage.getItem(STORAGE_KEY) as LanguageCode | null
    if (stored && stored in translations) {
  setLanguageState(stored)
    }
  }, [])

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language
    }

    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, language)
    }
  }, [language])

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage: (nextLanguage) => {
        if (nextLanguage in translations) {
          setLanguageState(nextLanguage)
        }
      },
      t: translations[language],
    }),
    [language]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }

  return context
}
