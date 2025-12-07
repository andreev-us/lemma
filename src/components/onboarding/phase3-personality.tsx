"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { OnboardingData, CorrectionStyle, ContentPreference } from "./types";
import { ShieldAlert, MessageSquare, PartyPopper, Coffee, BrainCircuit } from "lucide-react";

interface Phase3PersonalityProps {
  onComplete: (data: Partial<OnboardingData>) => void;
}

export function Phase3Personality({ onComplete }: Phase3PersonalityProps) {
  const [step, setStep] = useState(1);
  const [correctionStyle, setCorrectionStyle] = useState<CorrectionStyle>();

  const handleCorrectionSelect = (style: CorrectionStyle) => {
    setCorrectionStyle(style);
    setStep(2);
  };

  const handleContentSelect = (preference: ContentPreference) => {
    onComplete({
      correctionStyle,
      contentPreference: preference,
    });
  };

  if (step === 1) {
    return (
      <div className="w-full max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">I'm going to be your personal tutor.</h2>
          <p className="text-gray-500">How should I handle your mistakes?</p>
        </div>

        <div className="grid gap-4">
          <Card 
            className="p-6 cursor-pointer hover:border-red-500 hover:shadow-md transition-all group"
            onClick={() => handleCorrectionSelect('Drill Sergeant')}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-50 text-red-600 rounded-xl group-hover:bg-red-600 group-hover:text-white transition-colors">
                <ShieldAlert size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">The Drill Sergeant</h3>
                <p className="text-sm text-gray-500">"Interrupt me every time. I want to be perfect."</p>
              </div>
            </div>
          </Card>

          <Card 
            className="p-6 cursor-pointer hover:border-blue-500 hover:shadow-md transition-all group"
            onClick={() => handleCorrectionSelect('Coach')}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <MessageSquare size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">The Coach</h3>
                <p className="text-sm text-gray-500">"Tell me at the end. Don't break my flow."</p>
              </div>
            </div>
          </Card>

          <Card 
            className="p-6 cursor-pointer hover:border-green-500 hover:shadow-md transition-all group"
            onClick={() => handleCorrectionSelect('Cheerleader')}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-50 text-green-600 rounded-xl group-hover:bg-green-600 group-hover:text-white transition-colors">
                <PartyPopper size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">The Cheerleader</h3>
                <p className="text-sm text-gray-500">"Be gentle. Only correct the big stuff."</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Pick a roleplay scenario:</h2>
        <p className="text-gray-500">This helps us choose the right topics for you.</p>
      </div>

      <div className="grid gap-4">
        <Card 
          className="p-6 cursor-pointer hover:border-amber-500 hover:shadow-md transition-all group"
          onClick={() => handleContentSelect('Pragmatic')}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <Coffee size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Real Life</h3>
              <p className="text-sm text-gray-500">"Negotiating a refund at a coffee shop."</p>
            </div>
          </div>
        </Card>

        <Card 
          className="p-6 cursor-pointer hover:border-indigo-500 hover:shadow-md transition-all group"
          onClick={() => handleContentSelect('Abstract')}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <BrainCircuit size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Deep Discussion</h3>
              <p className="text-sm text-gray-500">"Debating the future of Artificial Intelligence."</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
