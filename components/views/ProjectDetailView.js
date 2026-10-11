import { motion } from 'framer-motion';
import { FaCode, FaEye, FaArrowLeft } from 'react-icons/fa';
import { projects } from '../../data/projects';
import { useNavigation } from '../../context/NavigationContext';

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } };
const item = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 22 } } };

export default function ProjectDetailView({ projectId }) {
  const { pop } = useNavigation();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="font-anta text-gray-600">Project not found.</p>
        <button onClick={pop} className="mt-4 font-anta text-dredd-green underline">Go back</button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 py-10">
      <motion.div variants={container} initial="hidden" animate="visible">
        {/* Hero image */}
        <motion.div variants={item}
          className="w-full h-56 md:h-80 rounded-2xl bg-cover bg-center mb-8 shadow-lg overflow-hidden"
          style={{ backgroundImage: `url(${project.image})` }}>
          <div className="w-full h-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <span className="font-anta text-sm px-3 py-1 bg-dredd-green text-white rounded-full">{project.category}</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1 variants={item} className="font-squids text-gray-800 text-2xl md:text-4xl mb-1">{project.name}</motion.h1>
        <motion.div variants={item} className="h-0.5 w-16 bg-dredd-green mb-6" />

        {/* Role */}
        {project.role && (
          <motion.p variants={item} className="font-anta text-dredd-green text-sm md:text-base mb-4">
            Role: {project.role}
          </motion.p>
        )}

        {/* Description */}
        <motion.p variants={item} className="font-anta text-gray-700 text-sm md:text-base leading-relaxed mb-6">
          {project.details || project.desc}
        </motion.p>

        {/* Tech stack */}
        <motion.div variants={item} className="mb-8">
          <h2 className="font-squids text-gray-800 text-lg mb-3">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.techs.map((t) => (
              <span key={t} className="font-anta text-sm bg-gray-800 text-gray-100 px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </motion.div>

        {/* Links */}
        <motion.div variants={item} className="flex flex-wrap gap-4">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 font-anta text-gray-800 border-2 border-gray-800 px-5 py-2.5 rounded-full hover:border-dredd-green hover:text-dredd-green transition-colors duration-200">
              <FaCode /> View Source Code
            </a>
          )}
          {project.viewlink && (
            <a href={project.viewlink} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 font-anta bg-gray-800 text-gray-100 px-5 py-2.5 rounded-full hover:bg-dredd-green transition-colors duration-200">
              <FaEye /> Live Demo
            </a>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
