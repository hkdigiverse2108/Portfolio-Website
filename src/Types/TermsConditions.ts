import type { CommonDataType, MessageStatus } from "./Common";

export interface TermsConditionsData extends CommonDataType {
  description: string;
  isActive: boolean;
}

export interface TermsConditionsApiResponse extends MessageStatus {
  data: TermsConditionsData;
}
