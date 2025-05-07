import { Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SkillCard from "./SkillCard";

const Skills = () => {
  const skills = [
    {
      poster: "",
      name: "React Js",
    },
    {
      poster: "",
      name: "React Native",
    },
    {
      poster: "",
      name: "Node.Js",
    },
    {
      poster: "",
      name: "Mongo Db",
    },
    {
      poster: "",
      name: "Express Js",
    },
    {
      poster: "",
      name: "Tailwind Css",
    },
    {
      poster: "",
      name: "Bootstrap",
    },
    {
      poster: "",
      name: "MUI",
    },
    {
      poster: "",
      name: "Shadcn UI",
    },
    {
      poster: "",
      name: "Expo",
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
        Tech Stack
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
        {skills.map((skill, i) => (
          <SkillCard skill={skill} key={i} />
        ))}
      </Carousel>
    </Box>
  );
};

export default Skills;
