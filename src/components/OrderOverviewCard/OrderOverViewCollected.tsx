import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
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
import assest from "json/assest";
import * as React from "react";
import { Link } from "react-router-dom";
import { TableWrapper } from "styles/StyledComponents/OrderOverViewCardWrapper";

import { primaryColors } from "Theme/_muiPalette";
import { CollectedPrescriptionData } from "typescript/interface/order_overview_table.interface";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import ClockIcon from "ui/Icons/ClockIcon";
import TickIcon from "ui/Icons/TickIcon";

const OrderOverviewCollectedCard = ({
  prescription_id,
  patient_details,
  medicine_details,
  total,
  collection_schedule_at,
  accepted_at
}: CollectedPrescriptionData) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
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
              key={prescription_id?.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell scope="row">
                <Box className="prescription">
                  <Typography variant="h6">{prescription_id?.id}</Typography>
                  <Box className="date_box">
                    <img src={assest.calender} alt="" />
                    <Typography variant="body1">
                      {prescription_id?.date}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell align="left">
                <Box className="patient_details">
                  <Typography variant="body1">
                    {patient_details?.name}
                  </Typography>
                  <Box className="call_box">
                    <img src={assest.callIcon} alt="" />

                    <Link to="/">{patient_details?.conatct} </Link>
                  </Box>
                </Box>
              </TableCell>
              <TableCell align="left">
                {medicine_details?.map((med, index) => {
                  return (
                    <>
                      <Box
                        className="medicine_details"
                        sx={{
                          display:
                            index > 1 ? "none !important" : "flex !important"
                        }}
                      >
                        <Typography variant="caption">{med.number}</Typography>{" "}
                        <span className="icon_wrap">
                          {" "}
                          <CloseIcon fontSize="small" />
                        </span>{" "}
                        <Typography variant="caption">
                          {med.medicine_name}
                        </Typography>
                      </Box>
                    </>
                  );
                })}
                <Box className="medicine_details medicine_details_extra">
                  <Button
                    type="button"
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    {medicine_details?.length! - 2} More items...
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
                    {medicine_details?.map((med, index) => {
                      return (
                        <MenuItem onClick={handleClose} key={index}>
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
                        </MenuItem>
                      );
                    })}
                  </Menu>
                </Box>
              </TableCell>
              <TableCell align="left">
                <Box className="total">
                  <Typography variant="body1">£{total?.amount}</Typography>
                  <Box className="paid">
                    {" "}
                    <img src={assest.tickIconCyan} alt="" />
                    <Typography variant="body1">
                      {total?.paid && "Orders Paid"}
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
            <TableRow>
              <TableCell>
                <Box className="collected">
                  <TickIcon IconColor={primaryColors.deepGreen} />
                  <Typography variant="body1">Order Collected</Typography>
                </Box>{" "}
              </TableCell>

              <TableCell>
                {" "}
                <Box className="accepted">
                  <ClockIcon IconColor={primaryColors.mainFontColor} />
                  <Typography variant="body1">
                    Accepted at {accepted_at}
                  </Typography>
                </Box>{" "}
              </TableCell>
              <TableCell colSpan={3} align="right">
                <Box className="tableFooter_right">
                  <Box className="collected_date">
                    <img src={assest.info_grey} alt="" />
                    <Typography variant="body1">
                      Collection Schedule at {collection_schedule_at}
                    </Typography>
                  </Box>{" "}
                </Box>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </TableWrapper>
  );
};

export default OrderOverviewCollectedCard;
