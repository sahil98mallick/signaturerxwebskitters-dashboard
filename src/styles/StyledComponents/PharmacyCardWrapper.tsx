import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const PharmacyCardWrapper = styled(Box)`
  border-radius: 8px;
  border: 1px solid ${primaryColors?.borderprimary};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.06);
  padding: 16px;
  position: relative;
  &.active {
    border: 1px solid ${primaryColors?.primary};
    box-shadow: 0 0 0 2px rgba(88, 112, 208, 0.6);
  }
  /* &:after{
      content:"";
      border-radius: 8px;
      background-color:transparent;
      border:1px solid ${primaryColors?.primary_600};
      position:absolute;
      left:-2px;
      top:-2px;
      bottom:-2px;
      right:-2px;
      
  } */
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  .avatr_image {
    width: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    overflow: hidden;
    flex-basis: 52px;
  }
  .pharma_details {
    flex-basis: calc(100% - 52px);
    max-width: calc(100% - 52px);
    padding-left: 12px;
    text-align: left;
    h5 {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 3px;
    }
    p {
      font-size: 16px;
    }
  }
  .chip_list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    li {
      width: auto;
      &:not(:last-child) {
        margin-right: 12px;
      }
    }
  }
  .location_chip {
    border-radius: 32px;
    background: ${primaryColors?.pendingColor};
    display: flex;
    padding: 4px 12px 4px 6px;
    align-items: center;
    .MuiChip-label {
      color: ${primaryColors?.pendingTextColor};
      text-align: center;
      padding: 0;
      font-size: 16px;
      font-weight: 400;
      line-height: 1;
      margin-left: 4px;
    }
  }
  .price_para {
    color: ${primaryColors?.textPrimaryColor};
    text-align: center;
    font-family: Work Sans;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
  }
  .lower_stack {
    padding-top: 12px;
    border-top: 1px solid ${primaryColors?.bodyColor};
  }
  .upper_stack {
    padding-bottom: 8px;
  }
`;
