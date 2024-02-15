import styled from "@emotion/styled";
import { FormControlLabel, Switch, SwitchProps } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";
import React from "react";

export const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 66,
  height: 36,
  padding: 0,
  borderRadius: 50,
  "@media (max-width:768px)": {
    width: 56,
    height: 26
  },
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 3,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(31px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: primaryColors.info,
        opacity: 1,
        border: 0
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5
      }
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: primaryColors.info,
      border: "6px solid #fff"
    }
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 30,
    height: 30,
    "@media (max-width:768px)": {
      width: 20,
      height: 20
    }
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1
  }
}));

interface props extends SwitchProps {
  label?: string;
}

export default function CustomSwitch({ label, ...others }: props) {
  return (
    <FormControlLabel
      control={<IOSSwitch sx={{ m: 1 }} {...others} />}
      label={label}
    />
  );
}
