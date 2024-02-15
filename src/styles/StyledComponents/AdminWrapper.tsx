import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const MainWrapper = styled(Box)`
  text-align: left;

  .company_information_wrapper {
    margin-bottom: 40px;
  }
  i.company_logo {
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background: ${primaryColors?.bodyColor};
    margin-bottom: 20px;
    overflow: hidden;
    @media (max-width:599px) {
      width: 100px;
      height: 100px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  p.label_txt {
    color: ${primaryColors?.textPrimaryColor};
    font-size: 16px;
    margin-bottom: 10px;
  }
  .option_btn {
    display: flex;
    align-items: center;
    button {
      &:not(:last-child) {
        margin-right: 12px;
      }
      p {
        margin: 0;
        color: ${primaryColors?.white};
      }
    }
  }
  .box_check {
    margin-left: auto;
    @media (max-width: 675px) {
      margin-left: 0;
    }
    
    .MuiFormControlLabel-label {
      color: ${primaryColors?.textPrimaryColor};
      font-size: 16px;
      @media (max-width: 599px) {
     font-size: 15px;
    }
    }
    .MuiFormControlLabel-labelPlacementEnd {
      margin-bottom: 0 !important;
    }

    &.Mui-checked {
      color: ${primaryColors.success_color};
    }
  }
  .form_group {
    .MuiFormControl-root {
      .MuiInputBase-root {
        padding: 0 16px;
        input {
          padding: 9.5px 0 13.5px 0;
          line-height: 1;
        }
        textarea {
          padding: 10px 0;
          height: auto !important;
        }
      }
    }
    .MuiOutlinedInput-root{
      min-width: 100%;
    }
  }
  .form_select {
    &.MuiOutlinedInput-root {
      padding: 12.5px 12.5px;
      border: 0;
      fieldset {
        border: 1px solid ${primaryColors?.borderprimary};
      }
      input {
        & + div {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .MuiSelect-select {
        color: ${primaryColors?.mainFontColor};
        font-weight: 400;
      }
    }
  }
  .btn_otr {
    display: flex;
    justify-content: flex-end;
  }
  .info_stack {
    h2 {
      margin-bottom: 8px;
    }
  }

  .payment_infoBox {
    display: flex;
    align-items: center;
    padding: 10px 12px;
    justify-content: flex-start;
    border: 1px solid ${primaryColors.border_primary};
    background: ${primaryColors.white};
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.06);
    border-radius: 12px;
    margin-bottom: 24px;
    svg {
      width: 24px;
      height: 24px;
    }
    button {
      margin-left: auto;
      width: auto;
      
      @media (max-width:499px) {
          padding: 4px 8px;
      }
    }
    .MuiFormControlLabel-root {
      margin-left: auto;
    }
    .icon_wrapper {
      width: 48px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${primaryColors.bodyColor};
      border-radius: 50%;
      margin-right: 12px;
      @media (max-width:599px) {
        display: none;
      }
    }
    .box_middle {
      .bold_text {
        font-style: 16px;
        font-weight: 600;
        color: ${primaryColors.black};
        margin-bottom: 4px;
      }
      p {
        font-style: 16px;
        font-weight: 400;
      }
    }
  }
  .payment_sections {
    margin-bottom: 48px;
  }
  .page_navigation_wrapper {
    @media (max-width: 1199px) {
      display: flex;
      margin-bottom: 24px;
      a {
        margin-bottom: 0 !important;

        &:not(:last-child) {
          margin-right: 16px;
        }
      }
    }
    @media (max-width: 799px) {
      display: block;
      a {
        &:not(:last-child) {
          margin-bottom: 16px !important;
        }
      }
    }
    @media (max-width:599px) {
        padding: 8px;
        a{
          padding: 8px !important;
          p{
            font-size: 14px !important;
          }
        }
    }
    padding: 16px;
    background-color: ${primaryColors.white};
    border-radius: 8px;
    box-shadow: 0px 4px 24px 0px rgba(7, 7, 7, 0.06);
    a {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }

    .page_navigation {
      width: 100%;
      border-radius: 8px;
      border: 1px solid ${primaryColors.bodyColor};
      padding: 16px;
      box-shadow: 0px 0px 2px 0px rgba(7, 7, 7, 0.08);

      span,
      p {
        color: ${primaryColors.mainFontColor};
        font-size: 16px;
        font-weight: 600;
        transition: all ease-in 0.2s;
      }
      :focus,
      :hover {
        border: 1px solid ${primaryColors.primary};
        p {
          color: ${primaryColors.black};
          position: relative;
          margin-left: 8px;
          transition: all ease-in 0.2s;

          ::before {
            content: "";
            position: absolute;
            left: -10px;
            top: 50%;
            transform: translateY(-50%);
            height: 16px;
            width: 4px;
            border-radius: 16px;
            background-color: ${primaryColors.primary};
            transition: all ease-in 0.2s;
          }
        }
      }
    }
  }
`;
