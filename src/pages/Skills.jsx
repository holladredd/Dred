import React from "react";
import PageTransition from "./../components/PageTransition";
import { motion } from "framer-motion";

import { IoLogoPython } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { DiJavascript } from "react-icons/di";
import {
  SiAdobeaftereffects,
  SiCanva,
  SiAdobephotoshop,
  SiAdobepremierepro,
} from "react-icons/si";
import { SiReact, SiMysql, SiPhp } from "react-icons/si";

import { FaDatabase, FaGithub } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const graphics = [
  {
    name: "Photoshop",
    icon: <SiAdobephotoshop size={30} color="#1e293b" />,
  },
  {
    name: "Canva",
    icon: <SiCanva size={30} color="#1e293b" />,
  },
  {
    name: "After Effects",
    icon: <SiAdobeaftereffects size={30} color="#1e293b" />,
  },
  {
    name: "Premier Pro",
    icon: <SiAdobepremierepro size={30} color="#1e293b" />,
  },
];

const tools = [
  {
    name: "JavaScript",
    icon: <DiJavascript size={25} color="#1e293b" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub size={25} color="#1e293b" />,
  },
  {
    name: "React",
    icon: <SiReact size={25} color="#1e293b" />,
  },
  { name: "React Native", icon: <SiReact size={25} color="#1e293b" /> },
  {
    name: "MongoDB",
    icon: <FaDatabase size={25} color="#1e293b" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql size={25} color="#1e293b" />,
  },
  {
    name: "PHP",
    icon: <SiPhp size={25} color="#1e293b" />,
  },
  {
    name: "Python",
    icon: <IoLogoPython size={25} color="#1e293b" />,
  },
  {
    name: "Node.js",
    icon: <FaNode size={25} color="#1e293b" />,
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        delay: 0.2,
      },
    },
  };

  const navi = useNavigate();

  return (
    <PageTransition>
      {/* Navigation buttons */}
      <div className="fixed bottom-10 left-0 right-0 flex justify-between px-6 z-50">
        <motion.button
          onClick={() => navi("/About2")}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          className="bg-gray-800 text-white py-2 px-4 rounded-full flex items-center shadow-lg hover:bg-gray-700 transition-all duration-300"
        >
          <IoArrowBack className="mr-2" />
          <span className="hidden sm:inline">Previous</span>
        </motion.button>

        <motion.button
          onClick={() => navi("/Contact")}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          className="bg-gray-800 text-white py-2 px-4 rounded-full flex items-center shadow-lg hover:bg-gray-700 transition-all duration-300"
        >
          <span className="hidden sm:inline">Next</span>
          <IoArrowForward className="ml-2" />
        </motion.button>
      </div>

      <div className=" mx-auto px-4 py-8 max-w-6xl">
        {/* Page Title */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-squids text-gray-800 inline-block relative">
            My Skills & Tools
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gray-500 to-gray-200"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A collection of technologies and tools I've mastered throughout my
            journey as a developer and designer.
          </p>
        </motion.div>

        {/* Skills Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Development Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-gray-500 to-gray-800 px-6 py-4">
              <h2 className="text-2xl font-squids text-white">Development</h2>
              <p className="text-blue-100 text-sm">Technologies I work with</p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {tools.map((tool, id) => (
                  <motion.div
                    key={id}
                    variants={itemVariants}
                    whileHover="hover"
                    className="bg-gray-200 rounded-lg p-4 border-t-4 border-gray-800 flex flex-col items-center justify-center text-center transition-all duration-300"
                  >
                    <div
                      className="mb-2 text-3xl"
                      style={{ color: tool.color }}
                    >
                      {tool.icon}
                    </div>
                    <span className="text-gray-800 font-medium text-sm">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Graphics Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-gray-200 rounded-xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-gray-800 to-gray-500 px-6 py-4">
              <h2 className="text-2xl font-squids text-white">
                Graphics & Animation
              </h2>
              <p className="text-pink-100 text-sm">
                Design tools I'm proficient with
              </p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {graphics.map((graphic, id) => (
                  <motion.div
                    key={id}
                    variants={itemVariants}
                    whileHover="hover"
                    className="bg-gray-50 rounded-lg border-t-4 border-gray-800 p-4 flex flex-col items-center justify-center text-center transition-all duration-300"
                  >
                    <div
                      className="mb-2 text-3xl"
                      style={{ color: graphic.color }}
                    >
                      {graphic.icon}
                    </div>
                    <span className="text-gray-800 font-medium text-sm">
                      {graphic.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;
