import { primaryColors } from "Theme/_muiPalette";
import React from "react";
import { IconProps } from "typescript/interface/iconprops.interface";

export default function DownIcon({
  IconColor,
  IconWidth,
  IconHeight
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={IconWidth ? IconWidth : "24"}
        height={IconHeight ? IconHeight : "24"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 5L12 19"
        stroke={IconColor? IconColor: primaryColors?.textPrimaryColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19 12L12 19L5 12"
      
        stroke={IconColor? IconColor: primaryColors?.textPrimaryColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
