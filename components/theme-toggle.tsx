"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  // Sahifa yuklangandan keyin mounted qiymatini true qilamiz
  useEffect(() => {
    setMounted(true)
  }, [])

  // Agar sahifa yuklanmagan bo'lsa, hech narsa ko'rsatmaymiz
  if (!mounted) {
    return null
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const selectTheme = (selectedTheme: string) => {
    setTheme(selectedTheme)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button variant="outline" size="icon" onClick={toggleMenu} className="rounded-full w-10 h-10">
        {theme === "dark" ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
        <span className="sr-only">{t.themeToggle.ariaLabel}</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-zinc-950 text-white border border-zinc-800 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <button
              onClick={() => selectTheme("light")}
              className="w-full text-left px-4 py-2 text-sm hover:bg-zinc-800"
              role="menuitem"
            >
              {t.themeToggle.light}
            </button>
            <button
              onClick={() => selectTheme("dark")}
              className="w-full text-left px-4 py-2 text-sm hover:bg-zinc-800"
              role="menuitem"
            >
              {t.themeToggle.dark}
            </button>
            <button
              onClick={() => selectTheme("system")}
              className="w-full text-left px-4 py-2 text-sm hover:bg-zinc-800"
              role="menuitem"
            >
              {t.themeToggle.system}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
