import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const CustomTabWrapper = styled(Box)`
margin-left: 0%;

.MuiTabs-root {
  min-height: auto;
}
.main_tabWrapper {
  background-color: ${primaryColors.bodyColor};
  border-radius: 8px;
  padding: 4px;
  min-height: auto;

  

  .MuiButtonBase-root {
    padding: 12px 20px;
    width: auto;
    min-height: auto;
    color: ${primaryColors?.mainFontColor};
    @media (max-width: 399px) {
      padding: 8px 10px !important;
      min-width: auto;
    }
    &:hover {
      background-color: none !important;
    }
    &.Mui-selected {
      background-color: ${primaryColors.info};
      border-radius: 8px;
      border-bottom: none;
      color: ${primaryColors.white};
    }
  }
  .MuiTabs-indicator {
    display: none;
  }
}
`;