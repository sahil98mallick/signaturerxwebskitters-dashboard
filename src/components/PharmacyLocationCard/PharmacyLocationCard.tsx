import {
  Box,
  Button,
  Chip,
  Collapse,
  List,
  ListItem,
  Stack,
  Typography
} from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";
import { openingTimList } from "json/mock/pharmacylist.mock";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PharmacyLocationCardWrapper } from "styles/StyledComponents/PharmacyLocationCardWrapper";
import { PharmacyLocationCardProps } from "typescript/interface/pharmacylocationcard.interface";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import CallIcon from "ui/Icons/CallIcon";
import ClockIcon from "ui/Icons/ClockIcon";
import DownIconSmall from "ui/Icons/DownIconSmall";
import LocationIcon from "ui/Icons/LocationIcon";
import MailIcon from "ui/Icons/MailIcon";
import RightArrowIcon from "ui/Icons/RightArrowIcon";

export default function PharmacyLocationCard({
  contact_number,
  image,
  location,
  mailId,
  name
}: PharmacyLocationCardProps) {
  const [show, setshow] = useState(true);
  return (
    <PharmacyLocationCardWrapper>
      <Box className="upper_part">
        <Box className="avatar_image">
          <i>
            <img src={image} alt="" />
          </i>
        </Box>
        <Typography variant="h4">{name}</Typography>
        <List disablePadding className="details_list">
          <ListItem disablePadding>
            <i>
              <CallIcon IconColor={primaryColors?.primary_600} />
            </i>
            <Typography>{contact_number}</Typography>
            
          </ListItem>
          <ListItem disablePadding>
            <i>
              <MailIcon IconColor={primaryColors?.primary_600} />
            </i>
            <Typography>{mailId}</Typography>
          </ListItem>
          <ListItem disablePadding>
            <i>
              <LocationIcon IconColor={primaryColors?.primary_600} />
            </i>
            <Typography>{location}</Typography>
          </ListItem>

          <ListItem disablePadding className="collapse_item">
            <i>
              <ClockIcon IconColor={primaryColors?.primary_600} />
            </i>
            <Stack
              direction="row"
              alignItems="center"
              flexWrap="wrap"
              justifyContent="space-between"
              className="time_stack"
            >
              <Box className="left_stack">
                <Chip label="Open" className="status_chips" />
                <Typography className="time_para">
                  <Typography variant="caption">
                    {openingTimList[0]?.openTime}
                  </Typography>
                  &nbsp;-&nbsp;
                  <Typography variant="caption">
                    {openingTimList[0]?.closeTime}
                  </Typography>
                </Typography>
              </Box>
              <Box className="rgt_stack">
                <Button
                  type="button"
                  className="collapse_btn"
                  onClick={() => setshow((prev) => !prev)}
                >
                  <DownIconSmall IconColor={primaryColors?.mainFontColor} />
                </Button>
              </Box>
              <Collapse in={show} className="mapDayslist">
                <List disablePadding className="show_list">
                  {openingTimList?.map((item, index) => (
                    <ListItem disablePadding key={index}>
                      <Typography>{item?.day}</Typography>
                      <Typography className="time_para">
                        <Typography variant="caption">
                          {item?.openTime}
                        </Typography>
                        -
                        <Typography variant="caption">
                          {item?.closeTime}
                        </Typography>
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </Stack>
          </ListItem>
        </List>
      </Box>
      <Box className="lower_part">
        <Box className="card_btn_otr">
          <CustomButtonPrimary
            variant="contained"
            color="primary"
            endIcon={<RightArrowIcon />}
          >
            <Typography>Select Pharmacy</Typography>
          </CustomButtonPrimary>
        </Box>
      </Box>
    </PharmacyLocationCardWrapper>
  );
}
