import type { CommonDataType, MessageStatus, PageStatus } from "./Common";

export interface WorkExperienceBase extends CommonDataType {
  year?: number;
  title?: string;
  subTitle?: string;
}

export interface WorkExperienceData extends PageStatus {
  workExperience_data: WorkExperienceBase[];
}

export interface WorkExperienceApiResponse extends MessageStatus {
  data: WorkExperienceData;
}
