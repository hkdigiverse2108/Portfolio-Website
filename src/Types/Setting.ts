import type { CommonDataType, MessageStatus } from "./Common";

export interface PhoneNo {
  countryCode: string;
  number: number;
}

export interface BookMeeting {
  link: string;
  phoneNo: PhoneNo;
  email: string;
  address: string;
}

export interface SettingBase extends CommonDataType {
  bookMeeting: BookMeeting;
  isActive: boolean;
}

export interface SettingApiResponse extends MessageStatus {
  data: SettingBase;
}
