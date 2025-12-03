"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Flame } from "lucide-react"
import Link from "next/link"
import { useActiveUnit } from "@/context/active-unit-context"
import { UNIT_THEMES } from "@/lib/utils"

import { USER_AVATAR } from "@/lib/constants"

export function WelcomeHeader() {
  const { activeTheme } = useActiveUnit()
  const theme = UNIT_THEMES[activeTheme]

  return (
    <div
      className="sticky top-4 z-40 p-6 mb-8 rounded-3xl border-2 border-slate-200 shadow-sm transition-all duration-200 backdrop-blur-md"
      style={{
        background: `linear-gradient(to bottom right, rgba(255,255,255,0.5) 0%, ${theme.primary}10 100%)`
      }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="pl-1">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1 md:mb-2 text-slate-900">Hi, Ruslan 👋</h1>
          <p className="text-sm md:text-base text-slate-600">Let&apos;s continue your English journey.</p>
        </div>

        <div className="flex items-center gap-4 self-end md:self-auto">
          {/* Streak Counter */}
          <Link href="/profile">
            <div className="flex items-center gap-2 bg-white/80 border px-4 py-2 rounded-full shadow-sm cursor-pointer hover:bg-white transition-colors">
              <Flame className="h-5 w-5 text-orange-500 fill-orange-500" />
              <span className="text-base font-bold text-slate-700">5 Days</span>
            </div>
          </Link>

          {/* User Profile */}
          <Link href="/interests">
            <Avatar className="h-10 w-10 border-2 border-white shadow-sm cursor-pointer">
              <AvatarImage src={USER_AVATAR} alt="@ruslanandreiev" />
              <AvatarFallback>RA</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </div>
  )
}
