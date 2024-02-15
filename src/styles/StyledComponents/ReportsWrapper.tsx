import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const ReportsWrapper = styled(Box)`
  .reportsHeaderWrpper {
    .rgt_stack {
      @media (max-width: 599px) {
        width: 100%;
        margin-top: 10px;
      }
      .MuiStack-root{
        @media (max-width: 375px) {
      flex-wrap: wrap;
      width: 100%;
      }
        >:not(:first-child){
      @media (max-width: 375px) {
        margin-left: 0;
        margin-top: 10px;
      }
    }
    button{
      @media (max-width: 375px) {
        width: 100%;
      }
    }
      }
    }
  }
  .left_stack {
    h3 {
      @media (max-width: 599px) {
        font-size: 18px;
      }
    }
  }
  .cards_wrapper {
    margin-bottom: 48px;
    @media (max-width: 1199px) {
      margin-bottom: 30px;
    }
    @media (max-width: 899px) {
      margin-bottom: 25px;
    }
    @media (max-width: 599px) {
      margin-bottom: 20px;
    }
  }
  .innerheader_right {
    .MuiBox-root{
      @media (max-width: 375px) {
        min-width: 170px;
        .MuiInputBase-root {
          input{
            font-size: 13px;
          }
        }
      }
    }
    
    > :first-child {
      margin-right: 12px;
    }
    display: flex;
    justify-content: center;

    button {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    @media (max-width: 899px) {
      width: 100%;
      margin-top: 10px;
      
    }
   
  }
  .reportsDatePicker {
    padding-top: 0 !important;
   
  }

  .perfpormaceWrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 -12px;
    @media (max-width: 1399px) {
      margin: -12px;
    }
    @media (max-width: 599px) {
       
        margin: -6px 0;
      }
    
    .card {
      width: calc(100% / 3);
      padding: 0 12px;
      @media (max-width: 1199px) {
        width: calc(100% / 2);
        padding: 12px ;
      }
      @media (max-width: 599px) {
        width: 100%;
        padding: 6px 0;
      }
      .MuiPaper-root {
        @media (max-width: 1499px) {
          padding: 20px 12px;
        }
        .location {
          @media (max-width: 1199px) {
            margin-bottom: 18px;
          }
          @media (max-width: 899px) {
            margin-bottom: 15px;
          }
          p {
            @media (max-width: 899px) {
              font-size: 14px;
              text-align: left;
            }
          }
        }
        .bottom_buttons {
          @media (max-width: 899px) {
            flex-wrap: wrap;
            justify-content: space-between;
            margin-bottom: -10px;
          }
          button {
            @media (max-width: 1499px) {
              padding: 4px;
            }
            @media (max-width: 1199px) {
              padding: 4px 8px;
            }
            @media (max-width: 899px) {
              width: 48%;
              margin-bottom: 10px;
            }
            &:not(:first-child) {
              @media (max-width: 899px) {
                margin-left: 0;
              }
            }

            span {
              @media (max-width: 1499px) {
                margin-left: 6px;
              }
            }
            p {
              font-size: 15px;
            }
          }
        }
      }
    }
  }
  .payment_info_header_wrapper {
    h3{
      @media (max-width:899px) {
        
        font-size: 20px;
      }
    }
    margin-bottom: 24px;
    @media (max-width: 1199px) {
      margin-bottom: 20px;
    }
    .rgt_stack{
      @media (max-width: 1199px) {
      width: 100%;
      margin-top: 10px;
    }
    }
  }
  .payout_summary {
    display: flex;
    flex-wrap: wrap;
   
   

    > :not(:last-child) {
      margin-right: 12px;
      @media (max-width:899px) {
        
        margin-bottom: 10px;
      }
      @media (max-width:499px) {
        margin-right: 0;
        width: 100%;
      }
    }
    .MuiInputBase-root {
      min-height: 48px;
    }
   
    .sort_filter {
      @media (max-width:499px) {
        
        width: 100%;
        
      }
      .MuiInputBase-root {
       
        @media (max-width:499px) {
          
        width: 100%;
      }
      }
    }
  }
  #date,
  #Branches,
  #Orders {
    p {
      font-size: 16px;
      font-weight: 500;
      color: ${primaryColors.black};
    }
  }
  .payout_summary_details_card {
    padding: 8px 12px 8px 8px;
    border-radius: 4px;
    box-shadow: 0px 0px 2px 0px rgba(7, 7, 7, 0.08);
    border: 1px solid ${primaryColors.bodyColor};
    background: ${primaryColors.white};
    .heading {
      font-size: 16px;
      font-weight: 600;
      color: ${primaryColors.black};
      margin-bottom: 4px;
    }
  }
`;
