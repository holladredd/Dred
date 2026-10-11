import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../../data/skills';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };
const cardVariant = {
  hidden:  { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } },
};

export default function SkillsView() {
  const [selectedGroup, setSelectedGroup] = useState('all');

  const visibleGroups =
    selectedGroup === 'all'
      ? skillCategories
      : skillCategories.filter((g) => g.id === selectedGroup);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-8 space-y-10">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}>
        <p className="font-anta text-dredd-green text-xs uppercase tracking-widest mb-1">Technical Stack</p>
        <h1 className="font-squids text-gray-800 text-3xl sm:text-5xl mb-2">Technical Skills & Expertise</h1>
        <div className="h-0.5 w-20 bg-dredd-green mb-4" />
        <p className="font-anta text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
          Structured inventory of languages, frameworks, backend architectures, databases, and deployment platforms
          used across production systems and applications.
        </p>
      </motion.div>

      {/* Group Navigation */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedGroup('all')}
          className={`px-4 py-2 rounded-full font-anta text-xs sm:text-sm transition-all duration-200 ${
            selectedGroup === 'all'
              ? 'bg-gray-800 text-white shadow-md'
              : 'bg-white/70 hover:bg-white text-gray-700 border border-gray-300/60'
          }`}
        >
          All Domains
        </button>
        {skillCategories.map((group) => (
          <button
            key={group.id}
            onClick={() => setSelectedGroup(group.id)}
            className={`px-4 py-2 rounded-full font-anta text-xs sm:text-sm transition-all duration-200 ${
              selectedGroup === group.id
                ? 'bg-gray-800 text-white shadow-md'
                : 'bg-white/70 hover:bg-white text-gray-700 border border-gray-300/60'
            }`}
          >
            {group.title}
          </button>
        ))}
      </div>

      {/* Grid of Skill Categories */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedGroup}
          variants={container}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visibleGroups.map((group) => (
            <motion.div
              key={group.id}
              variants={cardVariant}
              className="bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden flex flex-col justify-between"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-squids text-gray-800 text-xl">{group.title}</h2>
                  <span className="font-anta text-xs px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600">
                    {group.skills.length} skills
                  </span>
                </div>
                <p className="font-anta text-gray-500 text-xs mb-6 leading-relaxed">{group.summary}</p>

                <div className="grid grid-cols-2 gap-2.5">
                  {group.skills.map((skill) => {
                    const IconComp = skill.Icon;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-gray-50/80 border border-gray-200/60 hover:border-dredd-green hover:bg-white transition-all duration-200"
                      >
                        <span className="text-gray-700">
                          <IconComp size={20} />
                        </span>
                        <span className="font-anta text-gray-800 text-xs sm:text-sm font-medium">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="px-6 py-3 bg-gray-50/60 border-t border-gray-100 flex items-center justify-between text-xs font-anta text-gray-500">
                <span>Verified in code & projects</span>
                <span className="text-dredd-green font-medium">Production ready</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
