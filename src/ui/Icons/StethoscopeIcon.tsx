import { IconProps } from "typescript/interface/iconprops.interface";

const StethoscopeIcon = ({ IconColor, IconWidth, IconHeight }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={IconWidth ? IconWidth : "25"}
      height={IconHeight ? IconHeight : "24"}
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 12.5C8.55228 12.5 9 12.9477 9 13.5V15.5C9 17.7091 10.7909 19.5 13 19.5C15.2091 19.5 17 17.7091 17 15.5V14.5C17 13.9477 17.4477 13.5 18 13.5C18.5523 13.5 19 13.9477 19 14.5V15.5C19 18.8137 16.3137 21.5 13 21.5C9.68629 21.5 7 18.8137 7 15.5V13.5C7 12.9477 7.44772 12.5 8 12.5Z"
        fill={IconColor ? IconColor : "#070707"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 13.5C18.5523 13.5 19 13.0523 19 12.5C19 11.9477 18.5523 11.5 18 11.5C17.4477 11.5 17 11.9477 17 12.5C17 13.0523 17.4477 13.5 18 13.5ZM18 15.5C19.6569 15.5 21 14.1569 21 12.5C21 10.8431 19.6569 9.5 18 9.5C16.3431 9.5 15 10.8431 15 12.5C15 14.1569 16.3431 15.5 18 15.5Z"
        fill={IconColor ? IconColor : "#070707"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.5 5.5C5.22386 5.5 5 5.72386 5 6V9.5C5 11.1569 6.34315 12.5 8 12.5C9.65685 12.5 11 11.1569 11 9.5V6C11 5.72386 10.7761 5.5 10.5 5.5H10C9.44772 5.5 9 5.05228 9 4.5C9 3.94772 9.44772 3.5 10 3.5H10.5C11.8807 3.5 13 4.61929 13 6V9.5C13 12.2614 10.7614 14.5 8 14.5C5.23858 14.5 3 12.2614 3 9.5V6C3 4.61929 4.11929 3.5 5.5 3.5H6C6.55228 3.5 7 3.94772 7 4.5C7 5.05228 6.55228 5.5 6 5.5H5.5Z"
        fill={IconColor ? IconColor : "#070707"}
      />
    </svg>
  );
};

export default StethoscopeIcon;
