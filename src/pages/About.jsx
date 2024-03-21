import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import PageTransition from "./../components/PageTransition";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const About = () => {
  const dropIn = {
    hidden: {
      y: -50,
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      y: 0,
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

      color: "#0694c6",
    },
    scaleone: {
      scale: 1,
      color: "#009B4D",
    },
    scaletwo: {
      scale: 1,
      borderRadius: 12.5,
      border: "1px solid #009b4d",
      color: "#009B4D",
    },
    exit: {
      y: 20,
      opacity: 0,
    },
  };
  const subComponent = {
    hidden: {
      y: -50,
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      y: 0,
      scale: 1,
      backgroundImage: "linear-gradient(to right bottom, #009B4D, #c7d9f7fd)",
      padding: 10,
      opacity: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        damping: 15,
        stiffness: 500,
      },
    },
    hover: {
      scale: 0.95,
      rotate: 0.8,
      padding: 2,
    },

    exit: {
      y: 20,
      opacity: 0,
    },
  };

  const navi = useNavigate();
  function navigate() {
    navi("/About2");
  }
  return (
    <PageTransition>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",

          width: "100%",
          height: "100%",
        }}
      >
        <Grid
          item
          xs={11}
          md={5}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 4,
          }}
        >
          <Box
            component={motion.div}
            variants={subComponent}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            exit="exit"
            sx={{
              width: { xs: 250, md: 350 },
              height: { xs: 250, md: 350 },
              borderRadius: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Folayan Olamide Mayokun"
              src="./image.jpg"
              sx={{
                width: { xs: 250, md: 350 },
                height: { xs: 250, md: 350 },
              }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={11}
          md={5}
          sx={{
            padding: "10px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              padding: "2px",
              textAlign: { xs: "center", md: "start" },
            }}
          >
            <Typography
              variant="h4"
              color="whitesmoke"
              component={motion.div}
              variants={dropIn}
              initial="hidden"
              animate="visible"
              whileHover="scaleone"
              exit="exit"
              sx={{
                fontFamily: "Anta",
                fontSize: { xs: 30, md: 60 },
                margin: "5px",
              }}
            >
              Folayan Olamide.M
            </Typography>
            <Typography
              variant="h5"
              color="whitesmoke"
              component={motion.div}
              variants={dropIn}
              initial="hidden"
              animate="visible"
              whileHover="scaleone"
              exit="exit"
              sx={{
                fontFamily: "playfair",
                margin: "5px",
                fontSize: { xs: 30, md: 40 },
              }}
            >
              Software Developer
            </Typography>
            <Typography
              variant="body1"
              color="whitesmoke"
              component={motion.div}
              variants={dropIn}
              initial="hidden"
              animate="visible"
              whileHover="scaleone"
              exit="exit"
              sx={{
                fontFamily: "playfair",
                fontSize: { md: 20 },
                textAlign: { xs: "justify", md: "start" },
                margin: "5px",
              }}
            >
              Olamide here, although I go by Dredd. As a software developer, my
              area of expertise is creating effective front- and back-ends for
              websites that function flawlessly on all platforms and browsers. I
              am passionate about creating interfaces that are enjoyable and
              usable for as many users as I can.
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
              }}
            >
              <Button
                variant="text"
                color="inherit"
                component={motion.button}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                whileHover="scaleone"
                exit="exit"
                sx={{
                  fontFamily: "squids",
                  color: "white",
                  display: "flex",
                }}
                startIcon={<IoMdCloudDownload />}
                onClick={navigate}
              >
                download cv
              </Button>
              <Button
                variant="outlined"
                component={motion.button}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                whileHover="scaletwo"
                exit="exit"
                sx={{
                  fontFamily: "squids",
                  color: "white",
                  display: "flex",
                }}
                startIcon={<FaLongArrowAltRight />}
                onClick={navigate}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </PageTransition>
  );
};

export default About;
