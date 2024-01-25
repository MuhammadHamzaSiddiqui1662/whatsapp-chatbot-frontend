import { api } from "../config/axios";
import { ComplaintStatus } from "../enums";
import { Complaint } from "../types/complaint";

const complaintRoute = "complaints";

export const getAllComplaints = async () => {
  const { data } = await api.get<Complaint[]>(`/${complaintRoute}/`);
  return data;
};

export const updateComplaintStatus = async (
  id: string,
  status: ComplaintStatus
) => {
  const { data } = await api.put<Complaint, any, Partial<Complaint>>(
    `/${complaintRoute}/${id}`,
    {
      status,
    }
  );
  return data;
};
