import {
  Box,
  Button,
  Chip,
  List,
  ListItem,
  Stack,
  Typography
} from "@mui/material";
import { HourStackWrapper } from "styles/StyledComponents/HourStackWrapper";
import { HourStackProps } from "typescript/interface/hour_stack.interface";
import CustomSwitch from "ui/CustomSwitch/CustomSwitch";

export default function HourStack({
  day,
  endTime,
  isChecked,
  startTime
}: HourStackProps) {
  return (
    <HourStackWrapper>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Box className="each_item">
          <Typography variant="h6">{day}</Typography>
        </Box>
        <Box className="each_item">
          <CustomSwitch
            label={isChecked ? "Open" : "Closed"}
            defaultChecked={isChecked}
          />
        </Box>
        <Box className="each_item time_box">
          <List disablePadding className="time_list">
            <ListItem disablePadding>
              <Chip label={startTime} variant="outlined" />
            </ListItem>
            <ListItem disablePadding>
              <Chip label={endTime} variant="outlined" />
            </ListItem>
          </List>
        </Box>
        <Box className="each_item">
          <Button type="button" className="simple_btn">
            Add Hours
          </Button>
        </Box>
      </Stack>
    </HourStackWrapper>
  );
}
