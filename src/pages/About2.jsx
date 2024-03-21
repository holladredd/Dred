import { Box, Button, Grid, Typography } from "@mui/material";
import PageTransition from "./../components/PageTransition";
import { motion } from "framer-motion";
import { CgDesignmodo } from "react-icons/cg";
import { MdAnimation, MdModelTraining, MdBook } from "react-icons/md";
import { useNavigate } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
const works = [
  {
    id: 1,
    title: "Graphics Design",
    desc: "For websites and mobile applications, I create the graphics. To design graphics, I use Adobe Photoshop. I create business cards, banners, logos, info-graphics, and many other things. I'm here to assist you with your needs around-the-clock.",
    icons: <CgDesignmodo size={40} />,
  },
  {
    id: 2,
    title: "Animations",
    desc: "I create all kinds of animations. I am proficient in info-graphic and advertisement animation, and I can create an animation for your logos. I work quickly and efficiently thanks to the usage of Adobe After Effects, Premier Pro, and other great programs like inshot and KinMaster. I'm here to help you day or night anytime you need it.",
    icons: <MdAnimation size={40} />,
  },
  {
    id: 3,
    title: "Training",
    desc: "I also teach folks how to enter the tech industry. Your choice of language and the sort of stack you intend to utilize will influence my services. I can either use physical or online training modes.",
    icons: <MdModelTraining size={40} />,
  },
  {
    id: 4,
    title: "Book Publishing",
    desc: "With the aid of Amazon KDP and other platforms, I publish books. a number of genres, including instruction manuals, sketching books, and love stories. I've been doing it for a long time. Please feel free to get in touch with me about any project; I'll always be here for you.",
    icons: <MdBook size={40} />,
  },
];
const About2 = () => {
  const subComponent = {
    hidden: {
      y: -50,
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      y: 0,
      scale: 1,
      color: "#c7d9f7fd",
      opacity: 0.9,
      transition: {
        duration: 0.7,
        type: "spring",
        damping: 15,
        stiffness: 500,
      },
    },
    hover: {
      scale: 0.98,

      y: -10,
      border: "2px solid #009b4d",
      borderRadius: 12.5,
      color: "#009b4d",
    },
    width: {
      width: "60%",
    },
    scale: {
      scale: 1,

      color: "#009b4d",
    },
    scaleone: {
      scale: 1,

      color: "#009b4d",
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
        component={motion.div}
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        whileHover={{
          opacity: 0.7,
        }}
        exit={{
          opacity: 0,
          scale: 0.8,
        }}
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 40,
          position: "absolute",
          bottom: -30,
        }}
      >
        <Button
          vairant="text"
          onClick={() => navi("/About")}
          sx={{ marginLeft: 1, padding: 2, color: "#c7d9f7fd" }}
        >
          {/* <IoIosArrowBack size={60} /> */}
          go back
        </Button>
        <Button
          vairant="text"
          onClick={() => navi("/Skills")}
          sx={{ marginRight: 1, padding: 2, color: "#c7d9f7fd" }}
        >
          {/* <IoIosArrowForward size={60} /> */}
          Go to skills
        </Button>
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          height: { sm: "fit", md: "85vh" },
          marginBottom: 5,
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
            My Works
          </Typography>
        </Box>
        {works.map((work, id) => (
          <Grid
            key={id}
            item
            xs={11}
            md={5}
            component={motion.div}
            variants={subComponent}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            exit="exit"
            sx={{
              margin: "4px",
              padding: "1px",
            }}
          >
            <Box
              sx={{
                borderRadius: 3,
                display: "flex",
                padding: "10px",
                textAlign: { xs: "center", md: "start" },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  padding: "2x",
                  textAlign: { xs: "center", md: "start" },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    color: "#c7d9f7fd",
                  }}
                >
                  {work.icons}
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: "center",
                      fontFamily: "squids",
                      color: "#c7d9f7fd",
                      borderBottom: "2px solid #c7d9f7fd",
                      // borderLeft: "2px solid #c7d9f7fd",
                    }}
                  >
                    {work.title}
                  </Typography>
                </Box>
                {/* <Box
                  component={motion.div}
                  variants={subComponent}
                  initial="hidden"
                  animate={{ width: "100%" }}
                  whileHover="width"
                  exit="exit"
                  sx={{
                    width: "100%",
                    marginTop: "5px",
                    padding: "1px",
                  }}
                ></Box> */}
                <Typography
                  variant="caption"
                  sx={{
                    textAlign: { xs: "justify", md: "start" },
                    fontFamily: "Anta",
                    color: "#c7d9f7fd",
                  }}
                >
                  {work.desc}
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    marginTop: "5px",
                    padding: "1px",
                    backgroundColor: "#c7d9f7fd",
                  }}
                ></Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </PageTransition>
  );
};

export default About2;
