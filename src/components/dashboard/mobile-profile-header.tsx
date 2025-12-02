"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"
import Link from "next/link"

export function MobileProfileHeader() {
  return (
    <div className="flex flex-col items-center space-y-4 mb-6 lg:hidden">
      <div className="flex items-center justify-between w-full">
        <div className="w-10" /> {/* Spacer for centering */}
        <Link href="/interests">
          <Avatar className="h-20 w-20 border-2 border-border">
            <AvatarImage src="/avatars/01.png" alt="@ruslanandreiev" />
            <AvatarFallback className="text-lg">RA</AvatarFallback>
          </Avatar>
        </Link>
        <Button variant="ghost" size="icon" asChild className="w-10">
          <Link href="/settings">
            <Settings className="h-6 w-6" />
          </Link>
        </Button>
      </div>
      
      <div className="text-center space-y-1">
        <h2 className="text-xl font-bold">Ruslan Andreiev</h2>
        <p className="text-sm text-muted-foreground">Intermediate Learner • B2</p>
      </div>

      <div className="w-full max-w-xs space-y-2">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Progress to C1</span>
          <span>65%</span>
        </div>
        <Progress value={65} className="h-2.5" />
      </div>
    </div>
  )
}
