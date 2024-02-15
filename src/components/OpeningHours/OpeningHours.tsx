import { Box, Typography } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";
import HourStack from "components/HourStack/HourStack";
import { hourStackListitems_mock } from "json/mock/openingHours.mock";
import { OpeningHoursWrapper } from "styles/StyledComponents/OpeningHoursWrapper";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import CheckIcon from "ui/Icons/CheckIcon";

export default function OpeningHours() {
  return (
    <OpeningHoursWrapper>
      <Box className="cmn_block admin_acc_wrapper">
        <Box className="header_wrapper">
          <Box className="headerWrapper_left">
            <Typography variant="h3">Opening Hours</Typography>
            <Typography variant="body1">
              You can manage your opening hours here
            </Typography>
          </Box>
          <CustomButtonPrimary
            variant="contained"
            color="primary"
            endIcon={
              <CheckIcon
                IconColor={`${primaryColors?.white}`}
                IconHeight="24"
                IconWidth="24"
              />
            }
          >
            <Typography variant="body1">Save Information</Typography>
          </CustomButtonPrimary>
        </Box>

        <Box className="add_hour_content">
          {hourStackListitems_mock?.map((each_item, index) => (
            <HourStack {...each_item} key={index} />
          ))}
        </Box>
      </Box>
    </OpeningHoursWrapper>
  );
}
