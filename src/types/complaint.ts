import { ComplaintStatus, ComplaintType as ComplaintE } from "../enums";

export interface Column {
  id: "id" | "date" | "type" | "block" | "address";
  label: string;
  minWidth?: number;
  align?: "right" | "center" | "left";
  format?: (value: number) => string;
}

export interface Data {
  id: number;
  date: string;
  type: string;
  block: string;
  address: string;
}

export interface Complaint {
  _id: string;
  id: number;
  type: ComplaintE;
  block: Block;
  house: string;
  status: ComplaintStatus;
  date: Date;
  complainantId: string;
}

export enum Block {
  Block13,
  Block17,
  Block18,
}
