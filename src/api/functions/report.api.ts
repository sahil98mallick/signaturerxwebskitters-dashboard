import axiosInstance from "api/axiosInstance";
import { endpoints } from "api/endpoints";
import { PayoutOrderSummaryResponse, PayoutOrderSummaryVariables } from "typescript/interface/report.interface";
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
  