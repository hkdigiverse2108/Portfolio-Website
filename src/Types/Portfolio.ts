import type { CommonDataType, MessageStatus, PageStatus } from "./Common";
import type { SocialMediaLink } from "./User";
import type { ServiceId } from "./OurService";

export interface PortfolioBase extends CommonDataType {
  thumbnailImage?: string;
  title?: string;
  subTitle?: string;
  serviceIds?: ServiceId[];
  isFeatured?: boolean;
  link?: string;
  description?: string;
  images?: string[];
  projectName?: string;
  client?: string;
  technology?: string;
  date?: string;
  socialLinks?: SocialMediaLink[];
}

export interface PortfolioData extends PageStatus {
  portfolio_data: PortfolioBase[];
}

export interface PortfolioApiResponse extends MessageStatus {
  data: PortfolioData;
}
