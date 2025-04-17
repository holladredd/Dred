import React from "react";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PageTransition from "./../components/PageTransition";

const dropIn = {
  hidden: {
    y: -50,
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    y: 0,
    scale: 0.9,
    borderRadius: "2%",
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.7,
      type: "spring",
      damping: 15,
      stiffness: 500,
    },
  },
  hover: {
    scale: 0.7,
  },
  scale: {
    scale: 1,
    marginLeft: 10,
    color: "#009b4d",
  },
  scaleone: {
    scale: 1,
    color: "#009b4d",
  },
  exit: {
    y: 0,
    opacity: 0,
    scale: 0.6,
  },
};

const Home = () => {
  const navi = useNavigate();
  function navigate() {
    navi("/About");
  }

  return (
    <PageTransition>
      <div className="flex flex-col items-center md:items-start mt-0 pt-0">
        <motion.h1
          className="z-0 font-squids text-gray-800 m-0 p-0 text-7xl md:text-[150px] leading-none"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          exit="exit"
        >
          Hello
        </motion.h1>

        <motion.h1
          className="z-0 font-squids text-gray-800 m-0 p-0 text-7xl md:text-[130px] leading-none"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          exit="exit"
        >
          i am
        </motion.h1>

        <motion.h1
          className="z-0 font-squids text-gray-800 text-7xl md:text-[150px] m-0 p-0 leading-none"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          whileHover="scale"
          exit="exit"
        >
          Dredd
        </motion.h1>

        <motion.button
          variants={dropIn}
          initial="hidden"
          animate="visible"
          whileHover="scaleone"
          exit="exit"
          className="font-squids text-gray-800 flex justify-center self-center items-center mt-4"
          onClick={navigate}
        >
          <FaLongArrowAltRight className="mr-2" />
          Learn More
        </motion.button>
      </div>
    </PageTransition>
  );
};

export default Home;
