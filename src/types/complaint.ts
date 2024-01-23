import { ComplaintStatus, Complaint as ComplaintE } from "../enums";

export interface Column {
  id: "id" | "date" | "type" | "block" | "address";
  label: string;
  minWidth?: number;
  align?: "right" | "center" | "left";
  format?: (value: number) => string;
}

export interface Data {
  id: string;
  date: string;
  type: string;
  block: string;
  address: string;
}

export interface Complaint {
  _id: string;
  type: ComplaintE;
  block: string;
  house: string;
  status: ComplaintStatus;
  date: Date;
}
