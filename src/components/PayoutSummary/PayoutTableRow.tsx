import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Chip, Stack, TableCell, TableRow, Typography } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";
import { useMemo } from "react";
import { useNavigate } from "react-router";
import { PayoutReportType } from "typescript/interface/report.interface";

import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import CalenderIcon from "ui/Icons/CalenderIcon";
import CommisionIcon from "ui/Icons/CommisionIcon";
import PayInicon from "ui/Icons/PayInicon";
import PayoutIcon from "ui/Icons/PayoutIcon";
import TickIcon from "ui/Icons/TickIcon";

type Props = {
  report: PayoutReportType;
};

export default function PayoutTableRow({ report }: Props) {
  const navigate = useNavigate();

  const RenderChip = useMemo(() => {
    if (report?.status?.toLocaleLowerCase() === "inprogress") {
      return (
        <Chip
          label="In progress"
          icon={<AccessTimeOutlinedIcon />}
          color="warning"
          variant="filled"
          className="pending"
        />
      );
    }

    if (report?.status?.toLocaleLowerCase() === "completed") {
      return (
        <Chip
          label="Completed"
          icon={<TickIcon IconColor={primaryColors.deepGreen} />}
          color="success"
          variant="filled"
          className="paid"
        />
      );
    }

    return (
      <Chip
        label={report?.status}
        // icon={<TickIcon IconColor={primaryColors.deepGreen} />}
        // color="success"
        variant="filled"
        // className="paid"
      />
    );
  }, [report?.status]);

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell id="date">
        <Stack direction={"row"} spacing={1}>
          <CalenderIcon />
          <Typography variant="body1">{report?.payoutInitiateDate}</Typography>
        </Stack>
      </TableCell>
      <TableCell id="Branches">
        <Typography variant="body1" textAlign={"center"}>
          {report?.uniquePharmacyBranchCount}
        </Typography>
      </TableCell>
      <TableCell id="Orders">
        <Typography variant="body1" textAlign={"center"}>
          {report?.orderCount}
        </Typography>
      </TableCell>
      <TableCell id="Details">
        <Stack direction="row" spacing={2} justifyContent={"center"}>
          <Stack
            className="payout_summary_details_card"
            justifyContent={"space-between"}
          >
            <Typography variant="body1" className="heading">
              £ {report?.totalPayoutAmount}
            </Typography>
            <Stack direction={"row"} spacing={0.5}>
              <PayoutIcon IconColor="#8F98A8" />
              <Typography>Payouts</Typography>
            </Stack>
          </Stack>
          <Stack
            className="payout_summary_details_card"
            justifyContent={"space-between"}
          >
            <Typography variant="body1" className="heading">
              £{report?.totalPaidAmount}
            </Typography>
            <Stack direction={"row"} spacing={0.5}>
              <PayInicon IconColor="#8F98A8" />
              <Typography>Revenues</Typography>
            </Stack>
          </Stack>
          <Stack
            className="payout_summary_details_card"
            justifyContent={"space-between"}
          >
            <Typography variant="body1" className="heading">
              £{report?.platformFeeAmount}
            </Typography>
            <Stack direction={"row"} spacing={0.5}>
              <CommisionIcon
                IconHeight="20"
                IconWidth="20"
                IconColor="#8F98A8"
              />
              <Typography>Commission</Typography>
            </Stack>
          </Stack>
        </Stack>
      </TableCell>
      <TableCell id="Status" align="center">
        {RenderChip}
      </TableCell>
      <TableCell id="Action">
        <CustomButtonPrimary
          endIcon={<ArrowForwardIcon />}
          variant="contained"
          color="primary"
          buttonType="small"
          onClick={() =>
            navigate(`/dashboard/reports/payout-overview/${report?.id}`)
          }
        >
          <Typography variant="body1">View</Typography>
        </CustomButtonPrimary>
      </TableCell>
    </TableRow>
  );
}
