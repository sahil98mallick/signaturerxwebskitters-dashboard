import styled from "@emotion/styled";
import { Box, Chip, ChipOwnProps, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CalenderIcon from "ui/Icons/CalenderIcon";

const CardWrapper = styled(Card)`
  h3 {
    font-size: 28px;
    font-weight: 600;
    @media (max-width: 899px) {
      font-size: 24px;
    }
    @media (max-width: 599px) {
      font-size: 22px;
    }
  }
  .chipIcon {
    padding: 8px 8px 8px 6px;
    span {
      padding-right: 0;
    }
    svg,
    img {
      margin-left: 0;
      width: 16px;
      height: 16px;
      @media (max-width: 899px) {
        width: 14px;
      }
    }
  }
  .description {
    display: flex;
    align-items: center;

    i {
      line-height: 0;
      margin-right: 4px;

      svg,
      img {
        height: 20px;
        width: 20px;
        @media (max-width: 899px) {
          width: 14px;
        }
      }
    }
  }
`;
interface ReportCardProps {
  money: string;
  month: string;
  description: string;
  descriptionIcon: JSX.Element;
  chipIcon: JSX.Element;
  chipColor: ChipOwnProps["color"];
  chipLabel: string;
}

export default function ReportCard({
  chipIcon,
  chipColor,
  descriptionIcon,
  description,
  chipLabel,
  month,
  money
}: ReportCardProps) {
  return (
    <CardWrapper elevation={0}>
      <CardContent>
        <Stack direction="column" justifyContent="space-between" spacing={4}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h3">{money}</Typography>
            <Chip
              icon={<CalenderIcon IconColor="#8F98A8" />}
              size="small"
              label={month}
              color="default"
              className="chipIcon"
            />
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Box className="description">
              <i>{descriptionIcon}</i>
              <Typography
                alignItems="center"
                display="flex"
                justifyContent="center"
                variant="body1"
              >
                {description}
              </Typography>
            </Box>

            <Chip
              icon={chipIcon}
              size="small"
              label={chipLabel}
              color={chipColor}
              className="chipIcon"
            />
          </Stack>
        </Stack>
      </CardContent>
    </CardWrapper>
  );
}
