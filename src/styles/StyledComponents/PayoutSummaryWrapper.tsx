import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const PayoutSummaryWrapper = styled(Box)`
  .MuiChip-root {
    &.pending {
      svg,
      img {
        width: 20px;
        height: 20px;
      }
    }
    &.paid {
      svg,
      img {
        width: 20px;
        height: 21px;
        margin-left: 5px;
        margin-right: -5px;
      }
    }
  }
  .mainTable_header {
    th {
      &:not(:first-of-type) {
        text-align: center;
      }
      &.status_th{
        text-align: left;
      }
      :last-child {
        text-align: left;
      }
    }
  }
`;
