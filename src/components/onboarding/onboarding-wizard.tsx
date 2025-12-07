"use client";

import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Phase1Chat } from "./phase1-chat";
import { Phase2Motivation } from "./phase2-motivation";
import { Phase3Personality } from "./phase3-personality";
import { Phase4Interests } from "./phase4-interests";
import { Phase5Logistics } from "./phase5-logistics";
import { OnboardingData } from "./types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export function OnboardingWizard() {
  const [phase, setPhase] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    interests: [],
  });

  const updateData = (newData: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...newData }));
    setPhase((prev) => prev + 1);
  };

  const totalPhases = 5;
  const progress = ((phase - 1) / totalPhases) * 100;

  if (phase > totalPhases) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 size={40} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">You're all set!</h1>
        <p className="text-gray-500 max-w-md">
          We've customized your learning path based on your profile.
          Get ready to master English with Lemma.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-xl text-left w-full max-w-md space-y-2 text-sm text-gray-600">
          <p><strong>Level:</strong> {data.proficiency}</p>
          <p><strong>Focus:</strong> {data.intent}</p>
          <p><strong>Style:</strong> {data.navigationStyle} & {data.motivationSource}</p>
          <p><strong>Tutor:</strong> {data.correctionStyle}</p>
          <p><strong>Interests:</strong> {data.interests.slice(0, 3).join(", ")}...</p>
        </div>

        <Link href="/learning">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            Start Learning
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="w-full max-w-4xl mx-auto px-4 py-8 relative z-10">
        <div className="mb-8 space-y-4">
          <div className="flex justify-between text-sm font-medium text-slate-500">
            <span>Step {phase} of {totalPhases}</span>
            <span>{Math.round(progress)}% Completed</span>
          </div>
          <Progress 
            value={progress} 
            className="h-2.5 bg-indigo-500/10 rounded-full" 
            indicatorClassName="bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" 
          />
        </div>

        <div className="min-h-[400px] flex items-center justify-center">
          {phase === 1 && <Phase1Chat onComplete={updateData} />}
          {phase === 2 && <Phase2Motivation onComplete={updateData} />}
          {phase === 3 && <Phase3Personality onComplete={updateData} />}
          {phase === 4 && <Phase4Interests onComplete={updateData} />}
          {phase === 5 && <Phase5Logistics onComplete={updateData} />}
        </div>
      </div>
    </div>
  );
}
