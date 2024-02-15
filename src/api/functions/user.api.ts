import axiosInstance from "api/axiosInstance";
import { endpoints } from "api/endpoints";
import { LoginSchemaFormData } from "pages/auth/Login/Login";
import { ForgetPasswordSchemaFormData } from "pages/auth/forget/Forgetpass";
import { ILoginResponse, Iforgetpass, IloginData, IsignupData, IuserProfileResponse } from "typescript/interface/auth.interface";
import { BaseApiResponse } from "typescript/interface/common.interface";

export const loginFunction = async (data: LoginSchemaFormData) => {
    const res = await axiosInstance.post<BaseApiResponse<IloginData>>(
        endpoints.auth.login,
        data
    );
    return res;
};

export const getAccountUserQuery = async (signal?: AbortSignal) => {
    const res = await axiosInstance.get<IuserProfileResponse>(
        endpoints.auth.userdetails,
        { signal }
    );

    return res;
};

// Bikramjit API 
export const signupFunction = async (data: LoginSchemaFormData) => {
    const res = await axiosInstance.post<BaseApiResponse<IsignupData>>(
        endpoints.auth.signup,
        data
    );
    return res;
};

export const forgetpassFunction = async (data: ForgetPasswordSchemaFormData) => {
    const res = await axiosInstance.post<BaseApiResponse<Iforgetpass>>(
        endpoints.auth.forgetpass,
        data
    );
    return res;
};