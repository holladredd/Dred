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
    <>
      {/* Top Navbar Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300">
        <div className="w-full backdrop-blur-xl bg-white/65 border-b border-gray-400/20 shadow-sm">
          <div className="w-full px-4 sm:px-8 lg:px-12 py-3 flex items-center justify-between gap-4">
            {/* Left: Identity & Avatar */}
            <button
              onClick={() => handleNav(null)}
              className="flex items-center gap-3.5 group text-left focus-visible:ring-2 focus-visible:ring-dredd-green rounded-xl p-1 -m-1 transition-transform active:scale-95"
              aria-label="Folayan Olamide Mayokun - Home"
            >
              <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden border-2 border-gray-800/60 shadow-md group-hover:border-dredd-green transition-colors">
                <Image
                  src="/img/dredd.png"
                  alt="Folayan Olamide Mayokun"
                  width={52}
                  height={52}
                  className="w-full h-full object-cover"
                  priority
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-dredd-green rounded-full border-2 border-white ring-1 ring-black/10" title="Available for projects" />
              </div>
              <div className="flex flex-col">
                <span className="font-squids text-gray-900 text-sm sm:text-base tracking-tight leading-tight group-hover:text-dredd-green transition-colors">
                  Folayan Olamide Mayokun
                </span>
                <span className="font-anta text-gray-500 text-xs sm:text-xs tracking-wider">
                  Full Stack Developer • Web & Mobile
                </span>
              </div>
            </button>

            {/* Center: Desktop Navigation Bar */}
            <nav className="hidden md:flex items-center gap-1.5 bg-gray-200/70 border border-gray-400/30 rounded-full px-3 py-1.5 shadow-inner" aria-label="Main Navigation">
              {navItems.map((item) => {
                const isActive = activeView === item.view || (activeView === null && item.view === null);
                const IconComponent = item.Icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.view)}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-anta transition-all duration-200 ${
                      isActive
                        ? 'bg-gray-900 text-white shadow-sm font-semibold'
                        : 'text-gray-700 hover:text-gray-950 hover:bg-white/60'
                    }`}
                  >
                    <IconComponent size={14} className={isActive ? 'text-dredd-green' : 'text-gray-500'} />
                    <span>{item.text}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right: Social & Menu Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden lg:flex items-center gap-2.5 mr-2">
                {socialLinks.map((l) => {
                  const IconComponent = l.Icon;
                  return (
                    <a
                      key={l.id}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={l.label}
                      className="p-2 text-gray-600 hover:text-dredd-green hover:bg-gray-200/50 rounded-full transition-all duration-150"
                    >
                      <IconComponent size={18} />
                    </a>
                  );
                })}
              </div>

              {/* Menu Toggle Button */}
              <button
                onClick={() => setOpen(!open)}
                aria-label={open ? 'Close navigation overlay' : 'Open navigation overlay'}
                aria-expanded={open}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 text-gray-800 bg-gray-900/5 hover:bg-gray-900/10 border border-gray-400/30 rounded-full shadow-sm text-xs font-anta font-medium transition-all active:scale-95 hover:border-gray-800/50"
              >
                <span className="hidden sm:inline text-xs tracking-wider">{open ? 'CLOSE' : 'MENU'}</span>
                {open ? <MdClose size={20} className="text-dredd-green" /> : <MdMenu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="nav-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[95] hero-canvas-bg noise-bg flex flex-col items-center justify-center px-4 sm:px-8 py-20"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Top Bar inside Overlay */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <span className="font-anta text-xs text-gray-500 uppercase tracking-widest">
                Navigation Directory
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map((l) => {
                  const IconComponent = l.Icon;
                  return (
                    <a
                      key={l.id}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={l.label}
                      className="text-gray-600 hover:text-dredd-green transition-colors"
                    >
                      <IconComponent size={22} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Brand Header */}
            <motion.div
              className="text-center mb-6 select-none"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 }}
            >
              <h2 className="font-squids text-gray-900 text-3xl sm:text-5xl tracking-tight">Folayan Olamide</h2>
              <p className="font-anta text-dredd-green text-sm sm:text-lg mt-1 tracking-wider uppercase">
                Full Stack Developer | Web & Mobile Applications
              </p>
            </motion.div>

            {/* Nav Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 w-full max-w-4xl">
              {navItems.map((item) => {
                const isActive = item.view === activeView || (activeView === null && item.view === null);
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
                    className={`w-full text-left rounded-2xl border-2 p-5 transition-all duration-200 backdrop-blur-md shadow-md hover:shadow-xl ${
                      isActive
                        ? 'border-dredd-green bg-white/90 ring-2 ring-dredd-green/30'
                        : 'border-gray-800/30 bg-white/60 hover:border-gray-800 hover:bg-white/80'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <div className="flex justify-between items-start text-gray-800 mb-2">
                      <div className="p-2.5 rounded-xl bg-gray-200/60 border border-gray-300">
                        <IconComponent size={24} className={isActive ? 'text-dredd-green' : 'text-gray-700'} />
                      </div>
                      <MdAir size={18} className="opacity-30" />
                    </div>
                    <span className="font-squids text-gray-900 text-2xl sm:text-3xl block mt-2">{item.text}</span>
                    <span className="font-anta text-xs text-gray-500 mt-1 block">
                      {item.view === null && 'Return to introductory canvas'}
                      {item.view === 'about' && 'Bio, experience history & stack background'}
                      {item.view === 'projects' && 'Production web & mobile architectures'}
                      {item.view === 'skills' && 'Full technical stack & engineering toolset'}
                      {item.view === 'contact' && 'Direct channels, WhatsApp & email'}
                    </span>
                    {isActive && (
                      <span className="mt-2 text-dredd-green font-anta text-xs font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-dredd-green animate-ping" />
                        Currently Open
                      </span>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
