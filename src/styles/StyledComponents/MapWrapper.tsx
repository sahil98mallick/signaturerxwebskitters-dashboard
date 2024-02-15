import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const MapWrapper = styled(Box)`
  line-height: 1;
  font-size: 0;
  .map_view {
    position: relative;
    border-radius: 8px;
    figure {
      height: 753px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    #map {
      height: 753px !important;
    }
  }
`;
