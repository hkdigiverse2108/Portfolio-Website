import type { CommonDataType, MessageStatus, PageStatus } from "./Common";

export interface ServiceBase {
  _id: string;
  name: string;
}

export interface BlogBase extends CommonDataType {
  thumbnailImage?: string;
  serviceIds?: ServiceBase[];
  date?: string;
  title?: string;
  description?: string;
  images?: string[];
  tagLine?: string;
  tags?: string[];
  isActive?: boolean;
}

export interface BlogData extends PageStatus {
  blog_data: BlogBase[];
}

export interface BlogApiResponse extends MessageStatus {
  data: BlogData;
}
