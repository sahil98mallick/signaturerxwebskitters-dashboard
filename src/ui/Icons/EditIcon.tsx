import { primaryColors } from "Theme/_muiPalette";
import { IconProps } from "typescript/interface/iconprops.interface";

const EditIcon = ({ IconColor, IconWidth, IconHeight }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={IconWidth ? IconWidth : "20"}
      height={IconHeight ? IconHeight : "24"}
      viewBox="0 0 20 24"
      fill="none"
    >
      <g filter="url(#filter0_d_4275_2921)">
        <path
          d="M3.33398 18.5001C3.33398 18.0398 3.70708 17.6667 4.16732 17.6667H15.834C16.2942 17.6667 16.6673 18.0398 16.6673 18.5001C16.6673 18.9603 16.2942 19.3334 15.834 19.3334H4.16732C3.70708 19.3334 3.33398 18.9603 3.33398 18.5001Z"
          fill={IconColor ? IconColor : primaryColors?.textPrimaryColor}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.343 3.64525C11.6448 2.34351 13.7553 2.34351 15.0571 3.64525L15.6882 4.27638C16.9899 5.57813 16.9899 7.68869 15.6882 8.99044L9.93311 14.7455C9.70192 14.9767 9.40783 15.1348 9.08746 15.2001L5.33447 15.965C4.16401 16.2036 3.12999 15.1696 3.36852 13.9991L4.13336 10.246C4.19865 9.9256 4.35674 9.6315 4.58795 9.40029L10.343 3.64525ZM13.8785 4.82377C13.2277 4.17289 12.1724 4.17289 11.5215 4.82376L11.1785 5.1668L14.1666 8.15495L14.5097 7.81192C15.1606 7.16105 15.1606 6.10577 14.5097 5.4549L13.8785 4.82377ZM7.01181 9.33345L9.99998 6.34531L12.9881 9.33346L9.99997 12.3216L7.01181 9.33345ZM5.8333 10.512L5.76646 10.5788L5.00162 14.3319L8.7546 13.567L8.82145 13.5001L5.8333 10.512Z"
          fill={IconColor ? IconColor : primaryColors?.textPrimaryColor}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_4275_2921"
          x="-3"
          y="-1"
          width="26"
          height="26"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4275_2921"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4275_2921"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default EditIcon;
