import { motion } from 'framer-motion';
import { DiJavascript } from 'react-icons/di';
import { SiReact, SiMysql, SiPhp, SiCanvas } from 'react-icons/si';
import { TbBrandAdobePhotoshop, TbBrandAdobeAfterEffect, TbBrandAdobePremiere } from 'react-icons/tb';
import { FaDatabase, FaGithub } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa6';
import { IoLogoPython } from 'react-icons/io';

const devTools = [
  { name: 'JavaScript',   Icon: DiJavascript },
  { name: 'GitHub',       Icon: FaGithub },
  { name: 'React',        Icon: SiReact },
  { name: 'React Native', Icon: SiReact },
  { name: 'MongoDB',      Icon: FaDatabase },
  { name: 'MySQL',        Icon: SiMysql },
  { name: 'PHP',          Icon: SiPhp },
  { name: 'Python',       Icon: IoLogoPython },
  { name: 'Node.js',      Icon: FaNode },
];
const designTools = [
  { name: 'Photoshop',    Icon: TbBrandAdobePhotoshop },
  { name: 'Canva',        Icon: SiCanvas },
  { name: 'After Effects',Icon: TbBrandAdobeAfterEffect },
  { name: 'Premiere Pro', Icon: TbBrandAdobePremiere },
];

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } } };
const chip = {
  hidden:  { y: 18, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 22 } },
  hover:   { scale: 1.05, boxShadow: '0 4px 14px rgba(0,0,0,0.08)', transition: { type: 'spring', stiffness: 400, damping: 10 } },
};

function SkillSection({ title, subtitle, items, headerClass }) {
  return (
    <motion.div variants={container} initial="hidden" animate="visible" className="bg-white rounded-xl shadow-xl overflow-hidden">
      <div className={`${headerClass} px-6 py-4`}>
        <h2 className="font-squids text-white text-2xl">{title}</h2>
        <p className="text-white/70 text-sm font-anta">{subtitle}</p>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {items.map((tool) => {
            const IconComp = tool.Icon;
            return (
              <motion.div key={tool.name} variants={chip} whileHover="hover"
                className="bg-gray-100 rounded-lg p-4 border-t-4 border-gray-800 flex flex-col items-center justify-center text-center">
                <span className="mb-2 text-gray-800"><IconComp size={28} /></span>
                <span className="font-anta text-gray-800 text-sm">{tool.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsView() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12 py-10 space-y-10">
      <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-squids text-gray-800 text-4xl md:text-6xl mb-2">My Skills</h1>
        <div className="h-0.5 w-20 bg-dredd-green mb-4" />
        <p className="font-anta text-gray-600 text-sm md:text-base max-w-xl">
          Technologies and creative tools I work with daily to bring products from idea to production.
        </p>
      </motion.div>

      <SkillSection
        title="Development & Backend"
        subtitle="Languages, frameworks, databases, and version control"
        items={devTools}
        headerClass="bg-gray-800"
      />

      <SkillSection
        title="Design & Motion"
        subtitle="Graphic design, UI assets, and motion tools"
        items={designTools}
        headerClass="bg-gradient-to-r from-gray-700 to-gray-900"
      />
    </div>
  );
}
