import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const HaederStackWrapper = styled(Stack)`
  margin-bottom: 40px;

  .left_stack {
    display: flex;
    align-items: center;
    @media (max-width: 1199px) {
    }
    i {
      display: flex;
      width: 32px;
      height: 32px;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background: ${primaryColors?.bodyColor};
    }
    h1 {
      padding-left: 12px;
      color: ${primaryColors?.primary};
    }
    h3 {
      font-size: 22px;
      font-weight: 600;
      padding-left: 8px;
      color: ${primaryColors?.primary};
    }
  }
  .search_field {
    margin-right: 32px;
  }
  .stack_each_btn {
    &:not(:last-child) {
      margin-right: 12px;
    }
  }
  .rgt_stack {
  }
`;
