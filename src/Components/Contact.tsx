import { Box, Link, Typography, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "2rem",
        }}
      >
        Contact me
      </Typography>
      <Typography sx={{ marginBottom: "1rem" }}>
        Get in touch with-me via email or follow me on social media.
      </Typography>
      <Link
        href="mailto:developer.jrts@gmail.com"
        component="a"
        underline="hover"
        sx={{
          padding: "1rem",
          border: "1.2px solid #111",
          borderRadius: "1rem",
          fontWeight: "bold",
        }}
      >
        developer.jrts@gmail.com
      </Link>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <Link
          href="https://instagram.com/developer.jrts"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton>
            <InstagramIcon sx={{ color: "#111" }} />
          </IconButton>
        </Link>

        <Link
          href="https://github.com/jrts31"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton>
            <GitHubIcon sx={{ color: "#111" }} />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
};

export default Contact;
