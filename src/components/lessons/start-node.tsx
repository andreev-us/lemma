"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface StartNodeProps {
  onClick?: () => void
}

export function StartNode({ onClick }: StartNodeProps) {
  return (
    <div className="relative flex items-center justify-center group">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-500" />
      
      <Button 
        size="lg" 
        onClick={onClick}
        className={cn(
          "relative rounded-full px-8 h-16",
          "bg-gradient-to-b from-blue-400 to-blue-500",
          "hover:from-blue-500 hover:to-blue-600",
          "border-b-[6px] border-blue-700",
          "shadow-[0_4px_14px_0_rgba(59,130,246,0.39)]",
          "hover:shadow-[0_6px_20px_0_rgba(59,130,246,0.45)]",
          "hover:-translate-y-0.5 active:border-b-0 active:translate-y-1",
          "transition-all duration-200",
          "text-lg font-black tracking-widest uppercase text-white",
          "animate-pulse" 
        )}
      >
        Start
      </Button>
    </div>
  )
}
