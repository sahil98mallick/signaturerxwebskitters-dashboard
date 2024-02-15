import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const PayoutOverViewWrapper = styled(Box)`
  .left_stack {
    @media (max-width: 599px) {
      margin-bottom: 12px;
    }
  }
  .header_section_wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 40px;
  }
  .header_section_left {
    @media (max-width: 1199px) {
      margin-bottom: 12px;
    }
    @media (max-width: 599px) {
      margin-bottom: 20px;
    }
    .pharmacy_name {
      display: flex;
      margin-bottom: 16px;

      h2 {
        font-size: 28px;
        font-weight: 600;
        margin-right: 8px;
        @media (max-width: 599px) {
          font-size: 24px;
        }
      }
      button {
        padding: 4px 10px;
        box-shadow: none;
        span {
          width: 12px;
          height: 12px;
          border-radius: 50px;

          margin-right: 6px;
        }
        border-radius: 50px;
        font-size: 13px;
        font-weight: 500;

        :hover {
          box-shadow: none;
        }

        &.online {
          background-color: var(--online-button);

          border: none;
          span {
            background-color: var(--color7CD1D2);
          }
          p {
            color: var(--color3C8183);
          }
        }

        &.offline {
          border: none;
          background-color: var(--bodyColor);
          span {
            background-color: var(--mainFontColor);
          }
          p {
            color: var(--mainFontColor);
          }
        }
      }
    }
    .pharmacy_bottom_wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    .pharmacy_bottom {
      display: flex;
      flex-wrap: wrap;
      margin: 0 6px;
      img,
      svg {
        width: 20px;
        margin-right: 6px;
      }
      :first-child {
        margin-left: 0;
      }

      .empty_span {
        @media (max-width: 600px) {
          display: none;
        }
      }
    }
  }
  .header_section_right {
    display: flex;
    flex-wrap: wrap;
    .info_buttons {
      text-align: left;
      :not(:last-child) {
        margin-right: 48px;

        @media (max-width: 899px) {
          margin-right: 16px;
        }
      }
      h5 {
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 11px;
        line-height: 1.1;
        @media (max-width: 599px) {
          font-size: 22px;
        }
      }
      img {
        width: 20px;
      }
      p {
        font-size: 16px;
        font-weight: 400;
        @media (max-width: 599px) {
          font-size: 14px;
        }
      }
      @media (max-width: 599px) {
        width: 50%;
        margin-right: 0 !important;
      }
    }
  }

  .filter_wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    flex-wrap: wrap;

    .filter_left {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      @media (max-width: 899px) {
        margin-bottom: 12px;
      }
      @media (max-width: 599px) {
        width: 100%;
        .MuiInputBase-root {
          width: 100%;
        }
      }
      .filter {
        margin-right: 12px;
        @media (max-width: 499px) {
          margin-bottom: 12px;
          width: 100%;
          margin-right: 0;
          .MuiInputBase-root {
            width: 100%;
          }
        }
      }
      .sort_filter {
        @media (max-width: 499px) {
          width: 100%;
          .MuiInputBase-root {
            width: 100%;
          }
        }
      }
    }
    .filter_right {
      @media (max-width: 499px) {
        width: 100%;
        .MuiInputBase-root {
          width: 100%;
        }
      }
    }
  }

  &.activeStatuscollected {
    background-color: ${primaryColors.success_color};
    border: none;

    p {
      color: ${primaryColors.text_success};
    }
  }
`;
