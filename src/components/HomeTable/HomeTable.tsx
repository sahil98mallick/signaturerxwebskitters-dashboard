import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import { Tooltip } from "antd";
import AnimatedTag from "components/common/AnimatedTag";
import dayjs from "dayjs";
import assest from "json/assest";
import { truncateString } from "lib/common.lib";
import { useNavigate } from "react-router";
import { HomeTableWrapper } from "styles/StyledComponents/HomeTableWrapper";
import { IbranchDetailsData, IpharmacyBranchListData, IpharmacyBranchListResponse } from "typescript/interface/pharmacy-branch.interface";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useAppSelector } from "hooks/redux/useAppSelector";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import { UserRoleEnum } from "typescript/interface/auth.interface";
type PrescriptionType = {
  status: string;
  count: number;
  icon: any;
};

const tabledata = [
  {
    name: "Signature Pharmacy",
    location: "6 The Marlins, Northwood, HA6 3NP",
    status: "online",
    prescription: [
      {
        status: "Pending",
        count: 20,
        icon: <AccessTimeOutlinedIcon />
      },
      {
        status: "Collected",
        count: 20,
        icon: <CheckCircleOutlineOutlinedIcon />
      },
      {
        status: "Rejected",
        count: 20,
        icon: <CancelOutlinedIcon />
      }
    ]
  },
  {
    name: "Signature Pharmacy",
    location: "6 The Marlins, Northwood, HA6 3NP",
    status: "offline",
    prescription: [
      {
        status: "Pending",
        count: 20,
        icon: <AccessTimeOutlinedIcon />
      },
      {
        status: "Collected",
        count: 20,
        icon: <CheckCircleOutlineOutlinedIcon />
      },
      {
        status: "Rejected",
        count: 20,
        icon: <CancelOutlinedIcon />
      }
    ]
  },
  {
    name: "Signature Pharmacy",
    location: "6 The Marlins, Northwood, HA6 3NP",
    status: "online",
    prescription: [
      {
        status: "Pending",
        count: 20,
        icon: <AccessTimeOutlinedIcon />
      },
      {
        status: "Collected",
        count: 20,
        icon: <CheckCircleOutlineOutlinedIcon />
      },
      {
        status: "Rejected",
        count: 20,
        icon: <CancelOutlinedIcon />
      }
    ]
  },
  {
    name: "Signature Pharmacy",
    location: "6 The Marlins, Northwood, HA6 3NP",
    status: "offline",
    prescription: [
      {
        status: "Pending",
        count: 20,
        icon: <AccessTimeOutlinedIcon />
      },
      {
        status: "Collected",
        count: 20,
        icon: <CheckCircleOutlineOutlinedIcon />
      },
      {
        status: "Rejected",
        count: 20,
        icon: <CancelOutlinedIcon />
      }
    ]
  },
  {
    name: "Signature Pharmacy",
    location: "6 The Marlins, Northwood, HA6 3NP",
    status: "online",
    prescription: [
      {
        status: "Pending",
        count: 20,
        icon: <AccessTimeOutlinedIcon />
      },
      {
        status: "Collected",
        count: 20,
        icon: <CheckCircleOutlineOutlinedIcon />
      },
      {
        status: "Rejected",
        count: 20,
        icon: <CancelOutlinedIcon />
      }
    ]
  },
  {
    name: "Signature Pharmacy",
    location: "6 The Marlins, Northwood, HA6 3NP",
    status: "offline",
    prescription: [
      {
        status: "Pending",
        count: 20,
        icon: <AccessTimeOutlinedIcon />
      },
      {
        status: "Collected",
        count: 20,
        icon: <CheckCircleOutlineOutlinedIcon />
      },
      {
        status: "Rejected",
        count: 20,
        icon: <CancelOutlinedIcon />
      }
    ]
  },
  {
    name: "Signature Pharmacy",
    location: "6 The Marlins, Northwood, HA6 3NP",
    status: "online",
    prescription: [
      {
        status: "Pending",
        count: 20,
        icon: <AccessTimeOutlinedIcon />
      },
      {
        status: "Collected",
        count: 20,
        icon: <CheckCircleOutlineOutlinedIcon />
      },
      {
        status: "Rejected",
        count: 20,
        icon: <CancelOutlinedIcon />
      }
    ]
  },
  {
    name: "Signature Pharmacy",
    location: "6 The Marlins, Northwood, HA6 3NP",
    status: "offline",
    prescription: [
      {
        status: "Pending",
        count: 20,
        icon: <AccessTimeOutlinedIcon />
      },
      {
        status: "Collected",
        count: 20,
        icon: <CheckCircleOutlineOutlinedIcon />
      },
      {
        status: "Rejected",
        count: 20,
        icon: <CancelOutlinedIcon />
      }
    ]
  },
  {
    name: "Signature Pharmacy",
    location: "6 The Marlins, Northwood, HA6 3NP",
    status: "online",
    prescription: [
      {
        status: "Pending",
        count: 20,
        icon: <AccessTimeOutlinedIcon />
      },
      {
        status: "Collected",
        count: 20,
        icon: <CheckCircleOutlineOutlinedIcon />
      },
      {
        status: "Rejected",
        count: 20,
        icon: <CancelOutlinedIcon />
      }
    ]
  },
  {
    name: "Signature Pharmacy",
    location: "6 The Marlins, Northwood, HA6 3NP",
    status: "offline",
    prescription: [
      {
        status: "Pending",
        count: 20,
        icon: <AccessTimeOutlinedIcon />
      },
      {
        status: "Collected",
        count: 20,
        icon: <CheckCircleOutlineOutlinedIcon />
      },
      {
        status: "Rejected",
        count: 20,
        icon: <CancelOutlinedIcon />
      }
    ]
  }
];

