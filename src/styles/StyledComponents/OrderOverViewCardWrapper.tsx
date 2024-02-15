import styled from "@emotion/styled";
import { TableContainer } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const TableWrapper = styled(TableContainer)`
  padding: 5px;
  margin: 0 -5px;
  .MuiPaper-root {
    min-width: 1400px;
    padding: 8px;
    border-radius: 16px;
    box-shadow: 0px 4px 24px 0px rgba(7, 7, 7, 0.06);
  }
  th {
    background-color: ${primaryColors.bodyColor};
    color: ${primaryColors.textDisabled};
    font-size: 16px;
    font-weight: 500;
    border-bottom: none;

    :first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
    :last-child {
      border-radius: 0 8px 8px 0;
    }
  }
  tfoot {
    td {
      border-bottom: none;
    }
  }
  .prescription {
    h6 {
      color: ${primaryColors.primary_600};
      font-size: 16px;
      font-weight: 500;
    }
  }

  .patient_details {
    p {
      color: ${primaryColors.textPrimaryColor};
      font-size: 16px;
      font-weight: 500;
    }
  }

  .medicine_details {
    display: flex;
    align-items: center;
    padding-left: 16px;
    position: relative;
    &::after {
      content: "";
      width: 6px;
      height: 6px;
      border-radius: 100%;
      background-color: #070707;
      position: absolute;
      left: 0;
      top: 9px;
    }
    span {
      font-size: 16px;
      font-weight: 500;
      color: ${primaryColors.textPrimaryColor};

      &.icon_wrap {
        margin: 0 10px;
        color: ${primaryColors.textDisabled};
        line-height: 0;
      }
    }
    &.medicine_details_extra {
      button {
        min-width: 120px;
        padding: 0;
        color: ${primaryColors?.primary};
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5;
        &:hover {
          color: ${primaryColors?.info};
          background: transparent;
        }
      }
      span {
        color: ${primaryColors?.primary_600};
        cursor: pointer;
      }
      &::after {
        background-color: ${primaryColors?.primary_600};
      }
      &:hover {
        span {
          color: ${primaryColors?.info};
        }

        &::after {
          background-color: ${primaryColors?.info};
        }
      }
    }
  }
  .total {
    p {
      color: ${primaryColors.textPrimaryColor};
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 6px;
    }
    .paid {
      display: flex;
      align-items: center;
      img {
        margin-right: 4px;
      }
      p {
        color: ${primaryColors.deepGreen};
        margin-bottom: 0;
        font-weight: 400;
      }
    }
  }
  .date_box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      margin-right: 8px;
    }
    p {
      font-size: 16px;
      font-weight: 400;
    }
  }
  .call_box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      margin-right: 8px;
    }
    a {
      color: ${primaryColors.textDisabled};
      font-size: 16px;
      font-weight: 400;
    }
  }
  .action_button {
    display: flex;
    justify-content: flex-end;
    button {
      width: auto;
    }
  }
  .pending {
    display: flex;
    justify-content: flex-start;
    background-color: ${primaryColors.pendingColor};
    border-radius: 50px;
    padding: 4px 12px 4px 6px;
    width: fit-content;
    img {
      margin-right: 4px;
    }
    p {
      color: ${primaryColors.pendingTextColor};
    }
  }
  .expire {
    display: flex;
    justify-content: flex-start;
    background-color: ${primaryColors.dangerColor};
    border-radius: 50px;
    padding: 4px 12px 4px 6px;
    width: fit-content;
    img {
      margin-right: 4px;
    }
    p {
      color: ${primaryColors.textDanger};
    }
  }
  .tableFooter_right {
    display: flex;
    justify-content: flex-end;
    button {
      width: auto;
      &:first-child {
        margin-right: 12px;
      }
    }
  }

  .collected,
  .accepted,
  .collected_date,
  .rejected {
    display: flex;
    align-items: center;
    padding: 4px 12px 4px 6px;
    border-radius: 50px;
    width: fit-content;
    img,
    svg {
      margin-right: 8px;
    }
  }

  .collected {
    background-color: ${primaryColors.lightGreen};

    p {
      color: ${primaryColors.deepGreen};
    }
  }

  .accepted,
  .collected_date {
    background-color: ${primaryColors.bodyColor};

    p {
      color: ${primaryColors.mainFontColor};
    }
  }
  .collected_date {
    display: flex;
    justify-content: flex-end;
  }

  .rejected {
    background-color: ${primaryColors.dangerColor};

    p {
      color: ${primaryColors.textDanger};
    }
  }
`;
