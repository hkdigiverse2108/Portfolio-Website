import type { CommonDataType, MessageStatus, PageStatus } from "./Common";

export interface ServiceId {
  _id: string;
  name: string;
}

export interface WhyChoose {
  title: string;
  description: string;
}

export interface OurServiceBase extends CommonDataType {
  priority?: number;
  title?: string;
  shortDescription?: string;
  description?: string;
  thumbnailImage?: string;
  serviceIds?: ServiceId[];
  images?: string[];
  tagLine?: string;
  whyChoose?: WhyChoose;
}

export interface OurServiceData extends PageStatus {
  ourService_data: OurServiceBase[];
}

export interface OurServiceApiResponse extends MessageStatus {
  data: OurServiceData;
}

export interface OurServiceDetailApiResponse extends MessageStatus {
  data: OurServiceBase;
}
