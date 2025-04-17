import React from "react";
import PageTransition from "./../components/PageTransition";
import { motion } from "framer-motion";
import { CgDesignmodo } from "react-icons/cg";
import { MdAnimation, MdModelTraining } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaChalkboardTeacher } from "react-icons/fa";

// import { useNavigate } from "react-router-dom";
const works = [
  {
    id: 1,
    title: "Full-Stack Web Engineer",
    desc: "I specialize in building fast, secure, and scalable web applications from the ground up. With expertise in React, Node.js, Express, and MongoDB, I handle everything from responsive front-end development to robust back-end architecture. Whether it's a business platform, dashboard, or custom web tool, I bring ideas to life with clean, maintainable code and modern development practices.",
    icons: <CgDesignmodo size={40} />,
  },
  {
    id: 2,
    title: "Mobile App Engineer",
    desc: "As a mobile app developer, I create seamless cross-platform experiences using React Native and Expo. My apps are optimized for performance and usability, delivering native-like functionality on both Android and iOS devices. From user interface to backend integration, I build applications that are intuitive, efficient, and ready for real-world use.",
    icons: <MdAnimation size={40} />,
  },
  {
    id: 3,
    title: "Graphics Design",
    desc: "I design sleek, impactful graphics for websites and mobile apps using Adobe Photoshop. My work includes logos, banners, business cards, infographics, and more — all tailored to fit the tone and branding of your business. Clean visuals and thoughtful design choices are at the core of everything I create.",
    icons: <MdModelTraining size={40} />,
  },
  {
    id: 4,
    title: "Tech Training",
    desc: "I help aspiring developers break into tech with personalized training programs. Whether you're just getting started or want to level up your skills, I provide hands-on guidance in full-stack development, tailored to your preferred language or stack. My training is available both online and in-person, designed to be practical, flexible, and results-driven.",
    icons: <FaChalkboardTeacher size={40} />,
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
      color: "#1e293b", // Updated to gray-800
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
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 0.9,
        }}
        whileHover={{
          opacity: 0.7,
        }}
        exit={{
          opacity: 0,
          scale: 0.8,
        }}
        className="flex w-full justify-between items-center z-40 absolute bottom-[20px]"
      >
        <button
          onClick={() => navi("/About")}
          className="ml-1 p-2 text-gray-800 font-squids hover:text-dredd-green transition-colors duration-300"
        >
          go back
        </button>
        <button
          onClick={() => navi("/Skills")}
          className="mr-1 p-2 text-gray-800 font-squids hover:text-dredd-green transition-colors duration-300"
        >
          Go to skills
        </button>
      </motion.div>

      <div className="flex flex-wrap items-center justify-around w-full h-auto sm:h-auto md:h-[85vh] mb-5">
        <motion.div
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
          className="w-full flex justify-center"
        >
          <h4 className="text-gray-800 font-squids text-3xl md:text-4xl">
            My Works
          </h4>
        </motion.div>

        {works.map((work, id) => (
          <motion.div
            key={id}
            variants={subComponent}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            exit="exit"
            className="w-11/12 md:w-5/12 p-[1px]"
          >
            <div className="rounded-lg flex p-[10px] text-center md:text-start">
              <div className="w-full p-[2px] text-center md:text-start">
                <div className="w-full flex text-center items-center  text-gray-800">
                  {work.icons}
                  <h5 className="text-center ms-4  font-squids text-gray-800 border-b-2 border-gray-800">
                    {work.title}
                  </h5>
                </div>
                <p className="text-justify md:text-start font-['Anta'] text-gray-800 text-sm md:text-base">
                  {work.desc}
                </p>
                <div className="w-full mt-[5px] p-[1px] bg-gray-800"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PageTransition>
  );
};

export default About2;
