"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn, UNIT_THEMES } from "@/lib/utils"
import { BookOpen, Library, Settings, Trophy, Map, Users } from "lucide-react"
import { Logo } from "@/components/logo"

const sidebarItems = [
  {
    title: "Lessons",
    href: "/",
    icon: Map,
  },
  {
    title: "My Progress",
    href: "/profile",
    icon: Trophy,
  },
  {
    title: "Library",
    href: "/learning",
    icon: BookOpen,
  },
  {
    title: "Vocabulary",
    href: "/vocabulary",
    icon: Library,
  },
  {
    title: "My Interests",
    href: "/interests",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const theme = UNIT_THEMES["azure"]

  const mainNavItems = sidebarItems.filter(item => item.title !== "Settings")
  const settingsItem = sidebarItems.find(item => item.title === "Settings")
  const isOnboarding = pathname?.startsWith("/onboarding")

  return (
    <div 
      className="hidden border-2 border-slate-200 lg:block lg:w-64 lg:fixed lg:left-4 lg:top-4 lg:bottom-4 lg:z-50 lg:rounded-3xl shadow-sm backdrop-blur-md"
      style={{
        background: `linear-gradient(to bottom right, rgba(255,255,255,0.8) 0%, rgba(59, 130, 246, 0.1) 100%)`
      }}
    >
      <div className="flex h-full flex-col">
        <div className="flex pt-8 pb-2 items-center pl-[72px] pr-6">
          <Link 
            href="/" 
            className="flex items-center" 
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault()
              }
            }}
          >
            <Logo className="h-10 w-auto" theme="azure" />
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto pt-4 pb-6 px-4">
          {!isOnboarding && (
            <nav className="grid items-start gap-3 text-sm font-bold text-slate-500">
              {mainNavItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href))
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={isActive ? {
                      backgroundColor: `${theme.primary}26`, // ~15% opacity
                      borderColor: `${theme.primary}4D`, // ~30% opacity
                      color: theme.primary
                    } : undefined}
                    className={cn(
                      "flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-all border-2",
                      isActive
                        ? "shadow-sm"
                        : "border-transparent hover:bg-slate-100 hover:text-slate-900"
                    )}
                  >
                    <item.icon 
                      className={cn(
                        "h-6 w-6", 
                        isActive 
                          ? "" 
                          : "text-slate-400"
                      )} 
                      style={isActive ? { color: theme.primary } : undefined}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                    <span className={cn("text-base", isActive ? "font-extrabold" : "font-bold")}>
                      {item.title}
                    </span>
                  </Link>
                )
              })}
            </nav>
          )}
        </div>
        
        {/* Pinned Settings Item */}
        {!isOnboarding && settingsItem && (
          <div className="px-4 py-6 border-t border-slate-200/60">
             <Link
                href={settingsItem.href}
                style={pathname === settingsItem.href ? {
                  backgroundColor: `${theme.primary}26`,
                  borderColor: `${theme.primary}4D`,
                  color: theme.primary
                } : undefined}
                className={cn(
                  "flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-all border-2 font-bold text-sm",
                  pathname === settingsItem.href
                    ? "shadow-sm"
                    : "text-slate-500 border-transparent hover:bg-slate-100 hover:text-slate-900"
                )}
              >
                <settingsItem.icon 
                  className={cn(
                    "h-6 w-6", 
                    pathname === settingsItem.href ? "" : "text-slate-400"
                  )} 
                  style={pathname === settingsItem.href ? { color: theme.primary } : undefined}
                  strokeWidth={pathname === settingsItem.href ? 2.5 : 2}
                />
                <span className={cn("text-base", pathname === settingsItem.href ? "font-extrabold" : "font-bold")}>
                  {settingsItem.title}
                </span>
              </Link>
          </div>
        )}
      </div>
    </div>
  )
}
