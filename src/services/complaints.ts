import { api } from "../config/axios";
import { Complaint } from "../types/complaint";

const complaintRoute = "complaints";

export const getAllComplaints = async () => {
  const { data } = await api.get<Complaint[]>(`/${complaintRoute}/`);
  return data;
};