interface HomeTableProps {
  data: IbranchDetailsData[] | undefined;
}
const isjustAdded = (createdAt: string) => {
  let c = false;

  if (dayjs().diff(dayjs(createdAt), "seconds") < 1) {
    c = true;

    setTimeout(() => {
      c = false;
      return c;
    }, 2000);
  }
  return c;
};

const HomeTable = ({ data }: HomeTableProps) => {
  const navigate = useNavigate();
  console.log("Home Table Data", data);
  const { userData } = useAppSelector((s) => s.userSlice)
  return (
    <>
      <HomeTableWrapper>
        <TableContainer>
          <Table
            sx={{
              minWidth: "100%"
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell>Branch Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Prescriptions</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                data?.map((item, key) => {
                  return (
                    <>
                      <TableRow
                        key={item.name + key}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell>
                          {item?.code || "Not Present"}
                        </TableCell>
                        <TableCell>
                          <Typography display="flex" variant="h5">
                            {item?.name}

                            {isjustAdded(item.createdAt) && (
                              <Box mx={1}>
                                <AnimatedTag text="Just added" />
                              </Box>
                            )}
                          </Typography>
                          <Typography variant="body1" className="lcoation_para">
                            <Typography variant="caption">
                              <img src={assest?.locationIcon} alt="" />
                            </Typography>

                            {item?.address?.length > 20 ? (
                              <>
                                <Tooltip title={item?.address}>
                                  {truncateString(item?.address, 20)}{" "}
                                </Tooltip>
                              </>
                            ) : (
                              item?.address
                            )}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          {
                            item?.status === "active" ? (
                              <><Chip label="Online" color="success" icon={<FiberManualRecordIcon />} /></>
                            ) : (
                              <>
                                <Chip label="Offline" color="error" icon={<FiberManualRecordIcon />} />
                              </>
                            )
                          }
                        </TableCell>
                        <TableCell>
                          <Stack direction={"row"} className="prescription_stack">
                            <Box className="each_stack">
                              <Typography variant="h6">
                                {item?.pendingCount || 0}
                              </Typography>
                              <Typography variant="body1">
                                <Typography variant="caption" className={"ylw_icon"}>
                                  <AccessTimeOutlinedIcon />
                                </Typography>
                                Pending
                              </Typography>
                            </Box>
                            <Box className="each_stack">
                              <Typography variant="h6">
                                {item?.rejectedCount || 0}
                              </Typography>
                              <Typography variant="body1">
                                <Typography variant="caption" className={"red_icon"}>
                                  <CancelOutlinedIcon />
                                </Typography>
                                Rejected
                              </Typography>
                            </Box>
                            <Box className="each_stack">
                              <Typography variant="h6">
                                {item?.collectedCount || 0}
                              </Typography>
                              <Typography variant="body1">
                                <Typography variant="caption" className={"grn_icon"}>
                                  <CheckCircleOutlineOutlinedIcon />
                                </Typography>
                                Collected
                              </Typography>
                            </Box>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <Stack direction="row" spacing={2}>
                            {
                              userData?.role === UserRoleEnum.admin || userData?.role === UserRoleEnum.branch_admin ? (
                                <>
                                  <Button variant="outlined" color="primary" endIcon={<SettingsApplicationsIcon />} size="large">Admin</Button>
                                </>
                              ) : null
                            }
                            <Button variant="outlined" color="success" 
                            onClick={()=>{
                              navigate(`/dashboard/branch/${item?.id}/order-overview`)
                            }}
                            startIcon={<RemoveRedEyeIcon />} size="large">View</Button>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    </>
                  )
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </HomeTableWrapper>
    </>
  )
}

export default HomeTable
