"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FlashcardProps {
  front: string
  back: string
  className?: string
}

export function Flashcard({ front, back, className }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className={cn("h-64 w-full [perspective:1000px] cursor-pointer", className)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={cn(
          "relative h-full w-full transition-all duration-500 [transform-style:preserve-3d]",
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        )}
      >
        {/* Front */}
        <Card className="absolute h-full w-full [backface-visibility:hidden] flex items-center justify-center p-6">
          <CardContent className="text-center">
            <h3 className="text-2xl font-bold">{front}</h3>
            <p className="text-sm text-muted-foreground mt-2">Tap to reveal</p>
          </CardContent>
        </Card>

        {/* Back */}
        <Card className="absolute h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center p-6 bg-secondary">
          <CardContent className="text-center">
            <h3 className="text-xl font-medium">{back}</h3>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
