import { OnboardingWizard } from "@/components/onboarding/onboarding-wizard";
import { Logo } from "@/components/logo";

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Logo />
          <div className="text-sm font-medium text-gray-500">
            Personalizing your experience
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-4 bg-gray-50/30">
        <OnboardingWizard />
      </main>
    </div>
  );
}
