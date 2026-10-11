import { motion } from 'framer-motion';
import { FaCode, FaExternalLinkAlt, FaGithub, FaMobileAlt, FaServer, FaGlobe } from 'react-icons/fa';
import { projects } from '../../data/projects';
import { useNavigation } from '../../context/NavigationContext';

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };
const item = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } } };

export default function ProjectDetailView({ projectId }) {
  const { pop, push } = useNavigation();
  const project = projects.find((p) => p.id === projectId || String(p.id) === String(projectId));

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="font-squids text-2xl text-gray-800 mb-2">Project Not Found</h2>
        <p className="font-anta text-gray-600 mb-6">The requested project could not be located in the catalog.</p>
        <button
          onClick={() => push('projects')}
          className="font-anta px-6 py-2.5 rounded-full bg-gray-800 text-white hover:bg-dredd-green transition-colors"
        >
          Return to Projects Archive
        </button>
      </div>
    );
  }

  const getRepoIcon = (type) => {
    switch (type) {
      case 'Mobile':
        return <FaMobileAlt size={14} className="text-dredd-green" />;
      case 'Backend':
        return <FaServer size={14} className="text-dredd-green" />;
      case 'Web':
      case 'Frontend':
        return <FaGlobe size={14} className="text-dredd-green" />;
      default:
        return <FaGithub size={14} className="text-dredd-green" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 md:px-12 py-8">
      <motion.div variants={container} initial="hidden" animate="visible" className="space-y-8">
        {/* Hero image banner */}
        <motion.div
          variants={item}
          className="relative w-full h-64 sm:h-96 rounded-3xl bg-cover bg-center shadow-lg overflow-hidden border border-gray-300/40"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-900/40 to-transparent" />
          
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="font-anta text-xs px-3 py-1 bg-gray-900/90 text-white rounded-full backdrop-blur-md border border-white/20">
              {project.category}
            </span>
            {project.type && (
              <span className="font-anta text-xs px-3 py-1 bg-white/20 text-white rounded-full backdrop-blur-md">
                {project.type}
              </span>
            )}
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <p className="font-anta text-xs text-dredd-green uppercase tracking-wider mb-1 drop-shadow-sm font-semibold">
              {project.role}
            </p>
            <h1 className="font-squids text-white text-3xl sm:text-5xl drop-shadow-md">
              {project.name}
            </h1>
          </div>
        </motion.div>

        {/* Tagline & Overview */}
        <motion.div variants={item} className="bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-4">
          <h2 className="font-squids text-gray-800 text-xl sm:text-2xl">Overview & Architecture</h2>
          <p className="font-anta text-gray-700 text-sm sm:text-base leading-relaxed">
            {project.details || project.desc}
          </p>

          {/* Quick links header */}
          <div className="flex flex-wrap gap-4 pt-2">
            {project.viewlink && (
              <a
                href={project.viewlink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-anta text-sm bg-gray-800 hover:bg-dredd-green text-white px-5 py-2.5 rounded-full shadow transition-colors"
              >
                <FaExternalLinkAlt size={12} />
                <span>Visit Live Platform</span>
              </a>
            )}
            <button
              onClick={() => push('projects')}
              className="font-anta text-sm text-gray-600 hover:text-dredd-green border border-gray-300 hover:border-dredd-green px-5 py-2.5 rounded-full transition-colors"
            >
              ← Back to Collection
            </button>
          </div>
        </motion.div>

        {/* Code Repositories section (Multi-repository architecture) */}
        {project.repos && project.repos.length > 0 && (
          <motion.div variants={item} className="bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-squids text-gray-800 text-xl sm:text-2xl">Code Repositories</h2>
                <p className="font-anta text-xs sm:text-sm text-gray-500">
                  Individual modules, services, and applications powering this project.
                </p>
              </div>
              <span className="font-anta text-xs px-2.5 py-1 bg-gray-100 rounded-full text-gray-700 font-medium">
                {project.repos.length} {project.repos.length === 1 ? 'Repository' : 'Repositories'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {project.repos.map((repo, i) => (
                <a
                  key={i}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-gray-50/70 hover:bg-white hover:border-dredd-green hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <span className="p-2.5 rounded-lg bg-white border border-gray-200 group-hover:border-dredd-green transition-colors">
                      {getRepoIcon(repo.type)}
                    </span>
                    <div>
                      <span className="block font-anta text-sm font-semibold text-gray-800 group-hover:text-dredd-green transition-colors">
                        {repo.label}
                      </span>
                      <span className="block font-anta text-xs text-gray-500">
                        {repo.type} Codebase
                      </span>
                    </div>
                  </div>
                  <FaGithub size={16} className="text-gray-400 group-hover:text-gray-800 transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Technologies Breakdown */}
        <motion.div variants={item} className="bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-4">
          <h2 className="font-squids text-gray-800 text-xl">Technical Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className="font-anta text-xs sm:text-sm bg-gray-100 border border-gray-200/80 text-gray-800 px-3 py-1.5 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
