import { api } from "../config/axios";
import { RoleType } from "../enums";
import { JWT, User } from "../types/user";

const authRoute = "auth";

export const login = async (cnic: string, password: string) => {
  const { data } = await api.post<any>(`/${authRoute}/login`, {
    cnic,
    password,
    organizationCode: RoleType.DCO,
  });
  console.log("Successful Login:", data);
  return cnic;
};

export const verify = async (cnic: string, otp: string) => {
  const { data } = await api.post<{ result: JWT }>(`/${authRoute}/verify`, {
    cnic,
    otp,
    organizationCode: RoleType.DCO,
  });
  console.log("Successful Verify:", data);
  localStorage.setItem("jwt", JSON.stringify(data.result));
  api.defaults.headers.common.Authorization = `Bearer ${data.result.jwtToken}`;
  return data;
};

export const register = async (user: User) => {
  const { data } = await api.post<User>(`/${authRoute}/register`, user);
  console.log("Successful Register:", data);
  return data;
};

export const getUser = async () => {
  const { data } = await api.get<{ result: User }>(`/User/Details`);
  console.log("User:", data.result);
};
