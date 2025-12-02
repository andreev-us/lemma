import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Trophy, Zap, Target } from "lucide-react"

const stats = [
  {
    title: "Total Words",
    value: "1,234",
    icon: BookOpen,
    description: "+20 from last week",
  },
  {
    title: "Streak",
    value: "12 Days",
    icon: Zap,
    description: "Keep it up!",
    color: "text-brand-secondary",
  },
  {
    title: "Mastered",
    value: "850",
    icon: Trophy,
    description: "68% of total",
    color: "text-brand-secondary",
  },
  {
    title: "Daily Goal",
    value: "15/20",
    icon: Target,
    description: "5 words to go",
  },
]

import { cn } from "@/lib/utils"

// ... existing code ...

export function StatsCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-4 grid-cols-2 sm:grid-cols-4", className)}>
      {stats.map((stat) => (
        <Card key={stat.title} className="py-2 gap-1 border-2 border-slate-200 shadow-sm bg-white/80 backdrop-blur-xl">
// ... existing code ...
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 px-4">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className={cn("h-4 w-4 text-muted-foreground", stat.color)} />
          </CardHeader>
          <CardContent className="px-4 pb-2">
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
