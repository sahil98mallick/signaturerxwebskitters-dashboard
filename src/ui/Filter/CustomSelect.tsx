import { OutlinedInput, SelectProps } from "@mui/material";
import { CustomSelectWrapper } from "styles/StyledComponents/CustomSelectWrapper";

interface CustomSelectProps extends SelectProps {
  children: React.ReactNode;
}
const CustomSelect = (props: CustomSelectProps) => {
  const MenuProps = {
    PaperProps: {
      style: {
        width: "auto"
        // backgroundColor:"#000"
      }
    }
  };

  return (
    <CustomSelectWrapper
      displayEmpty
      input={<OutlinedInput />}
      IconComponent={props?.IconComponent}
      MenuProps={MenuProps}
      inputProps={{ "aria-label": "Without label" }}
      className={props.className}
      {...props}
    >
      {/* {dataset.map((name) => (
        <MenuItem key={name} value={name} className="menu_item">
          {name}
        </MenuItem>
      ))} */}
      {props.children}
    </CustomSelectWrapper>
  );
};

export default CustomSelect;
