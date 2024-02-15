import { Box, Link, List, ListItem, Typography } from "@mui/material";
import assest from "json/assest";
import { OrderPendingTokenWrapper } from "styles/StyledComponents/OrderpendingTokenWrapper";

interface pendingtokenProps {
  orderedPersonName: string;
  personconatact: string;
  personMail: string;
  orderText: string;
  paymentstatusicon: string;
  paymentStatus: string;
}

function OrderPendingToken({
  orderedPersonName,
  personconatact,
  personMail,
  orderText,
  paymentstatusicon,
  paymentStatus
}: pendingtokenProps) {
  return (
    <OrderPendingTokenWrapper>
      <Box className="orderPendingUserDetailswrapper">
        <Typography variant="h3">{orderedPersonName}</Typography>

        <Box className="orderPendingUserDetails">
          <List>
            <ListItem>
              <Box className="orderpendingListlocation">
                <i>
                  <img src={assest.call} alt="phone" />
                </i>
                <Link href={`tel:${personconatact}`}>{personconatact}</Link>
              </Box>
            </ListItem>
            <ListItem>
              <Box className="orderpendingListlocation">
                <i>
                  <img src={assest.mail} alt="mail" />
                </i>
                <Link href={`mailto:${personMail}`}>{personMail}</Link>
              </Box>
            </ListItem>
            <ListItem>
              <Box className="orderpendingListlocation">
                <i>
                  <img src={assest.locationIcon} alt="" />
                </i>
                <Typography variant="body1">
                  6 The Marlins, Northwood, HA6 3NP
                </Typography>
              </Box>
            </ListItem>
          </List>
          <Box className="paymentStatusBox">
            <Box className="paymentText">
              <Typography variant="body1">{orderText}</Typography>
            </Box>

            <Box className="orderpendingPaymentstatuswrapper">
              <Box className="orderpendingPaymentstatus">
                <i>
                  <img src={paymentstatusicon} alt="" />
                </i>
                <Typography variant="body1">{paymentStatus}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </OrderPendingTokenWrapper>
  );
}

export default OrderPendingToken;
