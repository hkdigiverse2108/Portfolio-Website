import type { MessageStatus } from "./Common";

export interface ContactPayload {
  name: string;
  phoneNo: number | string;
  email: string;
  message: string;
}

export interface ContactApiResponse extends MessageStatus {
  data: any;
}
