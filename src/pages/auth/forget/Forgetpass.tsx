import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Container, Divider, Typography } from "@mui/material";
import { Alert, Button } from "antd";
import { forgetpassFunction } from "api/functions/user.api";
import assest from "json/assest";
import validationText from "json/messages/validationText";
import { emailRegex } from "lib/regex.lib";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { LoginWrapper } from "styles/StyledComponents/LoginWrapper";
import InputFieldCommon from "ui/CommonInput/CommonInput";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import AccountIcon from "ui/Icons/AccountIcon";
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup
        .string()
        .trim()
        .email(validationText.error.email_format)
        .required(validationText.error.enter_email)
        .matches(emailRegex, validationText.error.email_format)
});

export type ForgetPasswordSchemaFormData = yup.InferType<typeof schema>;

function ForgetPassword() {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
        mode: "all"
    });
    const { mutate, isLoading, status, data, error } = useMutation(
        "login",
        forgetpassFunction
    );

    const navigate = useNavigate();

    const handleLogin = (data: ForgetPasswordSchemaFormData) => {
        mutate(data, {
            onSuccess: (res) => {
                if (res?.data.status === "success") {
                    if (res?.data.data) {
                        reset();
                    }
                }
            }
        });
    };

    return (
        <LoginWrapper>
            <Box className="loginForm">
                <Box className="loginHeader">
                    <Link to="/">
                        <img src={assest.Logo} alt="logo" />
                    </Link>
                </Box>
                <Box className="loginBody">
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <Container fixed>
                            <Box className="loginformWrap">
                                <figure>
                                    <AccountIcon />
                                </figure>
                                <Typography variant="h3">Forgot Password</Typography>
                                {status === "error" ? (
                                    <Box py={1}>
                                        <Alert
                                            showIcon
                                            // @ts-ignore
                                            message={error?.response?.data?.message}
                                            type="error"
                                        />
                                    </Box>
                                ) : null}
                                {data?.data.status === "success" && (
                                    <Box mb={1}>
                                        <Alert
                                            showIcon
                                            // @ts-ignore
                                            message={`A password reset link has been sent to your email address.
                    Please check your inbox, and if you don't see the email within a
                    few minutes, don't forget to check your spam folder.`}
                                            type="success"
                                            action={
                                                <Button
                                                    size="small"
                                                    onClick={() => navigate("/auth/login")}
                                                    type="link"
                                                >
                                                    Login
                                                </Button>
                                            }
                                        />
                                    </Box>
                                )}

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
                                <Box pb={2} className="loginSubmitButton">
                                    <CustomButtonPrimary
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        loading={isLoading}
                                        fullWidth
                                    >
                                        <Typography variant="body1">Submit</Typography>
                                    </CustomButtonPrimary>
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
                                <Box className="loginSubmitButton">
                                    <CustomButtonPrimary
                                        type="button"
                                        variant="contained"
                                        color="secondary"
                                        fullWidth
                                        onClick={() =>
                                            navigate("/auth/login", {
                                                replace: true
                                            })
                                        }
                                    >
                                        <Typography>Already have an account?</Typography>
                                    </CustomButtonPrimary>
                                </Box>
                            </Box>
                        </Container>
                    </form>
                </Box>
            </Box>
        </LoginWrapper>
    );
}

export default ForgetPassword;
