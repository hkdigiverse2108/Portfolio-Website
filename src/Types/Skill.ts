import type { CommonDataType, MessageStatus, PageStatus } from "./Common";

export interface SkillBase extends CommonDataType {
  image?: string;
  title?: string;
  percentage?: number;
}

export interface SkillData extends PageStatus {
  skill_data: SkillBase[];
}

export interface SkillApiResponse extends MessageStatus {
  data: SkillData;
}
