// import styled from "@emotion/styled";
// import { Box, Typography } from "@mui/material";
// import CommonHeader from "components/CommonHeader/CommonHeader";
// import TopPerformingBranchCard from "components/ReportModule/TopPerformingBranchCard";
// import assest from "json/assest";
// import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
// import Datepickersection from "ui/Datepicker/Datepickersection";

// const BoxWrapper = styled(Box)`
//   margin-bottom: 48px;

//   .MuiStack-root {
//     @media (max-width: 599px) {
//       margin-bottom: 12px;
//     }
//   }
//   .left_stack {
//     h3 {
//       @media (max-width: 599px) {
//         font-size: 18px;
//       }
//     }
//   }
// `;

// const TopPerformingBranches = () => {
//   return (
//     <BoxWrapper>
//       <CommonHeader
//         headerIcon={assest?.branchIcon}
//         title="Top Performing Branches"
//         secondaryHeader
//       >
//         <Box className="innerheader_right">
//           <Datepickersection className="reportsDatePicker" typeTwo />

//           <CustomButtonPrimary variant="outlined" color="info">
//             <Typography variant="body1">View More</Typography>
//           </CustomButtonPrimary>
//         </Box>
//       </CommonHeader>

//       <Box className="perfpormaceWrapper">
//         <Box className="card">
//           {" "}
//           <TopPerformingBranchCard
//             title={"Signature Pharmacy"}
//             description={"6 The Marlins, Northwood, HA6 3NP"}
//             waitCount={100}
//             successCount={200}
//             failedCount={50}
//             payoutCount={12600}
//           />
//         </Box>
//         <Box className="card">
//           {" "}
//           <TopPerformingBranchCard
//             title={"Signature Pharmacy"}
//             description={"6 The Marlins, Northwood, HA6 3NP"}
//             waitCount={100}
//             successCount={200}
//             failedCount={50}
//             payoutCount={12600}
//           />
//         </Box>
//         <Box className="card">
//           {" "}
//           <TopPerformingBranchCard
//             title={"Signature Pharmacy"}
//             description={"6 The Marlins, Northwood, HA6 3NP"}
//             waitCount={100}
//             successCount={200}
//             failedCount={50}
//             payoutCount={12600}
//           />
//         </Box>
//       </Box>
//     </BoxWrapper>
//   );
// };

// export default TopPerformingBranches;

import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";
import { Spin } from "antd";

import CommonHeader from "components/CommonHeader/CommonHeader";
import TopPerformingBranchCard from "components/ReportModule/TopPerformingBranchCard";
import dayjs, { Dayjs } from "dayjs";
import { useToggle } from "hooks/general/useToggle";
import assest from "json/assest";
import { useMemo, useState } from "react";
import { useQuery } from "react-query";

import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";

import NotFoundResult from "components/NotFound/NotFoundResult";
import CommonDatePicker from "ui/Datepicker/CommonDatePicker";

import { payoutTopPerformingBranches } from "api/functions/report.api";
import { PayoutTopPerformingBrancheResponse } from "typescript/interface/report.interface";
import TopPerformBranchList from "./TopPerformBranchList";

const StyledCommonDatePicker = styled(CommonDatePicker)`
  .MuiInputBase-root {
    border-radius: 10px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.06);
    fieldset {
      border: 1px solid #dbe0e8;
    }
    input {
      color: #070707;
      width: 150px;
      border: none !important;
      font-size: 16px;
      font-weight: 500;
      padding: 15px;
      padding-right: 0;
    }
  }
`;

const BoxWrapper = styled(Box)`
  margin-bottom: 120px;

  .MuiStack-root {
    @media (max-width: 599px) {
      margin-bottom: 12px;
    }
  }
  .left_stack {
    h3 {
      @media (max-width: 599px) {
        font-size: 18px;
      }
    }
  }
`;

const TopPerformingBranches = ({
  onSuccess
}: {
  onSuccess?: (data: PayoutTopPerformingBrancheResponse["data"]["data"]) => any;
}) => {
  const [limit, setLimit] = useState<number>(3);
  const [page, setPage] = useState<number>(1);

  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

  const payload = useMemo(() => {
    return {
      desiredMonth: Number(selectedDate?.format("MM")) || 1,
      desiredYear: Number(selectedDate?.format("YYYY")) || 2000,
      length: limit,
      page: page
    };
  }, [selectedDate, limit, page]);

  const { data, isLoading } = useQuery({
    queryKey: ["payoutTopPerformingBranches", JSON.stringify(payload)],
    queryFn: ({ signal }) => payoutTopPerformingBranches(payload, signal),
    refetchOnWindowFocus: false,
    onSuccess(data) {
      onSuccess && onSuccess(data?.data?.data.data);
    }
  });

  const { state, toggle } = useToggle(false);
  return (
    <Spin spinning={isLoading} size="large">
      <BoxWrapper>
        <CommonHeader
          headerIcon={assest?.branchIcon}
          title="Top Performing Branches"
          secondaryHeader
        >
          <Box className="innerheader_right">
            {/* <Datepickersection className="reportsDatePicker" typeTwo /> */}
            <Box>
              <StyledCommonDatePicker
                views={["month", "year"]}
                orientation="landscape"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
              />
            </Box>
            <CustomButtonPrimary
              onClick={toggle}
              variant="outlined"
              color="info"
            >
              <Typography variant="body1">View More</Typography>
            </CustomButtonPrimary>
            {state && (
              <TopPerformBranchList
                open={state}
                onClose={toggle}
                initialDate={selectedDate}
              />
            )}
          </Box>
        </CommonHeader>

        <Box className="perfpormaceWrapper">
          {data?.data?.data?.data.map((branch) => (
            <Box className="card" key={branch?.pharmacyBranchId}>
              <TopPerformingBranchCard
                title={branch?.branchName}
                description={branch?.branchAddress}
                waitCount={Number(branch?.totalPendingOrders)}
                successCount={Number(branch?.totalCollectedOrders)}
                failedCount={Number(branch?.totalCancelledOrders)}
                payoutCount={Number(branch.totalPayoutAmount)}
              />
            </Box>
          ))}

          <Stack justifyContent="center" flex={1}>
            {!isLoading && data?.data?.data?.data.length === 0 ? (
              <NotFoundResult text="No branches found" />
            ) : null}
          </Stack>
        </Box>
      </BoxWrapper>
    </Spin>
  );
};

export default TopPerformingBranches;

