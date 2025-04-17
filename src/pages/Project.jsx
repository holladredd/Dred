import React, { useState } from "react";
import PageTransition from "./../components/PageTransition";

import { useNavigate } from "react-router-dom";
import { FaEye, FaCode, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "My Dashboard",
    link: "https://github.com/holladredd/dashboards",
    techs: ["ReactJs", "Material UI", "Framer-Motion"],
    desc: "A comprehensive web app providing users a centralized dashboard to manage activities and access features with a modern interface.",
    viewlink: "",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Web App",
  },
  {
    id: 2,
    name: "First Portfolio",
    link: "https://github.com/holladredd/dredd",
    techs: ["HTML", "Bootstrap"],
    desc: "A personal portfolio site showcasing skills, projects, and creative work as a developer and designer.",
    viewlink: "https://dredd.netlify.app/",
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Portfolio",
  },
  {
    id: 3,
    name: "AIVers",
    link: "https://github.com/holladredd/aivers",
    techs: ["JavaScript", "Bootstrap"],
    desc: "A dedicated platform delivering real-time updates and articles about artificial intelligence for tech lovers and researchers.",
    viewlink: "",
    image:
      "https://images.unsplash.com/photo-1677442135136-760c813dce26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "News Platform",
  },
  {
    id: 4,
    name: "Diet-Preg",
    link: "https://github.com/holladredd/diet-preg",
    techs: ["HTML", "Bootstrap"],
    desc: "An informative pregnancy diet planner to help expecting mothers follow a healthy eating routine.",
    viewlink: "",
    image:
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Health App",
  },
  {
    id: 5,
    name: "ZapTop - Payment Simulator",
    link: "https://github.com/holladredd/zaptop",
    techs: ["React Native", "Expo"],
    desc: "A dummy mobile payment simulation app that mimics real-world transactions and saves user payment logs.",
    viewlink: "",
    image:
      "https://images.unsplash.com/photo-1633356122544-d29a760403d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Mobile App",
  },
  {
    id: 6,
    name: "ZapServer",
    link: "https://github.com/holladredd/zapserver",
    techs: ["Node.js", "Express", "MongoDB"],
    desc: "The backend service that powers the ZapTop payment simulator. Handles routing, user data, and dummy transaction logic.",
    viewlink: "",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Backend",
  },
  {
    id: 7,
    name: "Geek - Book & Skill App",
    link: "https://github.com/holladredd/geek",
    techs: ["React Native", "JavaScript"],
    desc: "A reading and training app for users to grow their knowledge through books and skill-building content.",
    viewlink: "",
    image:
      "https://images.unsplash.com/photo-1611078489935-d48c96a58c2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Mobile App",
  },
  {
    id: 8,
    name: "GeekServer",
    link: "https://github.com/holladredd/geekserver",
    techs: ["Node.js", "Express", "MongoDB"],
    desc: "Backend service for the Geek app, managing users, books, progress tracking, and skill suggestions.",
    viewlink: "",
    image:
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Backend",
  },
  {
    id: 9,
    name: "NACOS - Student Payment App",
    link: "https://github.com/holladredd/nacos",
    techs: ["React Native", "Expo"],
    desc: "A mobile app built for the National Association of Computer Science Students (NACOSS) to manage member payments, receipts, and records.",
    viewlink: "",
    image:
      "https://images.unsplash.com/photo-1603574670812-d24560880210?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Mobile App",
  },
  {
    id: 10,
    name: "HCMSA - Health Care Mobile System App",
    link: "https://github.com/holladredd/hcmsa",
    techs: ["React Native", "Expo"],
    desc: "A mobile healthcare tracking system for pregnant women to monitor their health, appointments, diet, and receive reminders.",
    viewlink: "",
    image:
      "https://images.unsplash.com/photo-1612423284932-76c77ac05e8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "School Project",
  },
  {
    id: 11,
    name: "HCMSAServer",
    link: "https://github.com/holladredd/hcmsaserver",
    techs: ["Node.js", "Express", "MongoDB"],
    desc: "Backend API for HCMSA app, managing user data, appointments, reminders, and health tips.",
    viewlink: "",
    image:
      "https://images.unsplash.com/photo-1614821416212-54e0f7e8bc28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "School Project",
  },
  {
    id: 12,
    name: "Verv - Truth or Dare Game",
    link: "https://github.com/holladredd/Verv",
    techs: ["React Native", "Expo"],
    desc: "A fun truth or dare mobile game with levels like Beginner, Spicy, and categories like Couples, Groups. Players earn points and penalties.",
    viewlink: "",
    image:
      "https://images.unsplash.com/photo-1614289265206-1c5e188cc212?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Game App",
  },
  {
    id: 13,
    name: "Talentta",
    link: "https://github.com/holladredd/talentta",
    techs: ["React", "Node.js", "AI Integration"],
    desc: "A startup platform connecting talents to recruiters. Features AI that reviews CVs, suggests training, and helps career growth.",
    viewlink: "",
    image:
      "https://images.unsplash.com/photo-1603575448372-8b8a6a3bfa9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Contract",
  },
  {
    id: 14,
    name: "ArtizanSquare",
    link: "https://github.com/holladredd/artizansquare",
    techs: ["React", "Firebase", "Chat"],
    desc: "A startup project that connects artisans to customers with a messaging system and job request features.",
    viewlink: "",
    image:
      "https://images.unsplash.com/photo-1573497019412-0b39bd06c02b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Startup",
  },
];

const Project = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [filter, setFilter] = useState("All");
  const navi = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const handleProjectClick = (projectId) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <PageTransition>
      {/* Navigation button to Graphics page */}
      <motion.button
        onClick={() => navi("/Project/Graphics")}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        className="fixed bottom-6 right-6 z-50 bg-gray-800 text-white py-2 px-4 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 flex items-center"
      >
        <span className="mr-2">Graphics</span>
        <FaArrowRight />
      </motion.button>

      <div className=" mx-auto px-4 py-8 max-w-6xl">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-squids text-gray-800 mb-4"
          >
            My Projects
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="h-1 w-24 bg-gradient-to-r from-blue-500 to-green-500 mb-6"
          ></motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 max-w-2xl text-lg"
          >
            Here, you will find a list of my projects. Each project reflects my
            dedication to crafting functional and visually appealing websites.
            Explore these projects to see how I bring ideas to life through
            code.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8 flex flex-wrap gap-2"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-gray-800 text-white shadow-md"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                activeProject === project.id ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="w-full h-full bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <span className="text-xs font-medium px-2 py-1 bg-blue-500 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techs.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleProjectClick(project.id)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-300"
                  >
                    {activeProject === project.id
                      ? "View Less"
                      : "View Details"}
                  </button>

                  <div className="flex gap-2">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors duration-300"
                      >
                        <FaCode size={16} />
                      </a>
                    )}

                    {project.viewlink && (
                      <a
                        href={project.viewlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors duration-300"
                      >
                        <FaEye size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Project Details */}
              <AnimatePresence>
                {activeProject === project.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-50 border-t border-gray-100 overflow-hidden"
                  >
                    <div className="p-5">
                      <h4 className="text-lg font-medium text-gray-800 mb-2">
                        Project Details
                      </h4>
                      <p className="text-gray-600 mb-4">{project.desc}</p>

                      {/* Additional details could go here */}
                      <div className="flex flex-wrap gap-4 mt-4">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
                          >
                            <FaCode size={16} />
                            <span>View Code</span>
                          </a>
                        )}

                        {project.viewlink && (
                          <a
                            href={project.viewlink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
                          >
                            <FaEye size={16} />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Project;
