import { motion } from 'framer-motion';
import { CgDesignmodo } from 'react-icons/cg';
import { MdAnimation, MdModelTraining } from 'react-icons/md';
import { FaChalkboardTeacher } from 'react-icons/fa';

const works = [
  { id: 1, title: 'Full-Stack Web Engineer', Icon: CgDesignmodo,
    desc: 'I specialise in building fast, secure and scalable web applications from the ground up. With expertise in React, Node.js, Express and MongoDB, I handle everything from responsive front-end development to robust back-end architecture — whether it is a business platform, dashboard or custom web tool.' },
  { id: 2, title: 'Mobile App Developer', Icon: MdAnimation,
    desc: 'I create seamless cross-platform experiences using React Native and Expo. My apps are optimised for performance and usability, delivering native-like functionality on both Android and iOS — from user interface through to backend integration.' },
  { id: 3, title: 'Graphics Design', Icon: MdModelTraining,
    desc: 'I design sleek, impactful graphics for websites and mobile apps using Adobe Photoshop. My work includes logos, banners, business cards, infographics and more — all tailored to fit the tone and branding of your business.' },
  { id: 4, title: 'Tech Training', Icon: FaChalkboardTeacher,
    desc: 'I help aspiring developers break into tech with personalised training programmes. Whether you are just starting out or want to level up your skills, I provide hands-on guidance in full-stack development — available online and in-person.' },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
const card = {
  hidden:  { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 280, damping: 22 } },
  hover:   { y: -5, borderColor: '#009b4d', transition: { duration: 0.18 } },
};

export default function ServicesView() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-10">
      <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
        <h1 className="font-squids text-gray-800 text-4xl md:text-6xl mb-2">My Services</h1>
        <div className="h-0.5 w-20 bg-dredd-green mb-4" />
        <p className="font-anta text-gray-600 text-sm md:text-base max-w-xl">
          High-impact solutions across engineering, mobile development, visual design, and developer mentorship.
        </p>
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={container} initial="hidden" animate="visible">
        {works.map((work) => {
          const IconComp = work.Icon;
          return (
            <motion.div key={work.id} variants={card} whileHover="hover"
              className="bg-white rounded-2xl p-7 shadow-md border-2 border-transparent transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="text-gray-800 mb-4 p-3 bg-gray-100 rounded-xl inline-block">
                  <IconComp size={34} />
                </div>
                <h3 className="font-squids text-gray-800 text-xl md:text-2xl mb-3">{work.title}</h3>
                <p className="font-anta text-gray-600 text-sm leading-relaxed">{work.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
