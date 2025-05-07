import { Box } from "@mui/material";
import About from "./About";
import Contact from "./Contact";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <About />
      <Contact />
    </Box>
  );
};

export default Footer;
