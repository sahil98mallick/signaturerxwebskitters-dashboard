import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const OpeningHoursWrapper = styled(Box)`
  .admin_acc_wrapper {
    margin-bottom: 40px;
  }
  .header_wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 32px;
    .headerWrapper_left {
      text-align: left;

      h3 {
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 8px;
      }
      p {
        font-weight: 16px;
        font-weight: 400;
      }
      @media (max-width: 599px) {
        margin-bottom: 10px;
      }
    }
  }
  .add_hour_content {
    overflow-x: auto;
  }
`;
