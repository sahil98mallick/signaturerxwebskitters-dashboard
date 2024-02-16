/* The code is defining a set of constants in TypeScript. */
export const baseUrl = process.env.REACT_APP_BASE_URL;
export const baseUrlApi = "https://signaturerx-admin.dedicateddevelopers.us/api/";
export const baseUrlMedia = process.env.REACT_APP_BASE_URL;
export const baseUrlFileMedia = "https://api-files.blueflame.ai/api/";
export const api_version = "v1";

export const endpoints = {
    auth: {
        login: "auth/login",
        userdetails: "profile/personal-info",
        profileUpdate: "/profile/personal-info/update",
        signup: "/auth/sign-up",
        changepassword: "/auth/change-password",
        forgetpass: "/auth/request-password-reset",
    },
    branch: {
        list: "pharmacy-branch/assigned/list",
        branchdetails: (id: number) => `pharmacy-branch/get/${id}`,
    },
    order: {
        orderCount: "/order/count/by-status",
        orderReceivedList: "/order/received/list",
        orderdetailsoverview: (id: string | number, location: "pharmacy" | "patient") =>
        `/order/detail/${id}?location=${location}`,
    },
    payout: {
        summary: "/report/payout/summary",
        download: {
          csv: "/report/payout/csv"
        },
        monthlySummary: "/report/monthly/summary",
        overview: (id: string) => `/report/payout/overview/${id}`,
        orderList: "/report/payout/order/list",
        topPerformingBranch: "/report/top/performing/branches"
      },
      topPerformingBranch: "/report/top/performing/branches",
      notification: {
        notify: "notification/list"
    },
    Pharmacies: {
        pharmacyfetch: "pharmacy/fetch",
    }
};



export const sucessNotificationEndPoints = [];
