import { motion } from 'framer-motion';
import Image from 'next/image';
import { IoMdCloudDownload } from 'react-icons/io';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useNavigation } from '../../context/NavigationContext';

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
const item = { hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 22 } } };

export default function AboutView() {
  const { push } = useNavigation();
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-10">
      <div className="flex flex-col md:grid md:grid-cols-12 gap-10 items-center">
        {/* Portrait */}
        <motion.div className="col-span-5 flex justify-center"
          initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}>
          <div className="w-60 h-60 md:w-80 md:h-80 rounded-full bg-gray-800 shadow-xl overflow-hidden ring-4 ring-dredd-green/20">
            <Image src="/img/dredd.png" alt="Folayan Olamide Mayokun — Full Stack Developer"
              width={320} height={320} className="w-full h-full object-cover" priority />
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div className="col-span-7 w-full" variants={container} initial="hidden" animate="visible">
          <motion.h1 variants={item} className="font-anta text-gray-800 text-2xl md:text-5xl leading-tight mb-1">
            Folayan Olamide Mayokun
          </motion.h1>
          <motion.p variants={item} className="font-anta text-dredd-green text-lg md:text-2xl mb-5">Full Stack Developer</motion.p>
          <motion.p variants={item} className="font-anta text-gray-700 text-sm md:text-base leading-relaxed mb-4 text-justify">
            I&apos;m a Full Stack Developer based in Lagos, Nigeria, with a passion for building clean, scalable digital
            experiences. I work across the full stack — responsive React frontends through to Node.js, Express, and
            MongoDB backends.
          </motion.p>
          <motion.p variants={item} className="font-anta text-gray-700 text-sm md:text-base leading-relaxed mb-4 text-justify">
            On mobile, I build cross-platform applications with React Native and Expo. Alongside development, I design
            graphics using Adobe Photoshop and offer tech training to aspiring developers.
          </motion.p>
          <motion.p variants={item} className="font-anta text-gray-700 text-sm md:text-base leading-relaxed mb-8 text-justify">
            I am open to remote and international software engineering opportunities where I can contribute meaningfully
            to product development and engineering quality.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <button id="about-services-btn" onClick={() => push('services')}
              className="flex items-center gap-2 font-anta text-gray-800 border-2 border-gray-800 px-5 py-2.5 rounded-full hover:border-dredd-green hover:text-dredd-green transition-colors duration-200">
              <FaLongArrowAltRight /> What I Do
            </button>
            <a href="/img/ug1.jpg" download id="about-cv-btn"
              className="flex items-center gap-2 font-anta text-gray-800 bg-gray-800/10 border-2 border-transparent px-5 py-2.5 rounded-full hover:bg-dredd-green/10 hover:text-dredd-green transition-colors duration-200">
              <IoMdCloudDownload /> Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
