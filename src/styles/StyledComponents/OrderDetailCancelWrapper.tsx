import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";
import assest from "json/assest";

export const OrderDetailCancelWrapper = styled(Box)`
  .orderdetailpendingbox {
    ul {
      li {
        &.blankspanCancel {
          width: 100% !important;
          .empty_span {
            display: flex;
            justify-content: center;
            width: 96% !important;
            margin: 0 auto;
            height: 7px;
            background-image: url(${assest.bigStatus_bar});
            background-position: center;
            background-size: 100%;
            background-repeat: no-repeat;
            @media (max-width: 899px) {
              display: none;
            }
          }
          .arrw_dwn_icon {
            display: none;
            @media (max-width: 899px) {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
      }
    }
  }
  .pendingtokenSectionBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    .pendingtokenid {
      display: flex;
      align-items: center;
      @media (max-width: 699px) {
        width: 100%;
        margin-bottom: 10px;
      }
      h3 {
        font-size: 28px;
        font-weight: 600;
        line-height: 1.2;
        color: ${primaryColors.primary};
        @media (max-width: 1199px) {
          font-size: 24px;
        }
        @media (max-width: 899px) {
          font-size: 22px;
        }
        @media (max-width: 599px) {
          font-size: 20px;
          line-height: 1;
        }
      }
      button {
        padding: 0;
        min-width: auto;
        width: 24px;
        margin-left: 12px;
        @media (max-width: 1199px) {
          width: 20px;
          margin-left: 5px;
        }
      }
    }
    .warningTimerWrapper {
      display: flex;
      align-items: center;
      background-color: ${primaryColors.bodyColor};
      border-radius: 32px;
      padding: 4px 12px 4px 6px;
      i {
        display: inline-flex;
        width: 20px;
        margin-right: 4px;
        @media (max-width: 599px) {
          width: 14px;
        }

        img {
          width: 100%;
        }
      }
      p {
        font-size: 16px;
        color: ${primaryColors.mainFontColor};
        @media (max-width: 1535px) {
          font-size: 14px;
        }
        @media (max-width: 599px) {
          font-size: 12px;
          text-align: left;
        }
      }
    }
  }
  .tablesectionBox {
    .tablesectionTotalPrice {
      display: flex;

      justify-content: flex-end;
      padding: 16px 32px;
      box-shadow: 0px 4px 24px 0px rgba(7, 7, 7, 0.06);
      max-width: 252px;
      margin-left: auto;
      border-radius: 8px;
      @media (max-width: 899px) {
        padding: 12px 20px;
        max-width: 235px;
      }
      p {
        font-size: 16px;
        font-weight: 500;
        line-height: 155%;
        color: ${primaryColors.mainFontColor};
      }
      span {
        display: inline-block;
        font-size: 36px;
        font-weight: 600;
        line-height: 1.2;
        color: ${primaryColors.textPrimaryColor};
        margin-left: 24px;
        @media (max-width: 899px) {
          font-size: 30px;
        }
        @media (max-width: 599px) {
          font-size: 25px;
        }
      }
    }
  }
`;
