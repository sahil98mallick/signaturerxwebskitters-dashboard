import { Box, FormControl, List, ListItem, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import React from "react";
import Pagination from "@mui/material/Pagination";
import { PaginationWrapper } from "styles/StyledComponents/PaginationWrapper";



  // interface PaginationSectionProps {
  //   onChangeLimit?: ((event: SelectChangeEvent<any>, child: React.ReactNode) => void)
  //   limit?: number;
  //   count?: number;
  //   setPage?: ((event: React.ChangeEvent<unknown>, page: number) => void)
  //   page?: number;
  // }
  interface PaginationSectionProps {
    onChangeLimit?:
      | ((event: SelectChangeEvent<any>, child: React.ReactNode) => void)
      | undefined;
    limit?: number;
    count?: number;
    setPage?:
      | ((event: React.ChangeEvent<unknown>, page: number) => void)
      | undefined;
    page?: number;
  }




function PaginationSection(
  {
    limit,
    onChangeLimit,
    count,
    setPage,
    page
  }: PaginationSectionProps
) {
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
          <Pagination 
          onChange={setPage}
          count={count}
          variant="outlined"
          shape="rounded"
          page={page}
          
          
          />
        </Box>
      </Box>
    </PaginationWrapper>
  );
}

export default PaginationSection;
