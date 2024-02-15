import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Collapse,
  Menu,
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
import React, { useState } from "react";
import { HomeTableWrapper } from "styles/StyledComponents/HomeTableWrapper";
import { PayoutTableWrapper } from "styles/StyledComponents/PayoutTableWrapper";
import { PharmacyOrder } from "typescript/interface/payout_overview.interface";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import CalenderIcon from "ui/Icons/CalenderIcon";
import CommisionIcon from "ui/Icons/CommisionIcon";
import CrossIcon from "ui/Icons/CrossIcon";
import LocationIcon from "ui/Icons/LocationIcon";
import PayoutIcon from "ui/Icons/PayoutIcon";

const InnerTable = ({
  branches,
  commission,
  medicines,
  order_date,
  order_id,
  payouts
}: PharmacyOrder) => {
  const [showTable, setshowTable] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell colSpan={6} sx={{ padding: "0 !important" }}>
        <Table className="collapse_table">
          <TableRow className="each_row">
            <TableCell id="order_id" className="order_id">
              <Stack spacing={1}>
                <Typography variant="body1">{order_id}</Typography>
                <Stack direction={"row"} alignItems={"center"}>
                  <CalenderIcon IconColor={primaryColors.textDisabled} />
                  <Typography variant="caption">{order_date}</Typography>
                </Stack>
              </Stack>
            </TableCell>
            <TableCell id="branches" className="branches">
              <Stack spacing={1}>
                <Typography variant="body1">{branches?.name}</Typography>
                <Stack direction={"row"} alignItems={"center"}>
                  <LocationIcon IconColor={primaryColors.textDisabled} />
                  <Typography variant="caption">{branches?.address}</Typography>
                </Stack>
              </Stack>
            </TableCell>
            <TableCell id="payouts" className="payouts">
              <Stack
                className="payout_summary_details_card"
                justifyContent={"space-between"}
                direction={"row"}
                alignItems={"center"}
              >
                <Typography variant="body1" className="heading">
                  {payouts}
                </Typography>
                <PayoutIcon
                  IconHeight="20"
                  IconWidth="20"
                  IconColor="#8F98A8"
                />
              </Stack>
            </TableCell>
            <TableCell id="commision" className="commision">
              <Stack
                className="payout_summary_details_card"
                justifyContent={"space-between"}
                direction={"row"}
                alignItems={"center"}
              >
                <Typography variant="body1" className="heading">
                  {commission}
                </Typography>
                <CommisionIcon
                  IconHeight="20"
                  IconWidth="20"
                  IconColor="#8F98A8"
                />
              </Stack>
            </TableCell>
            <TableCell id="medicines">
              <Box className="medicine_wrapper">
                {" "}
                {medicines?.map((med, index) => {
                  return (
                    <Box
                      className="medicinedetails_wrapper"
                      sx={{
                        display:
                          index >= 1 ? "none !important" : "table !important"
                      }}
                    >
                      <Box className="medicine_details">
                        <Typography variant="caption">{med.number}</Typography>{" "}
                        <span className="icon_wrap">
                          {" "}
                          <CloseIcon fontSize="small" />
                        </span>{" "}
                        <Typography variant="caption">
                          {med.medicine_name}
                        </Typography>
                      </Box>
                      <Box className="empty_span">
                        <Typography variant="caption"></Typography>
                      </Box>

                      <Box className="price">
                        <Typography variant="body1">
                          {med.total_price}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
                <Box
                  className="medicine_details medicine_details_extra"
                  sx={{
                    display: "table !important"
                  }}
                >
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    className="hover_para"
                  >
                    {medicines?.length! - 1} More items...
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button"
                    }}
                    className="medicine_menu"
                  >
                    {medicines?.map((med, index) => {
                      return (
                        <MenuItem onClick={handleClose} key={index}>
                          <Box className="medicinedetails_wrapper">
                            <Box className="medicine_details">
                              <Typography variant="caption">
                                {med.number}
                              </Typography>{" "}
                              <span className="icon_wrap">
                                {" "}
                                <CloseIcon fontSize="small" />
                              </span>{" "}
                              <Typography variant="caption">
                                {med.medicine_name}
                              </Typography>
                            </Box>

                            <Box className="price">
                              <Typography variant="body1">
                                {med.total_price}
                              </Typography>
                            </Box>
                          </Box>
                        </MenuItem>
                      );
                    })}
                  </Menu>
                  <Box className="empty_span">
                    <Typography variant="caption"></Typography>
                  </Box>
                  <Box className="price">
                    <Typography variant="body1">Total £10</Typography>
                  </Box>
                </Box>
              </Box>
            </TableCell>
            <TableCell id="Action">
              <CustomButtonPrimary
                endIcon={showTable ? <CrossIcon /> : <ArrowForwardIcon />}
                variant={showTable ? "outlined" : "contained"}
                color={showTable ? "info" : "primary"}
                buttonType="small"
                onClick={() => setshowTable((prev) => !prev)}
                sx={{ margin: "auto" }}
              >
                <Typography variant="body1">
                  {showTable ? "Close" : "View"}
                </Typography>
              </CustomButtonPrimary>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              className={showTable ? "hideTable" : "hideTable_close"}
              colSpan={6}
            >
              <Collapse in={showTable}>
                <Table
                  sx={{ minWidth: "100%" }}
                  aria-label="simple table"
                  className=""
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>No.</TableCell>
                      <TableCell align="right">Medicine Name</TableCell>
                      <TableCell align="right" className="qty">
                        Qty
                      </TableCell>
                      <TableCell align="right" className="med_price">
                        Price
                      </TableCell>
                      <TableCell align="right" className="med_total">
                        Total
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {medicines?.map((med, index) => (
                      <TableRow
                        key={med.number}
                        sx={{
                          "&:last-child td, &:last-child th": {
                            border: 0
                          }
                        }}
                      >
                        <TableCell scope="row">{index + 1}.</TableCell>
                        <TableCell scope="row">{med.medicine_name}</TableCell>
                        <TableCell scope="row" className="qty">
                          {med.qty}
                        </TableCell>
                        <TableCell scope="row" className="med_price">
                          {med.price}
                        </TableCell>
                        <TableCell scope="row" className="med_total">
                          {med.total_price}
                        </TableCell>
                      </TableRow>
                    ))}

                    <TableRow className="total_amount_row">
                      <TableCell colSpan={3}></TableCell>
                      <TableCell className="total_amount">
                        <Typography variant="body1">Total :</Typography>
                      </TableCell>
                      <TableCell className="total_amount">
                        <Typography variant="h4">£40</Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Collapse>
            </TableCell>
          </TableRow>
        </Table>
      </TableCell>
    </TableRow>
  );
};
const PayoutOverviewTable = () => {
  const tableData = [
    {
      order_id: "SRXBFA46F2A1EE9",
      order_date: "23/07/2023, 02.00 PM",
      branches: {
        name: "Signature Pharmacy",
        address: "6 The Marlins, Northwood, HA6 3NP"
      },
      payouts: "£50",
      commission: "£10",
      medicines: [
        {
          number: 200,
          medicine_name: "Amoxicillin 500mg capsules",
          price: "£1",
          total_price: "£10",
          qty: 1
        },
        {
          number: 200,
          medicine_name: "Prednisolone 5mg Tablets",
          price: "£1",
          total_price: "£10",
          qty: 1
        },
        {
          number: 200,
          medicine_name: "Prednisolone 5mg Tablets",
          price: "£1",
          total_price: "£10",
          qty: 1
        },
        {
          number: 200,
          medicine_name: "Prednisolone 5mg Tablets",
          price: "£1",
          total_price: "£10",
          qty: 1
        },
        {
          number: 200,
          medicine_name: "Prednisolone 5mg Tablets",
          price: "£1",
          total_price: "£10",
          qty: 1
        },
        {
          number: 200,
          medicine_name: "Amoxicillin 500mg capsules",
          price: "£1",
          total_price: "£10",
          qty: 1
        }
      ]
    },
    {
      order_id: "SRXBFA46F2A1EE9",
      order_date: "23/07/2023, 02.00 PM",
      branches: {
        name: "Signature Pharmacy",
        address: "6 The Marlins, Northwood, HA6 3NP"
      },
      payouts: "£50",
      commission: "£10",
      medicines: [
        {
          number: 200,
          medicine_name: "Amoxicillin 500mg capsules",
          price: "£1",
          total_price: "£10",
          qty: 1
        },
        {
          number: 200,
          medicine_name: "Prednisolone 5mg Tablets",
          price: "£1",
          total_price: "£10",
          qty: 1
        },
        {
          number: 200,
          medicine_name: "Prednisolone 5mg Tablets",
          price: "£1",
          total_price: "£10",
          qty: 1
        },
        {
          number: 200,
          medicine_name: "Amoxicillin 500mg capsules",
          price: "£1",
          total_price: "£10",
          qty: 1
        }
      ]
    },
    {
      order_id: "SRXBFA46F2A1EE9",
      order_date: "23/07/2023, 02.00 PM",
      branches: {
        name: "Signature Pharmacy",
        address: "6 The Marlins, Northwood, HA6 3NP"
      },
      payouts: "£50",
      commission: "£10",
      medicines: [
        {
          number: 200,
          medicine_name: "Amoxicillin 500mg capsules",
          price: "£1",
          total_price: "£10",
          qty: 1
        },
        {
          number: 200,
          medicine_name: "Prednisolone 5mg Tablets",
          price: "£1",
          total_price: "£10",
          qty: 1
        },
        {
          number: 200,
          medicine_name: "Prednisolone 5mg Tablets",
          price: "£1",
          total_price: "£10",
          qty: 1
        },
        {
          number: 200,
          medicine_name: "Amoxicillin 500mg capsules",
          price: "£1",
          total_price: "£10",
          qty: 1
        }
      ]
    }
  ];

  return (
    <HomeTableWrapper>
      <PayoutTableWrapper>
        <TableContainer>
          <Table
            sx={{
              minWidth: "100%"
            }}
            aria-label="simple table"
          >
            <TableHead className="mainTable_header">
              <TableRow>
                <TableCell className="order_id_th">Orders ID</TableCell>
                <TableCell className="branch_th">Branches</TableCell>
                <TableCell className="payout_th">Payouts</TableCell>
                <TableCell className="commision_th">Commission</TableCell>
                <TableCell className="medicine_th">Medicines</TableCell>
                <TableCell className="action_th">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <InnerTable {...row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </PayoutTableWrapper>
    </HomeTableWrapper>
  );
};

export default PayoutOverviewTable;
