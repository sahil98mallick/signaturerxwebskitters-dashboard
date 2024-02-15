import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const OrderPendingTokenWrapper = styled(Box)`
  .orderPendingUserDetailswrapper {
    padding: 40px 0;
    @media (max-width: 1199px) {
      padding: 30px 0;
    }
    @media (max-width: 599px) {
      padding: 20px 0;
    }
    h3 {
      color: ${primaryColors.textPrimaryColor};
      font-size: 28px;
      font-weight: 600;
      line-height: 1.2;
      text-align: left;
      @media (max-width: 1199px) {
        font-size: 24px;
      }
      @media (max-width: 899px) {
        font-size: 22px;
        line-height: 1;
      }
    }
    .orderPendingUserDetails {
      display: flex;
      justify-content: space-between;
      padding-top: 16px;
      flex-wrap: nowrap;
      @media (max-width: 1299px) {
        flex-wrap: wrap;
      }
      @media (max-width: 1599px) {
        padding-top: 10px;
      }
      ul {
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        @media (max-width: 1299px) {
          width: 100%;
          padding-bottom: 10px;
        }
        li {
          padding: 0;
          width: auto;
          padding: 0 12px;
          border-right: 2px solid ${primaryColors.border_primary};
          
          @media (max-width: 1199px) {
            padding: 0 6px;
          }
          @media (max-width: 699px) {
            width: 100%;
            border: 0;
            padding: 6px 0;
          }
          &:last-child {
            padding-right: 0;
            border-right: none;
          }
          &:first-child {
            padding-left: 0;
          }
          .orderpendingListlocation {
            display: flex;
            align-items: center;
            i {
              display: inline-flex;
              width: 20px;
              margin-right: 6px;
              @media (max-width: 1199px) {
                width: 15px;
              }
              img {
                width: 100%;
              }
            }
            a {
              display: inline-block;
              color: ${primaryColors.textDisabled};
              font-size: 16px;
              font-weight: 400;
              line-height: 1.5;
              text-decoration: none;

              @media (max-width: 900px) {
                font-size: 14px;
              }
              :hover {
                opacity: 0.7;
                text-decoration: underline;
              }
            }
            p {
              color: ${primaryColors.textDisabled};
              font-size: 16px;
              font-weight: 400;
              line-height: 1.5;

              @media (max-width: 900px) {
                font-size: 14px;
              }
            }
          }
        }
      }
      .paymentStatusBox {
        display: flex;
        align-items: center;
        margin: 0 -6px;
        white-space: nowrap;
        flex-wrap: wrap;

        .paymentText {
          padding: 0 6px;
          p {
            color: ${primaryColors.mainFontColor};
            font-size: 16px;
            font-weight: 400;
            line-height: 155%;
            @media (max-width: 900px) {
              font-size: 14px;
            }
          }
        }
        .orderpendingPaymentstatuswrapper {
          padding: 0 6px;
          @media (max-width: 599px) {
            width: 100%;
            padding-top: 10px;
          }

          .orderpendingPaymentstatus {
            display: flex;
            align-items: center;
            padding: 4px 12px 4px 6px;
            background-color: ${primaryColors.success_color};
            border-radius: 32px;
            @media (max-width: 900px) {
              padding: 3px 10px 3px 5px;
            }
            i {
              width: 20px;
              display: inline-flex;
              margin-right: 4px;
              img {
                width: 100%;
              }
            }
            p {
              color: ${primaryColors.text_success};
              font-size: 16px;
              @media (max-width: 900px) {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
`;
