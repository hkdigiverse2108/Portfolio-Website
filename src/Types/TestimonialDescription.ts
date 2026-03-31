import type { CommonDataType, MessageStatus } from "./Common";

export interface TestimonialDescriptionData extends CommonDataType {
  rating?: number;
  subTitle?: string;
  title?: string;
  isActive?: boolean;
}

export interface TestimonialDescriptionApiResponse extends MessageStatus {
  data: TestimonialDescriptionData;
}
