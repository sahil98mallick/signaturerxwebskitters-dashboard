import axiosInstance from "api/axiosInstance"
import { endpoints } from "api/endpoints"
import { IOrderCountPayload, Iorderreceivedlists } from "typescript/interface/order.interface"

export const BranchorderCount = (data: IOrderCountPayload) => {
    try {
        const response = axiosInstance.post(endpoints.order.orderCount, data)
        return response
    } catch (error) {
        console.log(error);
    }
}

export const Orderreceivedlists = async (data: Iorderreceivedlists) => {
    try {
        const response = await axiosInstance.post(endpoints.order.orderReceivedList, data)
        return response?.data
    } catch (error) {
        console.log(error);

    }
}