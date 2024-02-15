import React from "react";
import { IconProps } from "typescript/interface/iconprops.interface";

function DropDownIcon({IconColor,IconWidth,IconHeight}:IconProps) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={IconWidth ? IconWidth: "20"}
        height={IconHeight? IconHeight: "21"}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M5.5 8.5L12.5 15.5L19.5 8.5"
          stroke={IconColor? IconColor: "#070707"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export default DropDownIcon;
