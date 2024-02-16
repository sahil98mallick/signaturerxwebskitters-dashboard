import axiosInstance from "api/axiosInstance"
import { endpoints } from "api/endpoints"
import { Notificationpayloadresponse } from "typescript/interface/notification.interface"

export const Getnotificationdetails = async (data: Notificationpayloadresponse) => {
    try {
        const response = await axiosInstance.post(endpoints.notification.notify, data)
        return response?.data?.data
    } catch (error) {
        console.log();

    }
}