import { Box, Grid, Stack } from "@mui/material";
import Wrapper from "Layout/Wrapper/Wrapper";
import { primaryColors } from "Theme/_muiPalette";
import { Result } from "antd";
import { fetchpharmacybranchlists } from "api/functions/pharmacy-branch-api";
import { payoutMonthlySummaryQuery, payoutOrderSummary } from "api/functions/report.api";
import CommonHeader from "components/CommonHeader/CommonHeader";
import NotFoundResult from "components/NotFound/NotFoundResult";
import PaginationSection from "components/Pagination/Pagination";
import PayoutSummary from "components/PayoutSummary/PayoutSummary";
import ReportCard from "components/ReportModule/ReportCard";
import TopPerformingBranches from "components/TopPerformingBranches/TopPerformingBranches";
import dayjs, { Dayjs } from "dayjs";
import { useDebounce } from "hooks/general/useDebounce";
import assest from "json/assest";
import { calculateUpDownPercentage } from "lib/common.lib";
import { useMemo, useState } from "react";
import { useQuery } from "react-query";
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

  const [limit, setLimit] = useState<number>(5);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<"ASC" | "DESC">("ASC");
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [open, setOpen] = useState(false);
  const [searchInput, setsearchInput] = useState("");
  const search = useDebounce(searchInput, 500);
  const [filename, setfilename] = useState("");


  const { data: pharmacyBranchListData } = useQuery(
    ["pharmacy-branch-list", 1],
    {
      queryFn: () =>
      fetchpharmacybranchlists(
          {
            page: 1,
            length: 1,
            search: "",
            sortBy: "id",
            sortOrder: "DESC"
          },
         
        ),
      refetchOnWindowFocus: true,
      refetchOnMount: true
    }
  );

  const userHasAtLeastOneBranch = Boolean(
    pharmacyBranchListData?.data?.data.totalRecords &&
      pharmacyBranchListData?.data?.data.totalRecords !== 0
  );

  
  


  const params = useMemo(() => {
    return {
      desiredMonth: Number(selectedDate?.format("MM")) || 1,
      desiredYear: Number(selectedDate?.format("YYYY")) || 2000,
      length: limit,
      page: page,
      sortOrder: sortBy,
      keyword: search
    };
  }, [selectedDate, limit, page, search, sortBy]);


  const { data, isLoading } = useQuery({
    queryKey: ["payout", "reports", JSON.stringify(params)],
    queryFn: () => payoutOrderSummary(params),
    refetchOnWindowFocus: true,
    enabled: userHasAtLeastOneBranch
  });
   const userHasAtLeastOneSummary = Boolean(
    data?.data?.totalRecords &&
      data?.data?.totalRecords !== 0
  );
  const monthlyPayoutSummaryParams = useMemo(() => {
    const currentDate = dayjs();
    return {
      desiredMonth: Number(currentDate?.format("MM")),
      desiredYear: Number(currentDate?.format("YYYY")),
      monthName: currentDate?.format("MMM")
    };
  }, []);


  console.log("Order Summary:-", data);
  

  const { data: monthlySummary, isLoading: monthlySummaryIsLoading } = useQuery(
    {
      queryKey: [
        "monthly",
        "payout",
        "summary",
        JSON.stringify(monthlyPayoutSummaryParams)
      ],
      queryFn: () =>
        payoutMonthlySummaryQuery({
          desiredMonth: monthlyPayoutSummaryParams?.desiredMonth,
          desiredYear: monthlyPayoutSummaryParams?.desiredYear
        }),
      enabled: userHasAtLeastOneBranch
    }
  );

  const monthlySummaryData = monthlySummary?.data;

  const revenueCalculation = useMemo(() => {
    return calculateUpDownPercentage(
      monthlySummaryData?.data.revenueAmount?.previousMonthCount,
      monthlySummaryData?.data.revenueAmount?.desiredMonthCount
    );
  }, [
    monthlySummaryData?.data.revenueAmount?.desiredMonthCount,
    monthlySummaryData?.data.revenueAmount?.previousMonthCount
  ]);
  const payoutAmountCalculation = useMemo(() => {
    return calculateUpDownPercentage(
      monthlySummaryData?.data.payoutAmount?.previousMonthCount,
      monthlySummaryData?.data.payoutAmount?.desiredMonthCount
    );
  }, [
    monthlySummaryData?.data.payoutAmount?.desiredMonthCount,
    monthlySummaryData?.data.payoutAmount?.previousMonthCount
  ]);
  const orderCountCalculation = useMemo(() => {
    return calculateUpDownPercentage(
      monthlySummaryData?.data.orderCount?.previousMonthCount,
      monthlySummaryData?.data.orderCount?.desiredMonthCount
    );
  }, [
    monthlySummaryData?.data.orderCount?.desiredMonthCount,
    monthlySummaryData?.data.orderCount?.previousMonthCount
  ]);



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

          {/* <Grid container spacing={2} className="cards_wrapper">
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
          </Grid> */}

            
          <Grid container spacing={2} className="cards_wrapper">
            <Grid item lg={4} sm={6} xs={12}>
              <ReportCard
                isLoading={monthlySummaryIsLoading}
                money={`£ ${
                  monthlySummaryData?.data.revenueAmount?.desiredMonthCount || 0
                }`}
                month={monthlyPayoutSummaryParams?.monthName}
                description={"Revenues total"}
                descriptionIcon={
                  <PayInicon IconColor={primaryColors?.textDisabled} />
                }
                chipIcon={
                  revenueCalculation?.up !== null && revenueCalculation?.up ? (
                    <OutgoingIcon />
                  ) : (
                    <IncomingIcon />
                  )
                }
                chipColor={
                  revenueCalculation?.up !== null && revenueCalculation?.up
                    ? "success"
                    : "error"
                }
                chipLabel={`${revenueCalculation?.percentage} %`}
                hideProgressChip={revenueCalculation?.percentage === null}
              />
            </Grid>

            <Grid item lg={4} sm={6} xs={12}>
              <ReportCard
                isLoading={monthlySummaryIsLoading}
                money={`£${
                  monthlySummaryData?.data.payoutAmount?.desiredMonthCount || 0
                }`}
                month={monthlyPayoutSummaryParams?.monthName}
                description={"Payouts total"}
                descriptionIcon={
                  <PayoutIcon IconColor={primaryColors?.textDisabled} />
                }
                chipIcon={
                  payoutAmountCalculation?.up !== null &&
                  payoutAmountCalculation?.up ? (
                    <OutgoingIcon />
                  ) : (
                    <IncomingIcon />
                  )
                }
                chipColor={
                  payoutAmountCalculation?.up !== null &&
                  payoutAmountCalculation?.up
                    ? "success"
                    : "error"
                }
                chipLabel={`${payoutAmountCalculation?.percentage} %`}
                hideProgressChip={payoutAmountCalculation?.percentage === null}
              />
            </Grid>
        
            <Grid item lg={4} sm={6} xs={12}>
              <ReportCard
                isLoading={monthlySummaryIsLoading}
                money={`${
                  monthlySummaryData?.data.orderCount?.desiredMonthCount || 0
                }`}
                month={monthlyPayoutSummaryParams?.monthName}
                description={"Orders total"}
                descriptionIcon={
                  <BillIcon IconColor={primaryColors?.textDisabled} />
                }
                chipIcon={
                  orderCountCalculation?.up !== null &&
                  orderCountCalculation?.up ? (
                    <OutgoingIcon />
                  ) : (
                    <IncomingIcon />
                  )
                }
                chipColor={
                  orderCountCalculation?.up !== null &&
                  orderCountCalculation?.up
                    ? "success"
                    : "error"
                }
                chipLabel={`${orderCountCalculation?.percentage} %`}
                hideProgressChip={orderCountCalculation?.percentage === null}
              />
            </Grid>
          </Grid>




          <TopPerformingBranches />
          <PayoutSummary
            onChangeSortBy={setSortBy}
            selectedSortBy={sortBy}
            datePickerProps={{
              value: selectedDate,
              onChange: setSelectedDate
            }}
            reports={data?.data.docs}
            isLoading={isLoading}
            searchProps={{
              value: searchInput,
              onChange: (e) => {
                setsearchInput(e.target.value);
                setPage(1);
              }
            }}
          />
         {Boolean(data?.data.docs?.length) && (
            <PaginationSection
              limit={limit}
              count={data?.data.totalPages}
              onChangeLimit={(e) => {
                setLimit(e.target.value);
                setPage(1);
              }}
              setPage={(e, value) => setPage(value)}
              page={page}
            />
          )}
        </Box>
      </ReportsWrapper>
    </Wrapper>
  );
};

export default Reports;
