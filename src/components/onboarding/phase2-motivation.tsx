"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { OnboardingData, NavigationStyle, MotivationSource } from "./types";
import { Map, Compass, Users, Trophy, Lightbulb, Heart } from "lucide-react";

interface Phase2MotivationProps {
  onComplete: (data: Partial<OnboardingData>) => void;
}

export function Phase2Motivation({ onComplete }: Phase2MotivationProps) {
  const [step, setStep] = useState(1);
  const [navigationStyle, setNavigationStyle] = useState<NavigationStyle>();

  const handleNavigationSelect = (style: NavigationStyle) => {
    setNavigationStyle(style);
    setStep(2);
  };

  const handleMotivationSelect = (source: MotivationSource) => {
    onComplete({
      navigationStyle,
      motivationSource: source,
    });
  };

  if (step === 1) {
    return (
      <div className="w-full max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">How do you like to learn?</h2>
          <p className="text-slate-600">Help us design your perfect map.</p>
        </div>

        <div className="grid gap-4">
          <Card 
            className="p-6 cursor-pointer border-2 border-slate-200 shadow-sm backdrop-blur-md rounded-3xl overflow-hidden hover:border-blue-400 hover:shadow-md transition-all group"
            style={{ 
              background: `linear-gradient(to bottom right, rgba(255,255,255,0.8) 0%, rgba(59, 130, 246, 0.1) 100%)`
            }}
            onClick={() => handleNavigationSelect('Achiever')}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Map size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Clear Roadmap</h3>
                <p className="text-sm text-slate-500">Give me a clear, step-by-step path to follow.</p>
              </div>
            </div>
          </Card>

          <Card 
            className="p-6 cursor-pointer border-2 border-slate-200 shadow-sm backdrop-blur-md rounded-3xl overflow-hidden hover:border-purple-400 hover:shadow-md transition-all group"
            style={{ 
              background: `linear-gradient(to bottom right, rgba(255,255,255,0.8) 0%, rgba(59, 130, 246, 0.1) 100%)`
            }}
            onClick={() => handleNavigationSelect('Explorer')}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Compass size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Free Exploration</h3>
                <p className="text-sm text-slate-500">Let me explore and figure things out on my own.</p>
              </div>
            </div>
          </Card>

          <Card 
            className="p-6 cursor-pointer border-2 border-slate-200 shadow-sm backdrop-blur-md rounded-3xl overflow-hidden hover:border-orange-400 hover:shadow-md transition-all group"
            style={{ 
              background: `linear-gradient(to bottom right, rgba(255,255,255,0.8) 0%, rgba(59, 130, 246, 0.1) 100%)`
            }}
            onClick={() => handleNavigationSelect('Socializer')}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-50 text-orange-600 rounded-xl group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <Users size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Social Challenges</h3>
                <p className="text-sm text-slate-500">I learn best by doing challenges with others.</p>
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
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">What makes you feel most proud?</h2>
        <p className="text-slate-600">We'll adjust your rewards accordingly.</p>
      </div>

      <div className="grid gap-4">
        <Card 
          className="p-6 cursor-pointer border-2 border-slate-200 shadow-sm backdrop-blur-md rounded-3xl overflow-hidden hover:border-yellow-400 hover:shadow-md transition-all group"
          style={{ 
            background: `linear-gradient(to bottom right, rgba(255,255,255,0.8) 0%, rgba(59, 130, 246, 0.1) 100%)`
          }}
          onClick={() => handleMotivationSelect('Player')}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-yellow-50 text-yellow-600 rounded-xl group-hover:bg-yellow-600 group-hover:text-white transition-colors">
              <Trophy size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Winning & Streaks</h3>
              <p className="text-sm text-slate-500">Keeping my streak alive and earning badges.</p>
            </div>
          </div>
        </Card>

        <Card 
          className="p-6 cursor-pointer border-2 border-slate-200 shadow-sm backdrop-blur-md rounded-3xl overflow-hidden hover:border-green-400 hover:shadow-md transition-all group"
          style={{ 
            background: `linear-gradient(to bottom right, rgba(255,255,255,0.8) 0%, rgba(59, 130, 246, 0.1) 100%)`
          }}
          onClick={() => handleMotivationSelect('Achiever')}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 text-green-600 rounded-xl group-hover:bg-green-600 group-hover:text-white transition-colors">
              <Lightbulb size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Mastery</h3>
              <p className="text-sm text-slate-500">Finally understanding a concept that confused me.</p>
            </div>
          </div>
        </Card>

        <Card 
          className="p-6 cursor-pointer border-2 border-slate-200 shadow-sm backdrop-blur-md rounded-3xl overflow-hidden hover:border-pink-400 hover:shadow-md transition-all group"
          style={{ 
            background: `linear-gradient(to bottom right, rgba(255,255,255,0.8) 0%, rgba(59, 130, 246, 0.1) 100%)`
          }}
          onClick={() => handleMotivationSelect('Philanthropist')}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-pink-50 text-pink-600 rounded-xl group-hover:bg-pink-600 group-hover:text-white transition-colors">
              <Heart size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Helping Others</h3>
              <p className="text-sm text-slate-500">Helping others learn and grow.</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
