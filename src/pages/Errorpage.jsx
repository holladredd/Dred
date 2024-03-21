import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";

export default function Error() {
  const dropIn = {
    hidden: {
      y: -100,
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      y: 20,
      scale: 1,
      borderRadius: "2%",
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.7,
        type: "spring",
        damping: 15,
        stiffness: 500,
      },
    },
    hover: {
      scale: 0.7,
    },
    scale: {
      scale: 1,
      marginLeft: 10,
      color: "#0694c6",
    },
    scaleone: {
      scale: 1,

      color: "#c5b206be",
    },
    exit: {
      y: 0,
      opacity: 0,
    },
  };
  return (
    <PageTransition>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "100%",
        }}
      >
        <Typography
          variant="h1"
          style={{ color: "white" }}
          component={motion.div}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          404
        </Typography>
        <Typography
          variant="h6"
          style={{ color: "white" }}
          component={motion.div}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          The page you’re looking for doesn’t exist.
        </Typography>
        <Button variant="contained" component={Link} to="/">
          Back Home
        </Button>
      </Box>
    </PageTransition>
  );
}
