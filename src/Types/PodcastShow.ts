import type { CommonDataType, MessageStatus } from "./Common";

export interface PodcastShowBase extends CommonDataType {
  tagline?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  row1Images?: string[];
  row2Images?: string[];
}

export interface PodcastShowApiResponse extends MessageStatus {
  data: PodcastShowBase;
}
