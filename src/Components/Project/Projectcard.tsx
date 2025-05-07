import { Card, Typography } from "@mui/material";

interface props {
  project: Project;
}
interface Project {
  poster: string;
  name: string;
  description: string;
}

const Projectcard = ({ project }: props) => {
  return (
    <Card
      sx={{
        padding: "10px",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: "5px",
      }}
    >
      <img
        src={project.poster}
        style={{
          width: "100%",
          height: 150,
          borderRadius: "10px",
        }}
        alt="poster"
      />
      <Typography fontWeight={"bold"}>{project.name}</Typography>
      <Typography>
        {project.description.length > 28
          ? `${project.description.slice(0, 28)}...`
          : project.description}
      </Typography>
    </Card>
  );
};

export default Projectcard;
