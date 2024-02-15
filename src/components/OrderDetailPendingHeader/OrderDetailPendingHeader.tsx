import { Box } from "@mui/material";
import { OrderDetailPendingHeaderWrapper } from "styles/StyledComponents/OrderDetailpendingHeaderWrapper";

interface orderDetailPendingProps {
  children: JSX.Element | JSX.Element[];
}
function OrderDetailPendingHeader({ children }: orderDetailPendingProps) {
  return (
    <OrderDetailPendingHeaderWrapper>
      <Box className="orderdetailpendingboxwrap">{children}</Box>
    </OrderDetailPendingHeaderWrapper>
  );
}

export default OrderDetailPendingHeader;
