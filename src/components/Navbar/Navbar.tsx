import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { NavLink, useSearchParams } from "react-router-dom";
import { ROUTES, SEARCH_PARAMS } from "../../config/constants";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import GridViewIcon from "@mui/icons-material/GridView";
import LogoutIcon from "@mui/icons-material/Logout";
import DownloadingIcon from "@mui/icons-material/Downloading";
import AutoModeIcon from "@mui/icons-material/AutoMode";

export default function Navbar({
  width,
  isMobile,
  isOpen,
  onClose,
}: {
  width?: number;
  isMobile: boolean;
  isOpen: boolean;
  onClose: () => void;
}) {
  let [searchParams] = useSearchParams();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={width || 240}
      minWidth={width || 240}
      height={"100%"}
      borderRight={1}
      borderColor={"#ccc"}
      position={isMobile ? "absolute" : undefined}
      left={isOpen ? 0 : "-100%"}
      bgcolor={"#fff"}
      zIndex={100}
      onClick={(e) => e.stopPropagation()}
      sx={{
        transition: "0.3s all linear",
      }}
    >
      <Box p={2} display={"flex"} alignItems={"center"} gap={2}>
        <img
          src="/logo.jpeg"
          alt=""
          width={50}
          style={{ borderRadius: "50%" }}
        />
        <Typography variant="h6" fontWeight={600} color={"primary.main"}>
          UC-2 (JI)
        </Typography>
      </Box>
      <Box>
        <List component={"nav"}>
          <ListItem>
            <NavLink to={ROUTES.dashboard} className={"nav-link"}>
              <ListItemButton>
                <ListItemIcon>
                  <GridViewIcon />
                </ListItemIcon>
                <ListItemText>Dashboard</ListItemText>
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListSubheader>Complaints</ListSubheader>
          <ListItem>
            <NavLink
              to={`${ROUTES.complaints}/${ROUTES.pending}`}
              className={`nav-link${
                searchParams.get(SEARCH_PARAMS.status) &&
                searchParams.get(SEARCH_PARAMS.status) === ROUTES.pending
                  ? " active"
                  : ""
              }`}
            >
              <ListItemButton>
                <ListItemIcon>
                  <DownloadingIcon />
                </ListItemIcon>
                <ListItemText>Pending</ListItemText>
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to={`${ROUTES.complaints}/${ROUTES.inProgress}`}
              className={`nav-link${
                searchParams.get(SEARCH_PARAMS.status) &&
                searchParams.get(SEARCH_PARAMS.status) === ROUTES.inProgress
                  ? " active"
                  : ""
              }`}
            >
              <ListItemButton>
                <ListItemIcon>
                  <AutoModeIcon />
                </ListItemIcon>
                <ListItemText>In Progress</ListItemText>
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to={`${ROUTES.complaints}/${ROUTES.completed}`}
              className={`nav-link${
                searchParams.get(SEARCH_PARAMS.status) &&
                searchParams.get(SEARCH_PARAMS.status) === ROUTES.completed
                  ? " active"
                  : ""
              }`}
            >
              <ListItemButton>
                <ListItemIcon>
                  <DownloadingIcon />
                </ListItemIcon>
                <ListItemText>Completed</ListItemText>
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to={`${ROUTES.complaints}/${ROUTES.archived}`}
              className={`nav-link${
                searchParams.get(SEARCH_PARAMS.status) &&
                searchParams.get(SEARCH_PARAMS.status) === ROUTES.archived
                  ? " active"
                  : ""
              }`}
            >
              <ListItemButton>
                <ListItemIcon>
                  <DownloadingIcon />
                </ListItemIcon>
                <ListItemText>Archived</ListItemText>
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListSubheader>Auth</ListSubheader>
          <ListItem>
            <NavLink to={ROUTES.profile} className={"nav-link"}>
              <ListItemButton>
                <ListItemIcon>
                  <PersonOutlineIcon />
                </ListItemIcon>
                <ListItemText>Profile</ListItemText>
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to={ROUTES.signIn} className={"nav-link"}>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText>Sign Out</ListItemText>
              </ListItemButton>
            </NavLink>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
