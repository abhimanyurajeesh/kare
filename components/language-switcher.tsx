"use client";

import { useI18n, Locale, localeNames } from "@/lib/i18n-context";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Languages, Check } from "lucide-react";
import { useState } from "react";

export function LanguageSwitcher({
  variant = "default",
}: {
  variant?: "default" | "minimal";
}) {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);

  const languages: Locale[] = ["en", "ml"];

  if (variant === "minimal") {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLocale(locale === "en" ? "ml" : "en")}
        className="text-slate-600 hover:text-slate-900 gap-1.5"
      >
        <Languages className="w-4 h-4" />
        <span className="text-xs font-medium">
          {locale === "en" ? "മലയ" : "EN"}
        </span>
      </Button>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-slate-600 hover:text-slate-900 gap-1.5"
        >
          <Languages className="w-4 h-4" />
          <span className="hidden sm:inline text-xs font-medium">
            {localeNames[locale]}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[140px] p-1">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => {
              setLocale(lang);
              setOpen(false);
            }}
            className="flex items-center justify-between w-full px-3 py-2 text-sm rounded-md hover:bg-slate-100 transition-colors"
          >
            <span>{localeNames[lang]}</span>
            {locale === lang && <Check className="w-4 h-4 text-emerald-600" />}
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
}
