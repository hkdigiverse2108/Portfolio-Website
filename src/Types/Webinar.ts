import type { CommonDataType, MessageStatus } from "./Common";

export interface ProblemCard {
  title: string;
  description: string;
  icon: string;
}

export interface FrameworkStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface AudienceCard {
  title: string;
  emoji: string;
  description: string;
}

export interface InstagramPost {
  postUrl: string;
  imageUrl: string;
  caption?: string;
  likes?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface WebinarData extends CommonDataType {
  hero: {
    badge: string;
    title: string;
    highlightWord: string;
    subtitle: string;
  };
  presents: {
    tagline: string;
    title: string;
    tags: string[];
    images: string[];
    mentorTag: string;
    mentorName: string;
  };
  urgency: {
    badge: string;
    tagline: string;
    title: string;
    ctaText: string;
  };
  problemSection: {
    eyebrow: string;
    title: string;
    ctaText: string;
    cards: ProblemCard[];
  };
  frameworkSection: {
    eyebrow: string;
    title: string;
    description: string;
    ctaText: string;
    steps: FrameworkStep[];
  };
  targetAudienceSection: {
    eyebrow: string;
    title: string;
    cards: AudienceCard[];
    bottomText: string;
    ctaText: string;
  };
  mentorSection: {
    eyebrow: string;
    title: string;
    role: string;
    name: string;
    bio: string;
    image: string;
    buttonText: string;
    buttonLink: string;
    highlights?: string[];
  };
  instagramFeed: InstagramPost[];
  pricing: {
    amount: number;
    originalAmount: number;
    currency: string;
    discountText: string;
    eyebrow: string;
    title: string;
    badge: string;
    subtitle: string;
    submitButtonText: string;
    trustNote: string;
  };
  dates?: string[];
  cutoffHours?: number;
  faqs: FaqItem[];
  footerText: string;
}

export interface WebinarApiResponse extends MessageStatus {
  data: WebinarData;
}

export interface WebinarRegistrationPayload {
  fullName: string;
  email: string;
  phoneNo: string;
  startupName?: string;
  amount?: number;
  webinarDate?: string;
}

export interface WebinarRegistrationApiResponse extends MessageStatus {
  data: any;
}

export type CreateRazorpayOrderPayload = WebinarRegistrationPayload;

export interface CreateRazorpayOrderResponse extends MessageStatus {
  data: {
    registrationId: string;
    orderId: string;
    amount: number;
    displayAmount: number;
    currency: string;
    razorpayKeyId: string;
    fullName: string;
    email: string;
    phoneNo: string;
    webinarDate?: string;
  };
}

export interface VerifyRazorpayPaymentPayload {
  registrationId: string;
  razorpayOrderId?: string;
  razorpayPaymentId: string;
  razorpaySignature?: string;
}

export interface VerifyRazorpayPaymentResponse extends MessageStatus {
  data: {
    registrationId: string;
    paymentStatus: string;
    paymentId: string;
    orderId: string;
    amount: number;
    fullName: string;
    email: string;
    phoneNo: string;
    startupName?: string;
    createdAt?: string;
  };
}

export interface PaymentFailedPayload {
  registrationId: string;
  razorpayOrderId?: string;
  error?: any;
}
