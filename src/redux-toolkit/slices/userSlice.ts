
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { destroyCookie } from "nookies";
import { userSliceData } from "../interfaces/interfaces";
import { IuserData } from "typescript/interface/auth.interface";
import { setUserAccessToken } from "api/axiosInstance";

const initialState: userSliceData = {
  isLoggedIn: false,
  userData: null,
  accessToken: null,
};


export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserData: (state, { payload }: { payload: IuserData }) => {
      state.userData = payload;
    },
    setAccessToken: (state, { payload }: { payload: string | null }) => {
      state.accessToken = payload;
      state.isLoggedIn = Boolean(payload);
      setUserAccessToken(payload);
    },
    logout: (state) => {

      state.isLoggedIn = false;
      state.userData = null;
      state.accessToken = null;
    }
  }
});

export const { setUserData, logout, setAccessToken } =
  userSlice.actions;

export default userSlice.reducer;