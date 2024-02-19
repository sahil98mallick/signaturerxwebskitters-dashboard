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

  export type PayoutMonthlySummaryQueryVariables = {
    desiredYear: number;
    desiredMonth: number;
  };

  export interface PayoutAmount {
    previousMonthCount: number;
    desiredMonthCount: number;
  }
  

  export type PayoutMonthlySummaryQueryResponse = Omit<
  BaseApiResponse,
  "data"
> & {
  data: {
    revenueAmount: PayoutAmount;
    payoutAmount: PayoutAmount;
    orderCount: PayoutAmount;
  };
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

  export interface IPayoutTopPerformingBranch {
    pharmacyBranchId: number;
    branchName: string;
    branchAddress: string;
    branchCity: string;
    branchPostcode: string;
    branchCountry: string;
    totalPaidAmount: string;
    totalPayoutAmount: string;
    totalPlatformFeeAmount: string;
    totalPendingOrders: string;
    totalCollectedOrders: string;
    totalCancelledOrders: string;
    code: string;
    totalPages: number;
  }

  

  export type PayoutOrderSummaryResponse = Omit<BasePaginationData, "docs"> & {
    docs: PayoutReportType[];
  };

  export interface PayoutTopPerformingBranchesData {
    data: IPayoutTopPerformingBranch[];
  }
  
  
  export type PayoutTopPerformingBrancheResponse = Omit<
  BaseApiResponse,
  "data"
> & {
  data: PayoutTopPerformingBranchesData;
  pagination: PaginationResponseType;
  totalPages: number;
};
