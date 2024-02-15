import { Box, Button, Typography } from "@mui/material";

import assest from "json/assest";
import { PendingTokenDetailsSectionWrapper } from "styles/StyledComponents/PendingTokenDetailsWrapper";

interface pendingtokenProps {
  pendingtokenid: string;
  warnningTimericon: string;
  timertime: string;
  warningtimerbox: boolean;
  children: JSX.Element | JSX.Element[];
}
function PendingTokenDetails({
  pendingtokenid,
  warnningTimericon,
  timertime,
  warningtimerbox,
  children
}: pendingtokenProps) {
  return (
    <PendingTokenDetailsSectionWrapper>
      <Box className="pendingtokenDetailsWrap">
        <Box className="PendingtokenIdWrapper">
          <Box className="pendingtokenid">
            <Typography variant="h3">{pendingtokenid}</Typography>
            <Button>
              <img src={assest.copy} alt="copy" />
            </Button>
          </Box>
          <Box className={warningtimerbox === true ? "scheduletimer" : ""}>
            <Box className="warningTimer">
              <Box className="warningTimerWrapper">
                <i>
                  <img src={warnningTimericon} alt="timericon" />
                </i>
                <Typography variant="body1">{timertime}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="pendingtokenButtonWrapper">{children}</Box>
      </Box>
    </PendingTokenDetailsSectionWrapper>
  );
}

export default PendingTokenDetails;
