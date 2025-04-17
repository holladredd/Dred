import React from "react";
import PageTransition from "./../components/PageTransition";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import dreddImage from "../img/dredd2.jpg";

const About = () => {
  const dropIn = {
    hidden: {
      y: -50,
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      y: 0,
      scale: 1,
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
      color: "#0694c6",
    },
    scaleone: {
      scale: 1,
      color: "#009B4D",
    },
    scaletwo: {
      scale: 1,
      borderRadius: 12.5,
      border: "1px solid #009b4d",
      color: "#009B4D",
    },
    exit: {
      y: 20,
      opacity: 0,
    },
  };

  const subComponent = {
    hidden: {
      y: -50,
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      y: 0,
      scale: 1,
      backgroundImage: "linear-gradient(to right bottom, #009B4D, #c7d9f7fd)",
      padding: 10,
      opacity: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        damping: 15,
        stiffness: 500,
      },
    },
    hover: {
      scale: 0.95,
      rotate: 0.8,
      padding: 2,
    },
    exit: {
      y: 20,
      opacity: 0,
    },
  };

  const navi = useNavigate();
  function navigate() {
    navi("/About2");
  }

  return (
    <PageTransition>
      <div className="flex flex-col md:grid md:grid-cols-12 items-center justify-between w-full min-h-fit p-10  ">
        <div className="col-span-1 md:col-span-5 lg:col-span-4 flex items-center justify-center p-14  ">
          <motion.div
            variants={subComponent}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            exit="exit"
            className="w-72 h-72 md:w-[350px]  md:h-[350px] rounded-full flex justify-center items-center"
          >
            <img
              alt="Folayan Olamide Mayokun"
              src={dreddImage}
              className="w-72 md:w-[350px] h-72 md:h-[350px] rounded-full object-cover"
            />
          </motion.div>
        </div>

        <div className="col-span-1 md:col-span-5 p-[10px] w-full ">
          <div className="w-full p-[2px] text-center md:text-left">
            <motion.h4
              variants={dropIn}
              initial="hidden"
              animate="visible"
              whileHover="scaleone"
              exit="exit"
              className="text-gray-800 font-['Anta'] text-2xl md:text-[60px] m-[5px]"
            >
              Folayan Olamide.M
            </motion.h4>

            <motion.h5
              variants={dropIn}
              initial="hidden"
              animate="visible"
              whileHover="scaleone"
              exit="exit"
              className="text-gray-800 font-['Anta'] m-[5px] text-[30px] md:text-[40px]"
            >
              Software Developer
            </motion.h5>

            <motion.p
              variants={dropIn}
              initial="hidden"
              animate="visible"
              whileHover="scaleone"
              exit="exit"
              className="text-gray-800 font-['Anta'] md:text-[20px] text-justify md:text-left m-[5px]"
            >
              Hi, I’m Dredd — a Full-Stack Web & Mobile App Engineer with a
              passion for building clean, scalable digital experiences using
              React, React Native, Node.js, and MongoDB. I also design modern
              graphics for web and mobile, and I offer tech training to help
              others break into the industry.
            </motion.p>

            <div className="w-full flex mt-5">
              <motion.button
                variants={dropIn}
                initial="hidden"
                animate="visible"
                whileHover="scaleone"
                exit="exit"
                className="font-squids text-gray-800 flex items-center mr-4"
                onClick={navigate}
              >
                <IoMdCloudDownload className="mr-2" />
                download cv
              </motion.button>

              <motion.button
                variants={dropIn}
                initial="hidden"
                animate="visible"
                whileHover="scaletwo"
                exit="exit"
                className="font-squids text-gray-800 flex items-center border border-transparent"
                onClick={navigate}
              >
                <FaLongArrowAltRight className="mr-2" />
                Learn More
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
