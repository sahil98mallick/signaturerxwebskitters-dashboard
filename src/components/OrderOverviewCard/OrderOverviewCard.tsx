import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  TableFooter,
  Typography
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PaginationSection from "components/Pagination/Pagination";
import dayjs from "dayjs";
import assest from "json/assest";
import * as React from "react";
import { Link } from "react-router-dom";
import { TableWrapper } from "styles/StyledComponents/OrderOverViewCardWrapper";

import { Orderoverviewcardinterface } from "typescript/interface/orderoverviewcard.interface";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
type Props = {
  orderoverdata: Orderoverviewcardinterface
}

const OrderOverviewCard = ({ orderoverdata }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log("Orderviewdata by Status:-", orderoverdata?.data?.docs);


  const dateformat = "YYYY-MM-DD, HH:mm:ss"
  return (
    <>
      {
        orderoverdata?.data?.docs?.length > 0 ? (
          <>
            {
              orderoverdata?.data?.docs?.map((item, key) => {
                return (
                  <>
                    <TableWrapper>
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell>Prescription ID</TableCell>
                              <TableCell align="left">Patient Detail</TableCell>
                              <TableCell align="left">Medicine Detail</TableCell>
                              <TableCell align="center">Total</TableCell>
                              <TableCell align="center">Actions</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow
                              key={key}
                              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                              <TableCell scope="row">
                                <Box className="prescription">
                                  <Typography variant="h6">
                                    {item?.prescriptionId}
                                  </Typography>
                                  <Box className="date_box">
                                    <img src={assest.calender} alt="" />
                                    <Typography variant="body1">
                                      {dayjs(item?.orderInitiatedAt).format(dateformat)}
                                    </Typography>
                                  </Box>
                                </Box>
                              </TableCell>
                              <TableCell align="left">
                                <Box className="patient_details">
                                  <Typography variant="body1">
                                    {item?.user?.name}
                                  </Typography>
                                  <Box className="call_box">
                                    <img src={assest.mail} alt="" />

                                    <Link to="/">{item?.user?.email} </Link>
                                  </Box>
                                </Box>
                              </TableCell>
                              <TableCell align="left">
                                {/* Order Details */}
                                {
                                  item?.orderDetail?.slice(0, 2)?.map((orders, orderkey) => {
                                    return (
                                      <>
                                        <Box
                                          className="medicine_details"
                                          sx={{
                                            display:
                                              "flex !important"
                                          }}
                                          key={orderkey}
                                        >
                                          <Typography variant="caption">
                                            {orders.quantity}
                                          </Typography>{" "}
                                          <span className="icon_wrap">
                                            {" "}
                                            <CloseIcon fontSize="small" />
                                          </span>{" "}
                                          <Typography variant="caption">
                                            {orders?.medicineName?.slice(0, 40)}...
                                          </Typography>
                                        </Box>
                                      </>
                                    )
                                  })
                                }
                                {
                                  item?.orderDetail?.slice(2).map((item, key) => {
                                    return (
                                      <>
                                        <Box className="medicine_details medicine_details_extra">
                                          <Button
                                            type="button"
                                            id="basic-button"
                                            aria-controls={open ? "basic-menu" : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? "true" : undefined}
                                            onClick={handleClick}
                                          >
                                            More items...
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
                                            <MenuItem onClick={handleClose}>
                                              <Box className="medicine_details">
                                                <Typography variant="caption">
                                                  {item?.quantity}
                                                </Typography>{" "}
                                                <span className="icon_wrap">
                                                  {" "}
                                                  <CloseIcon fontSize="small" />
                                                </span>{" "}
                                                <Typography variant="caption">
                                                  {item?.medicineName}
                                                </Typography>
                                              </Box>
                                            </MenuItem>
                                          </Menu>
                                        </Box>
                                      </>
                                    )
                                  })
                                }
                              </TableCell>
                              <TableCell align="left">
                                <Box className="total">
                                  <Typography variant="body1">£{item?.paidAmount}</Typography>
                                  <Box className="paid">
                                    {" "}
                                    <img src={assest.tickIconCyan} alt="" />
                                    <Typography variant="body1">
                                      {"58456545" && "Orders Paid"}
                                    </Typography>
                                  </Box>
                                  <Box></Box>
                                </Box>
                              </TableCell>
                              <TableCell align="right">
                                <Box className="action_button">
                                  <CustomButtonPrimary
                                    variant="contained"
                                    color="primary"
                                    buttonType="small"
                                    endIcon={<ArrowForwardIcon />}
                                  >
                                    <Typography variant="body1">View</Typography>
                                  </CustomButtonPrimary>
                                </Box>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                          <TableFooter>
                            {/* rejected */}
                            {/* pending */}
                            {/* collected */}
                            <TableRow>
                              <TableCell>
                                {
                                  item?.orderStatus === "pending" ? (
                                    <>
                                      <Box className="pending">
                                        <img src={assest.clockMaroon} alt="" />
                                        <Typography variant="body1">
                                          Pending: {item?.orderStatus}
                                        </Typography>
                                      </Box>
                                    </>
                                  ) : null
                                }
                                {
                                  item?.orderStatus === "collected" ? (
                                    <>
                                      <Box className="collected">
                                        <img src={assest.clockMaroon} alt="" />
                                        <Typography variant="body1">
                                          Collected: {item?.orderStatus}
                                        </Typography>
                                      </Box>
                                    </>
                                  ) : null
                                }
                                {
                                  item?.orderStatus === "rejected" ? (
                                    <>
                                      <Box className="rejected">
                                        <img src={assest.clockMaroon} alt="" />
                                        <Typography variant="body1">
                                          Rejected: {item?.orderStatus}
                                        </Typography>
                                      </Box>
                                    </>
                                  ) : null
                                }

                              </TableCell>

                              <TableCell>
                                {
                                  item?.orderStatus === "pending" ? (
                                    <>
                                      <Box className="expire">
                                        <img src={assest.infoCircleRed} alt="" />
                                        <Typography variant="body1">
                                          Pending: Pharmacy action
                                        </Typography>
                                      </Box>
                                    </>
                                  ) : null
                                }
                                {
                                  item?.orderStatus === "collected" ? (
                                    <>
                                      <Box className="collected_date">
                                        <img src={assest.infoCircleRed} alt="" />
                                        <Typography variant="body1">
                                          Collected at: {dayjs(item?.orderCollectedAt).format(dateformat)}
                                        </Typography>
                                      </Box>
                                    </>
                                  ) : null
                                }
                                {
                                  item?.orderStatus === "rejected" ? (
                                    <>
                                      <Box className="rejected_date">
                                        <img src={assest.infoCircleRed} alt="" />
                                        <Typography variant="body1">
                                          Rejected at: {dayjs(item?.orderRejectedAt).format(dateformat)}
                                        </Typography>
                                      </Box>
                                    </>
                                  ) : null
                                }
                              </TableCell>
                              <TableCell colSpan={3} align="right">
                                <Box className="tableFooter_right">
                                  {
                                    item?.orderStatus === "rejected" ? (
                                      <>
                                        <Box className="rejected">
                                          <img src={assest.clockMaroon} alt="" />
                                          <Typography variant="body1">
                                            {item?.orderRejectReason}
                                          </Typography>
                                        </Box>
                                      </>
                                    ) : null
                                  }
                                </Box>
                              </TableCell>
                            </TableRow>
                          </TableFooter>
                        </Table>
                      </TableContainer>
                    </TableWrapper>
                  </>
                )
              })
            }

            <PaginationSection />
          </>
        ) : (
          <>
            <Typography variant="h1">
              No data Found Yet. 🫣
            </Typography>
          </>
        )
      }
    </>

  );
};

export default OrderOverviewCard;
