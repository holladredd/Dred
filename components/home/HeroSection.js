import { motion } from 'framer-motion';
import { FaLongArrowAltRight, FaCodeBranch, FaLayerGroup, FaMobileAlt, FaServer } from 'react-icons/fa';
import { SiOpenproject } from 'react-icons/si';
import { GiSkills } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import { PiPhoneCallFill } from 'react-icons/pi';
import { useNavigation } from '../../context/NavigationContext';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden:  { y: -20, opacity: 0, scale: 0.98 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring', damping: 20, stiffness: 350 } },
};

const viewLaunchers = [
  {
    id: 'projects',
    title: 'Featured Projects',
    subtitle: '20+ Full-stack, web & mobile engineering builds',
    tag: 'Web & Mobile',
    icon: SiOpenproject,
    color: 'hover:border-dredd-green',
  },
  {
    id: 'skills',
    title: 'Tech Stack & Skills',
    subtitle: 'React, Next.js, Node.js, Django, Flutter, Databases',
    tag: 'Tooling & Architecture',
    icon: GiSkills,
    color: 'hover:border-blue-500',
  },
  {
    id: 'about',
    title: 'Experience & Bio',
    subtitle: 'Full-stack background, problem solving, timeline',
    tag: 'Career Profile',
    icon: CgProfile,
    color: 'hover:border-purple-500',
  },
  {
    id: 'contact',
    title: 'Start a Conversation',
    subtitle: 'Direct availability for contracts & team engineering',
    tag: 'Direct Channels',
    icon: PiPhoneCallFill,
    color: 'hover:border-dredd-green',
  },
];

export default function HeroSection() {
  const { push } = useNavigation();

  return (
    <section
      aria-label="Introduction"
      className="flex flex-col items-start justify-center min-h-[calc(100vh-140px)] w-full py-8 sm:py-12"
    >
      <motion.div variants={container} initial="hidden" animate="visible" className="w-full space-y-10">
        
        {/* Main Hero Card Container */}
        <div className="backdrop-blur-md bg-white/45 border border-white/60 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-lg w-full relative overflow-hidden">
          {/* Subtle Ambient Refraction Orb */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-dredd-green/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

          {/* Eyebrow Label */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-4">
            <span className="flex items-center gap-2 bg-white/80 border border-gray-300/80 px-3 py-1 rounded-full shadow-sm text-xs font-anta text-gray-800">
              <span className="h-2 w-2 rounded-full bg-dredd-green animate-pulse" />
              Available for Full Stack Opportunities
            </span>
            <span className="text-gray-400 text-xs hidden sm:inline">•</span>
            <span className="text-xs font-anta text-gray-600 uppercase tracking-widest">
              Lagos, Nigeria & Remote Worldwide
            </span>
          </motion.div>

          {/* Primary Heading */}
          <motion.h1
            variants={item}
            className="font-squids text-gray-900 leading-[1.03] text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight mb-2 select-none"
            whileHover={{ color: '#009b4d', transition: { duration: 0.15 } }}
          >
            Folayan Olamide
            <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-600 font-anta mt-1">
              Mayokun
            </span>
          </motion.h1>

          {/* Professional Subheading */}
          <motion.div variants={item} className="mt-4 mb-6">
            <div className="inline-flex items-center gap-2 border-b-2 border-dredd-green/60 pb-1">
              <p className="font-anta text-dredd-green text-lg sm:text-2xl font-medium tracking-wide">
                Full Stack Developer | Web & Mobile Applications
              </p>
            </div>
          </motion.div>

          {/* Verified Bio Paragraph */}
          <motion.p
            variants={item}
            className="font-anta text-gray-700 max-w-4xl text-base sm:text-lg md:text-xl leading-relaxed mb-8"
          >
            I&apos;m Folayan Olamide Mayokun, a Full Stack Developer who builds web applications, backend systems, and mobile experiences.
            I work with technologies including React, Next.js, Node.js, MongoDB, Django, React Native, and Flutter. My experience includes
            building frontend applications, integrating APIs, developing backend functionality, testing, deployment, and working on products
            from early development through implementation.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-2">
            <button
              id="hero-projects-btn"
              onClick={() => push('projects')}
              className="flex items-center gap-3 bg-gray-900 text-gray-100 font-anta text-sm sm:text-base px-8 py-4 rounded-full hover:bg-dredd-green transition-all duration-200 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-95 focus-visible:ring-2 focus-visible:ring-dredd-green"
            >
              <span>Explore Projects Stack</span>
              <FaLongArrowAltRight />
            </button>

            <button
              id="hero-skills-btn"
              onClick={() => push('skills')}
              className="flex items-center gap-2 border-2 border-gray-900/80 bg-white/50 text-gray-900 font-anta text-sm sm:text-base px-7 py-3.5 rounded-full hover:border-dredd-green hover:text-dredd-green hover:bg-white/80 transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-dredd-green shadow-sm"
            >
              <FaLayerGroup size={15} />
              <span>Technical Skills</span>
            </button>

            <button
              id="hero-experience-btn"
              onClick={() => push('about')}
              className="flex items-center gap-2 border-2 border-gray-400/60 bg-white/40 text-gray-700 font-anta text-sm sm:text-base px-6 py-3.5 rounded-full hover:border-gray-900 hover:text-gray-950 transition-all duration-200 active:scale-95"
            >
              <FaCodeBranch size={14} />
              <span>Experience & Bio</span>
            </button>

            <button
              id="hero-contact-btn"
              onClick={() => push('contact')}
              className="flex items-center gap-1.5 font-anta text-sm sm:text-base text-gray-600 hover:text-dredd-green px-4 py-3 transition-colors"
            >
              <span>Get in Touch →</span>
            </button>
          </motion.div>
        </div>

        {/* View Launchers Interactive Grid */}
        <motion.div variants={item} className="w-full">
          <div className="flex items-center justify-between mb-4 px-2">
            <p className="font-anta text-xs uppercase tracking-widest text-gray-600">
              Interactive Section Launcher • Click any card to slide out full view
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {viewLaunchers.map((launcher) => {
              const Icon = launcher.icon;
              return (
                <motion.button
                  key={launcher.id}
                  onClick={() => push(launcher.id)}
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`text-left p-6 rounded-2xl backdrop-blur-md bg-white/60 border border-gray-300/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between ${launcher.color}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 rounded-xl bg-gray-100 border border-gray-200 text-gray-800">
                        <Icon size={20} />
                      </div>
                      <span className="text-[10px] font-anta uppercase tracking-wider text-gray-500 bg-gray-200/60 px-2 py-0.5 rounded-md">
                        {launcher.tag}
                      </span>
                    </div>
                    <h3 className="font-squids text-xl text-gray-900 mb-1">{launcher.title}</h3>
                    <p className="font-anta text-xs text-gray-600 leading-relaxed mb-4">{launcher.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-anta text-dredd-green font-medium">
                    <span>Open View</span>
                    <FaLongArrowAltRight size={11} />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
