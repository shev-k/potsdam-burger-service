export type Language = 'en' | 'de';

export interface SiteMetadata {
  title: string;
  languages: Language[];
  hotline: string;
  hotlineLabel: string;
}

export interface NavLink {
  label: string;
  url: string;
}

export interface LinkItem {
  label: string;
  url: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  image: string;
}

export interface AlertSection {
  type: 'info' | 'warning' | 'error';
  text: string;
}

export interface ServiceCTA {
  label: string;
  url: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  cta: ServiceCTA;
  links: LinkItem[];
  contact?: string;
}

export interface AdditionalOffer {
  title: string;
  description: string;
  link?: string;
}

export interface PageContent {
  hero: HeroSection;
  alert: AlertSection;
  services: ServiceItem[];
  additionalOffers: AdditionalOffer[];
}

export interface FooterContent {
  socials: SocialLink[];
  links: LinkItem[];
  copyright: string;
}

export interface ContentData {
  siteMetadata: SiteMetadata;
  navigation: NavLink[];
  pageContent: PageContent;
  footer: FooterContent;
}

export type Translations = {
  [key in Language]: ContentData;
};

// Reservation System Types

export interface ReservationService {
  id: string;
  name: string;
  duration: number;
  docsRequired: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  services: ReservationService[];
}

export interface ReservationSettings {
  centerLocation: string;
  contactEmail: string;
  maxAdvanceBookingDays: number;
  slotDurationMinutes: number;
}

export interface MockSlots {
  note: string;
  blockedDates: string[];
  fullyBookedDates: string[];
  openingHours: {
    start: string;
    end: string;
    weekend: boolean;
  };
}

export interface ExistingAppointment {
  appointmentId: string;
  pin: string;
  customerName: string;
  date: string;
  time: string;
  service: string;
}

export interface ReservationData {
  settings: ReservationSettings;
  categories: ServiceCategory[];
  mockSlots: MockSlots;
  existingAppointments: ExistingAppointment[];
}

export interface BookingState {
  selectedServices: Record<string, number>; // ServiceId -> Count
  selectedDate: Date | null;
  selectedTime: string | null;
  userData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dob: string;
    gdpr: boolean;
  };
}
