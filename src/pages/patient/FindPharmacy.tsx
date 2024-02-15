import { Box, Grid, Stack, Typography } from "@mui/material";
import Wrapper from "Layout/Wrapper/Wrapper";
import { primaryColors } from "Theme/_muiPalette";
import CommonHeader from "components/CommonHeader/CommonHeader";
import MapView from "components/MapView/MapView";
import Pharmacycard, {
  PharmacyCardProps
} from "components/Pharmacycard/Pharmacycard";
import assest from "json/assest";
import events from "json/events/events";
import { findPharmacyMock } from "json/mock/findpharmacy.mock";
import eventEmitter from "lib/services/event.emitter";
import { useCallback, useEffect, useState } from "react";
import { CouponWrapper } from "styles/StyledComponents/CouponWrapper";
import { FindPharmacyWrapper } from "styles/StyledComponents/FindPharmacyWrapper";
import { couponProps } from "typescript/interface/coupon.interface";
import InputFieldCommon from "ui/CommonInput/CommonInput";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import CalenderIcon from "ui/Icons/CalenderIcon";
import SearchIcon from "ui/Icons/SearchIcon";

export default function FindPharmacy() {
  const [activeItem, setActiveItem] = useState<PharmacyCardProps | null>(null);

  const scroolToId = useCallback(
    (id: string) => {
      const div = document.getElementsByClassName("pharmacy_list");

      if (!!div) {
        const element = document.getElementById(id);
        if (!!element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }
      }
    },
    [activeItem]
  );

  useEffect(() => {
    eventEmitter.on(events.map.markerClicked, (data: PharmacyCardProps) => {
      setActiveItem(data);
      scroolToId(data?._id);
    });
  }, []);

  return (
    <FindPharmacyWrapper>
    <Wrapper>
      <Box className="body_layout">
        <Grid container columnSpacing={{lg:4 , md:3}}>
          <Grid item lg={4.5}  md={5.5} xs={12}>
            <Box className="cmn_block">
              <CommonHeader
                headerIcon={assest?.branchIcon}
                title="Find Pharmacy"
              />
              <CouponSec
                couponId="SRXBFA46F2A1EE9"
                dateTIme="23/07/2023, 02.00 PM"
              />
              <Box className="search_field">
                <InputFieldCommon
                  placeholder="Search postcode"
                  adorMentIcon={<SearchIcon />}
                />
              </Box>
              <Box className="pharmacy_list">
                {findPharmacyMock?.map((item, index) => (
                  <Pharmacycard
                    {...item}
                    activeItemID={activeItem?._id}
                    key={index}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item lg={7.5} md={6.5} xs={12}>
            <MapView />
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
    </FindPharmacyWrapper>
  );
}

const CouponSec = ({ couponId, dateTIme }: couponProps) => {
  return (
    <CouponWrapper>
      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Box className="rgt_part">
          <Typography variant="body1" className="coupon_id">
            {couponId}
          </Typography>
          <Typography className="coupn_para">
            <i>
              <CalenderIcon
                IconColor={primaryColors?.mainFontColor}
                IconHeight="20"
                IconWidth="20"
              />
            </i>
            {dateTIme}
          </Typography>
        </Box>
        <Box className="lft_part">
          <CustomButtonPrimary variant="outlined" color="info">
            <Typography>View</Typography>
          </CustomButtonPrimary>
        </Box>
      </Stack>
    </CouponWrapper>
  );
};
