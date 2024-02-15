import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";
import assest from "json/assest";
import { Link } from "react-router-dom";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import Datepickersection from "ui/Datepicker/Datepickersection";
const ConfirmDobWrapper = styled(Box)`
  padding: 0;
  .confirmationForm {
    height: calc(100vh - 16px);
    @media (max-width: 1199px) {
      height: auto;
    }
    .confirmDobHeader {
      padding: 19px 32px;
      a {
        width: 139px;
        display: inline-block;
        @media (max-width: 899px) {
          width: 120px;
        }
        @media (max-width: 599px) {
          width: 90px;
        }
        img {
          width: 100%;
        }
      }
    }
    .confirmDobBody {
      height: calc(100% - 80px);
      padding: 30px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 1199px) {
        height: auto;
        padding: 40px 0;
      }

      .confirmDobformWrap {
        max-width: 500px;
        margin: 0 auto;
        background-color: ${primaryColors.white};
        box-shadow: 0px 4px 24px 0px rgba(7, 7, 7, 0.06);
        border-radius: 24px;
        padding: 32px;
        @media (max-width: 599px) {
          padding: 20px;
          border-radius: 15px;
        }
        figure {
          width: 100px;
          margin: 0 auto;
          line-height: 0;
          @media (max-width: 1199px) {
            width: 70px;
          }
          @media (max-width: 899px) {
            width: 60px;
          }

          img {
            width: 100%;
          }
        }
        h3 {
          color: ${primaryColors.textPrimaryColor};
          text-align: center;
          font-size: 28px;
          line-height: 1.2;
          padding: 24px 0 12px;
          @media (max-width: 899px) {
            font-size: 26px;
          }
          @media (max-width: 599px) {
            font-size: 24px;
          }
          @media (max-width: 375px) {
            font-size: 20px;
          }
          i {
            display: inline-flex;
            width: 28px;
            margin-left: 6px;
            @media (max-width: 599px) {
              width: 24px;
            }
            @media (max-width: 375px) {
              width: 20px;
            }
            img {
              width: 100%;
            }
          }
        }
        p {
          text-align: center;
          font-size: 16px;
          @media (max-width: 499px) {
            font-size: 14px;
          }
        }
        .forminputBox {
          padding: 24px 0 32px;
          @media (max-width: 599px) {
            padding: 15px 0 25px;
          }
          @media (max-width: 375px) {
            padding: 15px 0 20px;
          }
          .datepickerSectionWrap {
            input {
              background-position: center right 12px;
              filter: brightness(0.5) contrast(1.5);
            }
            .MuiInputBase-root {
              padding: 0;
              .MuiInputAdornment-root {
                margin-left: 0;
              }
            }
          }
        }
        .confirmSubmitButton {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 16px;
          button {
            min-width: 143px;
            @media (max-width: 599px) {
              min-width: auto;
            }
          }
        }
      }
    }
  }
`;

function ConfirmDob() {
  return (
    <ConfirmDobWrapper>
      <Box className="confirmationForm">
        <Box className="confirmDobHeader">
          <Link to="/">
            <img src={assest.Logo} alt="logo" />
          </Link>
        </Box>
        <Box className="confirmDobBody">
          <form>
            <Container fixed>
              <Box className="confirmDobformWrap">
                <figure>
                  <img src={assest.unionImg} alt="cardimg" />
                </figure>
                <Typography variant="h3">
                  Hi, Reece Samani
                  <i>
                    <img src={assest.handicon} alt="handicon" />
                  </i>
                </Typography>
                <Typography variant="body1">
                  Please confirm your date of birth to continue
                </Typography>
                <Box className="forminputBox">
                  <Datepickersection disableFuture format="DD/MM/YY" />
                </Box>
                <Box className="confirmSubmitButton">
                  <CustomButtonPrimary variant="contained" color="primary">
                    <Typography variant="body1">Confirm DOB</Typography>
                  </CustomButtonPrimary>
                </Box>
              </Box>
            </Container>
          </form>
        </Box>
      </Box>
    </ConfirmDobWrapper>
  );
}

export default ConfirmDob;
