import type { CommonDataType, MessageStatus, PageStatus } from "./Common";

export interface AwardsBase extends CommonDataType {
  image?: string;
  iconImage?: string;
  title?: string;
  date?: string;
  isActive?: boolean;
}

export interface AwardsData extends PageStatus {
  awards_data: AwardsBase[];
}

export interface AwardsApiResponse extends MessageStatus {
  data: AwardsData;
}
