import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Stack } from "@mui/system";
import assest from "json/assest";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  DrawerWrapper,
  HeaderWrap
} from "styles/StyledComponents/HeaderWrapper";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import BackArrowIcon from "ui/Icons/BackArrowIcon";
import { useAppDispatch } from "hooks/redux/useAppDispatch";
import { logout } from "redux-toolkit/slices/userSlice";
import { queryClient } from "index";
import { toast } from "sonner";
import { Avatar, Badge, Modal } from "antd";
import { useQuery } from "react-query";
import { Getnotificationdetails } from "api/functions/notification.api";
import { NoticationData, NoticationDocs } from "typescript/interface/notification.interface";
import { Divider } from "@mui/material";
import dayjs from "dayjs";
import MailIcon from "ui/Icons/MailIcon";


interface Props {
  window?: () => Window;
  defaultHeader?: boolean;
  onBack?: () => void;
}

const drawerWidth = 240;

const dateformat = "LL"
export default function Header(props: Props) {
  const { defaultHeader, onBack } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };


  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handlelogout = () => {
    navigate("/auth/login")
    dispatch(logout());
    queryClient.clear();
    toast.warning("Logout SuccessFully")
  }
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  console.log(window.location?.pathname, "location");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Notification API Handle
  const { data: notificationlists, isLoading: notifyloading, isError: notifyError } = useQuery({
    queryKey: ["notificationlists"],
    queryFn: () => Getnotificationdetails({
      page: 1,
      length: 5,
      onlyUnread: true
    })
  })

  // console.log("Notification Details:-", notificationlists);
  const drawer = (
    <DrawerWrapper>
      <List disablePadding className="navigate_list">
        <ListItem disablePadding>
          <NavLink
            to="/dashboard/branch/"
            className={({ isActive }) =>
              isActive || window.location.pathname.includes("branch")
                ? "navigate_btn active"
                : "navigate_btn"
            }
          >
            <img src={assest?.branchIcon} alt="" />
            Branches
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink
            to="/dashboard/reports/"
            className={({ isActive, isPending }) =>
              isActive || window.location.pathname.includes("reports")
                ? "navigate_btn active"
                : "navigate_btn"
            }
          >
            <img src={assest?.fileIcon} alt="" />
            Reports
          </NavLink>
        </ListItem>
      </List>
      <Box className="drawer_avatar_sec">
        <Box className="each_item">
          <Stack direction="row" alignItems={"center"} className="avatar_stack">
            <i className="avatar_image">
              <img src={assest?.HeaderAvatar} alt="" />
            </i>
            <Box className="avatar_content">
              <Typography variant="h4">Kevin hang</Typography>
              <Typography variant="body1">Admin</Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </DrawerWrapper>
  );

  return (
    <HeaderWrap sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        position="static"
        elevation={0}
        className={"headerContainer"}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
            className="mobileShow_icon"
          >
            <MenuIcon />
          </IconButton>
          <Stack direction="row" alignItems="center" className="headerWRap">
            {defaultHeader ? (
              <Link to="/dashboard/branch/" className="headerLogo">
                <img src={assest.Logo} width={140} height={38} alt="Logo" />
              </Link>
            ) : (
              <CustomButtonPrimary
                variant="outlined"
                color="info"
                startIcon={<BackArrowIcon IconHeight="24" IconWidth="24" />}
                onClick={onBack ? onBack : () => navigate(-1)}
              >
                <Typography>Go Back</Typography>
              </CustomButtonPrimary>
            )}
          </Stack>

          {defaultHeader ? (
            <Box sx={{ display: { md: "flex" } }} className="navbar">
              <List disablePadding className="navigate_list">
                <ListItem disablePadding>
                  <NavLink
                    to="/dashboard/branch/"
                    className={({ isActive }) =>
                      isActive || window.location.pathname.includes("branch")
                        ? "navigate_btn active"
                        : "navigate_btn"
                    }
                  >
                    <img src={assest?.branchIcon} alt="" />
                    Branches
                  </NavLink>
                </ListItem>
                <ListItem disablePadding>
                  <NavLink
                    to="/dashboard/reports/"
                    className={({ isActive, isPending }) =>
                      isActive || window.location.pathname.includes("reports")
                        ? "navigate_btn active"
                        : "navigate_btn"
                    }
                  >
                    <img src={assest?.fileIcon} alt="" />
                    Reports
                  </NavLink>
                </ListItem>
              </List>
            </Box>
          ) : null}

          <Box
            className="hdr_rgt mobileShow_off"
            sx={{ display: { md: "block", xs: "none" } }}
          >
            {!window.location.pathname.includes("patient") && (
              <>
                <Box className="each_item">
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    className="notification_button active"
                  >
                    <img src={assest?.bellIcon} alt="" />
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button"
                    }}
                  >
                    <MenuItem onClick={handleClose} style={{ padding: "20px" }}>
                      <Typography variant="h4">Notification&nbsp;
                        <Badge count={notificationlists?.totalRecords} size="default">
                        </Badge>
                      </Typography>
                    </MenuItem>
                    <Divider />
                    <Box className="notificationmenudesign">
                      {
                        notificationlists?.docs?.map((item: NoticationDocs, key: number) => {
                          return (
                            <>
                              <MenuItem onClick={handleClose} style={{ padding: "20px" }}>
                                {item?.message} <br />
                                {dayjs(item?.createdAt).format(dateformat)} ||
                                <Button size="small" color="error">{item?.isRead ? (<>Viewed</>) : (<>New</>)}</Button>
                              </MenuItem>
                            </>
                          )
                        })
                      }
                    </Box>
                    <Divider />
                    <MenuItem onClick={handleClose} style={{ paddingBottom: "5px" }}>
                      <Typography variant="h5" style={{ textAlign: "center" }}>
                        Want to Show All Notification <Link to="/dashboard/notification">Click Me</Link>
                      </Typography>
                    </MenuItem>
                  </Menu>
                </Box>
                <Box className="each_item">
                  <Button
                    id="basic-button"
                    aria-controls={open2 ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open2 ? "true" : undefined}
                    onClick={handleClick2}
                    className="settings_button"
                  >
                    <img src={assest?.settingsIcon} alt="" />
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl2}
                    open={open2}
                    onClose={handleClose2}
                    MenuListProps={{
                      "aria-labelledby": "basic-button"
                    }}
                  >
                    <Link to={"/dashboard/pharmacy/information"}><MenuItem onClick={handleClose2}>Pharmacy</MenuItem></Link>
                    <MenuItem onClick={handleClose2}>My account</MenuItem>
                    <MenuItem onClick={() => { setIsModalVisible(true) }}>Logout</MenuItem>
                  </Menu>
                </Box>
                <Modal
                  visible={isModalVisible}
                  onOk={() => {
                    handlelogout()
                  }}
                  okText="Sign-out"
                  cancelText="Cancel"
                  okType="danger"
                  onCancel={() => {
                    setIsModalVisible(false);
                  }}>
                  <Typography variant="h5">🔒 Do you Want to Logout?</Typography>
                </Modal>
              </>
            )}
            <Box className="each_item">
              <Stack
                direction="row"
                alignItems={"center"}
                className="avatar_stack"
              >
                <i className="avatar_image">
                  {!window.location.pathname.includes("patient") && (
                    <img src={assest?.HeaderAvatar} alt="" />
                  )}
                </i>
                <Box className="avatar_content">
                  <Typography variant="h4">Kevin hang</Typography>
                  <Typography variant="body1">
                    {window.location.pathname.includes("patient")
                      ? "Patient"
                      : "Admin"}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </HeaderWrap>
  );
}
