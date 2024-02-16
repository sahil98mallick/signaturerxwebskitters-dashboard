import axiosInstance from "api/axiosInstance";
import { endpoints } from "api/endpoints";
import { PayoutMonthlySummaryQueryResponse, PayoutMonthlySummaryQueryVariables, PayoutOrderSummaryResponse, PayoutOrderSummaryVariables, PayoutTopPerformingBrancheResponse } from "typescript/interface/report.interface";
import { AxiosResponse } from "axios";




export const payoutOrderSummary = async (
    data: PayoutOrderSummaryVariables,
    signal?: AbortSignal
  ) => {
    return axiosInstance
      .post<AxiosResponse<PayoutOrderSummaryResponse>>(
        endpoints.payout.summary,
        data,
        {
          signal
        }
      )
      ?.then((res) => res?.data);
  };


export const payoutMonthlySummaryQuery = async (
  data: PayoutMonthlySummaryQueryVariables
) => {
  return axiosInstance.post<PayoutMonthlySummaryQueryResponse>(
    endpoints.payout.monthlySummary,
    data
  );
};
  
  export type DownloadPayoutCSVVariables = {
    desiredYear: number;
    desiredMonth: number;
  };
  export const downloadPayoutCSV = async (data: DownloadPayoutCSVVariables) => {
    return axiosInstance.post<Blob>(endpoints.payout.download.csv, data, {
      params: {
        cacheBustTimestamp: Date.now() // prevents IE cache problems on re-download
      },
      responseType: "blob"
    });
  };

  export const payoutTopPerformingBranches = async (
    data: Omit<PayoutOrderSummaryVariables, "sortOrder">,
    signal?: AbortSignal
  ) => {
    return axiosInstance.post<PayoutTopPerformingBrancheResponse>(
      endpoints.payout.topPerformingBranch,
      data,
      { signal }
    );
  };
  
  