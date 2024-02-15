import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import {
  Box,
  IconButton,
  List,
  ListItem,
  MenuItem,
  Stack,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import Wrapper from "Layout/Wrapper/Wrapper";
import CommonTable from "components/CommonTable/CommonTable";
import OrderDetailPendingHeader from "components/OrderDetailPendingHeader/OrderDetailPendingHeader";
import OrderPendingToken from "components/OrderPendingToken/OrderPendingToken";
import PendingTokenDetails from "components/PendingTokenDetails/PendingTokenDetails";
import { RowSumCalculate } from "components/RowSumCalculate/RowSumCalculate";

import assest from "json/assest";
import {
  OrderDetailPendingrows,
  modallist,
  schedulelist
} from "json/mock/OrderDetailAccepted.mock";
import React, { useState } from "react";
import { OrderDetailPendingWrapper } from "styles/StyledComponents/OrderDetailPendingWrapper";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import Datepickersection from "ui/Datepicker/Datepickersection";
import CustomSelect from "ui/Filter/CustomSelect";
import DownIcon from "ui/Icons/DownIcon";
import DropDownIcon from "ui/Icons/DropDownIcon";
import ImportIcon from "ui/Icons/ImportIcon";
import Modalsection from "ui/Modal/Modalsection";

function OrderDetailPending() {
  const [change, setchange] = React.useState(false);
  const handleopen = () => setchange(true);
  const handelclose = () => setchange(false);

  const [closechange, setclosechange] = React.useState(false);
  const handelchange = () => setclosechange(true);
  const handelchangeclose = () => setclosechange(false);

  const [value, setvalue] = useState<string>("");

  const handleChange = (event: SelectChangeEvent | any) => {
    setvalue(event.target.value);
    setmatchValue(event.target.value as string);
  };
  console.log(value, "value");

  const [matchValue, setmatchValue] = useState("");
  console.log(matchValue, "matchValue");

  const valueChange = (event: SelectChangeEvent | any) => {
    setmatchValue(event.target.value as string);
  };

  return (
    <OrderDetailPendingWrapper>
      <Wrapper>
        <OrderDetailPendingHeader>
          <Box className="orderdetailpendingbox">
            <List>
              <ListItem>
                <Box className="pendingstatusHeaderWrapper ">
                  <i>
                    <img src={assest.receivedIcon} alt="statusicon" />
                  </i>
                  <Typography variant="body1">
                    Received at 23/07/2023, 02.00 PM
                  </Typography>
                </Box>
              </ListItem>
              <ListItem className="blankspan">
                <Typography
                  variant="caption"
                  className="empty_span"
                ></Typography>
                <Typography variant="caption" className="arrw_dwn_icon">
                  <DownIcon />
                </Typography>
              </ListItem>
              <ListItem className="activeStatus">
                <Box className="pendingstatusHeaderWrapper ">
                  <i>
                    <img src={assest.brownclock} alt="statusicon" />
                  </i>
                  <Typography variant="body1">
                    Pending : Pharmacy Action
                  </Typography>
                </Box>
              </ListItem>
              <ListItem className="blankspan">
                <Typography
                  variant="caption"
                  className="empty_span"
                ></Typography>
                <Typography variant="caption" className="arrw_dwn_icon">
                  <DownIcon />
                </Typography>
              </ListItem>
              <ListItem>
                <Box className="pendingstatusHeaderWrapper ">
                  <i>
                    <img src={assest.lock} alt="statusicon" />
                  </i>
                  <Typography variant="body1">Set the order status</Typography>
                </Box>
              </ListItem>
            </List>
          </Box>
        </OrderDetailPendingHeader>

        <Box className="body_layout">
          <PendingTokenDetails
            pendingtokenid={"SRXBFA46F2A1EE9"}
            warnningTimericon={assest.infocircleDanger}
            timertime={"Expires in 17h 12m 3s"}
            warningtimerbox={false}
          >
            <List>
              <ListItem>
                <Box className="transpernetbtn">
                  <CustomButtonPrimary
                    variant={"outlined"}
                    color="info"
                    endIcon={<ImportIcon />}
                  >
                    <Typography variant="body1">Dispensing Token</Typography>
                  </CustomButtonPrimary>
                </Box>
              </ListItem>
              <ListItem>
                <CustomButtonPrimary
                  onClick={() => handleopen()}
                  variant={"contained"}
                  color={"secondary"}
                  endIcon={<CloseIcon />}
                >
                  <Typography variant="body1">Reject</Typography>
                </CustomButtonPrimary>
              </ListItem>
              <ListItem>
                <CustomButtonPrimary
                  onClick={() => handelchange()}
                  variant={"contained"}
                  color="success"
                  endIcon={<DoneIcon />}
                >
                  <Typography variant="body1">Collect </Typography>
                </CustomButtonPrimary>
              </ListItem>
            </List>
          </PendingTokenDetails>
          <OrderPendingToken
            orderedPersonName={"Reece Samani"}
            orderText={"Do not charge on collection."}
            paymentStatus={"Pre-Authorised Payment"}
            paymentstatusicon={`${assest.greencheck}`}
            personMail={"Reece.patient@gmail.com"}
            personconatact={"07939665777"}
          />

          <Box className="tablesectionBox">
            <CommonTable>
              <TableHead>
                <TableRow>
                  <TableCell align="left">
                    <Typography variant="body1">Medicine Name</Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="body1">Dosages</Typography>
                  </TableCell>
                  <TableCell align="left" sx={{ width: 430 }}>
                    <Typography variant="body1">Notes</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body1">Qty</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body1">Price</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body1">Total</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {OrderDetailPendingrows.map((row) => (
                  <TableRow key={row.medicineName}>
                    <TableCell align="left" scope="row">
                      <Typography variant="body1">
                        {row.medicineName}
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="body1">{row.dosages}</Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="body1">{row.notes}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="body1">{row.qty}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="body1">{row.price}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="body1">
                        <Typography variant="caption" className="priceicon">
                          £
                        </Typography>
                        {row.total}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </CommonTable>
            <Box className="tablesectionTotalPrice">
              <Typography variant="body1">
                Order Totals
                <Typography variant="caption">
                  £{RowSumCalculate(OrderDetailPendingrows)}
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Wrapper>

      <Modalsection
        open={change}
        onClose={handelclose}
        className={"collectbtn"}
      >
        <figure>
          <img src={assest.cancelorder} alt="img" />
        </figure>
        <Typography variant="h4">Cancel Order</Typography>
        <Typography variant="body1">
          Let your patient know why you're rejecting their order to put them at
          ease.
        </Typography>

        <Box className="selectsection">
          <CustomSelect
            IconComponent={(props) => {
              return (
                <IconButton {...props}>
                  <DropDownIcon />
                </IconButton>
              );
            }}
            className="form_select"
            defaultValue=""
            displayEmpty
            onChange={valueChange}
          >
            <MenuItem value="" sx={{ display: "none" }}>
              Select Reason
            </MenuItem>
            {schedulelist.map((item, index) => (
              <MenuItem
                key={item?.schedulelistValue}
                value={item?.schedulelistValue}
                className="menu_item"
              >
                {item?.schedulelistname}
              </MenuItem>
            ))}
          </CustomSelect>
        </Box>

        <Stack
          direction="row"
          alignItems="center"
          flexWrap="wrap"
          className="modalbtnWrapper"
        >
          <Box className="each_btn">
            <CustomButtonPrimary
              variant="outlined"
              color="info"
              onClick={() => {
                handelclose();
                setmatchValue("");
              }}
            >
              <Typography variant="body1">Cancel</Typography>
            </CustomButtonPrimary>
          </Box>

          <Box className="each_btn">
            <CustomButtonPrimary
              variant="contained"
              color={matchValue ? "secondary" : "primary"}
              disabled={!matchValue && true}
              onClick={() => {
                handelclose();
                setmatchValue("");
              }}
            >
              <Typography variant="body1">Cancel Order</Typography>
            </CustomButtonPrimary>
          </Box>
        </Stack>
      </Modalsection>

      <Modalsection
        open={closechange}
        onClose={handelchangeclose}
        className={"collectbtn"}
      >
        <figure>
          <img src={assest.acceptorder} alt="img" />
        </figure>
        <Typography variant="h4">Accept Order</Typography>
        <Typography variant="body1">
          Let your patient know why you're rejecting their order to put them at
          ease.
        </Typography>

        <Box className="selectsection">
          <CustomSelect
            IconComponent={(props) => {
              return (
                <IconButton {...props}>
                  <DropDownIcon />
                </IconButton>
              );
            }}
            className="form_select"
            defaultValue=""
            displayEmpty
            onChange={handleChange}
          >
            <MenuItem value="">Select Schedule</MenuItem>
            {modallist.map((item, index) => (
              <MenuItem
                key={item?.itemValue}
                value={item?.itemValue}
                className="menu_item"
              >
                {item?.name}
              </MenuItem>
            ))}
          </CustomSelect>

          {matchValue === "Custom Schedule" && (
            <Datepickersection label="Select Date And Month" typeThree />
          )}
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          flexWrap="wrap"
          className="modalbtnWrapper"
        >
          <Box className="each_btn">
            <CustomButtonPrimary
              variant="outlined"
              color="info"
              onClick={() => {
                handelchangeclose();
                setmatchValue("");
              }}
            >
              <Typography variant="body1">Cancel</Typography>
            </CustomButtonPrimary>
          </Box>

          <Box className="each_btn">
            <CustomButtonPrimary
              variant="contained"
              color={matchValue ? "primary" : "secondary"}
              disabled={!matchValue && true}
              onClick={() => {
                handelchangeclose();
                setmatchValue("");
              }}
            >
              <Typography variant="body1">Save Schedule</Typography>
            </CustomButtonPrimary>
          </Box>
        </Stack>
      </Modalsection>
    </OrderDetailPendingWrapper>
  );
}

export default OrderDetailPending;
