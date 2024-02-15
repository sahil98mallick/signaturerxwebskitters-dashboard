import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const LoginWrapper = styled(Box)`
  padding: 0;
  .loginForm {
    height: calc(100vh - 16px);
    @media (max-width: 1199px) {
      height: auto;
    }
    .loginHeader {
      padding: 19px 32px;
      max-height: 80px;
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
    }
    .loginBody {
      height: calc(100vh - 96px);
      overflow-y: auto;
      padding: 40px 0;
      @media (max-width: 1199px) {
        /* height: calc(100vh - 80px); */
        /* padding: 40px 0; */
      }
      > form {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100%;
      }
      .loginformWrap {
        max-width: 500px;
        margin: 0 auto;
        background-color: ${primaryColors.white};
        box-shadow: 0px 4px 24px 0px rgba(7, 7, 7, 0.06);
        border-radius: 24px;
        padding: 32px;
        @media (max-width: 599px) {
          padding: 20px;
          border-radius: 15px;
        }

        .hand_wave {
          font-size: 28px;

          font-weight: 600;
        }
        figure {
          width: 100px;
          margin: 0 auto;
          line-height: 0;
          @media (max-width: 1199px) {
            width: 70px;
          }
          @media (max-width: 899px) {
            width: 60px;
          }

          img {
            width: 100%;
          }
        }
        h3 {
          color: ${primaryColors.textPrimaryColor};
          text-align: center;
          font-size: 28px;
          line-height: 1.2;
          padding: 24px 0 12px;
          @media (max-width: 899px) {
            font-size: 26px;
          }
          @media (max-width: 599px) {
            font-size: 24px;
          }
          @media (max-width: 375px) {
            font-size: 20px;
          }
        }
        p {
          /* text-align: center; */
          font-size: 16px;
          @media (max-width: 499px) {
            font-size: 14px;
          }
        }
        .forminputBox {
          padding: 24px 0 32px;
          @media (max-width: 599px) {
            padding: 15px 0 25px;
          }
          @media (max-width: 375px) {
            padding: 15px 0 20px;
          }
          .datepickerSectionWrap {
            input {
              background-position: center right 12px;
              filter: brightness(0.5) contrast(1.5);
            }
            .MuiInputBase-root {
              padding: 0;
              .MuiInputAdornment-root {
                margin-left: 0;
              }
            }
          }
        }
        .loginSubmitButton {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 16px;
          button {
            display: flex;
            justify-content: center;
            align-items: center;
            /* min-width: 143px; */
            @media (max-width: 599px) {
              min-width: auto;
            }
          }
        }
      }
    }
  }
`;
