import axiosInstance from "api/axiosInstance"
import { endpoints } from "api/endpoints"
import { toast } from "sonner"
import { IBranchDetailsResponse, IListPharmacyBranchPayload, IpharmacyBranchListResponse } from "typescript/interface/pharmacy-branch.interface"

export const fetchpharmacybranchlists = async (data: IListPharmacyBranchPayload) => {
    try {
        const response = await axiosInstance.post<IpharmacyBranchListResponse>(endpoints.branch.list, data)
        return response
    } catch (error) {
        console.log(error);

    }
}

export const getBranchdetails = async (id: number) => {
    try {
        const response = await axiosInstance.get<IBranchDetailsResponse>(endpoints.branch.branchdetails(id))
        return response?.data?.data
    } catch (error) {
        console.log(error);
    }
}