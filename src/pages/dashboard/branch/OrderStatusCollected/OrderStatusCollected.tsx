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
import { OrderStatusCollectedrows } from "json/mock/OrderDetailAccepted.mock";
import { OrderStatusCollectedWrapper } from "styles/StyledComponents/OrderStatusCollectedWrapper";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import DownIcon from "ui/Icons/DownIcon";
import ImportIcon from "ui/Icons/ImportIcon";
import EditStatus from "../../../../ui/Icons/ChangeStatusIcon";

function OrderStatusCollected() {
  return (
    <OrderStatusCollectedWrapper>
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
                <Box className="pendingstatusHeaderWrapper ">
                  <i>
                    <img src={assest.check_gray} alt="statusicon" />
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
                <Box className="pendingstatusHeaderWrapper activeStatuscollected">
                  <i>
                    <img src={assest.greencheck} alt="statusicon" />
                  </i>
                  <Typography variant="body1">
                    Collected at 23/07/2023, 05.30
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </Box>
        </OrderDetailPendingHeader>
        <Box className="body_layout">
          <Box className="pendingtokenSectionBox">
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
                    variant={"outlined"}
                    color="info"
                    endIcon={
                      <EditStatus
                        IconColor="#070707"
                        IconHeight="24"
                        IconWidth="24"
                      />
                    }
                  >
                    <Typography variant="body1">Change Status</Typography>
                  </CustomButtonPrimary>
                </ListItem>
              </List>
            </PendingTokenDetails>
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
                {OrderStatusCollectedrows.map((row) => (
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
                  £{RowSumCalculate(OrderStatusCollectedrows)}
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Wrapper>
    </OrderStatusCollectedWrapper>
  );
}

export default OrderStatusCollected;
