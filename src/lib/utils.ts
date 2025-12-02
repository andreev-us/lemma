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
    dark: "#4338ca",
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
    dark: "#047857",
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
    dark: "#B45309",
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
    dark: "#0055cc",
    classes: {
      bg: "bg-[#2c7fff]",
      bgLight: "bg-[#2c7fff]/20",
      text: "text-[#2c7fff]",
      border: "border-[#2c7fff]/30",
      iconBg: "bg-[#2c7fff]/10",
      iconColor: "text-[#2c7fff]",
      gradient: "from-[#2c7fff] to-[#0066ff]",
      borderDark: "border-[#0055cc]",
      shadow: "shadow-[#2c7fff]/40",
      glow: "bg-[#2c7fff]/20",
    }
  }
} as const

export type UnitTheme = keyof typeof UNIT_THEMES

