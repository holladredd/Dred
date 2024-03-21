import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PageTransition from "./../components/PageTransition";

const dropIn = {
  hidden: {
    y: -50,
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    y: 0,
    scale: 0.9,
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
    color: "#009b4d",
  },
  scaleone: {
    scale: 1,

    color: "#009b4d",
  },
  exit: {
    y: 0,
    opacity: 0,
    scale: 0.6,
  },
};
const Home = () => {
  const navi = useNavigate();
  function navigate() {
    navi("/About");
  }
  return (
    <PageTransition>
      <Box
        sx={{
          display: { xs: "flex", md: "flexbox" },
          flexDirection: { xs: "column" },

          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        <Typography
          sx={{
            zIndex: 0,
            fontSize: { md: 150 },
            fontFamily: "squids",
            color: "#c7d9f7fd",
            margin: 0,
          }}
          variant="h1"
          color="initial"
          component={motion.h1}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          exit="exit"
        >
          Hello
        </Typography>
        <Typography
          sx={{
            zIndex: 0,
            fontFamily: "squids",
            color: "#c7d9f7fd",
            margin: 0,
            fontSize: { md: 130 },
          }}
          variant="h1"
          color="initial"
          component={motion.h1}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          exit="exit"
        >
          i am
        </Typography>
        <Typography
          sx={{
            zIndex: 0,
            fontFamily: "squids",
            color: "#c7d9f7fd",
            fontSize: { md: 150 },
          }}
          variant="h1"
          color="initial"
          component={motion.h1}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          whileHover="scale"
          exit="exit"
        >
          Dredd
        </Typography>
        <Button
          variant="text"
          component={motion.button}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          whileHover="scaleone"
          exit="exit"
          sx={{
            fontFamily: "squids",
            color: "#c7d9f7fd",
            display: "flex",
            justifySelf: "center",
            alignSelf: "center",
          }}
          startIcon={<FaLongArrowAltRight />}
          onClick={navigate}
        >
          Learn More
        </Button>
      </Box>
    </PageTransition>
  );
};

export default Home;
