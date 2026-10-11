import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { IoMdCloudDownload } from 'react-icons/io';
import { FaLongArrowAltRight, FaBriefcase, FaCheckCircle } from 'react-icons/fa';
import { useNavigation } from '../../context/NavigationContext';
import { experiences } from '../../data/experiences';
import ResumeModal from '../ResumeModal';

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };
const item = { hidden: { y: 25, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } } };

export default function AboutView() {
  const { push } = useNavigation();
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-6">
        <div className="w-full max-w-7xl mx-auto space-y-16">
          {/* Bio Overview */}
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 items-center">
            {/* Portrait */}
            <motion.div
              className="lg:col-span-5 flex justify-center w-full"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 220, damping: 22, delay: 0.1 }}
            >
              <div className="w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 rounded-3xl bg-gray-900 shadow-2xl overflow-hidden ring-4 ring-dredd-green/30 relative">
                <Image
                  src="/img/dredd.png"
                  alt="Folayan Olamide Mayokun — Full Stack Developer"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Bio text */}
            <motion.div className="lg:col-span-7 w-full" variants={container} initial="hidden" animate="visible">
              <motion.div variants={item} className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-dredd-green" />
                <span className="font-anta text-gray-500 text-xs tracking-widest uppercase">Professional Profile</span>
              </motion.div>

              <motion.h1 variants={item} className="font-squids text-gray-800 text-3xl sm:text-5xl leading-tight mb-2">
                Folayan Olamide Mayokun
              </motion.h1>

              <motion.p variants={item} className="font-anta text-dredd-green text-lg sm:text-2xl mb-6 font-medium">
                Full Stack Developer | Web & Mobile Applications
              </motion.p>

              <motion.p variants={item} className="font-anta text-gray-700 text-base sm:text-lg leading-relaxed mb-5">
                I&apos;m Folayan Olamide Mayokun, a Full Stack Developer who builds web applications, backend systems, and mobile experiences.
                I work with technologies including React, Next.js, Node.js, MongoDB, Django, React Native, and Flutter. My experience includes
                building frontend applications, integrating APIs, developing backend functionality, testing, deployment, and working on products
                from early development through implementation.
              </motion.p>

              <motion.p variants={item} className="font-anta text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                Based in Lagos, Nigeria, with extensive experience collaborating on remote products, driving architecture, and delivering
                cross-platform mobile applications that seamlessly interact with cloud backends.
              </motion.p>

              <motion.div variants={item} className="flex flex-wrap gap-4">
                <button
                  id="about-services-btn"
                  onClick={() => push('projects')}
                  className="flex items-center gap-2 font-anta text-gray-800 border-2 border-gray-800 px-6 py-3 rounded-full hover:border-dredd-green hover:text-dredd-green transition-colors duration-200"
                >
                  <FaLongArrowAltRight /> Explore Projects
                </button>
                <button
                  id="about-cv-btn"
                  onClick={() => setResumeOpen(true)}
                  className="flex items-center gap-2 font-anta text-gray-800 bg-white border border-gray-300 px-6 py-3 rounded-full hover:bg-dredd-green hover:text-white hover:border-dredd-green shadow-sm transition-all duration-200"
                >
                  <IoMdCloudDownload /> View Resume
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Professional Experience Section */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 pt-6 border-t border-gray-300/60"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <FaBriefcase className="text-dredd-green" size={14} />
                <p className="font-anta text-dredd-green text-xs uppercase tracking-widest">Career History</p>
              </div>
              <h2 className="font-squids text-gray-800 text-2xl sm:text-4xl mb-2">Work Experience & Leadership</h2>
              <p className="font-anta text-gray-600 text-sm sm:text-base max-w-2xl leading-relaxed">
                Hands-on technical roles, engineering leadership, and architectural ownership across production products.
              </p>
            </div>

            {/* Experience Timeline Cards */}
            <div className="space-y-6">
              {experiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={item}
                  className="bg-white/85 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-gray-100">
                    <div>
                      <h3 className="font-squids text-gray-800 text-xl sm:text-2xl">{exp.role}</h3>
                      <p className="font-anta text-dredd-green text-base font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <span className="font-anta text-xs sm:text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-800 font-medium">
                        {exp.period}
                      </span>
                      <span className="font-anta text-xs text-gray-500 mt-1">{exp.type}</span>
                    </div>
                  </div>

                  <p className="font-anta text-gray-700 text-sm sm:text-base mb-5 leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Responsibilities list */}
                  <div className="space-y-2 mb-6">
                    <p className="font-anta text-xs uppercase tracking-wider text-gray-500 font-semibold">Key Contributions & Architecture:</p>
                    <ul className="space-y-1.5">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2.5 font-anta text-xs sm:text-sm text-gray-700 leading-relaxed">
                          <FaCheckCircle size={13} className="text-dredd-green shrink-0 mt-1" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.techs.map((t) => (
                      <span key={t} className="font-anta text-xs bg-gray-100 border border-gray-200/60 text-gray-700 px-2.5 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
