export interface Notificationpayloadresponse {
    page: number
    length: number
    onlyUnread: boolean
}

export interface NoticationRoot {
    status: string
    data: NoticationData
}

export interface NoticationData {
    docs: NoticationDocs[]
    totalRecords: number
    perPage: number
    currentPage: number
    totalPages: number
}

export interface NoticationDocs {
    id: number
    type: string
    userId: number
    pharmacyBranchId: number
    message: string
    isRead: boolean
    createdAt: string
    orderMaster: NoticationOrderMaster
}

export interface NoticationOrderMaster {
    id: number
    orderNumber: string
    orderInitiatedAt: string
    orderStatus: string
    paymentStatus: string
}