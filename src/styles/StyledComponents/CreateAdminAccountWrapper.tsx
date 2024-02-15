import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const CreateAdminAccountWrapper = styled(Box)`
  .admin_acc_wrapper {
    margin-bottom: 40px;
  }
  .header_wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 32px;
    .headerWrapper_left {
      text-align: left;

      @media (max-width: 599px) {
        margin-bottom: 10px;
      }
      h3 {
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 8px;
      }
      p {
        font-weight: 16px;
        font-weight: 400;
      }
    }
  }
  .MuiInputBase-adornedEnd {
    min-width: 300px !important;
  }
  table {
    border-collapse: separate;
    border-spacing: 0 16px;
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
          padding: 16px 16px;
          border: 0;

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

  .pharmacy {
    p {
      font-size: 16px;
      font-weight: 500;
      color: ${primaryColors.black};
      margin-bottom: 8px;
    }
    .mail_box {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img,
      svg {
        margin-right: 8px;
      }
      p {
        font-size: 16px;
        font-weight: 400;
        color: ${primaryColors.mainFontColor};
        margin-bottom: 0;
      }
    }
  }
  .action_buttons {
    display: flex;
    justify-content: flex-start;
    button {
      width: auto;
      :first-child {
        margin-right: 12px;
      }
    }
  }

  .admin_input_field {
    .MuiInputBase-root {
      max-width: 255px;
      padding: 6px 8px;
      background-color: ${primaryColors.bodyColor};
      border: none;
      box-shadow: none;

      input {
        color: ${primaryColors.black};
        font-style: 16px;
        font-weight: 500;
      }
    }
  }
`;
