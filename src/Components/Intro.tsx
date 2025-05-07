import { Box, Typography } from "@mui/material";
import coder from "../../assets/coder.png";

const Intro = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "50%" } }}>
        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "3.5rem" },
            fontWeight: "bold",
          }}
        >
          Hi, I'm Rutik Kamble
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "2.5rem" },
            fontWeight: "600",
            color: "#121212",
          }}
        >
          Full Stack Developer
        </Typography>
        <Typography color="#121212" fontWeight={"500"}>
          I build scalable web & mobile applications with React, Node.Js and
          Mongo DB
        </Typography>
      </Box>
      <Box sx={{ width: "50%", display: { xs: "none", md: "block" } }}>
        <img
          src={coder}
          style={{
            width: "100%",
          }}
        />
      </Box>
    </Box>
  );
};

export default Intro;
