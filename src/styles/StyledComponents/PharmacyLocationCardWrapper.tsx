import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const PharmacyLocationCardWrapper = styled(Box)`
  width: 320px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 24px 0px rgba(7, 7, 7, 0.06);
  padding: 24px;
  text-align: left;
  position: absolute;
  left: 16px;
  top: 50%;
  height: calc(100% - 32px);
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 599px) {
    width: auto;
  }
  .avatar_image {
    margin-bottom: 15px;
    i {
      width: 80px;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  h4 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .details_list {
    li {
      i {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 6px;
      }
      &:not(:last-child) {
        margin-bottom: 15px;
      }
      p {
        color: ${primaryColors.textPrimaryColor};
      }
    }
  }
  .collapse_item {
    i {
      margin-bottom: auto;
      margin-top: 5px;
    }
  }
  .left_stack,
  .rgt_stack {
    display: flex;
    align-items: center;
    p {
      color: ${primaryColors?.textPrimaryColor};
      font-size: 16px;
      span {
        color: ${primaryColors?.textPrimaryColor};
        font-size: 16px;
      }
    }
  }
  .mapDayslist {
    width: 100%;
    ul {
      li {
        display: flex;
        width: 100%;
        justify-content: space-between;
      }
    }
  }
  .time_stack {
    justify-content: space-between;
    min-width: calc(100% - 21px);
  }
  .status_chips {
    margin-right: 12px;
  }
  .collapse_btn {
    padding: 0;
    min-width: auto;
    background-color: transparent;
    &:hover {
      background: transparent;
    }
  }
  .show_list {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 8px;
    li {
      p {
        color: ${primaryColors?.textPrimaryColor};
        font-size: 16px;
        span {
          color: ${primaryColors?.textPrimaryColor};
          font-size: 16px;
        }
      }
      &:first-child {
        p {
          font-weight: 600;
          span {
            font-weight: 600;
          }
        }
      }
      &:not(:last-child) {
        margin-bottom: 8px;
      }
      width: 100%;
      justify-content: space-between;
    }
  }
  .card_btn_otr {
    margin-top: auto;
    button {
      width: 100%;
      justify-content: center;
    }
  }
`;
