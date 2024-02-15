import { Box, Chip, List, ListItem, Stack, Typography } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";
import { PharmacyCardWrapper } from "styles/StyledComponents/PharmacyCardWrapper";
import LocationIcon from "ui/Icons/LocationIcon";

export interface PharmacyCardProps {
  _id: string;
  index: number;
  guid: string;
  openStatus: boolean;
  price: string;
  image: string;
  pharmacy_distance: number;
  pharmacy_name: string;
  pharmacy_address: string;
  latitude: number;
  longitude: number;
  activeItemID?: string;
}

export default function Pharmacycard({
  image,
  openStatus,
  pharmacy_address,
  pharmacy_distance,
  pharmacy_name,
  price,
  _id,
  activeItemID
}: PharmacyCardProps) {
  return (
    <PharmacyCardWrapper
      id={_id}
      className={_id === activeItemID ? "active" : ""}
    >
      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap"
        className="upper_stack"
      >
        <i className="avatr_image">
          <img src={image} alt="" />
        </i>
        <Box className="pharma_details">
          <Typography variant="h5">{pharmacy_name}</Typography>
          <Typography>{pharmacy_address}</Typography>
        </Box>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap"
        justifyContent="space-between"
        className="lower_stack"
      >
        <List disablePadding className="chip_list">
          <ListItem disablePadding>
            <Chip
              icon={
                <LocationIcon
                  IconColor={primaryColors?.pendingTextColor}
                  IconWidth="20"
                  IconHeight="20"
                />
              }
              label={`${pharmacy_distance} km`}
              className="location_chip"
            />
          </ListItem>
          <ListItem disablePadding>
            <Chip
              label={openStatus ? "Open" : "Closed"}
              className={openStatus ? "status_chips" : "status_chips closed"}
            />
          </ListItem>
        </List>
        <Typography className="price_para">£{price}</Typography>
      </Stack>
    </PharmacyCardWrapper>
  );
}
