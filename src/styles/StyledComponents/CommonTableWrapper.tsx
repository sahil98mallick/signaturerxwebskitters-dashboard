import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const CommonTableWrppper = styled(Box)`
  .commontableSection {
    table {
      border-collapse: separate;
      border-spacing: 0 16px;
      @media (max-width: 899px) {
        border-spacing: 0 10px;
      }
      thead {
        tr {
          background-color: ${primaryColors.bodyColor};

          th {
            border-bottom: none;
            padding: 16px;
            @media (max-width: 899px) {
              padding: 10px;
            }
            p {
              color: ${primaryColors.mainFontColor};
              font-size: 16px;
              font-weight: 600;
              line-height: 1.5;
            }
            &:first-child {
              border-radius: 8px 0 0 8px;
            }
            &:last-child {
              border-radius: 0 8px 8px 0;
              width: 93.33px;
            }
          }
        }
      }
      tbody {
        tr {
          background-color: ${primaryColors.white};
          box-shadow: 0px 4px 24px 0px ${primaryColors.tableshadow};

          td {
            padding: 7px 0 7px 0;
            border-bottom: none;
            @media (max-width: 899px) {
              padding: 5px 0 5px 0;
            }
            p {
              color: ${primaryColors.textPrimaryColor};
              padding: 17px 16px;
              font-size: 16px;
              font-weight: 400;
              line-height: 1.5;
              @media (max-width: 899px) {
                padding: 10px 16px;
              }
              .priceicon {
                color: ${primaryColors.textPrimaryColor};
                font-size: 16px;
              }
            }
            &:first-child {
              border-radius: 8px 0 0 8px;
            }
            &:last-child {
              border-radius: 0 8px 8px 0;
            }
          }
        }
      }
    }
  }
`;
