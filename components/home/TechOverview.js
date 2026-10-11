import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { skillCategories } from '../../data/skills';
import { useNavigation } from '../../context/NavigationContext';

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } };
const chip = {
  hidden:  { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 350, damping: 22 } },
};

export default function TechOverview() {
  const { push } = useNavigation();
  const [activeTab, setActiveTab] = useState('all');

  const displayedCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section aria-label="Skills overview" className="w-full py-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45 }}
        className="mb-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="font-anta text-dredd-green text-xs uppercase tracking-widest mb-1">Capabilities</p>
            <h2 className="font-squids text-gray-800 text-3xl sm:text-5xl mb-2">Technical Skills & Stack</h2>
            <p className="font-anta text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
              Core technologies, frameworks, and deployment tooling used to build scalable web, mobile, and backend solutions.
            </p>
          </div>

          <button
            id="home-full-skills-btn"
            onClick={() => push('skills')}
            className="font-anta text-sm text-gray-600 hover:text-dredd-green transition-colors flex items-center gap-1.5 self-start sm:self-auto group"
          >
            <span>Detailed skills breakdown</span>
            <FaLongArrowAltRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="h-0.5 w-20 bg-dredd-green mt-6" />
      </motion.div>

      {/* Interactive Category Selector */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-full font-anta text-xs sm:text-sm transition-all duration-200 ${
            activeTab === 'all'
              ? 'bg-gray-800 text-white shadow-md'
              : 'bg-white/60 hover:bg-white text-gray-700 border border-gray-300/60'
          }`}
        >
          All Skills
        </button>
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-4 py-2 rounded-full font-anta text-xs sm:text-sm transition-all duration-200 ${
              activeTab === cat.id
                ? 'bg-gray-800 text-white shadow-md'
                : 'bg-white/60 hover:bg-white text-gray-700 border border-gray-300/60'
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Grouped Skill Cards Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
        >
          {displayedCategories.map((group) => (
            <motion.div
              key={group.id}
              variants={chip}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/80 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <h3 className="font-squids text-gray-800 text-xl mb-1">{group.title}</h3>
                <p className="font-anta text-gray-500 text-xs mb-5">{group.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => {
                    const IconComp = s.Icon;
                    return (
                      <div
                        key={s.name}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200/60 text-gray-800 font-anta text-xs sm:text-sm hover:border-dredd-green transition-colors"
                      >
                        <span className="text-gray-700">
                          <IconComp size={16} />
                        </span>
                        <span>{s.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
