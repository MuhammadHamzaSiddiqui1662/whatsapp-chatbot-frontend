import { Dayjs } from "dayjs";
import { Gender, RoleType } from "../enums";
import { Language } from "./enum";

export interface User {
  name: string;
  gender: Gender;
  dateOfBirth: Dayjs;
  email: string;
  phoneNumber: string;
  password: string;
  currentAddress: string;
  permanentAddress: string;
  city: string;
  state: string;
  cnicNumber: string;
  role: RoleType;
  jwt: JWT;
}

export interface JWT {
  jwtToken: string;
  refreshToken: string;
  expireTime: string;
}

export interface Complainant {
  _id: string;
  name: string;
  block: string;
  house: string;
  mobile: string;
  lang: Language;
}
