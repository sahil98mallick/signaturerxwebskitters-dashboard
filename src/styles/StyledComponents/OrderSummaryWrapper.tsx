import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const OrderSummaryWrapper = styled(Box)`
  .header_wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 40px;
    .header_left {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      h1 {
        font-size: 28px;
        font-weight: 600;
        color: ${primaryColors.primary};
        @media (max-width: 599px) {
          font-size: 24px;
        }
      }

      .MuiStack-root {
        @media (max-width: 599px) {
          width: 100%;
        }
      }
      @media (max-width: 899px) {
        margin-bottom: 12px;

        .MuiStack-root {
          margin-bottom: 12px;
        }
      }
    }
  }

  .pharmacy_doctor_wrapper {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .doctor_wrapper,
    .pharmacy_wrapper {
      width: 49%;

      @media (max-width: 1199px) {
        width: 100%;
      }
    }

    .doctor_wrapper {
      @media (max-width: 1199px) {
        margin-bottom: 16px;
      }
    }
    .section_header {
      margin-bottom: 12px;
      p {
        font-size: 16px;
        font-weight: 500;
        color: ${primaryColors.primary};
      }
    }
    .doctor_wrapper,
    .pharmacy_wrapper {
      h4 {
        font-size: 28px;
        font-weight: 600;
        text-align: left;
        margin-bottom: 12px;
        @media (max-width: 599px) {
          font-size: 20px;
        }
        @media (max-width: 399px) {
          font-size: 16px;
        }
      }

      .pharma_name {
        @media (max-width: 599px) {
          margin-left: 8px;
        }
        p {
          text-align: left;
          @media (max-width: 599px) {
            margin-left: 4px;
          }
        }
      }

      button {
        @media (max-width: 599px) {
          margin-top: 12px;
        }
      }
    }
    .pharmacy_wrapper {
      padding-left: 48px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      @media (max-width: 1199px) {
        padding-left: 0;
      }
      @media (max-width: 599px) {
        flex-wrap: wrap;
      }
    }
    .doctor_bottom_icon {
      display: flex;
      flex-wrap: wrap;
      align-items:center;
      .separtor {
        @media (max-width: 599px) {
          display: none;
        }
      }
      .MuiStack-root {
        svg {
          width: 20px;
        }
        p {
          font-size: 16px;
          font-weight: 400;
        }
        :first-child {
          margin-right: 12px;
          @media (max-width: 599px) {
            margin-bottom: 10px;
            margin-right: 0;
          }
        }

        :last-child {
          margin-left: 12px;
          @media (max-width: 599px) {
            margin-left: 0;
          }
        }
      }
    }
  }
  .section_separator {
    height: auto;
    width: 2px;
    background-color: ${primaryColors.borderprimary};
    @media (max-width: 1199px) {
      display: none;
    }
  }
  .pharmacy_image {
    max-width: 72px;
    height: 72px;

    width: 100%;
    @media (max-width: 599px) {
      max-width: 56px;
      height: 56px;
    }
    @media (max-width: 399px) {
      max-width: 48px;
      height: 48px;
    }
    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .date_pricker_chip {
    padding: 4px 12px 4px 6px;
    svg {
      width: 16px;
      height: 16px;
    }
    .MuiChip-label {
      font-size: 16px;
      font-weight: 400;
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
