import { Column } from "../types/complaint";

export const ROUTES = {
  dashboard: "",
  signUp: "sign-up",
  signIn: "sign-in",
  forgotPassword: "forgot-password",
  verifyOtp: "verify-otp",
  profile: "profile",
  complaints: "complaints",
};

export const SEARCH_PARAMS = {
  redirect: "redirect",
  status: "status",
};

export const COLUMNS: Column[] = [
  {
    id: "id",
    label: "ID",
  },
  {
    id: "date",
    label: "Date",
  },
  {
    id: "type",
    label: "Complaint Type",
  },
  {
    id: "status",
    label: "Complaint Status",
  },
  {
    id: "block",
    label: "Block",
  },
  {
    id: "address",
    label: "Address",
  },
];
