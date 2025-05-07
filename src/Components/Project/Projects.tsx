import { Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import Projectcard from "./Projectcard";

const Projects = () => {
  const projects = [
    {
      name: "EduQuick",
      description:
        "EduQuick is website where you can watch short videos and gain knowladge.",
      poster: "",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Box>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "2rem",
        }}
      >
        Projects
      </Typography>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        transitionDuration={500}
      >
        {projects.map((project, i) => (
          <Projectcard project={project} key={i} />
        ))}
      </Carousel>
    </Box>
  );
};

export default Projects;
