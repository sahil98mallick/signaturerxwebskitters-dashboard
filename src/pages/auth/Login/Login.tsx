import { yupResolver } from '@hookform/resolvers/yup'
import { AccountCircleOutlined } from '@mui/icons-material'
import { Alert, Box, Container, Divider, Typography } from '@mui/material'
import { loginFunction } from 'api/functions/user.api'
import { useAppDispatch } from 'hooks/redux/useAppDispatch'
import { useAppSelector } from 'hooks/redux/useAppSelector'
import messages from 'json/messages/message'
import validationText from 'json/messages/validationText'
import { emailRegex } from 'lib/regex.lib'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import { setAccessToken, setUserData } from 'redux-toolkit/slices/userSlice'
import { Toaster, toast } from 'sonner'
import { LoginWrapper } from 'styles/StyledComponents/LoginWrapper'
import InputFieldCommon from 'ui/CommonInput/CommonInput'
import CustomButtonPrimary from 'ui/CustomButtons/CustomButtonPrimary'
import * as yup from "yup";

// Hookform Schema Setup
const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email(validationText.error.email_format)
    .required(validationText.error.enter_email)
    .matches(emailRegex, validationText.error.email_format),
  password: yup.string().trim().required(validationText.error.enter_password),
  deviceToken: yup.string().nullable()
});
export type LoginSchemaFormData = yup.InferType<typeof schema>;

// Main Login Components Here
const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors } } = useForm(
    {
      resolver: yupResolver(schema),
      mode: "all",
      defaultValues: {
        email: "",
        password: ""
      }
    }
  )

  const { mutate, isLoading, status, data, error } = useMutation(
    "login",
    loginFunction
  );
  const { isLoggedIn } = useAppSelector((s) => s.userSlice);

  const LoginSubmit = (data: LoginSchemaFormData) => {
    console.log("Login data:-", data);
    mutate(
      { ...data },
      {
        onSuccess: (res) => {
          console.log("rESPONSE", res);
          if (res?.data.status === "success") {
            if (res?.data) {
              const { access, ...userData } = res?.data?.data
              toast.success(messages.success.loginsuccess(res?.data?.data.name))
              console.log("Token:-", access);
              dispatch(setAccessToken(access));
              dispatch(setUserData(userData));
              navigate("/dashboard/branch");
            }
          }
        }
      }
    )
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard/branch");
    }
  }, []);

  if (status === "error") {
    // @ts-ignore
    toast.error(error?.response?.data?.message?.message || error?.response?.data?.message)
  }
  return (
    <>
      <LoginWrapper>
        <Box className="loginForm">
          <Box className="loginHeader">
            <Link to="/">
              <img src="https://i.ibb.co/FXcRxx4/download.png" alt="logo" />
            </Link>
          </Box>
          <Box className="loginBody">
            <form onSubmit={handleSubmit(LoginSubmit)}>
              <Container fixed>
                <Box className="loginformWrap">
                  <figure>
                    <AccountCircleOutlined style={{ fontSize: "100px" }} />
                  </figure>
                  <Typography variant="h3">Log in</Typography>
                  <Box pt={1}>
                    <InputFieldCommon
                      size="small"
                      placeholder="Enter email"
                      type="email"
                      {...register("email")}
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  </Box>
                  <Box pt={1}>
                    <InputFieldCommon
                      size="small"
                      type="password"
                      placeholder="Enter Password"
                      {...register("password")}
                      error={!!errors.password}
                      helperText={errors.password?.message}
                    />
                  </Box>
                  <Box className="loginSubmitButton">
                    <CustomButtonPrimary
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      loading={isLoading}
                    >
                      <Typography variant="body1">Log in</Typography>
                    </CustomButtonPrimary>
                  </Box>
                  <Box mb={2} className="loginSubmitButton">
                  <Link
                      to="/auth/forgetpass"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography>Forgotten password?</Typography>
                    </Link>
                  </Box>
                  <Divider />
                  <Box className="loginSubmitButton">
                    <CustomButtonPrimary
                      type="button"
                      variant="contained"
                      color="success"
                      fullWidth
                      onClick={() =>
                        navigate("/auth/signup", {
                          replace: true
                        })
                      }
                    >
                      <Typography>Create account</Typography>
                    </CustomButtonPrimary>
                  </Box>
                </Box>
              </Container>
            </form>
          </Box>
        </Box>
      </LoginWrapper>
    </>
  )
}

export default Login