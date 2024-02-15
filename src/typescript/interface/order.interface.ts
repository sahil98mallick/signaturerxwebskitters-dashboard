import { EnumToPipes } from "./pharmacy-branch.interface";

export enum OrderStatusesEnum {
    collected = "collected",
    accepted = "accepted",
    rejected = "rejected",
    cancelled = "cancelled",
    pending = "pending"
}

export type OrderStatusesType = EnumToPipes<OrderStatusesEnum, string>;

export enum RefundStatusesEnum {
    Succeeded = "Succeeded",
    Pending = "Pending"
}



export type IOrderCountPayload = {
    pharmacyBranchId: number | string
}

export type Iorderreceivedlists = {
    pharmacyBranchId: number
    page: number
    length: number
    keyword: string
    sortOrder: string
    orderStatus: string
    actionPendingBy: string
}