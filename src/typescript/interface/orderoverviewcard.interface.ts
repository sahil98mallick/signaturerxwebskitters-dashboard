export interface Orderoverviewcardinterface {
    status: string
    data: OrderoverviewcardData
}

export interface OrderoverviewcardData {
    docs: OrderoverviewcardDoc[]
    totalRecords: number
    perPage: number
    currentPage: number
    totalPages: number
}

export interface OrderoverviewcardDoc {
    id: number
    orderNumber: string
    prescriptionId: string
    orderInitiatedAt: string
    customerId: number
    pharmacyBranchId: number
    netBillAmount: string
    paidAmount: string
    platformFeeAmount: string
    paymentSessionId: string
    paymentStatus: string
    orderStatus: string
    orderRejectReason: string
    orderAcceptedAt: string
    orderRejectedAt: string
    orderCollectedAt: any
    orderDeliverySchedule: string
    orderDeliveryScheduleDate?: string
    payoutStatus: any
    orderDetail: OrderoverviewcardOrderDetail[]
    pharmacyBranch: OrderoverviewcardPharmacyBranch
    user: OrderoverviewcardUser
}

export interface OrderoverviewcardOrderDetail {
    id: number
    orderMasterId: number
    APPID: string
    medicineName: string
    dosage: string
    quantity: number
    price: string
    totalAmount: string
    createdAt: string
    updatedAt: string
}

export interface OrderoverviewcardPharmacyBranch {
    id: number
    name: string
    logo: string
    email: string
    address: string
    city: string
    postcode: string
    phone: string
    country: string
    pharmacy: OrderoverviewcardPharmacy
}

export interface OrderoverviewcardPharmacy {
    id: number
    name: string
    logo: any
    applyLogoForAllBranches: boolean
    address: string
    city: string
    postcode: string
    phone: string
    country: string
}

export interface OrderoverviewcardUser {
    dob: any
    id: number
    name: string
    surname?: string
    email: string
    password: string
    status: string
    userRoleId: number
    lastLogin: string
    lastMobileLogin: any
    resetToken: any
    totalLogin: number
    createdAt: string
    updatedAt: string
    rxUniquePrescriberId: any
}