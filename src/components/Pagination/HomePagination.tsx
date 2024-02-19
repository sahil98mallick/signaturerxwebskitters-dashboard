// HomePaginationSection.tsx

import { Box, FormControl, List, ListItem, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import Pagination from "@mui/material/Pagination";
import { PaginationWrapper } from "styles/StyledComponents/PaginationWrapper";

interface PaginationSectionProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const HomePaginationSection: React.FC<PaginationSectionProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    if (typeof value === 'number') {
      onPageChange(value);
    }
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
                    value={itemsPerPage}
                    displayEmpty
                    onChange={(e) => onPageChange(1)}
                  >
                    <MenuItem value={5}>5</MenuItem>
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
          <Pagination
            count={totalPages}
            page={currentPage}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        </Box>
      </Box>
    </PaginationWrapper>
  );
};

export default HomePaginationSection;