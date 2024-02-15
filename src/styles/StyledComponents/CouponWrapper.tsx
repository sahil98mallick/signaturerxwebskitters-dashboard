import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const CouponWrapper = styled(Box)`
  border-radius: var(--gap-8, 8px);
  border: 1px solid ${primaryColors?.borderprimary};
  box-shadow: 0px 0px 2px 0px rgba(7, 7, 7, 0.08);
  padding: 12px;
  margin-bottom: 24px;
  @media (max-width:899px) {
    margin-bottom: 20px;
   

    }
  .rgt_part {
    text-align: left;
  }
  .coupon_id {
    color: ${primaryColors?.primary_600};
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  .coupn_para {
    display: flex;
    align-items: center;
    font-size: 16px;
    @media (max-width:599px) {
      font-size: 14px;

    }
    i {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 8px;
      @media (max-width:1199px) {
        margin-right: 5px;
        width: 16px;

    }
    }
  }
  .lft_part {
    button {
      padding: 5px;
      height: 32px;
      min-width: 70px;
      justify-content: center;
      p {
        font-size: 16px;
        line-height: 1;
      }
    }
  }
`;
