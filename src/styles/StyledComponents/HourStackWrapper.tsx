import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const HourStackWrapper = styled(Box)`
  border-radius: 8px;
  border: 1px solid ${primaryColors?.borderprimary};
  background: ${primaryColors?.white};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.06);
  padding: 10px 12.5px;

  @media (max-width: 899px) {
    width: 700px;
  }
  h6 {
    color: ${primaryColors?.textPrimaryColor};
    font-size: 16px;
    font-weight: 600;
  }
  .MuiFormControlLabel-label {
    color: ${primaryColors?.textPrimaryColor};
    font-size: 16px;
  }
  &:not(:last-child) {
    margin-bottom: 32px;
  }
  .time_list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    li {
      padding: 0 10px;
      width: auto;
      &:not(:last-child) {
        &::after {
          content: "";
          width: 12px;
          height: 2px;
          border-radius: 16px;
          background: ${primaryColors?.textPrimaryColor};
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          z-index: 5;
          @media (max-width: 899px) {
            display: none;
          }
        }
      }
    }
    .MuiChip-root {
      border-radius: 8px;
      border: 1px solid ${primaryColors?.borderprimary};
      background: ${primaryColors?.white};
      box-shadow: 0px 0px 2px 0px rgba(7, 7, 7, 0.08);
      padding: 12px 20px;
      height: auto;
      min-width: 114px;
      .MuiChip-label {
        padding: 0;
        color: ${primaryColors?.textPrimaryColor};
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
  .each_item {
    &:last-child {
      width: 20%;
      text-align: center;
    }
    :first-child {
      min-width: 100px;
    }
    :nth-child(2) {
      min-width: 100px;
    }

    h6 {
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }

    &:not(:last-child) {
      width: 10%;
    }
    &:not(:last-child) {
      width: 10%;
    }

    &.time_box {
      width: 50%;

      .time_list {
        justify-content: flex-end;
        li {
          @media (max-width: 899px) {
            padding: 0 4px;
            .MuiChip-root {
              padding: 6px 12px;
            }
          }
        }
      }
    }
  }
  .simple_btn {
    min-width: auto;
    padding: 0;
    font-size: 16px;
    color: ${primaryColors?.primary};
    background-color: transparent;
    &:hover {
      background-color: transparent;
      color: ${primaryColors?.text_success};
    }
  }
`;
