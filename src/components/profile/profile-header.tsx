import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Flame, BookOpen, Trophy, Clock } from "lucide-react"

export function ProfileHeader() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20 border-2 border-border">
            <AvatarImage src="/avatars/01.png" alt="@jdoe" />
            <AvatarFallback className="text-lg">RA</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Ruslan Andreiev</h2>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Intermediate Learner</span>
              <Badge variant="secondary" className="rounded-full bg-secondary text-primary hover:bg-secondary/80">B2</Badge>
            </div>
            <div className="w-full max-w-[200px] space-y-1">
               <div className="flex justify-between text-xs text-muted-foreground">
                 <span>Progress to C1</span>
                 <span>65%</span>
               </div>
               <Progress value={65} className="h-2 bg-secondary" indicatorClassName="bg-primary" />
            </div>
          </div>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary rounded-full">
                <Flame className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">12 Days</span>
                <span className="text-xs text-muted-foreground">Current Streak</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary rounded-full">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">1,234</span>
                <span className="text-xs text-muted-foreground">Words Learned</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary rounded-full">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">48h</span>
                <span className="text-xs text-muted-foreground">Total Time</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary rounded-full">
                <Trophy className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">Gold</span>
                <span className="text-xs text-muted-foreground">Current League</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
