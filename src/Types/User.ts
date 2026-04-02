import type { CommonDataType, MessageStatus } from "./Common";

export interface SocialMediaLink {
  icon: string;
  isActive: boolean;
  link: string;
  title: string;
}

export interface UserBase extends CommonDataType {
  description?: string;
  link?: string;
  linkTitle?: string;
  subTitles?: string[];
  title?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  offers?: string[];
  phoneNo?: { countryCode: string; number: number };
  socialMediaLinks?: SocialMediaLink[];
  otp?: number;
  otpExpireTime?: string;
  password?: string;
  logoTitle?: string;
  profileImage?: string;
}

export interface UserApiResponse extends MessageStatus {
  data: UserBase;
}
