/* eslint-disable react/prop-types */
import { AppBar, Avatar, Box, Toolbar, Grid, Typography } from "@mui/material";
import { useState } from "react";
// import NavCard from "../components/NavCard";
import {
  MdClose,
  MdMenu,
  MdAir,
  MdFacebook,
  MdHomeFilled,
} from "react-icons/md";

import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp, IoLogoGithub } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { PiPhoneCallFill } from "react-icons/pi";
import { SiOpenproject } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const navItems = [
  {
    id: 1,
    link: "/",
    text: "Home",
    icon: <MdHomeFilled size={30} />,
    color: "#d6d5e6d0",
    image:
      "url(https://images.unsplash.com/photo-1585854467604-cf2080ccef31?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  },
  {
    id: 2,
    link: "About",
    text: "About",
    icon: <CgProfile size={30} />,
    color: "#d6d5e6d0",
    image:
      "url(https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  },
  {
    id: 3,
    link: "Contact",
    text: "Contact",
    icon: <PiPhoneCallFill size={30} />,
    color: "#d6d5e6d0",
    image:
      "url(https://images.unsplash.com/photo-1512998844734-cd2cca565822?q=80&w=1442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  },
  {
    id: 4,
    link: "Project",
    text: "Project",
    icon: <SiOpenproject size={30} />,
    color: "#d6d5e6d0",
    image:
      "url(https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  },
];

const dropIn = {
  hidden: {
    y: -100,
    x: 0,
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    color: "#c7d9f7fd",
    y: 0,
    x: 0,
    scale: 1,

    opacity: 0.8,
    transition: {
      duration: 0.7,
      type: "spring",
      damping: 15,
      stiffness: 500,
    },
  },
  hover: {
    scale: 0.95,
    y: 0,
    x: 0,
  },
  color: {
    color: "#009b4d",
  },
  exit: {
    y: -100,
    opacity: 0,
  },
  exitup: {
    y: 0,
    opacity: 0,
  },
};
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
const Navbar = () => {
  const [open, setOpen] = useState();
  const openDrawer = () => {
    setOpen((current) => !current);
  };

  return (
    <Box>
      <AppBar
        position="relative"
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          zIndex: 50,
          position: { xs: "fixed" },
          backdropFilter: "none",

          mixBlendMode: "difference",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Avatar
            alt="Dredd"
            src="../hd.png"
            sx={{
              width: 60,
              height: 60,

              opacity: 0.8,
            }}
          />

          <AnimatePresence initial={false} mode="wait">
            {open ? (
              <Box
                component={motion.div}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                exit="exit"
              >
                <MdClose
                  color="#c7d9f7fd"
                  onClick={openDrawer}
                  size={40}
                  zIndex={40}
                />
              </Box>
            ) : (
              <Box
                component={motion.div}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                exit="exit"
              >
                <MdMenu
                  color="#c7d9f7fd"
                  onClick={openDrawer}
                  size={40}
                  zIndex={40}
                />
              </Box>
            )}
          </AnimatePresence>
        </Toolbar>
      </AppBar>
      <AnimatePresence initial={false} mode="wait">
        {open ? (
          <Grid
            container
            sx={{
              display: open ? "flex" : "none",
              justifyContent: "space-around",
              textAlign: "center",
              backdropFilter: "blur(10px)",
              paddingBottom: 6,
              paddingTop: 6,
              position: { xs: "fixed", md: "absolute" },
              top: 0,
              backgroundColor: "#0c1a32d3",
              backgroundImage: `url(
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E"
              )`,
              backgroundBlendMode: "darken",
              width: "100%",
              height: "100%",
            }}
            zIndex={40}
          >
            <Grid
              item
              xs={10}
              sx={{
                justifyContent: "flex-end",
                alignItems: "center",
                color: "#c7d9f7fd",
                height: "10vh",
                display: { sm: "flex", xs: "none" },
              }}
              component={motion.div}
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exitup"
            >
              <Box
                sx={{
                  width: "20%",
                  display: "flex",
                  color: "#c7d9f7fd",
                  justifyContent: "space-between",
                }}
              >
                {links.map((link, id) => (
                  <Link key={id} to={link.linkTo}>
                    {link.icon}
                  </Link>
                ))}
              </Box>
            </Grid>
            <Box
              sx={{
                width: "100%",
                height: "10vh",
                padding: 0,
                display: { sm: "flex", xs: "none" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h1"
                fontFamily="squids"
                component={motion.div}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                whileHover="color"
                exit="exitup"
                sx={{ color: "#c7d9f7fd" }}
              >
                dredd
              </Typography>
            </Box>
            {navItems.map((navItem, id) => (
              <Grid
                item
                key={id}
                xs={10}
                md={5}
                component={motion.div}
                drag
                initial="hidden"
                animate="visible"
                variants={dropIn}
                exit="exit"
                whileHover="hover"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  marginTop: 2,
                }}
              >
                <Box
                  component={Link}
                  to={navItem.link}
                  onClick={() => setOpen(false)}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    heigth: "fit",
                    borderRadius: 4,
                    backdropFilter: "blur(10px)",
                    backgroundColor: "#0c1a32d3",
                    // backgroundImage:
                    //   "linear-gradient(to right bottom, #009b4d, #6898f8)",
                    opacity: "90%",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      heigth: "100%",
                      borderRadius: "10px",
                      border: "2px solid #c7d9f7fd",
                      mixBlendMode: "normal",
                      backgroundColor: "none",
                    }}
                  >
                    <Box
                      sx={{
                        width: "95%",
                        padding: "5px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                          color: "#c7d9f7fd",
                        }}
                      >
                        {navItem.icon}
                        <MdAir size={30} />
                      </Box>
                      <Typography
                        sx={{ fontFamily: "Misa" }}
                        variant="h2"
                        color="#c7d9f7fd"
                      >
                        {navItem.text}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        ) : null}
      </AnimatePresence>
    </Box>
  );
};

export default Navbar;
