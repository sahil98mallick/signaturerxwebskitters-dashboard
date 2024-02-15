import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const OrderOverviewWrapper = styled(Box)`
  .left_stack {
    margin-bottom: 12px;
  }
  .header_wrapper {
    margin-bottom: 46px;

    .headr_right {
      display: flex;
      flex-wrap: wrap;

      button {
        &.walkin_btn {
          margin-right: 32px;
        }
      }
    }
  }

  .header_section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 40px;

    .header_section_left {
      @media (max-width: 1199px) {
        margin-bottom: 12px;
      }
      .pharmacy_name {
        display: flex;
        margin-bottom: 16px;
        @media (max-width: 599px) {
          h2 {
            font-size: 20px !important;
          }
          button {
            padding: 2px 8px !important;
          }
        }
        h2 {
          font-size: 28px;
          font-weight: 600;
          margin-right: 8px;
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
        img {
          width: 20px;
          margin-right: 6px;
        }
        :first-child {
          margin-left: 0;
        }

        @media (max-width: 545px) {
          :last-child {
            margin: 6px 0 0 0;
          }
        }
      }
    }
    .empty_span {
      @media (max-width: 599px) {
        display: none !important;
      }
    }

    .header_section_right {
      display: flex;
      flex-wrap: wrap;
      .info_buttons {
        text-align: left;
        :not(:last-child) {
          margin-right: 48px;
          @media (max-width: 599px) {
            margin-right: 12px;
          }
        }
        h5 {
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 11px;
          line-height: 1.1;
          @media (max-width: 599px) {
            font-size: 24px;
          }
        }
        img {
          width: 20px;
          @media (max-width: 599px) {
            width: 18px;
          }
        }
        p {
          font-size: 16px;
          font-weight: 400;
          @media (max-width: 599px) {
            font-size: 14px;
          }
        }
      }
    }
  }
  .filter_wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 25px;
    .filter_left {
      display: flex;
      flex-wrap: wrap;
      @media (max-width: 1031px) {
        margin-bottom: 10px;
      }
      > * {
        margin-right: 12px;
      }

      .MuiInputBase-root {
        width: auto;

        @media (max-width: 400px) {
          width: 100%;
          :first-child {
            margin-bottom: 10px;
          }
        }
      }
      /* flex-wrap: wrap; */

      .filter_tab {
        margin-right: 10px;
        @media (max-width: 731px) {
          margin-top: 10px;
        }
        @media (max-width: 400px) {
          /* margin-right: 0; */
          width: 100%;
        }
      }
    }
    .filter_right {
      @media (max-width: 1031px) {
        margin-bottom: 10px;
      }
      @media (max-width: 375px) {
        width: 100%;
        margin-right: 12px;
      }
    }
  }
`;
