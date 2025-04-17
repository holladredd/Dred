import "./App.css";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./layouts/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense, useEffect, useState } from "react";

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
    <div
      className="mx-auto bg-gray-200  bg-opacity-50 items-center min-h-screen"
      style={{
        backgroundImage: `url(
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E"
              )`,
        backgroundBlendMode: "darken",
        backdropFilter: "none",
      }}
    >
      <motion.div
        className="cursor fixed w-8 h-8 mix-blend-difference rounded-full bg-gray-500 bg-opacity-25 pointer-events-none z-40"
        zIndex={40}
        variants={variants}
        animate="default"
      />

      <Navbar className="z-40" />

      <AnimatePresence initial={false} mode="wait">
        <Suspense
          fallback={<div className="text-center text-xl">Loading...</div>}
        >
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
    </div>
  );
}

export default App;
