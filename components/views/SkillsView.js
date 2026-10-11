import { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../../data/skills';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
    },
  },
};

export default function SkillsView() {
  const [selectedGroup, setSelectedGroup] = useState('all');

  const visibleGroups =
    selectedGroup === 'all'
      ? skillCategories
      : skillCategories.filter((g) => g.id === selectedGroup);

  return (
    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-6">
      <div className="w-full max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}>
          <p className="font-anta text-dredd-green text-xs uppercase tracking-widest mb-1 font-semibold">Technical Stack & Proficiency</p>
          <h1 className="font-squids text-gray-800 text-4xl sm:text-6xl md:text-7xl mb-3 select-none">
            Skills & Tooling
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-gray-400 to-gray-800 mb-6" />
          <p className="font-anta text-gray-700 text-base sm:text-xl max-w-3xl leading-relaxed">
            Technologies, frameworks, databases, and architectural tooling applied across full-stack web platforms, mobile applications, and backend services.
          </p>
        </motion.div>

        {/* Group Selector Pills */}
        <div className="flex flex-wrap gap-2.5">
          <button
            onClick={() => setSelectedGroup('all')}
            className={`px-5 py-2.5 rounded-full font-anta text-xs sm:text-sm font-medium transition-all duration-200 ${
              selectedGroup === 'all'
                ? 'bg-gray-900 text-white shadow-md'
                : 'bg-white/70 hover:bg-white text-gray-700 border border-gray-300/80 hover:shadow-sm'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((group) => (
            <button
              key={group.id}
              onClick={() => setSelectedGroup(group.id)}
              className={`px-5 py-2.5 rounded-full font-anta text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedGroup === group.id
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-white/70 hover:bg-white text-gray-700 border border-gray-300/80 hover:shadow-sm'
              }`}
            >
              {group.title}
            </button>
          ))}
        </div>

        {/* Categories Presentation - Fluid, Open Layout (Lesser Boxy Cards) */}
        <motion.div
          key={selectedGroup}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {visibleGroups.map((group) => (
            <motion.div
              key={group.id}
              variants={itemVariants}
              className="border-b border-gray-300/70 pb-10 last:border-b-0"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-6">
                <div>
                  <h2 className="font-squids text-gray-900 text-2xl sm:text-3xl tracking-tight">
                    {group.title}
                  </h2>
                  <p className="font-anta text-gray-600 text-sm sm:text-base mt-1 max-w-2xl leading-relaxed">
                    {group.summary}
                  </p>
                </div>
                <span className="font-anta text-xs font-semibold uppercase tracking-widest text-dredd-green self-start md:self-auto">
                  {group.skills.length} Technologies
                </span>
              </div>

              {/* Skills Interactive Badges Strip */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {group.skills.map((skill) => {
                  const IconComp = skill.Icon;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/75 hover:bg-white border border-gray-300/80 hover:border-dredd-green shadow-sm hover:shadow-md transition-all duration-200 cursor-default group"
                    >
                      <span className="text-gray-700 group-hover:text-dredd-green transition-colors">
                        <IconComp size={24} />
                      </span>
                      <span className="font-anta text-gray-900 text-sm sm:text-base font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
