import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";
import assest from "json/assest";

export const OrderDetailPendingHeaderWrapper = styled(Box)`
  .orderdetailpendingboxwrap {
    padding: 8px 0;
    .orderdetailpendingbox {
      background-color: ${primaryColors?.white};
      padding: 32px;
      box-shadow: 0px 0px 2px 0px rgba(7, 7, 7, 0.08);
      border-radius: 24px;
      border: 1px solid ${primaryColors.border_primary};
      @media (max-width: 599px) {
        padding: 16px;
      }

      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        white-space: nowrap;
        @media (max-width: 899px) {
          flex-direction: column;
        }
        li {
          padding: 0;
          width: auto;
          @media (max-width:899px) {
           justify-content :center ;
           &:not(:first-child){
            margin-top: 20px;
           }
          }
          .pendingstatusHeaderWrapper {
            display: flex;
            align-items: center;
            padding: 4px 12px 4px 6px;
            box-shadow: 0px 0px 2px 0px rgba(7, 7, 7, 0.08);
            border-radius: 32px;
            background-color: ${primaryColors.white};
            border: 1px solid ${primaryColors.border_primary};
            &.activeStatusCancel {
          
            background-color: ${primaryColors.dangerColor} ;
            border: none ;

            p {
              color: ${primaryColors.danger_text} ;
            }
          
            }
            &.activeStatuscollected {
          
            background-color: ${primaryColors.success_color};
            border: none;

            p {
              color: ${primaryColors.text_success} ;
            }
          
            }
            &.activeStatusRejected {
          
            background-color: ${primaryColors.dangerColor} ;
            border: none ;

            p {
              color: ${primaryColors.textDanger} ;
            }
          
            }
            &.activeStatusAccept {
         
            background-color: ${primaryColors.success_color};
            border: none ;

            p {
              color: ${primaryColors.text_success};
            }
          
        }
            @media (max-width: 1199px) {
              padding: 3px 8px 3px 4px;
            }
           
          }

          i {
            display: inline-flex;
            width: 20px;
            @media (max-width: 1199px) {
              width: 15px;
            }

            img {
              width: 100%;
            }
          }
          p {
            margin-left: 4px;
            color: ${primaryColors.mainFontColor};
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 1.5;
            @media (max-width: 1199px) {
              font-size: 14px;
            }
          }
          &.blankspan {
            width: 100%;
            .empty_span {
              display: flex;
              justify-content: center;
              width: 90%;
              margin: 0 auto;
              height: 7px;
              background-image: url(${assest.statusbar});
              background-position: center;
              background-size: 100%;
              background-repeat: no-repeat;
              @media (max-width: 899px) {
                display: none;
              }
            }
            .arrw_dwn_icon{
              display: none;
              @media (max-width:899px) {
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
          }
          &.activeStatus {
          .pendingstatusHeaderWrapper {
            background-color: ${primaryColors.warning_color};
            border: none;

            p {
              color: ${primaryColors.warning_text};
            }
          }
        }
        }
        :first-child {
          margin-top: 0;
          min-width: 308px;
          @media (max-width: 1199px) {
            min-width: auto;
          }
        }
        
      }
    }
  }
`;
