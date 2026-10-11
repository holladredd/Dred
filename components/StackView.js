import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

// Different entrance vectors for views (dynamic angles instead of static right-to-left)
const VIEW_DIRECTIONS = {
  about:           { initial: { y: '-100%', x: '-20%', rotate: -3, opacity: 0, scale: 0.9 }, exit: { y: '-100%', rotate: -2, opacity: 0 } },
  services:        { initial: { y: '100%',  x: '20%',  rotate: 3,  opacity: 0, scale: 0.9 }, exit: { y: '100%',  rotate: 2,  opacity: 0 } },
  skills:          { initial: { x: '-100%', y: '30%',  rotate: -4, opacity: 0, scale: 0.9 }, exit: { x: '-100%', rotate: -2, opacity: 0 } },
  contact:         { initial: { y: '100%',  x: '-20%', rotate: 4,  opacity: 0, scale: 0.9 }, exit: { y: '100%',  rotate: 3,  opacity: 0 } },
  projects:        { initial: { x: '100%',  y: '-25%', rotate: 3,  opacity: 0, scale: 0.9 }, exit: { x: '100%',  rotate: 2,  opacity: 0 } },
  'project-detail':{ initial: { scale: 0.5, y: '50%',  rotate: -5, opacity: 0 },             exit: { scale: 0.6, y: '50%', opacity: 0 } },
  graphics:        { initial: { x: '-100%', y: '-40%', rotate: 5,  opacity: 0, scale: 0.9 }, exit: { x: '-100%', rotate: 3,  opacity: 0 } },
};

export default function StackView() {
  const { stack } = useNavigation();
  const overlayRef = useRef(null);

  return (
    <AnimatePresence>
      {stack.map((item, index) => {
        const viewConfig = VIEW_MAP[item.view];
        if (!viewConfig) return null;

        const { title, Component } = viewConfig;
        const zIndex = 40 + index * 5;
        const animationVariant = VIEW_DIRECTIONS[item.view] || {
          initial: { y: '100%', opacity: 0, scale: 0.9 },
          exit:    { y: '100%', opacity: 0 },
        };

        return (
          <motion.div
            key={`${item.view}-${index}`}
            ref={overlayRef}
            className="fixed inset-0 overflow-y-auto noise-bg bg-[#dedede] text-slate-800 pt-20 sm:pt-24"
            role="dialog"
            aria-modal="true"
            aria-label={title}
            tabIndex={-1}
            initial={animationVariant.initial}
            animate={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
            exit={animationVariant.exit}
            transition={{ type: 'spring', stiffness: 260, damping: 26, mass: 0.85 }}
            style={{ zIndex }}
          >
            {/* View Body without any top back or close button — Navbar on top handles navigation */}
            <div className="w-full pb-20">
              <Component {...(item.params || {})} />
            </div>
          </motion.div>
        );
      })}
    </AnimatePresence>
  );
}
