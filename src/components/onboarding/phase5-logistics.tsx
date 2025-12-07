"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { OnboardingData, UsageContext } from "./types";
import { Calendar, Clock, Globe, Coffee, Bus, Moon } from "lucide-react";

interface Phase5LogisticsProps {
  onComplete: (data: Partial<OnboardingData>) => void;
}

const LANGUAGES = [
  "Spanish", "French", "German", "Italian", "Portuguese", 
  "Russian", "Chinese", "Japanese", "Korean", "Arabic", 
  "Hindi", "Turkish", "Vietnamese", "Polish", "Ukrainian"
];

export function Phase5Logistics({ onComplete }: Phase5LogisticsProps) {
  const [step, setStep] = useState(1);
  const [nativeLanguage, setNativeLanguage] = useState("");
  const [deadline, setDeadline] = useState<Date | null | undefined>(undefined);
  const [usageContext, setUsageContext] = useState<UsageContext>();

  const handleLanguageSelect = (lang: string) => {
    setNativeLanguage(lang);
    setStep(2);
  };

  const handleDeadlineSelect = (hasDeadline: boolean) => {
    // For simplicity, we'll just set a dummy date if they have a deadline, or null if not.
    // In a real app, we'd show a date picker.
    setDeadline(hasDeadline ? new Date() : null);
    setStep(3);
  };

  const handleContextSelect = (context: UsageContext) => {
    onComplete({
      nativeLanguage,
      deadline,
      usageContext: context,
    });
  };

  if (step === 1) {
    return (
      <div className="w-full max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">What’s your first language?</h2>
          <p className="text-gray-500">This helps me predict what might trick you!</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {LANGUAGES.map((lang) => (
            <Button
              key={lang}
              variant="outline"
              className="h-12 justify-start px-4 text-base font-normal hover:border-blue-500 hover:text-blue-600"
              onClick={() => handleLanguageSelect(lang)}
            >
              {lang}
            </Button>
          ))}
          <Button
            variant="outline"
            className="h-12 justify-start px-4 text-base font-normal text-gray-500"
            onClick={() => handleLanguageSelect("Other")}
          >
            Other
          </Button>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="w-full max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">Is there a big day coming up?</h2>
          <p className="text-gray-500">We can adjust the pace.</p>
        </div>

        <div className="grid gap-4">
          <Card 
            className="p-6 cursor-pointer hover:border-blue-500 hover:shadow-md transition-all group"
            onClick={() => handleDeadlineSelect(true)}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Calendar size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">I have a specific deadline</h3>
                <p className="text-sm text-gray-500">Exam, interview, or trip.</p>
              </div>
            </div>
          </Card>

          <Card 
            className="p-6 cursor-pointer hover:border-green-500 hover:shadow-md transition-all group"
            onClick={() => handleDeadlineSelect(false)}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-50 text-green-600 rounded-xl group-hover:bg-green-600 group-hover:text-white transition-colors">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">No rush, just self-improvement</h3>
                <p className="text-sm text-gray-500">Sustainable, steady pace.</p>
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
        <h2 className="text-2xl font-bold text-gray-900">When will you mostly use Lemma?</h2>
        <p className="text-gray-500">We'll optimize the experience for that time.</p>
      </div>

      <div className="grid gap-4">
        <Card 
          className="p-6 cursor-pointer hover:border-amber-500 hover:shadow-md transition-all group"
          onClick={() => handleContextSelect('Morning')}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <Coffee size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">With morning coffee</h3>
              <p className="text-sm text-gray-500">Short, reading-focused sessions.</p>
            </div>
          </div>
        </Card>

        <Card 
          className="p-6 cursor-pointer hover:border-blue-500 hover:shadow-md transition-all group"
          onClick={() => handleContextSelect('Commute')}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Bus size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">On my commute</h3>
              <p className="text-sm text-gray-500">Audio/Listening focused, hands-free mode.</p>
            </div>
          </div>
        </Card>

        <Card 
          className="p-6 cursor-pointer hover:border-indigo-500 hover:shadow-md transition-all group"
          onClick={() => handleContextSelect('Evening')}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <Moon size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Before bed</h3>
              <p className="text-sm text-gray-500">Review/Vocabulary focused, dark mode default.</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
