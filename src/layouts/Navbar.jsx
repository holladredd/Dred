/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
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
    y: 0,
    x: 0,
    scale: 0.9,
    opacity: 0.8,
    transition: {
      duration: 0.7,
      type: "spring",
      damping: 15,
      stiffness: 500,
    },
  },
  hover: {
    scale: 0.9,
    y: 0,
    x: 0,
    color: "#009b4d",
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
    icon: <MdFacebook className="text-gray-800" size={40} />,
  },
  {
    id: 2,
    linkTo: "https://www.instagram.com/dev_dredd?igsh=NXozcGk5eTFoajZo",
    icon: <RiInstagramFill size={40} className="text-gray-800" />,
  },
  {
    id: 3,
    linkTo: "https://wa.me/+2348160630642",
    icon: <IoLogoWhatsapp size={40} className="text-gray-800" />,
  },
  {
    id: 4,
    linkTo: "https://github.com/holladredd",
    icon: <IoLogoGithub size={40} className="text-gray-800" />,
  },
  {
    id: 5,
    linkTo: "https://x.com/Holla_Dredd?s=09",
    icon: <RiTwitterXLine size={40} className="text-gray-800" />,
  },
];

const Navbar = () => {
  const [open, setOpen] = useState();
  const openDrawer = () => {
    setOpen((current) => !current);
  };

  return (
    <div>
      <nav className="relative bg-transparent z-50 mix-blend-difference">
        <div className="flex justify-between items-center p-2">
          <div className="w-14 h-14 m-4 rounded-full opacity-80 bg-gray-800"></div>

          <AnimatePresence initial={false} mode="wait">
            {open ? (
              <motion.div
                variants={dropIn}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                exit="exit"
              >
                <MdClose
                  color="#c7d9f7fd"
                  onClick={openDrawer}
                  size={50}
                  className="z-40 m-4"
                />
              </motion.div>
            ) : (
              <motion.div
                variants={dropIn}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                exit="exit"
              >
                <MdMenu
                  color="#c7d9f7fd"
                  onClick={openDrawer}
                  size={50}
                  className="z-40 m-4"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      <AnimatePresence initial={false} mode="wait">
        {open && (
          <div
            className="flex flex-wrap justify-around text-center backdrop-blur-md pb-6 pt-6 fixed md:absolute top-0 bg-gray-200 w-full h-full z-40"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E")`,
              backgroundBlendMode: "darken",
            }}
          >
            <motion.div
              className="w-10/12 justify-end items-center text-gray-800 h-[10vh] hidden sm:flex"
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exitup"
            >
              <div className="w-1/5 flex text-gray-800 justify-between">
                {links.map((link, id) => (
                  <Link key={id} to={link.linkTo}>
                    {link.icon}
                  </Link>
                ))}
              </div>
            </motion.div>

            <div className="w-full h-[10vh] p-0 hidden sm:flex justify-center items-center">
              <motion.h1
                className="font-squids text-gray-800 text-9xl"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                whileHover="color"
                exit="exitup"
              >
                dredd
              </motion.h1>
            </div>

            {navItems.map((navItem, id) => (
              <motion.div
                key={id}
                className="w-10/12 md:w-5/12 flex items-center justify-center mt-2"
                drag
                initial="hidden"
                animate="visible"
                variants={dropIn}
                exit="exit"
                whileHover="hover"
              >
                <Link
                  to={navItem.link}
                  onClick={() => setOpen(false)}
                  className="flex justify-center w-full h-full rounded-lg backdrop-blur-lg bg-blend-darken bg-gray-300  opacity-90"
                >
                  <div className="relative w-full h-full rounded-[10px] border-2 border-gray-800 mix-blend-normal bg-transparent">
                    <div className="w-[95%] p-5 justify-center flex flex-col gap-4">
                      <div className="flex justify-between w-full text-gray-800">
                        {navItem.icon}
                        <MdAir size={30} />
                      </div>
                      <h2 className="font-['Misa'] text-gray-800 text-7xl ">
                        {navItem.text}
                      </h2>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
