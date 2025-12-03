import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const UNIT_THEMES = {
  indigo: {
    name: "indigo",
    primary: "#6366F1",
    light: "#818cf8",

    classes: {
      bg: "bg-indigo-500",
      bgLight: "bg-indigo-100",
      text: "text-indigo-600",
      border: "border-indigo-200",
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-500",
      gradient: "from-indigo-400 to-indigo-500",
      borderDark: "border-indigo-700",
      shadow: "shadow-indigo-500/40",
      glow: "bg-indigo-500/20",
    }
  },
  emerald: {
    name: "emerald",
    primary: "#10B981",
    light: "#34D399",

    classes: {
      bg: "bg-emerald-500",
      bgLight: "bg-emerald-100",
      text: "text-emerald-600",
      border: "border-emerald-200",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-500",
      gradient: "from-emerald-400 to-emerald-500",
      borderDark: "border-emerald-700",
      shadow: "shadow-emerald-500/40",
      glow: "bg-emerald-500/20",
    }
  },
  amber: {
    name: "amber",
    primary: "#D97706",
    light: "#F59E0B",

    classes: {
      bg: "bg-amber-500",
      bgLight: "bg-amber-100",
      text: "text-amber-600",
      border: "border-amber-200",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-500",
      gradient: "from-amber-400 to-amber-500",
      borderDark: "border-amber-700",
      shadow: "shadow-amber-500/40",
      glow: "bg-amber-500/20",
    }
  },
  azure: {
    name: "azure",
    primary: "#2c7fff",
    light: "#6bb0ff",

    classes: {
      bg: "bg-[var(--color-azure)]",
      bgLight: "bg-[var(--color-azure-bg-light)]",
      text: "text-[var(--color-azure)]",
      border: "border-[var(--color-azure-border)]",
      iconBg: "bg-[var(--color-azure)]/10",
      iconColor: "text-[var(--color-azure)]",
      gradient: "from-[var(--color-azure)] to-[#0066ff]",
      borderDark: "border-[#0055cc]",
      shadow: "shadow-[var(--color-azure)]/40",
      glow: "bg-[var(--color-azure)]/20",
    }
  }
} as const

export type UnitTheme = keyof typeof UNIT_THEMES

