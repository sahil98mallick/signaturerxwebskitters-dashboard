import React from "react";
import { IconProps } from "typescript/interface/iconprops.interface";

const CrossIcon = ({ IconColor, IconWidth, IconHeight }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={IconWidth ? IconWidth: "20"}
    height={IconHeight? IconHeight: "21"}
      viewBox="0 0 20 21"
      fill="none"
    >
      <path
        d="M5 5.0835L15.6066 15.6901"
        stroke={IconColor? IconColor: "#070707"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5 15.9165L15.6066 5.3099"
        stroke={IconColor? IconColor: "#070707"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CrossIcon;
