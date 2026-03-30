import type { CommonDataType, MessageStatus } from "./Common";

export interface HeroSectionBase extends CommonDataType {
  description?: string;
  link?: string;
  linkTitle?: string;
  subTitles?: string[];
  title?: string;
}

export interface HeroSectionApiResponse extends MessageStatus {
  data: HeroSectionBase;
}
