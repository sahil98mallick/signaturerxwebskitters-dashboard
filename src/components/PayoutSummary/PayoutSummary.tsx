import styled from "@emotion/styled";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import {
  Box,
  Chip,
  IconButton,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";
import CommonHeader from "components/CommonHeader/CommonHeader";
import { tableDataMock_payout } from "json/mock/payoutsummary.mock";
import { useNavigate } from "react-router";
import { HomeTableWrapper } from "styles/StyledComponents/HomeTableWrapper";
import InputFieldCommon from "ui/CommonInput/CommonInput";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import Datepickersection from "ui/Datepicker/Datepickersection";
import CustomSelect from "ui/Filter/CustomSelect";
import BillIcon from "ui/Icons/BillIcon";
import CalenderIcon from "ui/Icons/CalenderIcon";
import CommisionIcon from "ui/Icons/CommisionIcon";
import PayInicon from "ui/Icons/PayInicon";
import PayoutIcon from "ui/Icons/PayoutIcon";
import SortingIcon from "ui/Icons/SortingIcon";
import TickIcon from "ui/Icons/TickIcon";

const PayoutSummary = () => {
  const names = ["Ascending", "Descending"];
  const navigate = useNavigate();

  const PayoutSummaryWrapper = styled(Box)`
    .MuiChip-root {
      &.pending {
        svg,
        img {
          width: 20px;
          height: 20px;
        }
      }
      &.paid {
        svg,
        img {
          width: 20px;
          height: 21px;
          margin-left: 5px;
          margin-right: -5px;
        }
      }
    }
    .mainTable_header {
      th {
        &:not(:first-child) {
          text-align: center;
        }
        :last-child {
          text-align: left;
        }
      }
    }
  `;

  return (
    <PayoutSummaryWrapper>
      <CommonHeader
        title={"Payouts summary"}
        headerIcon={<BillIcon IconColor={primaryColors.primary} />}
        className="payment_info_header_wrapper"
        secondaryHeader
      >
        <Box className="payout_summary">
          <Box>
            {" "}
            <InputFieldCommon
              placeholder="Search payment.."
              adorMentIcon={<SearchRoundedIcon />}
            />
          </Box>
          <Box>
            <Datepickersection className="reportsDatePicker" typeTwo />
          </Box>
          <Box className="sort_filter">
            <CustomSelect
              IconComponent={(props) => {
                return <IconButton {...props}>{<SortingIcon />}</IconButton>;
              }}
              className="form_select"
              defaultValue=""
              displayEmpty
            >
              <MenuItem value="">Sort</MenuItem>
              {names.map((name) => (
                <MenuItem key={name} value={name} className="menu_item">
                  {name}
                </MenuItem>
              ))}
            </CustomSelect>
          </Box>
        </Box>
      </CommonHeader>

      <HomeTableWrapper>
        <TableContainer>
          <Table
            sx={{
              minWidth: "100%"
            }}
            aria-label="simple table"
          >
            <TableHead className="mainTable_header">
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Branches</TableCell>
                <TableCell>Orders</TableCell>
                <TableCell>Details</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableDataMock_payout.map((row) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell id="date">
                    <Stack direction={"row"} spacing={1}>
                      <CalenderIcon />
                      <Typography variant="body1">{row.date}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell id="Branches">
                    <Typography variant="body1" textAlign={"center"}>
                      {row.branches}
                    </Typography>
                  </TableCell>
                  <TableCell id="Orders">
                    <Typography variant="body1" textAlign={"center"}>
                      {row.orders}
                    </Typography>
                  </TableCell>
                  <TableCell id="Details">
                    <Stack
                      direction="row"
                      spacing={2}
                      justifyContent={"center"}
                    >
                      <Stack
                        className="payout_summary_details_card"
                        justifyContent={"space-between"}
                      >
                        <Typography variant="body1" className="heading">
                          £{row.payout}
                        </Typography>
                        <Stack direction={"row"} spacing={0.5}>
                          <PayoutIcon IconColor="#8F98A8" />
                          <Typography>Payouts</Typography>
                        </Stack>
                      </Stack>
                      <Stack
                        className="payout_summary_details_card"
                        justifyContent={"space-between"}
                      >
                        <Typography variant="body1" className="heading">
                          £ {row.revenue}
                        </Typography>
                        <Stack direction={"row"} spacing={0.5}>
                          <PayInicon IconColor="#8F98A8" />
                          <Typography>Revenues</Typography>
                        </Stack>
                      </Stack>
                      <Stack
                        className="payout_summary_details_card"
                        justifyContent={"space-between"}
                      >
                        <Typography variant="body1" className="heading">
                          £{row.commission}
                        </Typography>
                        <Stack direction={"row"} spacing={0.5}>
                          <CommisionIcon
                            IconHeight="20"
                            IconWidth="20"
                            IconColor="#8F98A8"
                          />
                          <Typography>Commission</Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </TableCell>
                  <TableCell id="Status">
                    {row.status === "Paid" ? (
                      <Chip
                        label={row.status + " : " + row.dueDate}
                        icon={<TickIcon IconColor={primaryColors.deepGreen} />}
                        color="success"
                        variant="filled"
                        className="paid"
                      />
                    ) : (
                      <Chip
                        label={row.status + " : Due " + row.dueDate}
                        icon={<AccessTimeOutlinedIcon />}
                        color="warning"
                        variant="filled"
                        className="pending"
                      />
                    )}
                  </TableCell>
                  <TableCell id="Action">
                    <CustomButtonPrimary
                      endIcon={<ArrowForwardIcon />}
                      variant="contained"
                      color="primary"
                      buttonType="small"
                      onClick={() =>
                        navigate("/dashboard/reports/payout-overview")
                      }
                    >
                      <Typography variant="body1">View</Typography>
                    </CustomButtonPrimary>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </HomeTableWrapper>
    </PayoutSummaryWrapper>
  );
};

export default PayoutSummary;
