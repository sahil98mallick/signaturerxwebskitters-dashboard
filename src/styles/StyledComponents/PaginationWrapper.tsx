import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";
import assest from "json/assest";

export const PaginationWrapper = styled(Box)`
  .paginationsection {
    background-color: ${primaryColors.white};
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
    @media (max-width: 680px) {
      justify-content: center;
    }
    .Paginationdropdown {
      ul {
        display: flex;
        padding: 0;
        align-items: center;
        li {
          padding: 0;
          margin-right: 8px;

          &:last-child {
            margin-right: 0;
          }
          p {
            color: ${primaryColors.textPrimaryColor};
            font-size: 16px;
            font-weight: 500;
            line-height: 1.5;
          }

          .MuiBox-root {
            width: 65px;
            border: 1px solid ${primaryColors.border_primary};
            border-radius: 8px;
            box-shadow: 0px 0px 2px 0px rgba(7, 7, 7, 0.08);
            background-color: ${primaryColors.white};
            .MuiFormControl-root {
              .MuiSelect-select {
                padding: 10px 12px;
                background: url(${assest.dropdown}) no-repeat center right 10px;
                background-size: 16px;
                color: ${primaryColors.textPrimaryColor};
                font-size: 16px;
                font-weight: 500;
                @media (max-width: 680px) {
                  padding: 5px 8px;
                }
              }
              .MuiOutlinedInput-notchedOutline {
                display: none;
              }
              .MuiSvgIcon-root {
                display: none;
              }

              .MuiPaper-root {
                .MuiList-root {
                  li {
                    color: ${primaryColors.textPrimaryColor};
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 1.5;
                  }
                }
              }
            }
          }
        }
      }

      @media (max-width: 680px) {
        margin-bottom: 12px;
      }
    }
    .paginationSetionWrapper {
      .MuiPagination-ul {
        li {
          .MuiPaginationItem-root {
            color: ${primaryColors.textPrimaryColor};
            font-size: 16px;
            font-weight: 500;
            line-height: 2.5;
            width: 40px;
            height: 40px;
            box-shadow: 0px 0px 2px 0px rgba(7, 7, 7, 0.08);
            border-radius: 8px;
            background-color: ${primaryColors.white};
            border: 1px solid ${primaryColors.disabledBg};

            @media (max-width: 599px) {
              width: 30px;
              height: 30px;
              font-size: 13px;
            }
            @media (max-width: 399px) {
              width: 22px !important;
              height: 22px !important;
              font-size: 13px !important;
              min-width: auto;
            }
          }
          .MuiButtonBase-root {
            @media (max-width: 599px) {
              width: 30px !important;
              height: 30px !important;
              font-size: 13px !important;
            }
            @media (max-width: 399px) {
              width: 22px !important;
              height: 22px !important;
              font-size: 13px !important;
              min-width: auto;
            }
          }

          @media (max-width: 399px) {
            .MuiPaginationItem-ellipsis {
              padding: 0;
              line-height: 1;
            }
          }
          .MuiButtonBase-root {
            width: 40px;
            height: 40px;
            box-shadow: 0px 0px 2px 0px rgba(7, 7, 7, 0.08);
            border-radius: 8px;
            background-color: ${primaryColors.white};
            border: 1px solid ${primaryColors.disabledBg};
            text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08);
            color: ${primaryColors.textPrimaryColor};
            font-size: 16px;
            font-weight: 500;
            line-height: 1.5;

            .MuiSvgIcon-root {
              font-size: 25px;
            }
          }

          .Mui-selected {
            border: 1px solid ${primaryColors.primary};
            color: ${primaryColors.primary};
          }
        }
      }
    }
  }
`;
