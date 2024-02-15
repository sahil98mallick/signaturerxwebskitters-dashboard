
import React from "react";
import { IconProps } from "typescript/interface/iconprops.interface";

const FilterIcon = ({ IconColor, IconWidth, IconHeight }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={IconWidth ? IconWidth: "20"}
      height={IconHeight? IconHeight: "21"}
      viewBox="0 0 26 26"
      fill="none"
    >
      <g filter="url(#filter0_d_4357_2936)">
        <path
          d="M20 2H6C5.20435 2 4.44129 2.31607 3.87868 2.87868C3.31607 3.44129 3 4.20435 3 5V6.17C2.99986 6.58294 3.08497 6.99147 3.25 7.37V7.43C3.39128 7.75097 3.59139 8.04266 3.84 8.29L10 14.41V21C9.99966 21.1699 10.0426 21.3372 10.1249 21.4859C10.2071 21.6346 10.3259 21.7599 10.47 21.85C10.6291 21.9486 10.8128 22.0006 11 22C11.1565 21.9991 11.3107 21.9614 11.45 21.89L15.45 19.89C15.6149 19.8069 15.7536 19.6798 15.8507 19.5227C15.9478 19.3656 15.9994 19.1847 16 19V14.41L22.12 8.29C22.3686 8.04266 22.5687 7.75097 22.71 7.43V7.37C22.8888 6.99443 22.9876 6.58578 23 6.17V5C23 4.20435 22.6839 3.44129 22.1213 2.87868C21.5587 2.31607 20.7956 2 20 2ZM14.29 13.29C14.1973 13.3834 14.124 13.4943 14.0742 13.6161C14.0245 13.7379 13.9992 13.8684 14 14V18.38L12 19.38V14C12.0008 13.8684 11.9755 13.7379 11.9258 13.6161C11.876 13.4943 11.8027 13.3834 11.71 13.29L6.41 8H19.59L14.29 13.29ZM21 6H5V5C5 4.73478 5.10536 4.48043 5.29289 4.29289C5.48043 4.10536 5.73478 4 6 4H20C20.2652 4 20.5196 4.10536 20.7071 4.29289C20.8946 4.48043 21 4.73478 21 5V6Z"
          fill={IconColor? IconColor: "#070707"}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_4357_2936"
          x="-2"
          y="-2"
          width="30"
          height="30"
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
            result="effect1_dropShadow_4357_2936"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4357_2936"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default FilterIcon;
