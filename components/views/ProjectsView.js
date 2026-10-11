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
    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-6">
      <div className="w-full max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="font-anta text-dredd-green text-xs uppercase tracking-widest mb-1 font-semibold">Portfolio Archive</p>
              <h1 className="font-squids text-gray-800 text-4xl sm:text-6xl md:text-7xl mb-2 select-none">Engineering Projects</h1>
              <div className="h-1 w-24 bg-gradient-to-r from-gray-400 to-gray-800 mb-4" />
              <p className="font-anta text-gray-700 text-base sm:text-xl max-w-3xl leading-relaxed">
                Curated production software engineering work spanning full-stack web applications, distributed APIs, mobile apps, and architectural implementations.
              </p>
            </div>

            {/* Quick Search */}
            <div className="w-full md:w-80">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by tech, category or name..."
                aria-label="Search projects by technology or title"
                className="w-full font-anta text-sm sm:text-base px-5 py-3 rounded-full bg-white/90 border border-gray-300 focus:outline-none focus:border-dredd-green focus:ring-2 focus:ring-dredd-green/20 shadow-sm text-gray-800"
              />
            </div>
          </div>
        </motion.div>

        {/* Interactive Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8">
          {categories.map((cat) => {
            const count = cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length;
            const isActive = filter === cat;

            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-anta font-medium transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gray-900 text-white shadow-md'
                    : 'bg-white/70 hover:bg-white text-gray-700 border border-gray-300/80 shadow-sm'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${
                    isActive ? 'bg-dredd-green text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Expansive Responsive Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${filter}-${search}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full"
            variants={container}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                variants={card}
                whileHover={{ y: -6 }}
                onClick={() => push('project-detail', { projectId: project.id })}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && push('project-detail', { projectId: project.id })}
                aria-label={`View ${project.name} details`}
                className="group flex flex-col justify-between bg-white/85 backdrop-blur-md rounded-2xl border border-gray-300/80 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Top Banner & Media */}
                <div>
                  <div
                    className="relative h-56 w-full bg-cover bg-center overflow-hidden"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-900/30 to-black/20" />

                    {/* Category Pill */}
                    <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2">
                      <span className="text-xs font-anta px-3 py-1 bg-gray-900/90 text-white rounded-full backdrop-blur-md border border-white/20 font-medium">
                        {project.category}
                      </span>
                      {project.type && (
                        <span className="text-xs font-anta px-2.5 py-1 bg-white/25 text-white rounded-full backdrop-blur-md font-medium">
                          {project.type}
                        </span>
                      )}
                    </div>

                    {/* Source Code Badge */}
                    {project.repos && project.repos.length > 0 && (
                      <div className="absolute top-3.5 right-3.5">
                        <span className="text-xs font-anta px-2.5 py-1 bg-white/95 text-gray-900 rounded-full shadow-md flex items-center gap-1.5 font-semibold">
                          <FaCode size={12} className="text-dredd-green" />
                          {project.repos.length} {project.repos.length === 1 ? 'repo' : 'repos'}
                        </span>
                      </div>
                    )}

                    <div className="absolute bottom-3.5 left-4 right-4">
                      <h3 className="font-squids text-white text-2xl sm:text-3xl drop-shadow-md tracking-tight">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Details with Enriched Description */}
                  <div className="p-6">
                    <p className="font-anta text-gray-700 text-sm sm:text-base leading-relaxed mb-5">
                      {project.details || project.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.techs.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-anta bg-gray-100 border border-gray-200 text-gray-800 px-2.5 py-1 rounded-md font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 pb-6 pt-3 border-t border-gray-200/60 flex items-center justify-between">
                  <span className="font-anta text-dredd-green text-sm sm:text-base flex items-center gap-1.5 font-semibold group-hover:gap-2.5 transition-all">
                    <span>Explore Architecture</span>
                    <FaArrowRight size={12} />
                  </span>

                  <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                    {project.viewlink && (
                      <a
                        href={project.viewlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-gray-100 hover:bg-dredd-green hover:text-white rounded-full text-gray-800 transition-colors shadow-sm"
                        aria-label={`Live demo for ${project.name}`}
                      >
                        <FaExternalLinkAlt size={13} />
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
    </div>
  );
}
