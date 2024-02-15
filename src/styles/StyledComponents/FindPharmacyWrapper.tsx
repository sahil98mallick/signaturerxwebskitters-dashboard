import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const FindPharmacyWrapper = styled(Box)`
  .body_layout {
    @media (max-width: 1199px) {
      padding: 20px;
    }

    .cmn_block {
      @media (max-width: 1199px) {
        padding: 20px;
      }
      .search_field {
        .MuiFormControl-root {
          .MuiInputBase-root {
            @media (max-width: 1199px) {
              min-width: auto;
            }
            @media (max-width: 899px) {
              max-width: 300px;
            }
            @media (max-width: 599px) {
              max-width: 100%;
            }
          }
        }
      }
      .pharmacy_list {
       
        .MuiBox-root {
          @media (max-width: 1199px) {
            padding: 10px;
          }
          @media (max-width: 1199px) {
            padding: 20px;
          }

          .upper_stack {
            .avatr_image {
              @media (max-width: 1199px) {
                width: 40px;
                flex-basis: 40px;
              }
            }
            .pharma_details {
              @media (max-width: 1199px) {
                padding: 8px;
              }
              p {
                @media (max-width: 1199px) {
                  font-size: 14px;
                }
              }
            }
          }
          .lower_stack {
            .chip_list {
              li {
                &:not(:last-child) {
                  @media (max-width: 1199px) {
                    margin-right: 5px;
                  }
                }
                .MuiChip-root {
                    span{
                        @media (max-width: 1199px) {
                    font-size: 14px;
                  }
                    }
                }
              }
            }
          }
        }
      }
    }
    .map_view{
        .float_block {
            .MuiBox-root {
               
            }
        }
    }
  }
`;
