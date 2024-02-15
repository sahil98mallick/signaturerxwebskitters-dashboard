import {
  Box,
  Chip,
  Stack,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";

import Wrapper from "Layout/Wrapper/Wrapper";
import { primaryColors } from "Theme/_muiPalette";
import CommonTable from "components/CommonTable/CommonTable";

import { yupResolver } from "@hookform/resolvers/yup";
import { RowSumCalculate } from "components/RowSumCalculate/RowSumCalculate";
import assest from "json/assest";
import { OrderStatusCollectedrows } from "json/mock/OrderDetailAccepted.mock";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { OrderSummaryWrapper } from "styles/StyledComponents/OrderSummaryWrapper";
import InputFieldCommon from "ui/CommonInput/CommonInput";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import CalenderIcon from "ui/Icons/CalenderIcon";
import CallIcon from "ui/Icons/CallIcon";
import CopyIcon from "ui/Icons/CopyIcon";
import CreditCardIcon from "ui/Icons/CreditCardIcon";
import LocationIcon from "ui/Icons/LocationIcon";
import MailIcon from "ui/Icons/MailIcon";
import PharmacyIcon from "ui/Icons/PharmacyIcon";
import StethoscopeIcon from "ui/Icons/StethoscopeIcon";
import Modalsection from "ui/Modal/Modalsection";
import * as yup from "yup";

const OrderSummary = () => {
  const [open, setopen] = React.useState(false);
  const handelopen = () => setopen(true);
  const handelclose = () => setopen(false);

  const validation = {
    success: {},
    error: {
      account_no: "Field is required",
      expiration_date: "Field is required",
      cvc: "Field is required",
      card_holder_name: "Field is required"
    }
  };

  const schema = yup
    .object()
    .shape({
      account_no: yup
        .string()
        .max(12)
        .trim()
        .required(validation?.error?.account_no),
      expiration_date: yup
        .string()
        .trim()
        .required(validation.error.expiration_date),
      cvc: yup.string().max(3).trim().required(validation.error.cvc),
      card_holder_name: yup
        .string()
        .trim()
        .required(validation.error.card_holder_name)
    })
    .required();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const FormSubmit = (data: any) => {
    console.log(data, "data");
  };

  const [fieldValue, setfieldValue] = useState("");
  return (
    <>
      {" "}
      <Wrapper>
        <OrderSummaryWrapper>
          <Box className="body_layout">
            <Box className="header_wrapper">
              <Box className="header_left">
                <Stack
                  direction={"row"}
                  spacing={1}
                  alignItems={"center"}
                  sx={{
                    marginRight: "24px"
                  }}
                >
                  <Typography variant="h1">SRXBFA46F2A1EE9</Typography>{" "}
                  <CopyIcon IconColor={primaryColors.primary} />
                </Stack>
                <Chip
                  icon={<CalenderIcon IconColor={primaryColors.textDisabled} />}
                  size="small"
                  label="23/07/2023, 02.00 PM"
                  color="default"
                  className="date_pricker_chip"
                />
              </Box>
              <Box className="header_right">
                <CustomButtonPrimary
                  variant="contained"
                  color="primary"
                  endIcon={<CreditCardIcon IconColor={primaryColors.white} />}
                  onClick={handelopen}
                >
                  <Typography variant="body1">Pay Order</Typography>
                </CustomButtonPrimary>
              </Box>
            </Box>

            <Box className="pharmacy_doctor_wrapper">
              <Box className="doctor_wrapper">
                <Stack direction={"row"} spacing={1} className="section_header">
                  <StethoscopeIcon IconColor={primaryColors.primary} />
                  <Typography variant="body1">Doctor</Typography>
                </Stack>
                <Typography variant="h4">Kevin Hang</Typography>

                <Box className="doctor_bottom_icon">
                  <Stack direction={"row"} spacing={1}>
                    <CallIcon IconColor={primaryColors.textDisabled} />
                    <Typography variant="body1">07939665777</Typography>
                  </Stack>
                  <span className="separtor">|</span>
                  <Stack direction={"row"} spacing={1}>
                    <MailIcon IconColor={primaryColors.textDisabled} />
                    <Typography variant="body1">
                      kevin.doctor@gmail.com
                    </Typography>
                  </Stack>
                </Box>
              </Box>
              <span className="section_separator"></span>
              <Box className="pharmacy_wrapper">
                <Box>
                  <Stack
                    direction={"row"}
                    spacing={1}
                    className="section_header"
                  >
                    <PharmacyIcon IconColor={primaryColors.primary} />
                    <Typography variant="body1">Pharmacy</Typography>
                  </Stack>
                  <Stack
                    direction={"row"}
                    spacing={2}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                  >
                    <figure className="pharmacy_image">
                      <img src={assest.DummyImg} alt="" />
                    </figure>
                    <Box className="pharma_name">
                      <Typography variant="h4">SignatureRx Pharmacy</Typography>
                      <Stack direction={"row"} spacing={1}>
                        <LocationIcon IconColor={primaryColors.textDisabled} />
                        <Typography variant="body1">
                          6 The Marlins, Northwood, HA6 3NP
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>
                </Box>
                <CustomButtonPrimary
                  variant="outlined"
                  color="info"
                  buttonType="small"
                >
                  <Typography variant="body1">View</Typography>
                </CustomButtonPrimary>
              </Box>
            </Box>

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
        </OrderSummaryWrapper>
      </Wrapper>
      <Modalsection
        open={open}
        className="adminModal payorder"
        onClose={handelclose}
      >
        <Box className="adminModalWrapper">
          <Box className="modalImage">
            <img src={assest.payOrder} alt="" />
          </Box>
          <Box className="adminModalTitle">
            <Typography variant="h3">Pay Your Order</Typography>
            <Typography variant="body1">
              Please Enter your credit/debit card details to process your order
            </Typography>
          </Box>
          <Box className="form_group">
            <Typography variant="body1" className="label_txt">
              Card Holder
            </Typography>
            <InputFieldCommon
              placeholder="Your name"
              {...register("card_holder_name")}
              helperText={errors?.card_holder_name?.message}
              error={Boolean(errors?.card_holder_name)}
            />
          </Box>
          <Box className="form_group">
            <Typography variant="body1" className="label_txt">
              Bank Account Number
            </Typography>

            <InputFieldCommon
              placeholder="XXXX XXXX XXXX XXXX"
              {...register("account_no")}
              helperText={errors?.account_no?.message}
              error={Boolean(errors?.account_no)}
            />
          </Box>
          <Box className="card_details_input">
            <Box className="form_group">
              <Typography variant="body1" className="label_txt">
                Expiration Date
              </Typography>
              <InputFieldCommon
                className="admin_password"
                placeholder="MM/YY"
                {...register("expiration_date")}
                helperText={errors?.expiration_date?.message}
                error={Boolean(errors?.expiration_date)}
              />
            </Box>
            <Box className="form_group">
              <Typography variant="body1" className="label_txt">
                CVC
              </Typography>
              <InputFieldCommon
                className="admin_password"
                placeholder="Your CVC"
                isPassword
                {...register("cvc")}
                helperText={errors?.cvc?.message}
                error={Boolean(errors?.cvc)}
                onChange={(e: any) => setfieldValue(e.target.value)}
              />
            </Box>
          </Box>
          <Box className="adminModalButtonWrapper">
            <Stack
              direction="row"
              alignItems="center"
              flexWrap="wrap"
              className="modalbtnWrapper"
            >
              <Box className="each_btn">
                <CustomButtonPrimary variant="outlined" color="info">
                  <Typography variant="body1">Cancel</Typography>
                </CustomButtonPrimary>
              </Box>

              <Box className="each_btn">
                <CustomButtonPrimary
                  variant="contained"
                  color="primary"
                  disabled={fieldValue === ""}
                  onClick={handleSubmit(FormSubmit)}
                >
                  <Typography variant="body1">Pay Order</Typography>
                </CustomButtonPrimary>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Modalsection>
    </>
  );
};

export default OrderSummary;
