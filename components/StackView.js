import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdArrowBack, MdClose } from 'react-icons/md';
import { useNavigation } from '../context/NavigationContext';

import AboutView from './views/AboutView';
import ServicesView from './views/ServicesView';
import SkillsView from './views/SkillsView';
import ContactView from './views/ContactView';
import ProjectsView from './views/ProjectsView';
import ProjectDetailView from './views/ProjectDetailView';
import GraphicsView from './views/GraphicsView';

const VIEW_MAP = {
  about:           { title: 'About Me',        Component: AboutView },
  services:        { title: 'Services',        Component: ServicesView },
  skills:          { title: 'Skills & Tools',  Component: SkillsView },
  contact:         { title: 'Contact Me',      Component: ContactView },
  projects:        { title: 'Projects',        Component: ProjectsView },
  'project-detail':{ title: 'Project Details', Component: ProjectDetailView },
  graphics:        { title: 'Graphics & Art',  Component: GraphicsView },
};

const slideVariants = {
  initial: { x: '100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit:    { x: '100%', opacity: 0 },
};

const reducedVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
};

export default function StackView() {
  const { stack, pop, closeAll } = useNavigation();
  const overlayRef = useRef(null);
  
  const prefersReduced =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  return (
    <AnimatePresence>
      {stack.map((item, index) => {
        const viewConfig = VIEW_MAP[item.view];
        if (!viewConfig) return null;

        const { title, Component } = viewConfig;
        const hasParent = index > 0;
        const zIndex = 50 + index * 10;

        return (
          <motion.div
            key={`${item.view}-${index}`}
            ref={overlayRef}
            className="fixed inset-0 overflow-y-auto noise-bg bg-[#dedede] text-slate-800"
            role="dialog"
            aria-modal="true"
            aria-label={title}
            tabIndex={-1}
            variants={prefersReduced ? reducedVariants : slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 32, mass: 0.8 }}
            style={{ zIndex }}
          >
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-gray-400/20 backdrop-blur-md bg-[#dedede]/85">
              <button
                onClick={pop}
                aria-label={hasParent ? 'Go back' : 'Close view'}
                className="flex items-center gap-2 text-gray-800 hover:text-dredd-green transition-colors font-anta text-sm font-semibold"
              >
                <MdArrowBack size={20} />
                <span>{hasParent ? 'Back' : 'Close'}</span>
              </button>

              <h2 className="font-squids text-gray-800 text-lg md:text-xl tracking-wide absolute left-1/2 -translate-x-1/2 pointer-events-none">
                {title}
              </h2>

              <button
                onClick={closeAll}
                aria-label="Close all views"
                className="p-1.5 text-gray-600 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-300/60"
              >
                <MdClose size={22} />
              </button>
            </div>

            {/* View Body */}
            <div className="w-full pb-16">
              <Component params={item.params} />
            </div>
          </motion.div>
        );
      })}
    </AnimatePresence>
  );
}
