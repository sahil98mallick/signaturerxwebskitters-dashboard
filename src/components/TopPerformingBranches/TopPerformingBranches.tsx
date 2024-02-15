import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import CommonHeader from "components/CommonHeader/CommonHeader";
import TopPerformingBranchCard from "components/ReportModule/TopPerformingBranchCard";
import assest from "json/assest";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import Datepickersection from "ui/Datepicker/Datepickersection";

const BoxWrapper = styled(Box)`
  margin-bottom: 48px;

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

const TopPerformingBranches = () => {
  return (
    <BoxWrapper>
      <CommonHeader
        headerIcon={assest?.branchIcon}
        title="Top Performing Branches"
        secondaryHeader
      >
        <Box className="innerheader_right">
          <Datepickersection className="reportsDatePicker" typeTwo />

          <CustomButtonPrimary variant="outlined" color="info">
            <Typography variant="body1">View More</Typography>
          </CustomButtonPrimary>
        </Box>
      </CommonHeader>

      <Box className="perfpormaceWrapper">
        <Box className="card">
          {" "}
          <TopPerformingBranchCard
            title={"Signature Pharmacy"}
            description={"6 The Marlins, Northwood, HA6 3NP"}
            waitCount={100}
            successCount={200}
            failedCount={50}
            payoutCount={12600}
          />
        </Box>
        <Box className="card">
          {" "}
          <TopPerformingBranchCard
            title={"Signature Pharmacy"}
            description={"6 The Marlins, Northwood, HA6 3NP"}
            waitCount={100}
            successCount={200}
            failedCount={50}
            payoutCount={12600}
          />
        </Box>
        <Box className="card">
          {" "}
          <TopPerformingBranchCard
            title={"Signature Pharmacy"}
            description={"6 The Marlins, Northwood, HA6 3NP"}
            waitCount={100}
            successCount={200}
            failedCount={50}
            payoutCount={12600}
          />
        </Box>
      </Box>
    </BoxWrapper>
  );
};

export default TopPerformingBranches;
