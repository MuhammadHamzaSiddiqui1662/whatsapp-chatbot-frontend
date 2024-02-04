import { api } from "../config/axios";
import { ComplaintStatus } from "../enums";
import { Complaint } from "../types/complaint";
import { Complainant } from "../types/user";

const complaintRoute = "complaints";
const complainantRoute = "users";

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

export const getComplainant = async (_id: string) => {
  const { data } = await api.get<Complainant>(`${complainantRoute}/${_id}`);
  return data;
};
