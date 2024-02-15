import { primaryColors } from "Theme/_muiPalette";
import { IconProps } from "typescript/interface/iconprops.interface";

export default function IncomingIcon({
  IconColor,
  IconWidth,
  IconHeight
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={IconWidth ? IconWidth : "16"}
      height={IconHeight ? IconHeight : "17"}
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.8047 12.3047C12.0651 12.0444 12.0651 11.6223 11.8047 11.3619L5.13807 4.69526C4.87772 4.43491 4.45561 4.43491 4.19526 4.69526C3.93491 4.95561 3.93491 5.37772 4.19526 5.63807L10.8619 12.3047C11.1223 12.5651 11.5444 12.5651 11.8047 12.3047Z"
        fill={IconColor ? IconColor : primaryColors?.danger_text}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 11.8333C4 12.2015 4.29848 12.5 4.66667 12.5H11.3333C11.7015 12.5 12 12.2015 12 11.8333V5.16667C12 4.79848 11.7015 4.5 11.3333 4.5C10.9651 4.5 10.6667 4.79848 10.6667 5.16667V11.1667H4.66667C4.29848 11.1667 4 11.4651 4 11.8333Z"
        fill={IconColor ? IconColor : primaryColors?.danger_text}
      />
    </svg>
  );
}
