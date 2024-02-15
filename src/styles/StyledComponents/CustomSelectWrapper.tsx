import styled from "@emotion/styled";
import { Select } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const CustomSelectWrapper = styled(Select)`
  &.MuiOutlinedInput-root {
    background-color: ${primaryColors.white};
    padding: 10px 12.5px;

    border-radius: 8px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.06);
    min-width: 200px;
    .MuiSelect-select {
      padding: 0;

      color: ${primaryColors.black};
      font-size: 16px;
      font-weight: 500;
      text-align: left;
      img {
        margin-right: 8px;
      }

      .MuiStack-root {
        &.pending {
          color: ${primaryColors.pendingTextColor};
        }
        &.collected {
          color: ${primaryColors.deepGreen};
        }
        &.rejected {
          color: ${primaryColors.danger_text};
        }
      }
    }
    fieldset {
      border: 1px solid ${primaryColors.borderprimary};
    }
    .MuiSelect-icon {
      padding: 0;
      line-height: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;
