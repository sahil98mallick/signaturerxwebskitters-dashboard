import { Box, Grid } from "@mui/material";
import Wrapper from "Layout/Wrapper/Wrapper";
import MapView from "components/MapView/MapView";

const PharmacyDetails = () => {
  return (
    <Wrapper>
      <Box className="body_layout map_body_layout">
        <Grid container columnSpacing={4}>
          <Grid item lg={12} xs={12}>
            <MapView />
            {/* </Grid> */}
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );
};

export default PharmacyDetails;
