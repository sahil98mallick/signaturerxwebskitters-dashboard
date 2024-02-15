import { primaryColors } from "Theme/_muiPalette";
import { IconProps } from "typescript/interface/iconprops.interface";

export default function DownIconSmall({
  IconColor,
  IconWidth,
  IconHeight
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={IconWidth ? IconWidth : "20"}
      height={IconHeight ? IconHeight : "21"}
      viewBox="0 0 20 21"
      fill="none"
    >
      <path
        d="M4.58333 7.58334L10.4167 13.4167L16.25 7.58334"
        stroke={IconColor ? IconColor : primaryColors?.textPrimaryColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
