"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/components/language-provider"
import { supportedLanguages } from "@/lib/translations"
import type { LanguageCode } from "@/lib/translations"
import { cn } from "@/lib/utils"

type LanguageDropdownProps = {
  wrapperClassName?: string
  triggerClassName?: string
  align?: "start" | "center" | "end"
}

export function LanguageDropdown({ wrapperClassName, triggerClassName, align = "end" }: LanguageDropdownProps) {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className={wrapperClassName}>
      <Select value={language} onValueChange={(value) => setLanguage(value as LanguageCode)}>
        <SelectTrigger
          aria-label={t.header.languageLabel}
          className={cn("w-[140px]", triggerClassName)}
        >
          <SelectValue placeholder={t.header.languageLabel} />
        </SelectTrigger>
        <SelectContent align={align}>
          {supportedLanguages.map(({ code, label }) => (
            <SelectItem key={code} value={code}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
