import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const PayoutTableWrapper = styled(Box)`
  .payout_summary_details_card {
    max-width: 98px;
    width: 100%;
    padding: 8px 12px 8px 8px;
    border-radius: 4px;
    box-shadow: 0px 0px 2px 0px rgba(7, 7, 7, 0.08);
    border: 1px solid ${primaryColors.bodyColor};
    background: ${primaryColors.white};

    .heading {
      font-size: 16px;
      font-weight: 600;
      color: ${primaryColors.black};
    }
  }

  .order_id {
    p {
      font-size: 16px;
      font-weight: 500;
      color: ${primaryColors.primary};
    }
    svg,
    img {
      width: 18px;
      height: 18px;
      margin-right: 8px;
    }
    span {
      font-size: 16px;
      font-weight: 400;
    }
  }
  .branches {
    p {
      font-size: 16px;
      font-weight: 500;
      color: ${primaryColors.black};
    }
    svg,
    img {
      width: 18px;
      height: 18px;
      margin-right: 8px;
    }
    span {
      font-size: 16px;
      font-weight: 400;
      max-width: 210px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .medicinedetails_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > * {
      display: table-cell;
    }

    .price {
      width: 10%;
      p {
        font-size: 16px;
        font-weight: 500;
        color: ${primaryColors.black};
      }
    }
  }
  .empty_span {
    width: 100%;
    padding: 0 10px;
    span {
      position: relative;
      display: block;
      &::before {
        position: absolute;
        content: "";
        width: 100%;

        height: 1px;
        top: -1px;

        border-bottom: 1px dashed ${primaryColors.border_primary};
      }
    }
  }
  .medicine_details {
    display: flex;
    align-items: center;
    padding-left: 16px;
    width: max-content;

    position: relative;

    &::after {
      content: "";
      width: 6px;
      height: 6px;
      border-radius: 100%;
      background-color: #070707;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
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
      width: 100%;
      > * {
        display: table-cell;
      }
      .hover_para {
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
      .price {
        min-width: 70px;
        p {
          font-size: 16px;
          font-weight: 500;
          color: ${primaryColors.black};
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
  .medicine_wrapper {
    > * {
      &:not(:first-child) {
        margin-top: 0;
      }
    }
  }
  .collapse_table {
    border-spacing: 0 5px;
    tr {
      box-shadow: none !important;
      td {
        :not(:first-child, :last-child) {
          padding-left: 0;
        }
      }
    }
  }
  .mainTable_header {
    .order_id_th {
      text-align: left;
    }
    .branch_th {
      text-align: left;
    }
    .payout_th {
      text-align: right;
    }
    .commision_th {
      text-align: left;
    }
    .action_th {
      text-align: center;
    }
  }
  .total_amount {
    h4 {
      font-size: 28px;
      font-weight: 600;
      text-align: center;
    }
    p {
      font-size: 16px;
      font-weight: 500;
      text-align: center;
    }
  }

  .qty,
  .med_price,
  .med_total {
    text-align: center;
  }
  .total_amount_row {
    td {
      border-top: 1px solid ${primaryColors.bodyColor};
      border-radius: 0 !important;
    }
  }
  .hideTable_close {
    padding: 0;
  }
`;
