import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const SignUpNewWrapper = styled(Box)`
  margin: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 1580px) {
    margin: 20px;
  }
  @media (max-width: 899px) {
    margin: 10px;
  }
  .sign-up-rgt,
  .sign-up-left {
    width: 50%;
  }
  .sign-up-left {
    text-align: center;
    width: 45%;
    height: calc(100vh - 80px);
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
    @media (max-width: 1299px) {
      /* width: 35%; */
    }
    @media (max-width: 899px) {
      height: 450px;
    }
    @media (max-width: 599px) {
      height: 250px;
    }
  }
  .sign-up-rgt {
    padding: 0 45px;
    overflow: auto;
    height: calc(100vh - 80px);

    &.reset-password {
      .ant-spin-container {
        height: 100%;
      }
    }
    .ant-spin-nested-loading {
      height: 100%;
      .ant-spin-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    @media (max-width: 899px) {
      width: 50%;
      padding: 0 10px;
      height: 100%;
    }

    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
      background: transparent;
      border-radius: 44px;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0);
    }

    &::-webkit-scrollbar-thumb {
      width: 6px;
      background: ${primaryColors.primary};
      border-radius: 44px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: ${primaryColors.primary};
    }
  }

  .sign-up-rgt,
  .sign-up-left {
    @media (max-width: 899px) {
      width: 100%;
    }
  }
  .loginHeader {
    padding: 19px 32px;
    border-bottom: 1px solid #ebebeb;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-bottom: 24px; */
    @media (max-width: 1299px) {
      padding: 10px 20px;
    }
    @media (max-width: 899px) {
      padding: 10px 0;
    }
    text-align: center;
    flex-direction: column;

    &:last-child {
      margin-bottom: 24px;
    }

    a {
      width: 139px;
      display: inline-block;
      @media (max-width: 899px) {
        width: 120px;
      }
      @media (max-width: 599px) {
        width: 90px;
      }
      img {
        width: 100%;
      }
    }
    h1 {
      font-size: 35px;
      color: "black";
      margin-bottom: 23px;
      @media (max-width: 1299px) {
        font-size: 22px;
      }
    }
    p {
      font-size: 15px;
      font-weight: 400;
      color: ${primaryColors.black};
    }
  }

  .form_group {
    padding: 24px 0;
    .label_txt {
      font-size: 14px;
      font-weight: 500;
      color: ${primaryColors.black};
      margin-bottom: 4px;
    }
    .MuiFormControl-root {
      width: 100%;
      .MuiInputBase-root {
        padding: 0 16px;
        input {
          padding: 9.5px 0 13.5px 0;
          line-height: 1;
        }
        textarea {
          padding: 10px 0;
          height: auto !important;
        }
      }
      .MuiSelect-select {
        padding: 9.5px 0 13.5px 0;
      }
    }
    .MuiOutlinedInput-root {
      min-width: 100%;
    }
  }

  .pass-strength-bar {
    @media (max-width: 1199px) {
      width: 360px !important;
    }
    @media (max-width: 899px) {
      width: 200px !important;
    }
  }
  .password-strength {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 29px;

    @media (max-width: 1399px) {
      flex-wrap: wrap;
    }

    .p-strength {
      /* width: 71px;
      height: 4px;
      background-color: ${primaryColors.primary};
      border-radius: 8px; */
    }
  }

  .form-btm {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    button {
      @media (max-width: 419px) {
        width: 100%;
        margin-bottom: 10px;
        justify-content: center;
      }
    }
    a {
      color: ${primaryColors.black};
    }
  }
`;
