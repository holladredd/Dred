import { motion } from 'framer-motion';
import { FaLongArrowAltRight, FaCodeBranch, FaLayerGroup } from 'react-icons/fa';
import { useNavigation } from '../../context/NavigationContext';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};
const item = {
  hidden:  { y: -25, opacity: 0, scale: 0.95 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring', damping: 18, stiffness: 350 } },
};

export default function HeroSection() {
  const { push } = useNavigation();

  return (
    <section
      aria-label="Introduction"
      className="flex flex-col items-start justify-center min-h-[calc(100vh-120px)] w-full pt-16 sm:pt-20"
    >
      <motion.div variants={container} initial="hidden" animate="visible" className="w-full">
        {/* Eyebrow Label */}
        <motion.div variants={item} className="flex items-center gap-2 mb-3">
          <span className="h-2 w-2 rounded-full bg-dredd-green animate-pulse" />
          <p className="font-anta text-gray-600 text-xs sm:text-sm tracking-widest uppercase">
            Full Stack Developer | Web & Mobile Applications
          </p>
        </motion.div>

        {/* Primary Heading */}
        <motion.h1
          variants={item}
          className="font-squids text-gray-800 leading-[1.05] text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight mb-2 select-none"
          whileHover={{ color: '#009b4d', transition: { duration: 0.15 } }}
        >
          Folayan Olamide
          <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-600 font-anta mt-1">
            Mayokun
          </span>
        </motion.h1>

        {/* Professional Subheading */}
        <motion.div variants={item} className="mt-4 mb-6">
          <p className="font-anta text-dredd-green text-lg sm:text-2xl font-medium tracking-wide">
            Full Stack Developer | Web & Mobile Applications
          </p>
        </motion.div>

        {/* Verified Bio Paragraph */}
        <motion.p
          variants={item}
          className="font-anta text-gray-700 max-w-4xl text-base sm:text-lg md:text-xl leading-relaxed mb-10"
        >
          I&apos;m Folayan Olamide Mayokun, a Full Stack Developer who builds web applications, backend systems, and mobile experiences.
          I work with technologies including React, Next.js, Node.js, MongoDB, Django, React Native, and Flutter. My experience includes
          building frontend applications, integrating APIs, developing backend functionality, testing, deployment, and working on products
          from early development through implementation.
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={item} className="flex flex-wrap items-center gap-4">
          <button
            id="hero-projects-btn"
            onClick={() => push('projects')}
            className="flex items-center gap-2.5 bg-gray-800 text-gray-100 font-anta text-sm sm:text-base px-7 py-3.5 rounded-full hover:bg-dredd-green transition-all duration-200 shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-dredd-green"
          >
            <span>Explore Engineering Work</span>
            <FaLongArrowAltRight />
          </button>

          <button
            id="hero-experience-btn"
            onClick={() => push('about')}
            className="flex items-center gap-2 border-2 border-gray-800 text-gray-800 font-anta text-sm sm:text-base px-6 py-3 rounded-full hover:border-dredd-green hover:text-dredd-green transition-all duration-200 focus-visible:ring-2 focus-visible:ring-dredd-green"
          >
            <FaCodeBranch size={14} />
            <span>Experience & Background</span>
          </button>

          <button
            id="hero-contact-btn"
            onClick={() => push('contact')}
            className="flex items-center gap-2 font-anta text-sm sm:text-base text-gray-600 hover:text-dredd-green px-4 py-3 transition-colors"
          >
            <span>Get in Touch →</span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
