export type Proficiency = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type Intent = 'Business' | 'Exam' | 'Travel' | 'Entertainment' | 'Other';

export type NavigationStyle = 'Achiever' | 'Explorer' | 'Socializer';
export type MotivationSource = 'Player' | 'Achiever' | 'Philanthropist';

export type CorrectionStyle = 'Drill Sergeant' | 'Coach' | 'Cheerleader';
export type ContentPreference = 'Pragmatic' | 'Abstract';

export type UsageContext = 'Morning' | 'Commute' | 'Evening';

export interface OnboardingData {
  // Phase 1
  proficiency?: Proficiency;
  intent?: Intent;
  
  // Phase 2
  navigationStyle?: NavigationStyle;
  motivationSource?: MotivationSource;
  
  // Phase 3
  correctionStyle?: CorrectionStyle;
  contentPreference?: ContentPreference;
  
  // Phase 4
  interests: string[];
  
  // Phase 5
  nativeLanguage?: string;
  deadline?: Date | null; // null means "no rush"
  usageContext?: UsageContext;
}
