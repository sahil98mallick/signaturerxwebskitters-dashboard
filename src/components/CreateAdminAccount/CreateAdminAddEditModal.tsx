import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Stack, Typography } from "@mui/material";
import assest from "json/assest";
import {
  CreateAccountSchema,
  CreateAccountSchemaFormData
} from "lib/yup/CreateAdminAccountSchema";
import { useForm } from "react-hook-form";
import InputFieldCommon from "ui/CommonInput/CommonInput";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import Modalsection from "ui/Modal/Modalsection";

interface CreateAdminAddEditModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CreateAdminAddEditModal({
  open,
  onClose
}: CreateAdminAddEditModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(CreateAccountSchema)
  });

  const handleCreateAccount = (data: CreateAccountSchemaFormData) => {
    console.log(data);
    onClose();
  };

  const handleCancel = () => {
    onClose();
    reset();
  };

  return (
    <Modalsection open={open} className={"adminModal"} onClose={onClose}>
      <Box
        component="form"
        onSubmit={handleSubmit(handleCreateAccount)}
        className="adminModalWrapper"
      >
        <Box className="adminModalTitle">
          <Typography variant="h3">Create Account</Typography>
          <Typography variant="body1">
            Fill in the following information to create account.
          </Typography>
        </Box>
        <Box className="form_group">
          <Typography variant="body1" className="label_txt">
            Full Name
          </Typography>
          <InputFieldCommon
            {...register("name")}
            type="text"
            placeholder="Admin full name"
            helperText={errors?.name?.message}
            error={Boolean(errors?.name)}
          />
        </Box>
        <Box className="form_group">
          <Typography variant="body1" className="label_txt">
            Email Address
          </Typography>
          <InputFieldCommon
            {...register("email")}
            placeholder="Admin email address"
            helperText={errors?.email?.message}
            error={Boolean(errors?.email)}
          />
        </Box>
        <Box className="form_group">
          <Typography variant="body1" className="label_txt">
            Password
          </Typography>
          <InputFieldCommon
            {...register("password")}
            placeholder="Create a password"
            isPassword
            helperText={errors?.password?.message}
            error={Boolean(errors?.password)}
          />
          <Box className="passwordlengthIndicator">
            <i>
              <img src={assest.infocircle_black} alt="inforicon" />
            </i>
            <Typography variant="body1">
              A number or symbol, at least 8 characters
            </Typography>
          </Box>
        </Box>
        <Box className="form_group">
          <Typography variant="body1" className="label_txt">
            Confirm password
          </Typography>
          <InputFieldCommon
            className="admin_password"
            placeholder="Confirm password"
            isPassword
            {...register("confirmpassword")}
            helperText={errors?.confirmpassword?.message}
            error={Boolean(errors?.confirmpassword)}
          />
        </Box>
        <Box className="adminModalButtonWrapper">
          <Stack
            direction="row"
            alignItems="center"
            flexWrap="wrap"
            className="modalbtnWrapper"
          >
            <Box className="each_btn">
              <CustomButtonPrimary
                type="button"
                onClick={handleCancel}
                variant="outlined"
                color="info"
              >
                <Typography variant="body1">Cancel</Typography>
              </CustomButtonPrimary>
            </Box>

            <Box className="each_btn">
              <CustomButtonPrimary
                variant="contained"
                type="submit"
                color="primary"
              >
                <Typography variant="body1">Create Account</Typography>
              </CustomButtonPrimary>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Modalsection>
  );
}
