import { Box, Grid, Typography } from "@mui/material";
import Wrapper from "Layout/Wrapper/Wrapper";
import CommonHeader from "components/CommonHeader/CommonHeader";
import CreateAdminAccount from "components/CreateAdminAccount/CreateAdminAccount";
import OpeningHours from "components/OpeningHours/OpeningHours";
import PaymentInfo from "components/PaymentInfo/PaymentInfo";
import UploadInfo from "components/UploadInfo/UploadInfo";

import assest from "json/assest";
import { Link } from "react-router-dom";
import { MainWrapper } from "styles/StyledComponents/AdminWrapper";

export default function BranchAccess() {
  return (
    <Wrapper>
      <Box className="body_layout">
        <CommonHeader
          headerIcon={assest?.settings_blue_icon}
          title="Branch Admin Setting"
        />
        <MainWrapper>
          <Box className="main_block">
            <Grid
              container
              direction={"row-reverse"}
              columnSpacing={{ lg: 5, md: 3, xs: 2 }}
            >
              <Grid item lg={3} xs={12}>
                <Box className="page_navigation_wrapper">
                  <Link to="#" className="page_navigation">
                    <Typography variant="body1">
                      {" "}
                      Company Information
                    </Typography>
                  </Link>
                  <Link to="#" className="page_navigation">
                    <Typography variant="body1">
                      {" "}
                      Create Admin Account
                    </Typography>
                  </Link>
                  <Link to="#" className="page_navigation">
                    <Typography variant="body1">Payment Information</Typography>{" "}
                  </Link>
                </Box>
              </Grid>
              <Grid item lg={9} xs={12}>
                <UploadInfo />
                <OpeningHours />
                <CreateAdminAccount />
                <PaymentInfo />
              </Grid>
            </Grid>
          </Box>
        </MainWrapper>
      </Box>
    </Wrapper>
  );
}
