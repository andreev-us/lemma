"use client"

import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// Generate mock data for the last 90 days
const generateHeatmapData = () => {
  const data = []
  const today = new Date()
  for (let i = 0; i < 90; i++) {
    const date = new Date(today)
    date.setDate(date.getDate() - (89 - i))
    
    // Random intensity 0-4
    const intensity = Math.random() > 0.7 ? Math.floor(Math.random() * 4) + 1 : 0
    
    data.push({
      date: date.toISOString().split('T')[0],
      intensity, // 0: none, 1: low, 2: medium, 3: high, 4: very high
    })
  }
  return data
}

const data = generateHeatmapData()

const intensityColor = {
  0: "bg-secondary",
  1: "bg-neutral-200 dark:bg-neutral-800",
  2: "bg-neutral-300 dark:bg-neutral-700",
  3: "bg-neutral-400 dark:bg-neutral-600",
  4: "bg-primary",
}

export function StudyHeatmap() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Study Activity</h3>
        <span className="text-xs text-muted-foreground">Last 3 Months</span>
      </div>
      
      <div className="flex flex-wrap gap-1">
        <TooltipProvider>
          {data.map((day, i) => (
            <Tooltip key={day.date}>
              <TooltipTrigger asChild>
                <div
                  className={cn(
                    "h-3 w-3 rounded-[2px] transition-colors hover:ring-1 hover:ring-ring hover:ring-offset-1",
                    intensityColor[day.intensity as keyof typeof intensityColor]
                  )}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{day.date}: Level {day.intensity}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
      
      <div className="flex items-center justify-end gap-2 text-xs text-muted-foreground">
        <span>Less</span>
        <div className="flex gap-1">
            <div className={cn("h-3 w-3 rounded-[2px]", intensityColor[0])} />
            <div className={cn("h-3 w-3 rounded-[2px]", intensityColor[2])} />
            <div className={cn("h-3 w-3 rounded-[2px]", intensityColor[4])} />
        </div>
        <span>More</span>
      </div>
    </div>
  )
}
