import type { CommonDataType, MessageStatus } from "./Common";

export interface PrivacyPolicyData extends CommonDataType {
  description: string;
  isActive: boolean;
}

export interface PrivacyPolicyApiResponse extends MessageStatus {
  data: PrivacyPolicyData;
}
