import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { StudyHeatmap } from "./study-heatmap"
import { Award, Zap, Target, Book, Star, Crown } from "lucide-react"
import { cn } from "@/lib/utils"

const achievements = [
  { icon: Zap, title: "7 Day Streak", unlocked: true },
  { icon: Book, title: "100 Words", unlocked: true },
  { icon: Target, title: "Perfect Score", unlocked: true },
  { icon: Star, title: "Level Up", unlocked: false },
  { icon: Award, title: "Month Master", unlocked: false },
  { icon: Crown, title: "Vocabulary King", unlocked: false },
]

export function ProgressTab() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Achievements</CardTitle>
          <CardDescription>Milestones you've reached</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {achievements.map((achievement) => (
              <div 
                key={achievement.title} 
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className={cn(
                  "p-3 rounded-full bg-secondary",
                  !achievement.unlocked && "opacity-30 grayscale"
                )}>
                  <achievement.icon className="h-6 w-6" />
                </div>
                <span className={cn(
                  "text-xs font-medium",
                  !achievement.unlocked && "text-muted-foreground"
                )}>
                  {achievement.title}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Activity Log</CardTitle>
          <CardDescription>Your study consistency</CardDescription>
        </CardHeader>
        <CardContent>
          <StudyHeatmap />
        </CardContent>
      </Card>
    </div>
  )
}
