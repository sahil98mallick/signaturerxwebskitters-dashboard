import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Box, IconButton, MenuItem } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";
import InputFieldCommon from "ui/CommonInput/CommonInput";
import CustomSelect from "ui/Filter/CustomSelect";
import FilterIcon from "ui/Icons/FilterIcon";
import SortingIcon from "ui/Icons/SortingIcon";

const PayoutOverViewFilter = () => {
  const names = ["Ascending", "Descending"];
  return (
    <Box className="filter_wrapper">
      <Box className="filter_left">
        <Box className="filter">
          <CustomSelect
            IconComponent={(props) => {
              return (
                <IconButton {...props}>
                  {<FilterIcon IconColor={primaryColors.black} />}
                </IconButton>
              );
            }}
            className="form_select"
            defaultValue=""
            displayEmpty
          >
            <MenuItem value="">Filter</MenuItem>
            {names.map((name) => (
              <MenuItem key={name} value={name} className="menu_item">
                {name}
              </MenuItem>
            ))}
          </CustomSelect>
        </Box>
        <Box className="sort_filter">
          <CustomSelect
            IconComponent={(props) => {
              return <IconButton {...props}>{<SortingIcon />}</IconButton>;
            }}
            className="form_select"
            defaultValue=""
            displayEmpty
          >
            <MenuItem value="">Sort</MenuItem>
            {names.map((name) => (
              <MenuItem key={name} value={name} className="menu_item">
                {name}
              </MenuItem>
            ))}
          </CustomSelect>
        </Box>
      </Box>
      <Box className="filter_right">
        <InputFieldCommon
          placeholder="Search payouts.."
          adorMentIcon={<SearchRoundedIcon />}
        />
      </Box>
    </Box>
  );
};

export default PayoutOverViewFilter;
