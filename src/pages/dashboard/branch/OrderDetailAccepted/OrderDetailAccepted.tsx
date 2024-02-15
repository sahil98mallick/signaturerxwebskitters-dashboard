/* eslint-disable no-lone-blocks */
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import {
  Box,
  List,
  ListItem,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import Wrapper from "Layout/Wrapper/Wrapper";
import CommonTable from "components/CommonTable/CommonTable";
import OrderDetailPendingHeader from "components/OrderDetailPendingHeader/OrderDetailPendingHeader";
import OrderPendingToken from "components/OrderPendingToken/OrderPendingToken";
import PendingTokenDetails from "components/PendingTokenDetails/PendingTokenDetails";
import { RowSumCalculate } from "components/RowSumCalculate/RowSumCalculate";
import assest from "json/assest";
import { OrderDetailAcceptedRows } from "json/mock/OrderDetailAccepted.mock";
import { OrderDetailAcceptedWrapper } from "styles/StyledComponents/OrderDetailAcceptedWrapper";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import DownIcon from "ui/Icons/DownIcon";
import ImportIcon from "ui/Icons/ImportIcon";

function OrderDetailAccepted() {
  return (
    <OrderDetailAcceptedWrapper>
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
              <ListItem>
                <Box className="pendingstatusHeaderWrapper activeStatusAccept ">
                  <i>
                    <img src={assest.greencheck} alt="statusicon" />
                  </i>
                  <Typography variant="body1">
                    Accepted at 23/07/2023, 05.30
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
            warnningTimericon={assest.clock_gray}
            timertime={"Collection schedule : Tomorrow morning"}
            warningtimerbox={true}
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
                  variant={"contained"}
                  color={"secondary"}
                  endIcon={<CloseIcon />}
                >
                  <Typography variant="body1">Reject</Typography>
                </CustomButtonPrimary>
              </ListItem>
              <ListItem>
                <CustomButtonPrimary
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
                {OrderDetailAcceptedRows.map((row) => (
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
                  £{RowSumCalculate(OrderDetailAcceptedRows)}
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Wrapper>
    </OrderDetailAcceptedWrapper>
  );
}

export default OrderDetailAccepted;
