import React from "react";
import PageTransition from "./../components/PageTransition";
import { useNavigate } from "react-router-dom";
import { MdFacebook, MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { RiInstagramFill, RiTwitterXLine } from "react-icons/ri";
import { IoLogoWhatsapp, IoLogoGithub, IoHomeOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const links = [
  {
    id: 1,
    linkTo: "https://web.facebook.com/folayan.olamide.1",
    icon: (
      <MdFacebook
        size={30}
        className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
      />
    ),
    name: "Facebook",
    color: "#1877F2",
  },
  {
    id: 2,
    linkTo: "https://www.instagram.com/dev_dredd?igsh=NXozcGk5eTFoajZo",
    icon: (
      <RiInstagramFill
        size={30}
        className="text-gray-800 hover:text-pink-600 transition-colors duration-300"
      />
    ),
    name: "Instagram",
    color: "#E4405F",
  },
  {
    id: 3,
    linkTo: "https://wa.me/+2348160630642",
    icon: (
      <IoLogoWhatsapp
        size={30}
        className="text-gray-800 hover:text-green-500 transition-colors duration-300"
      />
    ),
    name: "WhatsApp",
    color: "#25D366",
  },
  {
    id: 4,
    linkTo: "https://github.com/holladredd",
    icon: (
      <IoLogoGithub
        size={30}
        className="text-gray-800 hover:text-gray-600 transition-colors duration-300"
      />
    ),
    name: "GitHub",
    color: "#181717",
  },
  {
    id: 5,
    linkTo: "https://x.com/Holla_Dredd?s=09",
    icon: (
      <RiTwitterXLine
        size={30}
        className="text-gray-800 hover:text-blue-400 transition-colors duration-300"
      />
    ),
    name: "Twitter",
    color: "#1DA1F2",
  },
];

const Contact = () => {
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

  const navi = useNavigate();

  return (
    <PageTransition>
      {/* Home Button */}
      <motion.button
        onClick={() => navi("/")}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        className="fixed bottom-2 right-6 z-50 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300"
      >
        <IoHomeOutline size={24} />
      </motion.button>

      <div className=" mx-auto px-4  max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-squids text-gray-800 mb-4">
                Let's Connect
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-gray-400 to-gray-800 mb-6"></div>
              <p className="text-gray-600 text-xl mb-8">
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your vision.
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div variants={itemVariants} className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <MdEmail className="text-gray-800 text-xl" />
                </div>
                <div>
                  <h3 className="text-gray-800 font-medium text-xl">Email</h3>
                  <a
                    href="mailto:holladred@gmail.com"
                    className="text-gray-800 hover:underline text-xl"
                  >
                    holladred@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <MdPhone className="text-gray-800 text-xl" />
                </div>
                <div>
                  <h3 className="text-gray-800 font-medium text-xl">Phone</h3>
                  <a
                    href="tel:+2348160630642"
                    className="text-gray-800 hover:underline text-xl"
                  >
                    +234 816 063 0642
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <MdLocationOn className="text-gray-800 text-xl" />
                </div>
                <div>
                  <h3 className="text-gray-800 font-medium text-xl">
                    Location
                  </h3>
                  <p className="text-gray-600 text-xl">Lagos, Nigeria</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="mt-12">
              <h3 className="text-gray-800 font-medium mb-4">
                Connect with me on social media
              </h3>
              <div className="flex flex-wrap gap-4">
                {links.map((link) => (
                  <a
                    key={link.id}
                    href={link.linkTo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: link.color,
                        color: "#ffffff",
                      }}
                      className="bg-gray-100 p-3 rounded-full transition-all duration-300"
                    >
                      {React.cloneElement(link.icon, {
                        className: `text-gray-800 group-hover:text-white transition-colors duration-300`,
                      })}
                    </motion.div>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
