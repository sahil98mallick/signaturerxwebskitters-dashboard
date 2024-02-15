import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { Box, Chip, Stack, Typography } from "@mui/material";
import Wrapper from "Layout/Wrapper/Wrapper";
import { primaryColors } from "Theme/_muiPalette";
import CommonHeader from "components/CommonHeader/CommonHeader";
import PaginationSection from "components/Pagination/Pagination";
import PayoutOverViewFilter from "components/PayoutOverViewFilter/PayoutOverViewFilter";
import PayoutOverviewTable from "components/PayoutOverViewtable/PayoutOverviewTable";
import { useState } from "react";
import { PayoutOverViewWrapper } from "styles/StyledComponents/PayoutOverViewWrapper";
import BillIcon from "ui/Icons/BillIcon";
import CommisionIcon from "ui/Icons/CommisionIcon";
import PayInicon from "ui/Icons/PayInicon";
import PayoutIcon from "ui/Icons/PayoutIcon";
import PeopleIcon from "ui/Icons/PeopleIcon";
import PharmacyIcon from "ui/Icons/PharmacyIcon";
import { InfoBox } from "../branch/OrderOverview/OrderOverview";

const PayoutOverview = () => {
  const [paid, setpaid] = useState(false);
  const infoArray = [
    {
      count: "£100",
      icon: <PayoutIcon IconColor={primaryColors.textDisabled} />,
      bottomText: "Payouts"
    },
    {
      count: "£80",
      icon: <PayInicon IconColor={primaryColors.textDisabled} />,
      bottomText: "Revenues"
    },
    {
      count: "£20",
      icon: <CommisionIcon IconColor={primaryColors.textDisabled} />,
      bottomText: "Commission"
    },
    {
      count: "12",
      icon: <PeopleIcon IconColor={primaryColors.textDisabled} />,
      bottomText: "Walk-in collection"
    }
  ];
  return (
    <Wrapper>
      <PayoutOverViewWrapper>
        <Box className="body_layout">
          <CommonHeader
            title="Payouts Overview"
            headerIcon={
              <BillIcon
                IconColor={primaryColors.primary}
                IconWidth="18"
                IconHeight="18"
              />
            }
          >
            {paid ? (
              <Chip
                label="Paid : 14th Aug 2023, 08.30 AM"
                icon={<AccessTimeOutlinedIcon />}
                color="success"
                variant="filled"
                className="pending"
              />
            ) : (
              <Chip
                label="Pending : Due 14th Aug 2023"
                icon={<AccessTimeOutlinedIcon />}
                color="warning"
                variant="filled"
                className="pending"
              />
            )}
          </CommonHeader>

          <Box className="header_section_wrapper">
            <Box className="header_section_left">
              <Box className="pharmacy_name">
                <Typography variant="h2">Thursday, 23 Jul 2023</Typography>
              </Box>
              <Stack direction="row" className="pharmacy_bottom_wrapper">
                <Box className="pharmacy_bottom">
                  {" "}
                  <PharmacyIcon />
                  <Typography variant="body1">10 Branches</Typography>
                </Box>
                <span className="empty_span">|</span>
                <Box className="pharmacy_bottom">
                  {" "}
                  <BillIcon IconColor={primaryColors.textDisabled} />
                  <Typography variant="body1">50 Orders</Typography>
                </Box>
              </Stack>
            </Box>
            <Box className="header_section_right">
              {infoArray.map((info) => {
                return InfoBox(info.count, info.icon, info.bottomText);
              })}
            </Box>
          </Box>

          <PayoutOverViewFilter />

          <PayoutOverviewTable />
          <PaginationSection />
        </Box>
      </PayoutOverViewWrapper>
    </Wrapper>
  );
};

export default PayoutOverview;
