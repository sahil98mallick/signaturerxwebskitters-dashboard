import styled from "@emotion/styled";
import { Dialog } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const ModalWrapper = styled(Dialog)`
  .collectbtn {
    &.MuiPaper-root {
      max-width: 500px;
      box-shadow: 0px 4px 24px 0px rgba(7, 7, 7, 0.06);
      border-radius: 24px;

      .modalsectionBox {
        overflow-y: auto;

        .MuiDialogContent-root {
          padding: 32px;

          figure {
            margin: 0 auto;
            width: 140px;

            @media (max-width: 899px) {
              width: 100px;
            }

            @media (max-width: 599px) {
              width: 80px;
            }

            img {
              width: 100%;
            }
          }

          > h4 {
            padding: 24px 0 12px 0;
            text-align: center;
            font-size: 28px;
            font-weight: 600;
            color: var(--textPrimaryColor);
            line-height: 1.2;

            @media (max-width: 899px) {
              font-size: 24px;
              padding: 15px 10px;
            }

            @media (max-width: 599px) {
              font-size: 22px;
            }
          }

          > p {
            text-align: center;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 155%;
            color: var(--mainFontColor);
          }

          .selectsection {
            padding: 24px 0 48px;

            @media (max-width: 899px) {
              padding: 16px 0;
            }

            .MuiInputBase-root {
              max-height: 48px;
              min-height: 48px;
              border-radius: 8px;

              box-shadow: 0px 0px 2px 0px rgba(7, 7, 7, 0.08);
              background-color: var(--white);
              width: 100%;

              .MuiSelect-select {
                font-weight: 400;
                color: var(--textPrimaryColor);
              }
            }

            .MuiBox-root {
              .datepickerSectionWrap {
                margin-top: 16px;

                input {
                  background-position: center right 12px;
                }

                .MuiInputBase-root {
                  padding: 0;

                  .MuiInputAdornment-root {
                    margin-left: 0;
                  }
                }
              }
            }
          }

          .modalbtnWrapper {
            margin: 0 -8px;

            .each_btn {
              padding: 0 8px;
              width: 50%;

              > button {
                min-width: 100%;
                justify-content: center;
              }

              @media (max-width: 599px) {
                width: 100%;

                margin-bottom: 12px;
              }
            }
          }
        }
      }
    }
  }

  .fileUploadBox {
    padding: 36px 36px;
    border-radius: 12px;
    border: 2px dashed ${primaryColors.border_primary};
    width: 100%;
    text-align: center;
    color: ${primaryColors.mainFontColor};
    margin-bottom: 20px;

    p {
      font-size: 16px;
      font-weight: 600;
      color: ${primaryColors.mainFontColor};

      span {
        font-size: inherit;
        font-weight: inherit;
        color: #429bf5;
      }
    }
  }
  .adminModal {
    &.payorder {
      max-width: 540px;
      width: 100%;
      margin: 0 auto;

      .modalImage {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 24px;

        img {
          width: 120px;

          @media (max-width: 1199px) {
            width: 80px;
          }
        }
      }

      .card_details_input {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin: 0 -12px;

        .form_group {
          width: 50% !important;

          @media (max-width: 599px) {
            width: 100% !important;
          }

          padding: 0 12px;

          .MuiBox-root {
            min-width: 100% !important;
          }

          .MuiInputBase-adornedEnd {
            min-width: 100% !important;
          }
        }
      }
    }

    &.MuiPaper-root {
      min-width: auto;
      width: 100%;
      border-radius: 24px;
      background-color: var(--white);
      box-shadow: 0px 4px 24px 0px rgba(7, 7, 7, 0.06);

      .modalsectionBox {
        overflow-y: auto;

        .MuiDialogContent-root {
          padding: 32px;

          @media (max-width: 375px) {
            padding: 20px 15px;
          }

          .adminModalWrapper {
            /* min-height: 450px; */
            .adminModalTitle {
              text-align: center;
              padding-bottom: 24px;

              h3 {
                color: var(--textPrimaryColor);
                font-size: 28px;
                font-style: normal;
                font-weight: 600;
                line-height: 1.2;
                padding-bottom: 12px;

                @media (max-width: 599px) {
                  font-size: 20px;
                }
              }

              p {
                font-size: 16px;

                @media (max-width: 599px) {
                  font-size: 14px;
                }
              }
            }

            .form_group {
              margin-bottom: 24px;

              @media (max-width: 599px) {
                margin-bottom: 12px;
              }

              p {
                font-size: 16px;
                color: var(--textPrimaryColor);
                padding-bottom: 6px;
              }

              .Mui-error {
                color: ${primaryColors.errorMain} !important;
              }

              .MuiFormControl-root {
                .MuiInputBase-root {
                  padding: 10px 12.5px;

                  input {
                    padding: 1.5px 0;
                  }
                }
              }

              .passwordlengthIndicator {
                display: flex;
                align-items: center;
                padding-top: 6px;

                i {
                  display: inline-block;
                  width: 16px;
                  margin-right: 4px;

                  img {
                    width: 100%;
                  }
                }

                p {
                  font-size: 13px;
                  color: var(--mainFontColor);
                }
              }
            }

            .adminModalButtonWrapper {
              margin: 0 -8px;
              padding-top: 24px;

              .each_btn {
                padding: 0 8px;
                width: 50%;

                @media (max-width: 375px) {
                  width: 100%;
                  margin-bottom: 10px;
                }

                > button {
                  min-width: 100%;
                  justify-content: center;
                }
              }
            }
          }
        }
      }
    }
  }
`;
