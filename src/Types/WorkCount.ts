import type { CommonDataType, MessageStatus, PageStatus } from "./Common";

export interface WorkCountBase extends CommonDataType {
  description?: string;
  link?: string;
  linkTitle?: string;
  subTitles?: string[];
  title?: string;
  number?: string;
}

export interface workcountData extends PageStatus {
  workCount_data: WorkCountBase[];
}

export interface WorkCountApiResponse extends MessageStatus {
  data: workcountData;
}
