import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

const headerHeight = 64;
const navBarWidth = 240;

export default function Body() {
  return (
    <Box height={"100%"} display={"flex"}>
      <Navbar width={navBarWidth} />
      <Box display={"flex"} flexDirection={"column"} width={"100%"}>
        <Header height={headerHeight} />
        <Box
          height={"100%"}
          maxHeight={`calc(100% - ${headerHeight}px)`}
          overflow={"auto"}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
