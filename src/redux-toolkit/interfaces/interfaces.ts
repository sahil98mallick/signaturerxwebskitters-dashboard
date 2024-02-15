import { IuserData } from "typescript/interface/auth.interface";

export interface userSliceData {
  isLoggedIn: boolean;
  userData: IuserData | null;
  accessToken: null | string;
}

