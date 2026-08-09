export type ThemeMode = 'dark' | 'light';

export interface RetreatDayArc {
  day: number;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
  focus: string;
}

export interface RetreatDetails {
  title: string;
  subtitle: string;
  location: string;
  duration: string;
  dates: string;
  price: string;
  priceNumeric: number;
  currency: string;
  spotsTotal: number;
  spotsLeft: number;
  theme: string;
  tagline: string;
  description: string;
  highlights: string[];
  tags: string[];
  schedule: RetreatDayArc[];
}

export interface ConfluenceTrack {
  id: string;
  title: string;
  icon: string;
  summary: string;
  description: string;
  highlights: string[];
  accentColorDark: string;
  accentColorLight: string;
}

export interface SponsorshipTier {
  id: string;
  name: string;
  price: string;
  priceNumeric: number;
  stallSize: string;
  badge?: string;
  isPopular?: boolean;
  isExclusive?: boolean;
  perks: string[];
  idealFor?: string;
}

export interface AudienceProfile {
  id: string;
  title: string;
  ageRange: string;
  geoScope: string;
  description: string;
  keyStats: string[];
  purchaseIntent: string;
  icon: string;
}

export interface ConfluenceDetails {
  title: string;
  tagline: string;
  subtitle: string;
  date: string;
  location: string;
  duration: string;
  delegatesCount: string;
  exhibitorsCount: string;
  tracksCount: number;
  description: string;
  tracks: ConfluenceTrack[];
  sponsorshipTiers: SponsorshipTier[];
  audienceProfiles: AudienceProfile[];
  targetCategories: {
    category: string;
    brands: string[];
  }[];
}

export interface CommunityRole {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface CommunityDetails {
  title: string;
  eyebrow: string;
  description: string;
  roles: CommunityRole[];
  whatYouGive: string;
  whatYouReceive: string;
  membershipTerms: string;
}

export interface PartnerPosition {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  quote: string;
  colorAccent: string;
  youBring: string[];
  youReceive: string[];
}

export interface PartnersDetails {
  title: string;
  eyebrow: string;
  subtitle: string;
  positions: PartnerPosition[];
  musicProgram: {
    title: string;
    subtitle: string;
    description: string;
  };
}

export interface TimelineMilestone {
  date: string;
  title: string;
  description: string;
  status: 'upcoming' | 'active' | 'completed';
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  interestCategory: 'retreat' | 'exhibitor' | 'member' | 'event-partner' | 'execution-partner' | 'artist' | 'investor';
  message: string;
}
