import { Card, Typography } from "@mui/material";

interface props {
  skill: skill;
}

interface skill {
  poster: string;
  name: string;
}

const SkillCard = ({ skill }: props) => {
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
        src={skill.poster}
        style={{
          width: "100%",
          height: 150,
          borderRadius: "10px",
        }}
        alt="poster"
      />
      <Typography>{skill.name}</Typography>
    </Card>
  );
};

export default SkillCard;
