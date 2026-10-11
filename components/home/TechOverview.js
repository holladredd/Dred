import { motion } from 'framer-motion';
import { DiJavascript } from 'react-icons/di';
import { SiReact, SiMysql, SiPhp, SiCanvas } from 'react-icons/si';
import { TbBrandAdobePhotoshop, TbBrandAdobeAfterEffect, TbBrandAdobePremiere } from 'react-icons/tb';
import { FaDatabase, FaGithub } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa6';
import { IoLogoPython } from 'react-icons/io';
import { useNavigation } from '../../context/NavigationContext';

const skills = [
  { name: 'JavaScript',   Icon: DiJavascript,             category: 'dev' },
  { name: 'React',        Icon: SiReact,                  category: 'dev' },
  { name: 'React Native', Icon: SiReact,                  category: 'dev' },
  { name: 'Node.js',      Icon: FaNode,                   category: 'dev' },
  { name: 'MongoDB',      Icon: FaDatabase,               category: 'dev' },
  { name: 'MySQL',        Icon: SiMysql,                  category: 'dev' },
  { name: 'PHP',          Icon: SiPhp,                    category: 'dev' },
  { name: 'Python',       Icon: IoLogoPython,             category: 'dev' },
  { name: 'GitHub',       Icon: FaGithub,                 category: 'dev' },
  { name: 'Photoshop',    Icon: TbBrandAdobePhotoshop,    category: 'design' },
  { name: 'Canva',        Icon: SiCanvas,                 category: 'design' },
  { name: 'After Effects',Icon: TbBrandAdobeAfterEffect,  category: 'design' },
  { name: 'Premiere Pro', Icon: TbBrandAdobePremiere,     category: 'design' },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } };
const chip = {
  hidden:  { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 400, damping: 20 } },
};

export default function TechOverview() {
  const { push } = useNavigation();
  return (
    <section aria-label="Skills overview" className="w-full py-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.45 }} className="mb-6">
        <h2 className="font-squids text-gray-800 text-3xl md:text-4xl mb-1">Skills & Tools</h2>
        <div className="h-0.5 w-16 bg-dredd-green mb-2" />
        <p className="font-anta text-gray-600 text-sm md:text-base max-w-lg">Technologies I use to build and ship products.</p>
      </motion.div>
      <motion.div className="flex flex-wrap gap-3" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
        {skills.map((s) => {
          const IconComp = s.Icon;
          return (
            <motion.div key={s.name} variants={chip} whileHover={{ y: -2 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border font-anta text-sm text-gray-800 transition-colors duration-200 ${
                s.category === 'design' ? 'border-gray-400 bg-white/50' : 'border-gray-800/25 bg-white/60'
              }`}>
              <span className="text-gray-700"><IconComp size={20} /></span>{s.name}
            </motion.div>
          );
        })}
      </motion.div>
      <motion.button initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        id="home-full-skills-btn"
        onClick={() => push('skills')}
        className="mt-5 font-anta text-sm text-gray-500 hover:text-dredd-green underline underline-offset-2 transition-colors duration-200">
        See full skills breakdown →
      </motion.button>
    </section>
  );
}
