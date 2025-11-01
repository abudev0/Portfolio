"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useLanguage } from "@/components/language-provider"
import { LanguageDropdown } from "@/components/language-dropdown"

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">{t.mobileMenu.openMenu}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-6 mt-10">
          <Link
            href="#about"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            {t.nav.about}
          </Link>
          <Link
            href="#skills"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            {t.nav.skills}
          </Link>
          <Link
            href="#projects"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            {t.nav.projects}
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            {t.nav.contact}
          </Link>
          <Button asChild className="mt-4">
            <Link href="#contact" onClick={handleLinkClick}>
              {t.nav.contactCta}
            </Link>
          </Button>
          <div className="pt-2 border-t">
            <p className="text-sm text-muted-foreground mb-2">{t.header.languageLabel}</p>
            <LanguageDropdown triggerClassName="w-full" align="start" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
