import {
    BaseApiResponse,
    BasePaginationData,
    PaginationResponseType
  } from "./common.interface";
  import { IbranchDetails } from "./pharmacy-branch.interface";


  export type PayoutOrderSummaryVariables = {
    desiredYear: number;
    desiredMonth: number;
    page: number;
    length: number;
    sortOrder: "ASC" | "DESC";
    search?: string;
  };

  export type PayoutReportType = {
    createdAt: string;
    orderCount: number;
    uniquePharmacyBranchCount: number;
    totalPaidAmount: string;
    totalPlatformFeeAmount: string;
    amount: string;
    totalPayoutAmount: string;
    platformFeeAmount: string;
    status: string;
    id: string;
    payoutInitiateDate: string;
  };

  

  export type PayoutOrderSummaryResponse = Omit<BasePaginationData, "docs"> & {
    docs: PayoutReportType[];
  };
  