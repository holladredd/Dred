import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaCode, FaArrowRight } from 'react-icons/fa';
import { projects, categories } from '../../data/projects';
import { useNavigation } from '../../context/NavigationContext';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const card = {
  hidden:  { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } },
};

export default function ProjectsView() {
  const [filter, setFilter] = useState('All');
  const { push } = useNavigation();

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-12 py-10">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="font-squids text-gray-800 text-3xl md:text-5xl mb-1">My Projects</h1>
        <div className="h-0.5 w-20 bg-dredd-green mb-4" />
        <p className="font-anta text-gray-600 text-sm md:text-base max-w-2xl">
          A collection of projects across web, mobile, backend, and graphics. Each reflects my commitment to clean,
          functional software.
        </p>
      </motion.div>

      {/* Category filters */}
      <motion.div className="flex flex-wrap gap-2 mb-8" variants={container} initial="hidden" animate="visible">
        {categories.map((cat) => (
          <motion.button key={cat} variants={card}
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-anta transition-all duration-200 ${
              filter === cat ? 'bg-gray-800 text-white shadow' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}>
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container} initial="hidden" animate="visible" exit={{ opacity: 0 }}>
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              variants={card}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group"
              onClick={() => push('project-detail', { projectId: project.id })}
              role="button" tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && push('project-detail', { projectId: project.id })}
              aria-label={`View ${project.name} details`}
            >
              {/* Image */}
              <div className="h-44 bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${project.image})` }}>
                <div className="w-full h-full bg-gradient-to-t from-black/65 to-transparent flex items-end p-4 transition-transform duration-500 group-hover:scale-105">
                  <span className="text-xs font-anta px-2 py-1 bg-dredd-green text-white rounded-full">{project.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-squids text-gray-800 text-xl mb-2">{project.name}</h3>
                <p className="font-anta text-gray-600 text-sm line-clamp-2 mb-3">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techs.map((t) => (
                    <span key={t} className="text-xs font-anta bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{t}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-anta text-dredd-green text-sm flex items-center gap-1">
                    Details <FaArrowRight size={11} />
                  </span>
                  <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer"
                        className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-700 transition-colors"
                        aria-label={`Source code: ${project.name}`}><FaCode size={13} /></a>
                    )}
                    {project.viewlink && (
                      <a href={project.viewlink} target="_blank" rel="noopener noreferrer"
                        className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-700 transition-colors"
                        aria-label={`Live demo: ${project.name}`}><FaEye size={13} /></a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Graphics link */}
      <motion.button
        initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.04 }}
        onClick={() => push('graphics')}
        id="projects-graphics-btn"
        className="fixed bottom-6 right-6 z-50 bg-gray-800 text-white font-anta py-2.5 px-5 rounded-full shadow-lg hover:bg-dredd-green transition-colors duration-200 flex items-center gap-2">
        Graphics <FaArrowRight />
      </motion.button>
    </div>
  );
}
