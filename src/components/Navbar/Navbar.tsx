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
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../config/constants";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import GridViewIcon from "@mui/icons-material/GridView";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Navbar({ width }: { width?: number }) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={width || 240}
      minWidth={width || 240}
      height={"100%"}
      borderRight={1}
      borderColor={"#ccc"}
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
