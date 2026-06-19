"use client"

import { motion } from "framer-motion"

import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"

const options = [
  { value: "en", label: "EN" },
  { value: "es", label: "ES" },
] as const

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={language === "en" ? "Switch language to Spanish" : "Cambiar idioma a inglés"}
      className="relative flex items-center gap-1 rounded-full border border-zinc-700/50 bg-zinc-900/60 p-1 backdrop-blur-sm"
    >
      {options.map((option) => {
        const isActive = language === option.value
        return (
          <span
            key={option.value}
            className={cn(
              "relative z-10 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors duration-300",
              isActive ? "text-white" : "text-zinc-400",
            )}
          >
            {isActive && (
              <motion.span
                layoutId="language-toggle-pill"
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            {option.label}
          </span>
        )
      })}
    </button>
  )
}
