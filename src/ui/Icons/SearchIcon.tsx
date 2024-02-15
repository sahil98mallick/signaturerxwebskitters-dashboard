import { primaryColors } from "Theme/_muiPalette";
import { IconProps } from "typescript/interface/iconprops.interface";

export default function SearchIcon({
  IconColor,
  IconWidth,
  IconHeight
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={IconWidth ? IconWidth : "21"}
      height={IconHeight ? IconHeight : "20"}
      viewBox="0 0 21 20"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 9.16667C4 6.03705 6.53705 3.5 9.66667 3.5C12.7963 3.5 15.3333 6.03705 15.3333 9.16667C15.3333 12.2963 12.7963 14.8333 9.66667 14.8333C6.53705 14.8333 4 12.2963 4 9.16667ZM9.66667 1.5C5.43248 1.5 2 4.93248 2 9.16667C2 13.4008 5.43248 16.8333 9.66667 16.8333C11.4233 16.8333 13.0419 16.2426 14.3347 15.2489L17.2929 18.2071C17.6834 18.5976 18.3166 18.5976 18.7071 18.2071C19.0976 17.8166 19.0976 17.1834 18.7071 16.7929L15.7489 13.8347C16.7426 12.5419 17.3333 10.9233 17.3333 9.16667C17.3333 4.93248 13.9008 1.5 9.66667 1.5Z"
        fill={IconColor ? IconColor : primaryColors?.textPrimaryColor}
      />
    </svg>
  );
}
