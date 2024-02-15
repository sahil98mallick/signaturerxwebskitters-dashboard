/* eslint-disable no-lone-blocks */
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import {
    Box,
    Divider,
    List,
    ListItem,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import Wrapper from "Layout/Wrapper/Wrapper";
import { Orderdetailsoverview } from "api/functions/order.api";
import CommonTable from "components/CommonTable/CommonTable";
import OrderDetailPendingHeader from "components/OrderDetailPendingHeader/OrderDetailPendingHeader";
import OrderPendingToken from "components/OrderPendingToken/OrderPendingToken";
import PendingTokenDetails from "components/PendingTokenDetails/PendingTokenDetails";
import { RowSumCalculate } from "components/RowSumCalculate/RowSumCalculate";
import assest from "json/assest";
import { OrderDetailAcceptedRows } from "json/mock/OrderDetailAccepted.mock";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { OrderDetailAcceptedWrapper } from "styles/StyledComponents/OrderDetailAcceptedWrapper";
import { OrderdetailsViewWrapper } from "styles/StyledComponents/OrderdetailsViewWrapper";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import DownIcon from "ui/Icons/DownIcon";
import ImportIcon from "ui/Icons/ImportIcon";

function OrderDetailsOverview() {
    const { orderid } = useParams()
    console.log("orderid", orderid);
    const { data: orderdetailsoverview, isLoading: orderdetailsoverviewloading } = useQuery({
        queryKey: ["orderdetailsoverview", { orderid }],
        queryFn: () => Orderdetailsoverview(Number(orderid), "pharmacy"),
        enabled: !!orderid
    })

    console.log("Order Details Overview:-", orderdetailsoverview);
    return (
        <OrderdetailsViewWrapper>
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
                                        Received at {orderdetailsoverview?.orderInitiatedAt}
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
                                        Accepted at {orderdetailsoverview?.orderAcceptedAt}
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
                        pendingtokenid={orderdetailsoverview?.prescriptionId}
                        warnningTimericon={assest.clock_gray}
                        timertime={`Collection schedule: ${orderdetailsoverview?.orderDeliveryScheduleDate || "NA"}`}
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
                        orderedPersonName={orderdetailsoverview?.user?.name}
                        orderText={"Do not charge on collection."}
                        paymentStatus={"Pre-Authorised Payment"}
                        paymentstatusicon={`${assest.greencheck}`}
                        personMail={orderdetailsoverview?.user?.email}
                        personconatact={orderdetailsoverview?.user?.userProfile?.phone}
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
                                {orderdetailsoverview?.orderDetail.map((row: any) => (
                                    <TableRow key={row.medicineName}>
                                        <TableCell align="left" scope="row">
                                            <Typography variant="body1">
                                                {row.medicineName}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Typography variant="body1">{row.dosage}</Typography>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Typography variant="body1">NA</Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant="body1">{row.quantity}</Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant="body1">{row.price}</Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant="body1">
                                                <Typography variant="caption" className="priceicon">
                                                    £ {row.totalAmount}
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
                                Small order fee:
                                <Typography variant="caption">
                                    £{orderdetailsoverview?.smallOrderFee}
                                </Typography>
                            </Typography>
                            <Divider />
                            <Typography variant="body1">
                                Order Totals
                                <Typography variant="caption">
                                    £{orderdetailsoverview?.netBillAmount}
                                </Typography>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Wrapper>
        </OrderdetailsViewWrapper>
    );
}

export default OrderDetailsOverview;

