import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaCode, FaArrowRight, FaLayerGroup } from 'react-icons/fa';
import { projects, categories } from '../../data/projects';
import { useNavigation } from '../../context/NavigationContext';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};
const card = {
  hidden: { y: 24, opacity: 0, scale: 0.98 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 320, damping: 26 } },
};

export default function ProjectsView() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const { push } = useNavigation();

  const filtered = projects.filter((p) => {
    const matchesCategory = filter === 'All' || p.category === filter;
    const matchesSearch =
      search === '' ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase()) ||
      p.techs.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="font-anta text-dredd-green text-xs uppercase tracking-widest mb-1">Portfolio Archive</p>
            <h1 className="font-squids text-gray-800 text-3xl sm:text-5xl mb-2">Engineering Projects</h1>
            <p className="font-anta text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
              Curated software engineering work spanning full-stack web applications, distributed APIs, mobile apps, and developer tools.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-72">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by tech or title..."
              aria-label="Search projects by technology or title"
              className="w-full font-anta text-sm px-4 py-2.5 rounded-full bg-white/80 border border-gray-300 focus:outline-none focus:border-dredd-green shadow-sm text-gray-800"
            />
          </div>
        </div>
        <div className="h-0.5 w-20 bg-dredd-green mt-6" />
      </motion.div>

      {/* Interactive Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map((cat) => {
          const count = cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length;
          const isActive = filter === cat;

          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-anta transition-all duration-200 flex items-center gap-1.5 ${isActive
                  ? 'bg-gray-800 text-white shadow-md'
                  : 'bg-white/60 hover:bg-white text-gray-700 border border-gray-300/60'
                }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[11px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-dredd-green text-white' : 'bg-gray-200 text-gray-600'
                  }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid with Asymmetric Accents */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${filter}-${search}`}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
        >
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              variants={card}
              whileHover={{ y: -5 }}
              onClick={() => push('project-detail', { projectId: project.id })}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && push('project-detail', { projectId: project.id })}
              aria-label={`View ${project.name} details`}
              className="group flex flex-col justify-between bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Top Banner & Media */}
              <div>
                <div
                  className="relative h-48 w-full bg-cover bg-center overflow-hidden"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-black/20" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="text-[11px] font-anta px-2.5 py-1 bg-gray-900/80 text-white rounded-full backdrop-blur-sm border border-white/20">
                      {project.category}
                    </span>
                    {project.type && (
                      <span className="text-[11px] font-anta px-2 py-0.5 bg-white/20 text-white rounded-full backdrop-blur-sm">
                        {project.type}
                      </span>
                    )}
                  </div>

                  {/* Verified Source Indicator */}
                  {project.repos && project.repos.length > 0 && (
                    <div className="absolute top-3 right-3">
                      <span className="text-[11px] font-anta px-2 py-1 bg-white/90 text-gray-800 rounded-full shadow-sm flex items-center gap-1 font-medium">
                        <FaCode size={11} className="text-dredd-green" />
                        {project.repos.length} {project.repos.length === 1 ? 'repo' : 'repos'}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-squids text-white text-xl drop-shadow-md tracking-tight">
                      {project.name}
                    </h3>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-5">
                  <p className="font-anta text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                    {project.tagline || project.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.techs.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-anta bg-gray-100 text-gray-700 px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 pb-5 pt-2 border-t border-gray-100 flex items-center justify-between">
                <span className="font-anta text-dredd-green text-sm flex items-center gap-1 font-semibold group-hover:gap-2 transition-all">
                  <span>Explore Details</span>
                  <FaArrowRight size={11} />
                </span>

                <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                  {project.viewlink && (
                    <a
                      href={project.viewlink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 hover:bg-dredd-green hover:text-white rounded-full text-gray-700 transition-colors"
                      aria-label={`Live demo for ${project.name}`}
                    >
                      <FaExternalLinkAlt size={12} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="text-center py-16 bg-white/50 rounded-2xl border border-dashed border-gray-300">
          <p className="font-anta text-gray-600 mb-2">No projects match the selected criteria.</p>
          <button
            onClick={() => { setFilter('All'); setSearch(''); }}
            className="font-anta text-sm text-dredd-green underline"
          >
            Reset filters
          </button>
        </div>
      )}

      {/* Link to Graphic Design & Creative Works */}
      <motion.button
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.04 }}
        onClick={() => push('graphics')}
        id="projects-graphics-btn"
        className="fixed bottom-6 right-6 z-40 bg-gray-800 text-white font-anta py-2.5 px-5 rounded-full shadow-xl hover:bg-dredd-green transition-colors duration-200 flex items-center gap-2"
      >
        <FaLayerGroup size={14} />
        <span>View Graphic Design</span>
      </motion.button>
    </div>
  );
}
