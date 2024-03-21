import { Box, Button, Typography } from "@mui/material";
import PageTransition from "./../components/PageTransition";
import { Link, useNavigate } from "react-router-dom";
import { MdFacebook } from "react-icons/md";
import { RiInstagramFill, RiTwitterXLine } from "react-icons/ri";
import { IoLogoWhatsapp, IoLogoGithub } from "react-icons/io";
import { motion } from "framer-motion";

const links = [
  {
    id: 1,
    linkTo: "https://web.facebook.com/folayan.olamide.1",
    icon: <MdFacebook color="#c7d9f7fd" size={30} />,
  },
  {
    id: 2,
    linkTo: "https://www.instagram.com/dev_dredd?igsh=NXozcGk5eTFoajZo",
    icon: <RiInstagramFill size={30} color="#c7d9f7fd" />,
  },
  {
    id: 3,
    linkTo: "https://wa.me/+2348160630642",
    icon: <IoLogoWhatsapp size={30} color="#c7d9f7fd" />,
  },
  {
    id: 4,
    linkTo: "https://github.com/holladredd",
    icon: <IoLogoGithub size={30} color="#c7d9f7fd" />,
  },
  {
    id: 5,
    linkTo: "https://x.com/Holla_Dredd?s=09",
    icon: <RiTwitterXLine size={30} color="#c7d9f7fd" />,
  },
];
const Contact = () => {
  const subComponent = {
    hidden: {
      y: -50,
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      y: 0,
      scale: 1,
      borderRight: "2px solid #c7d9f7fd",
      opacity: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        damping: 15,
        stiffness: 500,
      },
    },
    visible2: {
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
    visible3: {
      y: 0,
      scale: 1,
      transform: "rotate(-90deg)",
      opacity: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        damping: 15,
        stiffness: 500,
      },
    },
    hover: {
      borderLeft: "5px solid #c7d9f7fd",
      borderRight: "5px solid #c7d9f7fd",
    },
    borderLeft: {
      borderLeft: "5px solid #c7d9f7fd",
      borderBottom: "5px solid #c7d9f7fd",
      color: "#0694c6",
    },
    scaleone: {
      scale: 0.9,
      rotate: 0.5,
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
      <Button
        component={motion.div}
        variants={subComponent}
        initial="hidden"
        animate="visible3"
        whileHover="hover"
        exit="exit"
        variant="text"
        onClick={() => navi("/")}
        sx={{
          backgroundColor: "transparent",
          borderRight: "2px solid #c7d9f7fd",
          borderBottom: "2px solid #c7d9f7fd",
          position: "absolute",
          color: "#c7d9f7fd",
          fontFamily: "squids",
          bottom: { xs: 70, md: 16 },
          right: -30,
        }}
      >
        Go back home
      </Button>
      <Box
        sx={{
          margin: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          height: "60vh",
        }}
      >
        <Box
          sx={{ width: "100%" }}
          component={motion.div}
          variants={subComponent}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          exit="exit"
        >
          <Typography
            color="#c7d9f7fd"
            variant="h1"
            sx={{
              textAlign: "start",
              fontFamily: "squids",
              fonSize: 60,
            }}
          >
            Hi.
          </Typography>
          <Typography
            variant="caption"
            color="#c7d9f7fd"
            sx={{
              margin: "10px",
              textAlign: "start",
              fontFamily: "anta",
            }}
          >
            Would you like a stunning, meticulously crafted website that you can
            fully own and easily manage on your own?
          </Typography>

          <Typography
            variant="caption"
            color="#c7d9f7fd"
            sx={{
              margin: "10px",

              textAlign: "start",
              fontFamily: "anta",
            }}
          >
            Or <br />
            Are you seeking a visually captivating and effectively organized
            graphic design for your brand?
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="caption"
              color="#c7d9f7fd"
              sx={{
                margin: "10px",
                textAlign: "start",
                fontFamily: "anta",
              }}
            >
              Email:
            </Typography>
            <Typography
              component={Link}
              to="holladred@gmail.com"
              variant="caption"
              color="#c7d9f7fd"
              sx={{
                margin: "10px",
                textAlign: "start",
                fontFamily: "anta",
              }}
            >
              holladred@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "90%",
          padding: "5px",
          position: "relative",
          bottom: 16,
          left: 16,
        }}
      >
        <Typography variant="caption" color="#c7d9f7fd">
          On social:
        </Typography>
        <Box
          component={motion.div}
          variants={subComponent}
          initial="hidden"
          animate="visible2"
          whileHover="borderLeft"
          exit="exit"
          sx={{
            borderLeft: "2px solid #c7d9f7fd",
            borderBottom: "2px solid #c7d9f7fd",
            width: "10%",
          }}
        >
          {links.map((link, id) => (
            <Link key={id} to={link.linkTo}>
              {link.icon}
            </Link>
          ))}
        </Box>
      </Box>
    </PageTransition>
  );
};

export default Contact;
