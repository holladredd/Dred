import { motion } from 'framer-motion';
import { FaLongArrowAltRight, FaCode, FaEye } from 'react-icons/fa';
import { projects } from '../../data/projects';
import { useNavigation } from '../../context/NavigationContext';

const featured = projects.slice(0, 4);
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const card = {
  hidden:  { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 280, damping: 24 } },
};

export default function FeaturedProjects() {
  const { push } = useNavigation();
  return (
    <section aria-label="Featured projects" className="w-full py-6 pb-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.45 }}>
        <h2 className="font-squids text-gray-800 text-3xl md:text-4xl mb-1">Selected Projects</h2>
        <div className="h-0.5 w-16 bg-dredd-green mb-8" />
      </motion.div>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
        {featured.map((project) => (
          <motion.div
            key={project.id}
            variants={card}
            whileHover={{ y: -4 }}
            className="bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 shadow-sm cursor-pointer group"
            onClick={() => push('project-detail', { projectId: project.id })}
            role="button" tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && push('project-detail', { projectId: project.id })}
            aria-label={`View details for ${project.name}`}
          >
            <div className="h-44 bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${project.image})` }} aria-hidden="true">
              <div className="w-full h-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 transition-transform duration-500 group-hover:scale-105">
                <span className="text-xs font-anta px-2 py-1 bg-gray-800/80 text-gray-100 rounded-full">{project.category}</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-squids text-gray-800 text-xl mb-2">{project.name}</h3>
              <p className="font-anta text-gray-600 text-sm line-clamp-2 mb-3">{project.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techs.map((t) => (
                  <span key={t} className="text-xs font-anta bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{t}</span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="font-anta text-dredd-green text-sm flex items-center gap-1">View Details <FaLongArrowAltRight size={11} /></span>
                <div className="flex gap-2">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-700 transition-colors" aria-label={`Source code for ${project.name}`}>
                      <FaCode size={13} />
                    </a>
                  )}
                  {project.viewlink && (
                    <a href={project.viewlink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-700 transition-colors" aria-label={`Live demo for ${project.name}`}>
                      <FaEye size={13} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-8 text-center">
        <button id="home-all-projects-btn" onClick={() => push('projects')}
          className="font-anta text-gray-800 border-2 border-gray-800 px-6 py-2.5 rounded-full hover:border-dredd-green hover:text-dredd-green transition-colors duration-200">
          All Projects →
        </button>
      </motion.div>
    </section>
  );
}
