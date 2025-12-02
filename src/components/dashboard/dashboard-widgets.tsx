"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Trophy, Zap, BookOpen, ChevronRight } from "lucide-react"
import { cn, UNIT_THEMES } from "@/lib/utils"
import { useActiveUnit } from "@/context/active-unit-context"

export function DailyChallengeCard() {
  const { activeTheme } = useActiveUnit()
  const theme = UNIT_THEMES[activeTheme]

  return (
    <Card 
      className="border-2 border-slate-200 shadow-sm backdrop-blur-md rounded-3xl overflow-hidden gap-0"
      style={{ 
        background: `linear-gradient(to bottom right, rgba(255,255,255,0.5) 0%, ${theme.primary}10 100%)`
      }}
    >
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-slate-700 flex items-center gap-3">
          <Zap className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          Daily Goals
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 px-6">
        <div className="space-y-1.5">
          <div className="flex justify-between text-sm font-medium">
            <span className="text-slate-500">Pronunciation</span>
            <span className="text-indigo-500">2/5</span>
          </div>
          <Progress value={40} className="h-2.5 bg-indigo-500/10 rounded-full" indicatorClassName="bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
        </div>
        <div className="space-y-1.5">
          <div className="flex justify-between text-sm font-medium">
            <span className="text-slate-500">Quizzes</span>
            <span className="text-emerald-500">1/3</span>
          </div>
          <Progress value={33} className="h-2.5 bg-emerald-500/10 rounded-full" indicatorClassName="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full" />
        </div>
        <div className="space-y-1.5">
          <div className="flex justify-between text-sm font-medium">
            <span className="text-slate-500">New Words</span>
            <span className="text-amber-600">8/10</span>
          </div>
          <Progress value={80} className="h-2.5 bg-amber-600/10 rounded-full" indicatorClassName="bg-gradient-to-r from-amber-600 to-orange-600 rounded-full" />
        </div>
      </CardContent>
    </Card>
  )
}

export function VocabularyReviewCard() {
  const { activeTheme } = useActiveUnit()
  const theme = UNIT_THEMES[activeTheme]

  return (
    <Card 
      className="border-2 border-slate-200 shadow-sm backdrop-blur-md rounded-3xl overflow-hidden group cursor-pointer transition-all"
      style={{ 
        background: `linear-gradient(to bottom right, rgba(255,255,255,0.5) 0%, ${theme.primary}10 100%)`
      }}
    >
      <CardContent className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div 
            className="w-12 h-12 rounded-2xl flex items-center justify-center relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: `${theme.primary}26`, color: theme.primary }}
          >
            <div className="absolute inset-0" style={{ backgroundColor: `${theme.primary}1A` }} />
            <BookOpen className="w-6 h-6 relative z-10" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-700">Vocabulary Review</h3>
            <p className="text-sm font-medium text-slate-400">25 words to review</p>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-white transition-colors">
           <ChevronRight 
             className="w-5 h-5 text-slate-400 transition-colors" 
           />
           <style jsx>{`
             .group:hover .lucide-chevron-right {
               color: ${theme.primary};
             }
           `}</style>
        </div>
      </CardContent>
    </Card>
  )
}

export function LeaderboardCard() {
  const { activeTheme } = useActiveUnit()
  const theme = UNIT_THEMES[activeTheme]

  const users = [
    { name: "Sarah", points: 1400, rank: 1, avatar: "👩" },
    { name: "You", points: 1380, rank: 2, avatar: "👤" },
    { name: "Mike", points: 1350, rank: 3, avatar: "👨" },
    { name: "Alex", points: 1300, rank: 4, avatar: "🧑" },
  ].sort((a, b) => b.points - a.points)

  return (
    <Card 
      className="border-2 border-slate-200 shadow-sm backdrop-blur-md rounded-3xl overflow-hidden gap-0"
      style={{ 
        background: `linear-gradient(to bottom right, rgba(255,255,255,0.5) 0%, ${theme.primary}10 100%)`
      }}
    >
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-slate-700 flex items-center gap-3">
          <div className="relative w-6 h-6">
            <div className="absolute bottom-[3px] left-1/2 -translate-x-1/2 w-2 h-1 bg-yellow-400" />
            <Trophy className="w-6 h-6 text-yellow-400 fill-yellow-400 relative z-10" />
          </div>
          Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 px-2">
        {users.map((user, i) => {
          const isCurrentUser = user.name === "You"
          return (
            <div
              key={user.name}
              style={isCurrentUser ? {
                backgroundColor: `${theme.primary}26`,
                borderColor: `${theme.primary}4D`,
              } : undefined}
              className={cn(
                "flex items-center justify-between py-2 px-4 rounded-2xl transition-colors border-2",
                isCurrentUser 
                  ? "shadow-sm" 
                  : "hover:bg-slate-50 border-transparent"
              )}
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "w-6 h-6 flex items-center justify-center text-sm font-medium rounded-full",
                    i === 0 ? "bg-yellow-100 text-yellow-700" :
                    i === 1 ? "bg-slate-100 text-slate-700" :
                    i === 2 ? "bg-orange-100 text-orange-700" : "text-slate-400"
                  )}
                >
                  {i + 1}
                </span>
                <span className="text-lg">{user.avatar}</span>
                <span 
                  className={cn("text-sm font-medium", isCurrentUser ? "font-bold" : "text-slate-700")}
                  style={isCurrentUser ? { color: theme.primary } : undefined}
                >
                  {user.name}
                </span>
              </div>
              <span className="text-sm font-medium text-slate-400">{user.points} XP</span>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
