import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const PendingTokenDetailsSectionWrapper = styled(Box)`
  .pendingtokenDetailsWrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    @media (max-width: 899px) {
      flex-wrap: wrap;
    }

    .PendingtokenIdWrapper {
      display: flex;
      width: 100%;
      margin: 0 -12px;

      @media (max-width: 1535px) {
        margin: 0 -6px;
      }
      @media (max-width: 1199px) {
        flex-wrap: wrap;
        width: 100%;
      }
      @media (max-width: 899px) {
        margin: -5px -6px;
      }

      .pendingtokenid {
        display: flex;
        align-items: center;
        padding: 0 12px;
        @media (max-width: 1535px) {
          padding: 0 6px;
        }
        @media (max-width: 1199px) {
          padding-bottom: 10px;
        }
        @media (max-width: 899px) {
          padding: 5px 6px;
        }
        button {
          padding: 0;
          width: 24px;
          margin-left: 12px;
          min-width: auto;
          @media (max-width: 1199px) {
            width: 20px;
            margin-left: 5px;
          }
        }
        h3 {
          color: ${primaryColors.primary};
          font-size: 28px;
          font-weight: 600;
          line-height: 1.2;
          @media (max-width: 1199px) {
            font-size: 24px;
          }
          @media (max-width: 899px) {
            font-size: 22px;
          }
          @media (max-width: 599px) {
            font-size: 20px;
          }
        }
      }
      .warningTimer {
        padding: 0 12px;

        @media (max-width: 1535px) {
          padding: 0 6px;
        }
        @media (max-width: 899px) {
          padding: 5px 6px;
        }
        .warningTimerWrapper {
          display: flex;
          align-items: center;
          border-radius: 32px;
          background-color: ${primaryColors.errorLight};
          padding: 4px 12px 4px 6px;
          min-width: auto;
          @media (max-width: 599px) {
            min-width: auto;
            text-align: left;
          }
          i {
            display: inline-flex;
            width: 20px;
            margin-right: 4px;
            @media (max-width: 599px) {
              width: 14px;
            }
            img {
              width: 100%;
            }
          }
          p {
            color: ${primaryColors.danger_text};
            font-size: 16px;
            line-height: 1.5;
            @media (max-width: 1535px) {
              font-size: 14px;
            }
            @media (max-width: 599px) {
              font-size: 12px;
            }
          }
        }
      }
      .scheduletimer {
        .warningTimer {
          .warningTimerWrapper {
            background-color: ${primaryColors.bodyColor};
            min-width: 320px;
            @media (max-width: 375px) {
              min-width: auto;
            }
            p {
              color: ${primaryColors.mainFontColor};
            }
          }
        }
      }
    }
    .pendingtokenButtonWrapper {
      width: 100%;
      ul {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 0;
        justify-content: flex-end;
        @media (max-width: 899px) {
          justify-content: flex-start;
          padding-top: 10px;
        }
        li {
          margin-left: 16px;
          padding: 0;
          width: auto;
          @media (max-width: 1535px) {
            margin-left: 10px;
          }
          @media (max-width: 410px) {
            width: 100%;
            margin-left: 0 !important;
          }

          &:first-child {
            margin-left: 0px;
            margin-right: 20px;
            @media (max-width: 1535px) {
              margin-right: 15px;
            }
            @media (max-width: 1199px) {
              margin-right: 0px;
            }
          }

          .transpernetbtn {
            width: 100%;
            button {
              min-width: 204px;
              white-space: nowrap;
              @media (max-width: 1199px) {
                min-width: 140px;
              }
              @media (max-width: 599px) {
                min-width: auto;
              }
              @media (max-width: 410px) {
                min-width: 100%;
              }
            }
          }
          button {
            @media (max-width: 1199px) {
              padding: 10px;
              max-height: 40px;
            }
            @media (max-width: 410px) {
              width: 100%;
              margin-top: 10px;
            }
            p {
              @media (max-width: 1199px) {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
`;
