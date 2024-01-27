import { ComplaintStatus, ComplaintType } from "../enums";
import { Data, Complaint as ComplaintI, Block } from "../types/complaint";

export const formatRows = (complaints: ComplaintI[]): Data[] =>
  complaints.map((complaint) => ({
    id: complaint.id,
    date: new Date(complaint.date).toLocaleString(),
    type: getComplaintTypeTitle(complaint.type),
    block: getBlockTitle(complaint.block),
    address: complaint.house,
  }));

export const getBlockTitle = (blockCode: Block) =>
  blockCode == Block.Block13
    ? "Block 13"
    : blockCode == Block.Block17
    ? "Block 17"
    : blockCode == Block.Block18
    ? "Block 18"
    : blockCode;

export const getComplaintTypeTitle = (complaintCode: ComplaintType) =>
  complaintCode == ComplaintType.Sewerage
    ? "Sewerage"
    : complaintCode == ComplaintType.StreetLight
    ? "Street Light"
    : complaintCode == ComplaintType.Sanitation
    ? "Sanitation"
    : complaintCode;

export const getComplaintStatusTitle = (complaintStatusCode: ComplaintStatus) =>
  complaintStatusCode == ComplaintStatus.Pending
    ? "Pending"
    : complaintStatusCode == ComplaintStatus.InProgress
    ? "In Progress"
    : complaintStatusCode == ComplaintStatus.Completed
    ? "Completed"
    : complaintStatusCode == ComplaintStatus.Archived
    ? "Archived"
    : complaintStatusCode;
