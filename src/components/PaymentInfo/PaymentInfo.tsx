import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, Typography } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";
import {
  PaymentInfoSchema,
  PaymentInfoSchemaFormData
} from "lib/yup/PaymentInfoSchema";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputFieldCommon from "ui/CommonInput/CommonInput";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import CustomSwitch from "ui/CustomSwitch/CustomSwitch";
import CheckIcon from "ui/Icons/CheckIcon";
import CommisionIcon from "ui/Icons/CommisionIcon";
import CreditCardIcon from "ui/Icons/CreditCardIcon";
import PriceTag from "ui/Icons/PriceTag";

export default function PaymentInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(PaymentInfoSchema)
  });

  const [openBranch, setopenBranch] = useState(false);
  const [openMedication, setopenMedication] = useState(false);
  const toggleOpenBranch = () => {
    setopenBranch((prev) => !prev);
  };
  const toggleOpenMedication = () => {
    setopenMedication((prev) => !prev);
  };

  const handelSavePaymentInfo = (data: PaymentInfoSchemaFormData) => {};

  return (
    <Box className="cmn_block payment_information">
      <Grid container columnSpacing={{ lg: 10, md: 5, xs: 3 }} rowSpacing={2}>
        <Grid item lg={3} xl={4} xs={12}>
          <Box className="info_stack">
            <Typography variant="h2">Payment Information</Typography>
            <Typography variant="body1">
              Fill in the following information to update your payment details.
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={9} xl={8} xs={12}>
          <Box className="payment_sections">
            <Box className="payment_infoBox">
              <Box className="icon_wrapper">
                <CreditCardIcon />
              </Box>
              <Box className="box_middle">
                <Typography className="bold_text" variant="body1">
                  Branch Account
                </Typography>
                <Typography variant="body1">
                  Pay all payments to one bank account
                </Typography>
              </Box>

              <CustomButtonPrimary
                variant="outlined"
                color="info"
                buttonType="small"
                onClick={toggleOpenBranch}
              >
                <Typography variant="body1">Change</Typography>
              </CustomButtonPrimary>
            </Box>
            {openBranch && (
              <>
                <Box className="form_group">
                  <Typography variant="body1" className="label_txt">
                    Bank Account Name
                  </Typography>
                  <InputFieldCommon
                    {...register("accountName")}
                    helperText={errors.accountName?.message}
                    error={Boolean(errors.accountName)}
                    placeholder="Your bank account name"
                  />
                </Box>
                <Box className="form_group">
                  <Typography variant="body1" className="label_txt">
                    Account Number
                  </Typography>
                  <InputFieldCommon
                    {...register("accountNumber")}
                    helperText={errors.accountNumber?.message}
                    error={Boolean(errors.accountNumber)}
                    placeholder="Your bank account number"
                  />
                </Box>
                <Box className="form_group">
                  <Typography variant="body1" className="label_txt">
                    Sort-Code
                  </Typography>
                  <InputFieldCommon
                    {...register("shortCode")}
                    helperText={errors.shortCode?.message}
                    error={Boolean(errors.shortCode)}
                    placeholder="Your sort code"
                  />
                </Box>
              </>
            )}
          </Box>

          <Box className="payment_sections">
            <Box className="payment_infoBox">
              <Box className="icon_wrapper">
                <CommisionIcon />
              </Box>
              <Box className="box_middle">
                <Typography className="bold_text" variant="body1">
                  Medication Pricing
                </Typography>
                <Typography variant="body1">
                  Set how much the medication pricing
                </Typography>
              </Box>

              <CustomSwitch label="" onChange={toggleOpenMedication} />
            </Box>
            {openMedication && (
              <>
                {" "}
                <Box className="form_group">
                  <Typography variant="body1" className="label_txt">
                    Price Multiple
                  </Typography>
                  <InputFieldCommon
                    {...register("priceMultiple")}
                    placeholder="Add price multiple"
                  />
                </Box>
                <Box className="form_group">
                  <Typography variant="body1" className="label_txt">
                    Dispensing Fee
                  </Typography>
                  <InputFieldCommon
                    {...register("dispensingFee")}
                    placeholder="Add dispensing fee"
                  />
                </Box>
                <Box className="form_group">
                  <Typography variant="body1" className="label_txt">
                    Minimum Item Charge
                  </Typography>
                  <InputFieldCommon
                    {...register("MinimumItemCharge")}
                    placeholder="Add minimum item charge"
                  />
                </Box>
              </>
            )}
          </Box>

          <Box className="payment_infoBox">
            <Box className="icon_wrapper">
              <PriceTag />
            </Box>
            <Box className="box_middle">
              <Typography className="bold_text" variant="body1">
                Toggle Availability
              </Typography>
              <Typography variant="body1">
                Allow branches to show toggle availability
              </Typography>
            </Box>

            <CustomSwitch label="" defaultChecked />
          </Box>
        </Grid>
      </Grid>
      <Box className="btn_otr">
        <CustomButtonPrimary
          variant="contained"
          color="primary"
          onClick={handleSubmit(handelSavePaymentInfo)}
          endIcon={
            <CheckIcon
              IconColor={`${primaryColors?.white}`}
              IconHeight="24"
              IconWidth="24"
            />
          }
        >
          <Typography>Save Information</Typography>
        </CustomButtonPrimary>
      </Box>
    </Box>
  );
}
