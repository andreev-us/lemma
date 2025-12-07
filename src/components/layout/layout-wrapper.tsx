"use client"

import { usePathname } from "next/navigation"
import { Sidebar } from "@/components/layout/sidebar"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isOnboarding = pathname?.startsWith("/onboarding")

  if (isOnboarding) {
    return <main className="min-h-screen bg-background">{children}</main>
  }

  return (
    <div className="flex min-h-screen bg-background relative">
      <Sidebar />
      <div className="flex-1 flex flex-col lg:pl-[18.5rem]">
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}
