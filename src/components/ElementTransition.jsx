import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const ElementTransition = ({ children }) => {
  const widthAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },

    exit: {
      opacity: 0,
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

export default ElementTransition;
