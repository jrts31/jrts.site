import { Box, Card } from "@mui/material";
import Intro from "../Components/Intro";
import Footer from "../Components/Footer";
import Skills from "../Components/Skills";
import Projects from "../Components/Project/Projects";

const Home = () => {
  return (
    <Box
      sx={{
        padding: { md: "6rem", xs: "1rem" },
      }}
    >
      <Card
        sx={{
          padding: "1.5rem",
          gap: "10px",
        }}
      >
        <Intro />
        <Skills />
        <Projects />
        <Footer />
      </Card>
    </Box>
  );
};

export default Home;
