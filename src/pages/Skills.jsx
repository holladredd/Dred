import { Box, Grid, Button, Typography } from "@mui/material";
import PageTransition from "./../components/PageTransition";
import { motion } from "framer-motion";

import { IoLogoPython } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { DiJavascript } from "react-icons/di";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiRobotframework } from "react-icons/si";

import { FaDatabase, FaGithub } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";

const graphics = [
  {
    name: " Photoshop",
    icon: <FaGithub size={30} color="#c7d9f7fd" />,
  },
  {
    name: "canva",
    icon: <SiRobotframework size={30} color="#c7d9f7fd" />,
  },

  {
    name: "  After Effect",
    icon: <SiAdobeaftereffects size={30} color="#c7d9f7fd" />,
  },

  {
    name: "Premier Pro",
    icon: <DiJavascript size={30} color="#c7d9f7fd" />,
  },
  {
    name: "Blender",
    icon: <SiRobotframework size={30} color="#c7d9f7fd" />,
  },

  {
    name: "PowerPoint",
    icon: <DiJavascript size={30} color="#c7d9f7fd" />,
  },
];

const tools = [
  {
    name: " JavaScript",
    icon: <DiJavascript size={25} color="#c7d9f7fd" />,
  },
  {
    name: " GitHub",
    icon: <FaGithub size={25} color="#c7d9f7fd" />,
  },
  {
    name: "React",
    icon: <SiRobotframework size={25} color="#c7d9f7fd" />,
  },

  {
    name: " MongoDB",
    icon: <FaDatabase size={25} color="#c7d9f7fd" />,
  },
  {
    name: " MySQL",
    icon: <SiRobotframework size={25} color="#c7d9f7fd" />,
  },

  {
    name: "  Php",
    icon: <SiRobotframework size={25} color="#c7d9f7fd" />,
  },

  {
    name: "Python",
    icon: <IoLogoPython size={25} color="#c7d9f7fd" />,
  },

  {
    name: "Node.js",
    icon: <FaNode size={25} color="#c7d9f7fd" />,
  },
];
const Skills = () => {
  const subComponent = {
    hidden: {
      y: -50,
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      y: 0,
      scale: 1,

      opacity: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        damping: 15,
        stiffness: 500,
      },
    },
    hover: {
      scale: 0.9,
      rotate: 0.8,
    },
    scale: {
      scale: 1,

      color: "#0694c6",
    },
    scaleone: {
      scale: 0.98,
      y: -10,
      padding: 10,
      // border: "2px solid #009b4d",
      borderRadius: 12.5,
      color: "#c5b206be",
    },
    exit: {
      y: 20,
      opacity: 0,
    },
  };

  const navi = useNavigate();
  return (
    <PageTransition>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 40,
          position: "absolute",
          bottom: -40,
        }}
      >
        <Button
          vairant="text"
          onClick={() => navi("/About2")}
          component={motion.div}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transform: "rotate(-90deg)",
            borderTop: "2px solid #c7d9f7fd",
            borderLeft: "2px solid #c7d9f7fd",
          }}
          whileHover={{
            opacity: 0.7,
            borderTop: "5px solid #c7d9f7fd",
            borderLeft: "5px solid #c7d9f7fd",
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
          }}
          sx={{ padding: 1, color: "#c7d9f7fd" }}
        >
          go back
        </Button>
        <Button
          vairant="text"
          onClick={() => navi("/Contact")}
          component={motion.div}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            borderLeft: "2px solid #c7d9f7fd",
            transform: "rotate(-90deg)",
            borderBottom: "2px solid #c7d9f7fd",
          }}
          whileHover={{
            borderLeft: "5px solid #c7d9f7fd",
            borderBottom: "5px solid #c7d9f7fd",
            opacity: 0.7,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
          }}
          sx={{ padding: 1, color: "#c7d9f7fd" }}
        >
          Contact
        </Button>
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          paddingTop: "10px",
          width: "100%",
          height: { sm: "fit", md: "70vh" },
        }}
      >
        <Box
          component={motion.div}
          variants={subComponent}
          initial="hidden"
          animate={{
            y: 0,
            scale: 1,
            opacity: 0.9,
            transition: {
              duration: 0.7,
              type: "spring",
              damping: 15,
              stiffness: 500,
            },
          }}
          exit="exit"
          sx={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Typography variant="h4" color="#c7d9f7fd" fontFamily="squids">
            Tools.
          </Typography>
        </Box>

        <Grid
          item
          xs={11}
          md={5}
          sx={{
            // padding: "2px",
            margin: "10px",
            marginBottom: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",

              fontFamily: "squids",
              color: "#c7d9f7fd",
              // borderBottom: "2px solid #c7d9f7fd",
            }}
          >
            development
          </Typography>

          <Grid
            container
            component={motion.div}
            variants={subComponent}
            initial="hidden"
            animate="visible"
            whileHover="scaleone"
            exit="exit"
            sx={{
              display: "flex",
              marginTop: "10px",
              marginBottom: "10px",
              // backgroundColor: "#c7d9f7fd",
              backdropFilter: "blur(20px)",
              backgroundColor: "#0c1a32d3",
              justifyContent: "space-around",

              alignItems: "center",
              padding: "10px",
              borderRadius: 5.5,
            }}
          >
            {tools.map((tool, id) => (
              <Grid
                item
                xs={3.5}
                key={id}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  backgroundColor: "#0c3d32",
                  padding: "10px",
                  borderRadius: 2.5,
                  margin: "2px",
                }}
              >
                {tool.icon}
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "Anta",
                    color: "#c7d9f7fd",
                    marginLeft: 1,
                  }}
                >
                  {tool.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid
          item
          xs={11}
          md={5}
          sx={{
            padding: 2,
            margin: "10px",
            marginBottom: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",

              fontFamily: "squids",
              color: "#c7d9f7fd",
              // borderBottom: "2px solid #c7d9f7fd",
            }}
          >
            graphic & animation
          </Typography>

          <Grid
            container
            component={motion.div}
            variants={subComponent}
            initial="hidden"
            animate="visible"
            whileHover="scaleone"
            exit="exit"
            sx={{
              display: "flex",
              marginTop: "10px",
              marginBottom: "10px",
              // backgroundColor: "#c7d9f7fd",
              backdropFilter: "blur(20px)",
              backgroundColor: "#0c1a32d3",
              justifyContent: "space-around",

              alignItems: "center",
              padding: "10px",
              borderRadius: 5.5,
            }}
          >
            {graphics.map((graphic, id) => (
              <Grid
                item
                key={id}
                sx={{
                  width: "fit",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#0c3d32",
                  padding: "10px",
                  borderRadius: 2.5,
                  marginTop: "2px",
                  marginBottom: "2px",
                }}
              >
                {graphic.icon}
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "Anta",
                    color: "#c7d9f7fd",
                    marginLeft: 1,
                  }}
                >
                  {graphic.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </PageTransition>
  );
};

export default Skills;
