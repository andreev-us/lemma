"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { OnboardingData } from "./types";
import { X, Heart, Check } from "lucide-react";

interface Phase4InterestsProps {
  onComplete: (data: Partial<OnboardingData>) => void;
}

const TOPICS = [
  { id: "startup", label: "Startup Culture", category: "Tech & Future" },
  { id: "crypto", label: "Crypto & Web3", category: "Tech & Future" },
  { id: "ai_ethics", label: "AI Ethics", category: "Tech & Future" },
  { id: "space", label: "Space Travel", category: "Tech & Future" },
  { id: "coffee", label: "Specialty Coffee", category: "Lifestyle" },
  { id: "sustainable", label: "Sustainable Living", category: "Lifestyle" },
  { id: "nomad", label: "Digital Nomad Life", category: "Lifestyle" },
  { id: "mindfulness", label: "Mindfulness", category: "Lifestyle" },
  { id: "netflix", label: "Netflix Binges", category: "Pop Culture" },
  { id: "kpop", label: "K-Pop", category: "Pop Culture" },
  { id: "gaming", label: "Indie Gaming", category: "Pop Culture" },
  { id: "true_crime", label: "True Crime Podcasts", category: "Pop Culture" },
  { id: "negotiation", label: "Negotiation Tactics", category: "Professional" },
  { id: "speaking", label: "Public Speaking", category: "Professional" },
  { id: "data_science", label: "Data Science", category: "Professional" },
  { id: "leadership", label: "Leadership", category: "Professional" },
];

export function Phase4Interests({ onComplete }: Phase4InterestsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  const currentTopic = TOPICS[currentIndex];

  const handleSwipe = (dir: "left" | "right") => {
    setDirection(dir);
    
    if (dir === "right") {
      setSelectedInterests((prev) => [...prev, currentTopic.label]);
    }

    setTimeout(() => {
      setDirection(null);
      if (currentIndex < TOPICS.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        onComplete({ interests: selectedInterests });
      }
    }, 300);
  };

  if (currentIndex >= TOPICS.length) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
          <Check size={24} />
        </div>
        <p className="text-gray-500">All done! Saving your preferences...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">What are you into?</h2>
        <p className="text-gray-500">Swipe right for "Love", left for "Pass".</p>
      </div>

      <div className="relative h-80 w-full">
        <Card 
          className={`absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-transform duration-300 border-2 ${
            direction === "left" 
              ? "-translate-x-24 rotate-[-10deg] opacity-0 border-red-200 bg-red-50" 
              : direction === "right" 
                ? "translate-x-24 rotate-[10deg] opacity-0 border-green-200 bg-green-50" 
                : "translate-x-0 rotate-0 border-gray-100"
          }`}
        >
          <span className="text-xs font-medium uppercase tracking-wider text-gray-400 mb-4">
            {currentTopic.category}
          </span>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">
            {currentTopic.label}
          </h3>
        </Card>
      </div>

      <div className="flex justify-center gap-6">
        <Button
          size="lg"
          variant="outline"
          className="h-16 w-16 rounded-full border-2 border-red-100 text-red-500 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-colors"
          onClick={() => handleSwipe("left")}
        >
          <X size={28} />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="h-16 w-16 rounded-full border-2 border-green-100 text-green-500 hover:bg-green-50 hover:border-green-200 hover:text-green-600 transition-colors"
          onClick={() => handleSwipe("right")}
        >
          <Heart size={28} />
        </Button>
      </div>
      
      <div className="text-center text-sm text-gray-400">
        {currentIndex + 1} / {TOPICS.length}
      </div>
    </div>
  );
}
