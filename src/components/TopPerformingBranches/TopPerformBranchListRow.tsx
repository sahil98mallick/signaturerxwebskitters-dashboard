import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { Box, Stack, TableCell, TableRow, Typography } from "@mui/material";
import { Tooltip } from "antd";
import assest from "json/assest";
import { formatNumber, truncateString } from "lib/common.lib";
import { useNavigate } from "react-router";
import { IPayoutTopPerformingBranch } from "typescript/interface/report.interface";

import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import PayoutIcon from "ui/Icons/PayoutIcon";
export default function TopPerformBranchListRow({
  info
}: {
  info: IPayoutTopPerformingBranch;
}) {
  const navigate = useNavigate();
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell>
        {/* {(page - 1) * limit + index + 1} */}
        {info?.code || "N/A"}
      </TableCell>
      <TableCell>
        <Typography variant="h5">{info?.branchName}</Typography>
        <Typography variant="body1" className="lcoation_para">
          <Typography variant="caption">
            <img src={assest?.locationIcon} alt="" />
          </Typography>

          {info?.branchAddress?.length > 20 ? (
            <>
              <Tooltip title={info?.branchAddress}>
                {truncateString(info?.branchAddress, 20)}{" "}
              </Tooltip>
            </>
          ) : (
            info?.branchAddress
          )}
        </Typography>
      </TableCell>

      <TableCell>
        <Stack direction={"row"} className="prescription_stack">
          <Box className="each_stack">
            <Typography variant="h6">{info.totalPendingOrders}</Typography>
            <Typography variant="body1">
              <Typography variant="caption" className={"ylw_icon"}>
                <AccessTimeOutlinedIcon />
              </Typography>
              Pending
            </Typography>
          </Box>
          <Box className="each_stack">
            <Typography variant="h6">{info.totalCollectedOrders}</Typography>
            <Typography variant="body1">
              <Typography variant="caption" className={"grn_icon"}>
                <CheckCircleOutlineOutlinedIcon />
              </Typography>
              Collected
            </Typography>
          </Box>

          <Box className="each_stack">
            <Typography variant="h6">{info.totalCancelledOrders}</Typography>
            <Typography variant="body1">
              <Typography variant="caption" className={"red_icon"}>
                <CancelOutlinedIcon />
              </Typography>
              Rejected
            </Typography>
          </Box>

          <Box className="each_stack">
            <Typography variant="h6">
              £{formatNumber(Number(info.totalPayoutAmount))}
            </Typography>
            <Typography variant="body1">
              <Typography variant="caption" className={"grn_icon"}>
                <PayoutIcon IconColor="#8F98A8" />
              </Typography>
              Payout
            </Typography>
          </Box>
        </Stack>
      </TableCell>
      <TableCell>
        <Stack direction={"row"} alignItems={"center"} className="action_stack">
          <CustomButtonPrimary
            onClick={() =>
              navigate(
                `/dashboard/branch/${info?.pharmacyBranchId}/order-overview`
              )
            }
            variant={"contained"}
            color={"primary"}
            buttonType="small"
            endIcon={<ArrowForwardRoundedIcon />}
          >
            <Typography variant="body1">View</Typography>
          </CustomButtonPrimary>
        </Stack>
      </TableCell>
    </TableRow>
  );
}
