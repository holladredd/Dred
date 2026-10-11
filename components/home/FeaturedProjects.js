import { motion } from 'framer-motion';
import { FaLongArrowAltRight, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { projects } from '../../data/projects';
import { useNavigation } from '../../context/NavigationContext';

const featured = projects.filter((p) => p.featured);
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const card = {
  hidden:  { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 280, damping: 24 } },
};

export default function FeaturedProjects() {
  const { push } = useNavigation();

  return (
    <section aria-label="Featured projects" className="w-full py-6 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <p className="font-anta text-dredd-green text-xs uppercase tracking-widest mb-1">Engineered Products</p>
            <h2 className="font-squids text-gray-800 text-3xl md:text-5xl">Selected Work</h2>
          </div>
          <button
            onClick={() => push('projects')}
            className="font-anta text-sm text-gray-600 hover:text-dredd-green transition-colors flex items-center gap-1.5 self-start sm:self-auto group"
          >
            <span>Explore all projects ({projects.length})</span>
            <FaLongArrowAltRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>

      {/* Editorial Grid: Asymmetric visual hierarchy */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {featured.map((project, idx) => {
          // Asymmetric column spans: 1st and 4th are 7-cols, 2nd and 3rd are 5-cols
          const colSpan = idx % 3 === 0 ? 'lg:col-span-7' : 'lg:col-span-5';

          return (
            <motion.div
              key={project.id}
              variants={card}
              whileHover={{ y: -6 }}
              onClick={() => push('project-detail', { projectId: project.id })}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && push('project-detail', { projectId: project.id })}
              aria-label={`View details for ${project.name}`}
              className={`${colSpan} group flex flex-col justify-between rounded-2xl bg-white/70 backdrop-blur-md border border-gray-300/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer`}
            >
              {/* Media preview */}
              <div
                className="relative h-60 sm:h-72 w-full bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent transition-opacity group-hover:opacity-90" />
                
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="font-anta text-xs px-3 py-1 bg-gray-900/80 backdrop-blur-sm text-white rounded-full border border-white/20">
                    {project.category}
                  </span>
                  {project.type && (
                    <span className="font-anta text-xs px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full">
                      {project.type}
                    </span>
                  )}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-anta text-xs text-dredd-green font-medium mb-1 drop-shadow-sm">{project.role}</p>
                  <h3 className="font-squids text-white text-2xl sm:text-3xl tracking-tight drop-shadow-md">
                    {project.name}
                  </h3>
                </div>
              </div>

              {/* Information body */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-5">
                <p className="font-anta text-gray-600 text-sm md:text-base leading-relaxed">
                  {project.tagline || project.desc}
                </p>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techs.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-anta bg-gray-200/80 text-gray-700 px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-200/60">
                    <span className="font-anta text-dredd-green text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      <span>View Architecture & Code</span>
                      <FaLongArrowAltRight size={13} />
                    </span>

                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      {project.viewlink && (
                        <a
                          href={project.viewlink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 hover:bg-dredd-green hover:text-white rounded-full text-gray-700 transition-colors"
                          aria-label={`Visit live website for ${project.name}`}
                        >
                          <FaExternalLinkAlt size={12} />
                        </a>
                      )}
                      {project.repos && project.repos.length > 0 && (
                        <span className="font-anta text-xs bg-gray-100 px-2.5 py-1 rounded-full text-gray-600 flex items-center gap-1">
                          <FaCode size={11} />
                          {project.repos.length} {project.repos.length === 1 ? 'repo' : 'repos'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
