import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const HomeTableWrapper = styled(Box)`
  .MuiTableContainer-root {
    overflow-x: auto;
  }
  table {
    border-collapse: separate;
    border-spacing: 0 16px;
    @media (max-width: 1199px) {
      width: 1360px;
    }

    thead {
      tr {
        th {
          border: 0;
          background: ${primaryColors?.bodyColor};
          color: ${primaryColors?.mainFontColor};
          text-align: left;
          font-family: Work Sans;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.5;
          padding: 16px 16px;
          &:first-child {
            border-radius: 8px 0 0 8px;
          }
          &:last-child {
            border-radius: 0 8px 8px 0;
          }
        }
      }
    }
    tbody {
      tr {
        box-shadow: 0px 4px 24px 0px rgba(7, 7, 7, 0.06);
        border-radius: 8px;
        td {
          color: ${primaryColors?.textPrimaryColor};
          text-align: left;
          font-family: Work Sans;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.5;
          padding: 10px 16px;
          border: 0;
          transition: all 0.5s ease;
          &:first-child {
            border-radius: 8px 0 0 8px;
          }
          &:last-child {
            border-radius: 0 8px 8px 0;
          }
          h5 {
            color: ${primaryColors?.textPrimaryColor};
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 3px;
          }
          .lcoation_para {
            display: flex;
            align-items: center;
            span {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-right: 5px;
            }
          }
          .MuiAvatar-root {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }

  .each_stack {
    padding: 8px 8px;
    border-radius: 4px;
    border: 1px solid ${primaryColors?.bodyColor};
    background: ${primaryColors?.white};
    box-shadow: 0px 0px 2px 0px rgba(7, 7, 7, 0.08);
    &:not(:last-child) {
      margin-right: 12px;
    }
    h6 {
      font-size: 16px;
      font-weight: 600;
    }
    p {
      display: flex;
      align-items: center;
      color: ${primaryColors?.mainFontColor};
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
      span {
        display: flex;
        align-items: center;
        .MuiSvgIcon-root {
          font-size: 18px;
          margin-right: 5px;
        }
        &.ylw_icon {
          .MuiSvgIcon-root {
            color: #ffa721;
          }
        }
        &.grn_icon {
          .MuiSvgIcon-root {
            color: #67c1c2;
          }
        }
        &.red_icon {
          .MuiSvgIcon-root {
            color: #f380a5;
          }
        }
      }
    }
  }
  .action_stack {
    button {
      &:not(:last-child) {
        margin-right: 12px;
      }
    }
  }
`;
