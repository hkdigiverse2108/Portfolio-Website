import type { CommonDataType, MessageStatus, PageStatus } from "./Common";

export interface TestimonialBase extends CommonDataType {
  name?: string;
  designation?: string;
  description?: string;
  image?: string;
  isActive?: boolean;
}

export interface TestimonialData extends PageStatus {
  testimonial_data: TestimonialBase[];
}

export interface TestimonialApiResponse extends MessageStatus {
  data: TestimonialData;
}
