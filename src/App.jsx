import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./layouts/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense, useEffect, useState } from "react";
import { Box } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Home from "./pages/Home";
import About from "./pages/About";
import About2 from "./pages/About2";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Graphics from "./pages/Graphics";
import Errorpage from "./pages/Errorpage";
import Skills from "./pages/Skills";

// import Particle from "./components/Particle";

function App() {
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
    },
  };
  const location = useLocation();
  return (
    <Box className="container">
      <motion.div
        className="cursor"
        zIndex={40}
        variants={variants}
        animate="default"
      />
      {/* <Particle /> */}

      <Navbar zIndex={40} />

      <AnimatePresence initial={false} mode="wait">
        <Suspense fallback={<h1>loading....</h1>}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/About2" element={<About2 />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Project/Graphics" element={<Graphics />} />

            <Route path="*" element={<Errorpage />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </Box>
  );
}

export default App;
