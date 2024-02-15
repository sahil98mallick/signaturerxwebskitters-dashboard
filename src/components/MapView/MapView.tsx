import { Box } from "@mui/material";
import PharmacyLocationCard from "components/PharmacyLocationCard/PharmacyLocationCard";
import { PharmacyCardProps } from "components/Pharmacycard/Pharmacycard";
import CustomGoogleMap from "components/map/CustomGoogleMap";
import events from "json/events/events";
import eventEmitter from "lib/services/event.emitter";
import { useEffect, useState } from "react";

import { MapWrapper } from "styles/StyledComponents/MapWrapper";

export default function MapView() {
  const [activeItem, setActiveItem] = useState<PharmacyCardProps | null>(null);

  useEffect(() => {
    eventEmitter.on(events.map.markerClicked, (data: PharmacyCardProps) => {
      setActiveItem(data);
    });
  }, []);

  return (
    <MapWrapper>
      <Box className="map_view">
        <Box className="map_block">
          <CustomGoogleMap />
        </Box>
        <Box className="float_block">
          {!!activeItem ? (
            <PharmacyLocationCard
              name={activeItem?.pharmacy_name}
              image={activeItem.image}
              contact_number={"5656566"}
              mailId={"test@yopmail.com"}
              location={activeItem.pharmacy_address}
              openingTimList={[]}
            />
          ) : null}
        </Box>
      </Box>
    </MapWrapper>
  );
}
