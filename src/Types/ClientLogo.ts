import type { CommonDataType, MessageStatus, PageStatus } from "./Common";

export interface ClientLogoBase extends CommonDataType {
  image: string;
  name: string;
  category?: "B2C" | "B2B";
  isActive: boolean;
}

export interface ClientLogoApiResponse extends MessageStatus {
  data: {
    clientLogo_data: ClientLogoBase[];
    totalData?: number;
    state?: any;
  };
  pageState?: PageStatus;
}
