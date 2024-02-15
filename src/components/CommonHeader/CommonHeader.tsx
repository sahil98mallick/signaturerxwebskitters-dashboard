import { Box, Typography } from "@mui/material";

import { HaederStackWrapper } from "styles/StyledComponents/HaederStackWrapper";

interface HeaderProps {
  children?: JSX.Element | JSX.Element[];
  title: string;
  headerIcon: string | JSX.Element;
  secondaryHeader?: boolean;
  className?: string;
}
export default function CommonHeader({
  children,
  title,
  headerIcon,
  secondaryHeader,
  className
}: HeaderProps) {
  return (
    <HaederStackWrapper
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      className={className}
    >
      <Box className="left_stack">
        <i>
          {typeof headerIcon === "string" ? (
            <img src={headerIcon} alt="" />
          ) : (
            headerIcon
          )}
        </i>

        {secondaryHeader ? (
          <Typography variant="h3">{title}</Typography>
        ) : (
          <Typography variant="h1">{title}</Typography>
        )}
      </Box>
      <Box className="rgt_stack">{children}</Box>
    </HaederStackWrapper>
  );
}
