import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const OrderdetailsViewWrapper = styled(Box)`
  .tablesectionBox {
    .tablesectionTotalPrice {
      display: flex;
      justify-content: flex-end;
      flex-direction:column;
      padding: 16px 32px;
      box-shadow: 0px 4px 24px 0px rgba(7, 7, 7, 0.06);
      max-width: 352px;
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
