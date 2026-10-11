import { motion } from 'framer-motion';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useNavigation } from '../../context/NavigationContext';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};
const item = {
  hidden:  { y: -30, opacity: 0, scale: 0.88 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring', damping: 16, stiffness: 400 } },
};

export default function HeroSection() {
  const { push } = useNavigation();
  return (
    <section aria-label="Introduction" className="flex flex-col items-start justify-center min-h-[calc(100vh-80px)] px-6 md:px-16 lg:px-24 pt-4">
      <motion.div variants={container} initial="hidden" animate="visible">
        <motion.p variants={item} className="font-anta text-gray-500 text-sm md:text-base mb-1 tracking-widest uppercase">
          Hello, I&apos;m
        </motion.p>
        <motion.h1
          variants={item}
          className="font-squids text-gray-800 leading-tight text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight"
          whileHover={{ color: '#009b4d', transition: { duration: 0.15 } }}
        >
          Folayan Olamide
          <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-600 font-anta mt-1">
            Mayokun
          </span>
        </motion.h1>
        <motion.div variants={item} className="mt-3 mb-5">
          <p className="font-anta text-dredd-green text-base md:text-xl font-medium">Full Stack Developer & Creative Designer</p>
        </motion.div>
        <motion.p variants={item} className="font-anta text-gray-600 max-w-xl text-sm md:text-base leading-relaxed mb-8">
          I build scalable web applications, robust backend systems, and cross-platform mobile apps —
          and design clean graphics to go with them. Based in Lagos, Nigeria.
          Open to remote and international engagements.
        </motion.p>
        <motion.div variants={item} className="flex flex-wrap gap-4">
          <button
            id="hero-projects-btn"
            onClick={() => push('projects')}
            className="flex items-center gap-2 bg-gray-800 text-gray-100 font-anta px-6 py-3 rounded-full hover:bg-dredd-green transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-dredd-green"
          >
            View Projects <FaLongArrowAltRight />
          </button>
          <button
            id="hero-contact-btn"
            onClick={() => push('contact')}
            className="flex items-center gap-2 border-2 border-gray-800 text-gray-800 font-anta px-6 py-3 rounded-full hover:border-dredd-green hover:text-dredd-green transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-dredd-green"
          >
            Contact Me
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
