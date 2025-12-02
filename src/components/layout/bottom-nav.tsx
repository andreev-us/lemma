"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BookOpen, Library, Trophy, Map } from "lucide-react"

const navItems = [
  {
    title: "Lessons",
    href: "/",
    icon: Map,
  },
  {
    title: "Progress",
    href: "/profile",
    icon: Trophy,
  },
  {
    title: "Library",
    href: "/learning",
    icon: BookOpen,
  },
  {
    title: "Vocab",
    href: "/vocabulary",
    icon: Library,
  },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background lg:hidden pb-safe">
      <nav className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center gap-1 min-w-[64px] h-full px-2 transition-colors",
              pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href))
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            )}
          >
            <item.icon className="h-6 w-6" />
            <span className="text-[10px] font-medium">{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
