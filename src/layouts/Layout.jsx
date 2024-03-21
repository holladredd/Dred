import { Box } from "@mui/material";
import Navbar from "./Navbar";
import "../App.css";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const Layout = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      // transition: {
      //   duration: 0.1,
      //   delay: 0,
      // },
    },
  };
  return (
    <Box className="container">
      <motion.div
        className="cursor"
        zIndex={40}
        variants={variants}
        animate="default"
      />
      <Navbar zIndex={40} />
      <Outlet />
    </Box>
  );
};

export default Layout;
