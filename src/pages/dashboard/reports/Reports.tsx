import { Box, Grid, Stack } from "@mui/material";
import Wrapper from "Layout/Wrapper/Wrapper";
import { primaryColors } from "Theme/_muiPalette";
import CommonHeader from "components/CommonHeader/CommonHeader";
import PaginationSection from "components/Pagination/Pagination";
import PayoutSummary from "components/PayoutSummary/PayoutSummary";
import ReportCard from "components/ReportModule/ReportCard";
import TopPerformingBranches from "components/TopPerformingBranches/TopPerformingBranches";
import assest from "json/assest";
import { ReportsWrapper } from "styles/StyledComponents/ReportsWrapper";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import BillIcon from "ui/Icons/BillIcon";
import ImportIcon from "ui/Icons/ImportIcon";
import IncomingIcon from "ui/Icons/IncomingIcon";
import OutgoingIcon from "ui/Icons/OutgoingIcon";
import PayInicon from "ui/Icons/PayInicon";
import PayoutIcon from "ui/Icons/PayoutIcon";
import PeopleIcon from "ui/Icons/PeopleIcon";

const Reports = () => {
  return (
    <Wrapper defaultHeader>
      <ReportsWrapper>
        <Box className="body_layout">
          <Box className="reportsHeaderWrpper">
            <CommonHeader headerIcon={assest?.branchIcon} title="Reports">
              <Stack direction="row" spacing={1}>
                <CustomButtonPrimary
                  variant="outlined"
                  color="inherit"
                  endIcon={<ImportIcon />}
                >
                  Download CSV
                </CustomButtonPrimary>

                <CustomButtonPrimary
                  variant="outlined"
                  color="inherit"
                  endIcon={<ImportIcon />}
                >
                  Download PDF
                </CustomButtonPrimary>
              </Stack>
            </CommonHeader>
          </Box>

          <Grid container spacing={2} className="cards_wrapper">
            <Grid item lg={3} sm={6} xs={12}>
              <ReportCard
                money="£1000"
                month="june"
                description={"Revenues total"}
                descriptionIcon={
                  <PayInicon IconColor={primaryColors?.textDisabled} />
                }
                chipIcon={<IncomingIcon />}
                chipColor="error"
                chipLabel={"5 %"}
              />
            </Grid>

            <Grid item lg={3} sm={6} xs={12}>
              <ReportCard
                money="£1000"
                month="june"
                description={"Payouts total"}
                descriptionIcon={
                  <PayoutIcon IconColor={primaryColors?.textDisabled} />
                }
                chipIcon={<OutgoingIcon />}
                chipColor="success"
                chipLabel={"2 %"}
              />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <ReportCard
                money="200"
                month="june"
                description={"Walk-in customers"}
                descriptionIcon={
                  <PeopleIcon IconColor={primaryColors?.textDisabled} />
                }
                chipIcon={<IncomingIcon />}
                chipColor="error"
                chipLabel={"5 %"}
              />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <ReportCard
                money="200"
                month="june"
                description={"Orders total"}
                descriptionIcon={
                  <BillIcon IconColor={primaryColors?.textDisabled} />
                }
                chipIcon={<OutgoingIcon />}
                chipColor="success"
                chipLabel={"2 %"}
              />
            </Grid>
          </Grid>
          <TopPerformingBranches />
          <PayoutSummary />
          <PaginationSection />
        </Box>
      </ReportsWrapper>
    </Wrapper>
  );
};

export default Reports;
