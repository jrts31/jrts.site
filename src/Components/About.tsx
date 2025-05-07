import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ width: { xs: "100%", md: "40%" } }}>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "2rem",
        }}
      >
        About Me
      </Typography>
      <Typography>
        I'm a full stack developer with a passion for building scalable and
        efficient web and mobile applications. I have experience working with a
        variety of technologies and enjoy tackling challenging problems.
      </Typography>
    </Box>
  );
};

export default About;
