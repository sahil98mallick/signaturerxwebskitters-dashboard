import axiosInstance from "api/axiosInstance"
import { endpoints } from "api/endpoints"

export const Fetchpharmacy = async () => {
    try {
        const response = await axiosInstance.get(endpoints.Pharmacies.pharmacyfetch)
        return response?.data?.data
    } catch (error) {
        console.log("fetch Pharmacy Found:-", error);

    }
}