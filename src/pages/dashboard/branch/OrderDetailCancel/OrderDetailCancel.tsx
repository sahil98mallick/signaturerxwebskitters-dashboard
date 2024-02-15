import {
  Box,
  Button,
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
import { RowSumCalculate } from "components/RowSumCalculate/RowSumCalculate";
import assest from "json/assest";
import { OrderDetailCancelRows } from "json/mock/OrderDetailAccepted.mock";

import { OrderDetailCancelWrapper } from "styles/StyledComponents/OrderDetailCancelWrapper";
import DownIcon from "ui/Icons/DownIcon";

function OrderDetailCancel() {
  return (
    <OrderDetailCancelWrapper>
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
              <ListItem className="blankspanCancel">
                <Typography
                  variant="caption"
                  className="empty_span"
                ></Typography>
                <Typography variant="caption" className="arrw_dwn_icon">
                  <DownIcon />
                </Typography>
              </ListItem>

              <ListItem className="">
                <Box className="pendingstatusHeaderWrapper activeStatusCancel">
                  <i>
                    <img src={assest.crossRed} alt="statusicon" />
                  </i>
                  <Typography variant="body1">
                    Canceled at 23/07/2023, 05.30
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </Box>
        </OrderDetailPendingHeader>
        <Box className="body_layout">
          <Box className="pendingtokenSectionBox">
            <Box className="pendingtokenid">
              <Typography variant="h3">SRXBFA46F2A1EE9</Typography>
              <Button>
                <img src={assest.copy} alt="copy" />
              </Button>
            </Box>

            <Box className="warningTimer">
              <Box className="warningTimerWrapper">
                <i>
                  <img src={assest.info_grey} alt="timericon" />
                </i>
                <Typography variant="body1">
                  Reason : There is a price discrepancy 
                </Typography>
              </Box>
            </Box>
          </Box>
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
                {OrderDetailCancelRows.map((row) => (
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
                  £{RowSumCalculate(OrderDetailCancelRows)}
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Wrapper>
    </OrderDetailCancelWrapper>
  );
}

export default OrderDetailCancel;
