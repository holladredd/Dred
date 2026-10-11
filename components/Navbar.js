import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdClose, MdMenu, MdAir, MdHomeFilled } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { PiPhoneCallFill } from 'react-icons/pi';
import { SiOpenproject } from 'react-icons/si';
import { GiSkills } from 'react-icons/gi';
import { MdFacebook } from 'react-icons/md';
import { RiInstagramFill, RiTwitterXLine } from 'react-icons/ri';
import { IoLogoWhatsapp, IoLogoGithub } from 'react-icons/io';
import Image from 'next/image';
import { useNavigation } from '../context/NavigationContext';

const navItems = [
  { id: 1, view: null,         text: 'Home',     Icon: MdHomeFilled },
  { id: 2, view: 'about',      text: 'About',    Icon: CgProfile },
  { id: 3, view: 'projects',   text: 'Projects', Icon: SiOpenproject },
  { id: 4, view: 'skills',     text: 'Skills',   Icon: GiSkills },
  { id: 5, view: 'contact',    text: 'Contact',  Icon: PiPhoneCallFill },
];

const socialLinks = [
  { id: 1, href: 'https://web.facebook.com/folayan.olamide.1',                  Icon: MdFacebook,       label: 'Facebook' },
  { id: 2, href: 'https://www.instagram.com/dev_dredd?igsh=NXozcGk5eTFoajZo',  Icon: RiInstagramFill,  label: 'Instagram' },
  { id: 3, href: 'https://wa.me/+2348160630642',                                Icon: IoLogoWhatsapp,   label: 'WhatsApp' },
  { id: 4, href: 'https://github.com/holladredd',                               Icon: IoLogoGithub,     label: 'GitHub' },
  { id: 5, href: 'https://x.com/Holla_Dredd?s=09',                             Icon: RiTwitterXLine,   label: 'Twitter/X' },
];

const toggleV = {
  hidden:  { y: -60, opacity: 0, scale: 0.8 },
  visible: { y: 0, scale: 0.9, opacity: 0.9, transition: { type: 'spring', damping: 14, stiffness: 450 } },
  hover:   { scale: 0.95, color: '#009b4d' },
  exit:    { y: -40, opacity: 0 },
};

const cardV = {
  hidden:  { y: -60, opacity: 0, scale: 0.88 },
  visible: { y: 0, scale: 0.93, opacity: 0.95, transition: { type: 'spring', damping: 18, stiffness: 400 } },
  hover:   { scale: 0.97, transition: { duration: 0.15 } },
  exit:    { y: -40, opacity: 0, transition: { duration: 0.18 } },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { push, closeAll, stack } = useNavigation();

  const handleNav = (view) => {
    setOpen(false);
    if (view === null) closeAll();
    else push(view);
  };

  const activeView = stack.length > 0 ? stack[0].view : null;

  return (
    <div>
      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] pointer-events-none" aria-label="Site navigation">
        <div className="flex justify-between items-center p-3 sm:p-5 w-full">
          <button
            onClick={() => handleNav(null)}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-lg border-2 border-gray-800/40 pointer-events-auto opacity-90 hover:opacity-100 hover:scale-105 transition-all focus-visible:ring-2 focus-visible:ring-dredd-green"
            aria-label="Go to home"
          >
            <Image src="/img/dredd.png" alt="Folayan Olamide Mayokun" width={64} height={64} className="rounded-full object-cover w-full h-full" priority />
          </button>

          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.button key="close" variants={toggleV} initial="hidden" animate="visible" whileHover="hover" exit="exit"
                onClick={() => setOpen(false)} aria-label="Close navigation menu" aria-expanded="true"
                className="pointer-events-auto p-3 text-gray-800 bg-white/70 backdrop-blur-md rounded-full shadow-md hover:text-dredd-green focus-visible:ring-2 focus-visible:ring-dredd-green transition-colors">
                <MdClose size={36} />
              </motion.button>
            ) : (
              <motion.button key="open" variants={toggleV} initial="hidden" animate="visible" whileHover="hover" exit="exit"
                onClick={() => setOpen(true)} aria-label="Open navigation menu" aria-expanded="false"
                className="pointer-events-auto p-3 text-gray-800 bg-white/70 backdrop-blur-md rounded-full shadow-md hover:text-dredd-green focus-visible:ring-2 focus-visible:ring-dredd-green transition-colors">
                <MdMenu size={36} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="nav-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[95] noise-bg flex flex-col items-center justify-center px-4"
            role="dialog" aria-modal="true" aria-label="Navigation menu"
          >
            {/* Social — desktop */}
            <motion.div
              className="absolute top-6 right-6 hidden sm:flex items-center gap-4 text-gray-800"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
            >
              {socialLinks.map((l) => {
                const IconComponent = l.Icon;
                return (
                  <a key={l.id} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.label}
                    className="hover:text-dredd-green transition-colors duration-200">
                    <IconComponent size={34} />
                  </a>
                );
              })}
            </motion.div>

            {/* Brand */}
            <motion.div
              className="text-center mb-8 hidden sm:block select-none"
              initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 }}
            >
              <p className="font-squids text-gray-800 text-4xl sm:text-6xl tracking-tight">Folayan Olamide</p>
              <p className="font-anta text-gray-600 text-xl sm:text-2xl mt-1 tracking-wider">Mayokun</p>
            </motion.div>

            {/* Nav cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl">
              {navItems.map((item) => {
                const isActive = item.view === activeView;
                const IconComponent = item.Icon;
                return (
                  <motion.button
                    key={item.id}
                    variants={cardV}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    exit="exit"
                    onClick={() => handleNav(item.view)}
                    className={`w-full text-left rounded-xl border-2 p-5 transition-all duration-200 ${
                      isActive ? 'border-dredd-green bg-gray-300/80' : 'border-gray-800 bg-gray-300/60'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <div className="flex justify-between items-start text-gray-800 mb-3">
                      <IconComponent size={28} />
                      <MdAir size={22} className="opacity-30" />
                    </div>
                    <span className="font-misa text-gray-800 text-5xl sm:text-6xl block">{item.text}</span>
                    {isActive && <span className="mt-1 text-dredd-green font-anta text-xs block">● Active</span>}
                  </motion.button>
                );
              })}
            </div>

            {/* Social — mobile */}
            <div className="flex sm:hidden items-center gap-5 mt-8 text-gray-800">
              {socialLinks.map((l) => {
                const IconComponent = l.Icon;
                return (
                  <a key={l.id} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.label}
                    className="hover:text-dredd-green transition-colors duration-200">
                    <IconComponent size={34} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
