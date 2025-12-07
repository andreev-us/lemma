"use client";

import { Card } from "@/components/ui/card";
import { OnboardingData, Proficiency, Intent } from "./types";
import { Briefcase, Plane, GraduationCap, Brain } from "lucide-react";

interface Phase1ChatProps {
  onComplete: (data: Partial<OnboardingData>) => void;
}

export function Phase1Chat({ onComplete }: Phase1ChatProps) {
  const handleOptionClick = (intent: Intent) => {
    // Default proficiency for fallback options
    const proficiency: Proficiency = "A2"; 
    onComplete({ proficiency, intent });
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Hi, I’m Lemma! 👋</h2>
        <p className="text-gray-500">I’m here to build your custom English plan. To get started, just tell me: What brings you here today?</p>
      </div>

      <div className="grid gap-4">
        <Card 
          className="p-6 cursor-pointer hover:border-blue-500 hover:shadow-md transition-all group"
          onClick={() => handleOptionClick('Business')}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Briefcase size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Boost my Career</h3>
              <p className="text-sm text-gray-500">"I want to be more confident at work."</p>
            </div>
          </div>
        </Card>

        <Card 
          className="p-6 cursor-pointer hover:border-sky-500 hover:shadow-md transition-all group"
          onClick={() => handleOptionClick('Travel')}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-sky-50 text-sky-600 rounded-xl group-hover:bg-sky-600 group-hover:text-white transition-colors">
              <Plane size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Travel the World</h3>
              <p className="text-sm text-gray-500">"I want to speak with locals."</p>
            </div>
          </div>
        </Card>

        <Card 
          className="p-6 cursor-pointer hover:border-purple-500 hover:shadow-md transition-all group"
          onClick={() => handleOptionClick('Exam')}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Pass an Exam</h3>
              <p className="text-sm text-gray-500">"I need to prepare for TOEFL/IELTS."</p>
            </div>
          </div>
        </Card>

        <Card 
          className="p-6 cursor-pointer hover:border-emerald-500 hover:shadow-md transition-all group"
          onClick={() => handleOptionClick('Other')}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Brain size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Brain Training</h3>
              <p className="text-sm text-gray-500">"I want to keep my mind sharp."</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
