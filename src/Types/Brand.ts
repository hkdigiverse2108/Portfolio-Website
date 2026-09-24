import type { CommonDataType, MessageStatus, PageStatus } from "./Common";

export interface BrandBase extends CommonDataType {
  image: string;
  name: string;
  category?: "B2C" | "B2B";
  isActive: boolean;
}

export interface BrandApiResponse extends MessageStatus {
  data: {
    brand_data: BrandBase[];
    totalData?: number;
    state?: any;
  };
  pageState?: PageStatus;
}
