import type { CommonDataType, MessageStatus, PageStatus } from "./Common";
import type { ServiceBase } from "./Service";

export interface BlogBase extends CommonDataType {
  thumbnailImage?: string;
  serviceId?: ServiceBase;
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

export interface BlogDetailApiResponse extends MessageStatus {
  data: BlogBase;
}
