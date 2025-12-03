"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Settings } from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/logo"

import { USER_AVATAR } from "@/lib/constants"

export function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background shadow-sm">
      <div className="flex h-16 items-center gap-4 px-4 w-full max-w-5xl mx-auto">
        <div className="flex-1 flex items-center">
          <Link href="/" className="lg:hidden">
            <Logo className="h-8 w-auto" />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <Link href="/interests">
              <Avatar>
                <AvatarImage src={USER_AVATAR} alt="@ruslanandreiev" />
                <AvatarFallback>RA</AvatarFallback>
              </Avatar>
            </Link>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground" asChild>
            <Link href="/settings">
              <Settings className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
