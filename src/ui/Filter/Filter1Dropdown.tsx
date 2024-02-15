import {
  IconButton,
  MenuItem,
  OutlinedInput,
  SelectChangeEvent,
  Stack
} from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";
import React, { useEffect, useRef } from "react";
import { CustomSelectWrapper } from "styles/StyledComponents/CustomSelectWrapper";
import DropDownIcon from "ui/Icons/DropDownIcon";

interface datasetInterface {
  name: string;
  icon: string;
}
interface SelectProps {
  onDataCallback?: (data: string | undefined) => void;
  dataset: datasetInterface[];
}
const Filter1Dropdown = ({ onDataCallback, dataset }: SelectProps) => {
  const menuItemStyle = {};
  const MenuProps = {
    PaperProps: {
      sx: {
        borderRadius: "8px",
        boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.06)",
        border: "1px solid #DBE0E8",
        filter: "none",
        marginTop: "26px",
        "& .MuiList-root": {
          padding: "4px"
        },
        "& .MuiMenuItem-root": {
          padding: "8px",
          borderRadius: "4px",
          img: {
            marginRight: "8px"
          },
          "&:nth-child(1)": {
            color: `${primaryColors?.warning_text}`,

            marginBottom: "4px",
            "&:hover": {
              backgroundColor: `${primaryColors?.pendingColor}`
            }
          },
          "&:nth-child(2)": {
            color: `${primaryColors?.text_success}`,

            marginBottom: "4px",
            "&:hover": {
              backgroundColor: `${primaryColors?.lightGreen}`
            }
          },
          "&:nth-child(3)": {
            color: `${primaryColors?.textDanger}`,

            "&:hover": {
              backgroundColor: `${primaryColors?.dangerColor}`
            }
          }
        }
      }
    }
  };

  const [personName, setPersonName] = React.useState<datasetInterface>(
    dataset.at(0)!
  );

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value }
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      dataset.filter((data) => data.name === value).at(0)!
    );
  };

  useEffect(() => {
    if (personName?.name !== "") {
      if (onDataCallback !== undefined) {
        onDataCallback(personName?.name);
      }
    }
  }, [onDataCallback, personName]);

  const ref = useRef<HTMLSelectElement>(null);
  return (
    <CustomSelectWrapper
      displayEmpty
      ref={ref}
      value={personName}
      onChange={(e: any) => handleChange(e)}
      input={<OutlinedInput />}
      IconComponent={(props) => (
        <IconButton {...props}>
          <DropDownIcon />
        </IconButton>
      )}
      className="select_menu"
      renderValue={(selected) => {
        if (!selected) {
          return (
            <Stack
              direction={"row"}
              className={
                personName.name === "Pending"
                  ? "pending"
                  : personName.name === "Collected"
                  ? "collected"
                  : "rejected"
              }
            >
              <img src={dataset.at(0)?.icon} alt="" /> {dataset.at(0)?.name}
            </Stack>
          );
        }

        return (
          <Stack
            direction={"row"}
            className={
              personName.name === "Pending"
                ? "pending"
                : personName.name === "Collected"
                ? "collected"
                : "rejected"
            }
          >
            <img src={personName?.icon} alt="" /> {personName?.name}
          </Stack>
        );
      }}
      MenuProps={MenuProps}
      inputProps={{ "aria-label": "Without label" }}
    >
      {dataset.map((name) => (
        <MenuItem
          key={name.name}
          value={name.name}
          className="menu_item"
          style={menuItemStyle}
          disableRipple
        >
          <img src={name.icon} alt="" /> {name.name}
        </MenuItem>
      ))}
    </CustomSelectWrapper>
  );
};

export default Filter1Dropdown;
