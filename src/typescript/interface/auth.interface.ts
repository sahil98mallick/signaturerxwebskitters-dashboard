import { BaseApiResponse } from "./common.interface";
import { EnumToPipes } from "./pharmacy-branch.interface";

export interface IloginData {
  dob: any;
  id: number;
  name: string;
  surname: any;
  email: string;
  status: string;
  totalLogin: number;
  createdAt: string;
  fullName: any;
  roleId: number;
  role: UserRoleType;
  label: string;
  group: string;
  city: any;
  state: any;
  countryId: any;
  zipCode: any;
  phone: any;
  gender: any;
  image: any;
  address1: any;
  address2: any;
  latitude: any;
  longitude: any;
  lastLogin: string;
  updatedAt: string;
  sessionId: string;
  success: boolean;
  access: string;
  refresh: string;
  firstLogin: string;
}
export enum UserRoleEnum {
  branch_admin = "branch_admin",
  admin = "admin",
  branch_user = "branch_user",
  patient = "patient"
}
export type UserRoleType = EnumToPipes<UserRoleEnum, string>;
export interface IuserData {
  dob: any;
  id: number;
  name: string;
  surname: any;
  email: string;
  status: string;
  totalLogin: number;
  roleId: number;
  role: UserRoleType;
  label: string;
  group: string;
  city: any;
  state: any;
  countryId: any;
  zipCode: any;
  phone: any;
  gender: any;
  image: any;
  address1: any;
  address2: any;
  latitude: any;
  longitude: any;
}

export interface ILoginResponse extends BaseApiResponse {
  data: IloginData;
}
export interface IData {
  personal: IuserData;
}
export interface IuserProfileResponse extends BaseApiResponse {
  data: IData;
}


// Bikramjit Code

export interface IsignupData{
  pharmacyName: string;
  name:string;
  surname:string;
  email: string;
  phone: number;
  password:number;
  confirmPassword:number;
}

export interface Iforgetpass{
  email: string
}