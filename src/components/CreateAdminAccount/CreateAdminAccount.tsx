import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";
import { rows_admin_mock } from "json/mock/createadmin.mock";
import React from "react";
import { CreateAdminAccountWrapper } from "styles/StyledComponents/CreateAdminAccountWrapper";
import InputFieldCommon from "ui/CommonInput/CommonInput";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import DeleteIcon from "ui/Icons/DeleteIcon";
import EditIcon from "ui/Icons/EditIcon";
import MailIcon from "ui/Icons/MailIcon";
import CreateAdminAddEditModal from "./CreateAdminAddEditModal";

export default function CreateAdminAccount() {
  const [open, setopen] = React.useState(false);
  const handelopen = () => setopen(true);
  const handelclose = () => setopen(false);

  return (
    <CreateAdminAccountWrapper>
      <Box className="cmn_block admin_acc_wrapper">
        <Box className="header_wrapper">
          <Box className="headerWrapper_left">
            <Typography variant="h3">Create Admin Account</Typography>
            <Typography variant="body1">
              You can manage your admin account here
            </Typography>
          </Box>
          <CustomButtonPrimary
            onClick={() => handelopen()}
            variant="contained"
            color="primary"
            endIcon={<AddIcon />}
          >
            <Typography variant="body1">Add Account</Typography>
          </CustomButtonPrimary>
          <CreateAdminAddEditModal open={open} onClose={handelclose} />
        </Box>
        <TableContainer>
          <Table sx={{ minWidth: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Account Credentials</TableCell>
                <TableCell align="left">Password</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows_admin_mock.map((row) => (
                <TableRow
                  key={row.pharmacy.pharmacy_name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell scope="row">
                    <Box className="pharmacy">
                      <Typography variant="body1">
                        {row.pharmacy.pharmacy_name}
                      </Typography>
                      <Box className="mail_box">
                        <MailIcon IconColor="#8F98A8" />
                        <Typography variant="body1">
                          {row.pharmacy.pharmacy_mail}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell align="left">
                    <InputFieldCommon
                      value={row.password}
                      placeholder="Enter Password"
                      isPassword
                      className="admin_input_field"
                    />
                  </TableCell>
                  <TableCell align="left">
                    <Box className="action_buttons">
                      <CustomButtonPrimary
                        variant="outlined"
                        color="info"
                        buttonType="small"
                        endIcon={<EditIcon />}
                      >
                        <Typography variant="body1">Edit</Typography>
                      </CustomButtonPrimary>
                      <CustomButtonPrimary
                        variant="contained"
                        color="secondary"
                        buttonType="small"
                        endIcon={<DeleteIcon IconColor={primaryColors.white} />}
                      >
                        <Typography variant="body1">Delete</Typography>
                      </CustomButtonPrimary>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </CreateAdminAccountWrapper>
  );
}
