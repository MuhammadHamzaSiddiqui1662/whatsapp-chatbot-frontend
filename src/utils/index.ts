import { Complaint, ComplaintStatus } from "../enums";
import { Data, Complaint as ComplaintI } from "../types/complaint";

export const formatRows = (complaints: ComplaintI[]): Data[] =>
  complaints.map((complaint) => ({
    id: complaint._id,
    date: new Date(complaint.date).toLocaleString(),
    type:
      complaint.type === Complaint.Sewerage
        ? "Sewerage"
        : complaint.type === Complaint.StreetLight
        ? "Street Light"
        : complaint.type === Complaint.Sanitation
        ? "Sanitation"
        : "undefined",
    status:
      complaint.status === ComplaintStatus.Pending
        ? "Pending"
        : complaint.status === ComplaintStatus.InProgress
        ? "In Progress"
        : complaint.status === ComplaintStatus.Completed
        ? "Completed"
        : complaint.status === ComplaintStatus.Archived
        ? "Archived"
        : "undefined",
    block: complaint.block,
    address: complaint.house,
  }));
