import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const PageTransition = ({ children }) => {
  const widthAnimation = {
    hidden: {
      y: 0,
      opacity: 0,
      scale: 0.6,
    },
    visible: {
      y: 40,
      scale: 1,
      borderRadius: "2%",
      opacity: 0.9,
      transition: {
        duration: 0.7,
        type: "spring",
        damping: 15,
        stiffness: 500,
      },
    },

    exit: {
      y: 0,
      opacity: 1,
      scale: 0.6,
    },
  };
  return (
    <motion.div
      variants={widthAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
