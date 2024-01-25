import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import { useState } from "react";

const headerHeight = 64;
const navBarWidth = 240;

export default function Body() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Box
      height={"100%"}
      display={"flex"}
      position={"relative"}
      sx={
        isMobile && isMenuOpen
          ? {
              "&:before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backdropFilter: "blur(2px)",
                zIndex: 100,
                bgcolor: "#00000033",
              },
            }
          : undefined
      }
      onClick={isMobile ? () => setIsMenuOpen(false) : undefined}
    >
      <Navbar
        width={navBarWidth}
        isMobile={isMobile}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      <Box display={"flex"} flexDirection={"column"} width={"100%"}>
        <Header
          height={headerHeight}
          isMobile={isMobile}
          toggleMenu={() => setIsMenuOpen((prev) => !prev)}
        />
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
