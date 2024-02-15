import {
  Box,
  FormControl,
  List,
  ListItem,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from "@mui/material";
import React from "react";

import Pagination from "@mui/material/Pagination";
import { PaginationWrapper } from "styles/StyledComponents/PaginationWrapper";

function PaginationSection() {
  const [number, setnumber] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setnumber(event.target.value as string);
  };
  return (
    <PaginationWrapper>
      <Box className="paginationsection">
        <Box className="Paginationdropdown">
          <List>
            <ListItem>
              <Typography variant="body1">Show</Typography>
            </ListItem>
            <ListItem>
              <Box>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={number}
                    displayEmpty
                    onChange={handleChange}
                  >
                    <MenuItem value="">5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </ListItem>
            <ListItem>
              <Typography variant="body1">entries</Typography>
            </ListItem>
          </List>
        </Box>
        <Box className="paginationSetionWrapper">
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Box>
      </Box>
    </PaginationWrapper>
  );
}

export default PaginationSection;
