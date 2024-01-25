import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header({
  height,
  isMobile,
  toggleMenu,
}: {
  height?: number;
  isMobile: boolean;
  toggleMenu: () => void;
}) {
  return (
    <Box
      width={"100%"}
      minHeight={height || 64}
      borderBottom={1}
      borderColor={"#ccc"}
      display={"flex"}
      alignItems={"center"}
      px={3}
    >
      {isMobile ? (
        <MenuIcon
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
        />
      ) : undefined}
    </Box>
  );
}
