import styled from "@emotion/styled";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";
import { formatNumber } from "lib/common.lib";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import ClockIcon from "ui/Icons/ClockIcon";
import LocationIcon from "ui/Icons/LocationIcon";
import PayoutIcon from "ui/Icons/PayoutIcon";

const CardWrapper = styled(Card)`
  width: 100%;
  padding: 24px;

  h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 4px;
  }
  .MuiCardContent-root {
    padding: 0;
  }
  .location {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 24px;
    svg,
    img {
      margin-right: 8px;
    }
    p {
      font-size: 16px;
      font-weight: 400;
    }
  }

  .bottom_buttons {
    width: 100%;
    justify-content: space-between;
    button {
      justify-content: flex-start;
      width: calc(100% / 4);
      p {
        margin-bottom: 0;
      }
      svg,
      img {
        height: 16px;
        width: 16px;
      }
    }
  }
`;
interface TopPerformingBranchCardProps {
  title: string;
  description: string;
  waitCount: number;
  successCount: number;
  failedCount: number;
  payoutCount: number;
}
const TopPerformingBranchCard = ({
  title,
  description,
  waitCount,
  successCount,
  failedCount,
  payoutCount
}: TopPerformingBranchCardProps) => {
  return (
    <CardWrapper>
      <CardContent>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={1}
        >
          <Typography variant="h3">{title}</Typography>
          <Box className="location">
            <LocationIcon />
            <Typography variant="body1" alignItems="center" display="flex">
              {description}
            </Typography>
          </Box>

          <Stack direction="row" spacing={1} className="bottom_buttons">
            <CustomButtonPrimary
              variant="outlined"
              color="info"
              buttonType="small"
              endIcon={
                <ClockIcon
                  IconColor={primaryColors?.warningMain}
                  IconHeight="16"
                  IconWidth="16"
                />
              }
            >
              <Typography variant="body1">{waitCount}</Typography>
            </CustomButtonPrimary>

            <CustomButtonPrimary
              variant="outlined"
              color="info"
              buttonType="small"
              endIcon={<CheckCircleOutlineOutlinedIcon color="info" />}
            >
              <Typography variant="body1">{successCount}</Typography>
            </CustomButtonPrimary>

            <CustomButtonPrimary
              variant="outlined"
              color="info"
              buttonType="small"
              endIcon={<CancelOutlinedIcon color="secondary" />}
            >
              <Typography variant="body1">{failedCount}</Typography>
            </CustomButtonPrimary>

            <CustomButtonPrimary
              variant="outlined"
              color="info"
              buttonType="small"
              endIcon={<PayoutIcon IconColor="#8F98A8" />}
            >
              <Typography variant="body1">
                £{formatNumber(payoutCount)}
              </Typography>
            </CustomButtonPrimary>
          </Stack>
        </Stack>
      </CardContent>
    </CardWrapper>
  );
};

export default TopPerformingBranchCard;
