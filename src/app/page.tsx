import { LearningPath } from "@/components/home/learning-path/learning-path"
import {
  DailyChallengeCard,
  VocabularyReviewCard,
  LeaderboardCard
} from "@/components/home/widgets"
import { WelcomeHeader } from "@/components/layout/headers/welcome-header"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="py-4 md:py-8 px-4 pb-24 relative z-10">
        <div className="w-full max-w-6xl mx-auto">

          {/* New Header Layout */}
          <WelcomeHeader />

          {/* 2-Column Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Column - Learning Path (65-70% -> col-span-8) */}
            <div className="lg:col-span-8 w-full">
              <LearningPath />
            </div>

            {/* Right Column - Meta Data (30-35% -> col-span-4) */}
            <div className="lg:col-span-4 space-y-4 sticky top-[9.5rem]">
              <DailyChallengeCard />
              <VocabularyReviewCard />
              <LeaderboardCard />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
