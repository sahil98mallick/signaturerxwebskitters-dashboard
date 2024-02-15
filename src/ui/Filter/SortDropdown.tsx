import { MenuItem, OutlinedInput, SelectChangeEvent } from "@mui/material";
import React, { useEffect } from "react";
import { CustomSelectWrapper } from "styles/StyledComponents/CustomSelectWrapper";

interface SelectProps {
  onDataCallback?: (data: string | undefined) => void;
  dataset: string[];
  Icon?: JSX.Element | any;
  defaultValueDisplay: string;
  className?: string;
}
const SortDropdown = ({
  onDataCallback,
  dataset,
  Icon,
  defaultValueDisplay,
  className
}: SelectProps) => {
  const MenuProps = {
    PaperProps: {
      style: {
        width: "auto"
      }
    }
  };

  const [personName, setPersonName] = React.useState<string>();

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value }
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      value
    );
  };

  useEffect(() => {
    if (personName !== "") {
      if (onDataCallback !== undefined) {
        onDataCallback(personName);
      }
    }
  }, [onDataCallback, personName]);
  return (
    <CustomSelectWrapper
      displayEmpty
      value={personName}
      onChange={(e: any) => handleChange(e)}
      input={<OutlinedInput />}
      IconComponent={Icon}
      renderValue={(selected: any) => {
        if (!selected) {
          return <>{defaultValueDisplay}</>;
        }

        return selected;
      }}
      MenuProps={MenuProps}
      inputProps={{ "aria-label": "Without label" }}
      className={className}
    >
      {dataset.map((name) => (
        <MenuItem key={name} value={name} className="menu_item">
          {name}
        </MenuItem>
      ))}
    </CustomSelectWrapper>
  );
};

export default SortDropdown;
