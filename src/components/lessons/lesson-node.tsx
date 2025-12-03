"use client"

import * as React from "react"
import { cn, UNIT_THEMES, UnitTheme } from "@/lib/utils"
import { UnitIcon, UnitIconType } from "./unit-icons"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface LessonNodeProps {
  status: "locked" | "current" | "completed"
  type?: "lesson" | "quiz" | "milestone"
  position: number // -1 (left), 0 (center), 1 (right)
  index: number
  title: string
  description?: string
  onClick?: () => void
  themeColor?: UnitTheme
  iconType?: UnitIconType
}

export const LessonNode = React.forwardRef<HTMLDivElement, LessonNodeProps>(({
  status,
  type = "lesson",
  position,
  index,
  title,
  description,
  onClick,
  themeColor = "indigo",
  iconType = "star",
}, ref) => {
  const isLocked = status === "locked"
  const isCurrent = status === "current"
  const isCompleted = status === "completed"
  const isStart = index === 0
  const theme = UNIT_THEMES[themeColor]

  // Calculate horizontal offset based on position (-1, 0, 1)
  // We'll use a multiplier for the offset amount (e.g., 54px)
  const horizontalOffset = position * 54

  return (
    <div
      ref={ref}
      className="relative flex justify-center items-center mb-12 h-20 w-full"
      style={{
        transform: `translateX(${horizontalOffset}px)`,
      }}
    >
      {/* Atmosphere/Spotlight for Current Lesson */}
      {isCurrent && (
        <div className={cn(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-3xl -z-10 pointer-events-none",
          theme.classes.glow
        )} />
      )}

      {/* Start Label for Current Lesson */}
      {isCurrent && (
        <div className={cn(
          "absolute -top-16 left-1/2 -translate-x-1/2 bg-gradient-to-r text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg whitespace-nowrap z-20 tracking-wide uppercase animate-pulse",
          theme.classes.gradient
        )}>
          Start here
          <div className={cn("absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45", theme.classes.bg)}></div>
        </div>
      )}
      
      <TooltipProvider delayDuration={80}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={isLocked ? undefined : onClick}
              disabled={isLocked}
              className={cn(
                "relative flex items-center justify-center rounded-full transition-all duration-300 z-10",
                // Base size
                isCurrent ? "w-24 h-24" : "w-20 h-20",
                
                // Completed state - Gold/Success with soft glow
                isCompleted && type !== 'milestone' && "bg-gradient-to-b from-yellow-400 to-yellow-500 border-b-[6px] border-yellow-600 text-white hover:scale-110 hover:-translate-y-1 active:border-b-0 active:translate-y-1",
                isCompleted && type !== 'milestone' && "shadow-[0_4px_14px_0_rgba(234,179,8,0.39)]",

                // Milestone Completed - Use Theme
                isCompleted && type === 'milestone' && cn(
                  "bg-gradient-to-b border-b-[6px] text-white hover:scale-110 hover:-translate-y-1 active:border-b-0 active:translate-y-1",
                  theme.classes.gradient,
                  theme.classes.borderDark,
                  theme.classes.shadow
                ),
                
                // Current state - The Hero (Electric Blue) with enhanced glow
                isCurrent && cn(
                  "bg-gradient-to-b border-b-[6px] text-white hover:scale-105 hover:-translate-y-0.5 active:border-b-0 active:translate-y-1",
                  theme.classes.gradient,
                  theme.classes.borderDark,
                  theme.classes.shadow,
                  "hover:shadow-lg" // Simplified hover shadow for now, or use custom
                ),
                
                // Locked state - Visible but disabled
                isLocked && "bg-slate-300 border-b-[6px] border-slate-400 text-white cursor-not-allowed shadow-sm",
                
                // Hover effects for non-locked
                !isLocked && "cursor-pointer active:scale-95"
              )}
            >
              {/* Inner Icon */}
              <UnitIcon 
                name={iconType} 
                className="w-10 h-10 drop-shadow-md fill-white" 
              />
              
              {/* Ripple effect for current node */}
              {isCurrent && (
                <>
                  <span className={cn("absolute inset-0 rounded-full animate-ping opacity-20 duration-1000", theme.classes.bg)} />
                </>
              )}
            </button>
          </TooltipTrigger>
          
          {/* Tooltip content - Only for non-current nodes now, or extra info */}
          {!isCurrent && (
            <TooltipContent 
              side="top" 
              className={cn("font-bold px-4 py-2", theme.classes.bg, "text-white border-0")}
            >
              <div className="flex flex-col items-center gap-1">
                <span>{title}</span>
                {description && (
                  <span className="text-xs font-normal opacity-90">{description}</span>
                )}
              </div>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </div>
  )
})
