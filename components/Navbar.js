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

  // The active view is currently displayed view from stack
  const activeView = stack.length > 0 ? stack[stack.length - 1].view : null;

  return (
    <>
      {/* Top Navbar Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300">
        <div className="w-full backdrop-blur-xl bg-white/70 border-b border-gray-400/20 shadow-sm">
          <div className="w-full px-4 sm:px-6 md:px-12 py-3 flex items-center justify-between gap-3">
            {/* Left: Identity & Avatar */}
            <button
              onClick={() => handleNav(null)}
              className="flex items-center gap-3 group text-left focus-visible:ring-2 focus-visible:ring-dredd-green rounded-xl p-1 -m-1 transition-transform active:scale-95 shrink min-w-0"
              aria-label="Folayan Olamide Mayokun - Home"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-gray-800/60 shadow-md group-hover:border-dredd-green transition-colors shrink-0">
                <Image
                  src="/img/dredd.png"
                  alt="Folayan Olamide Mayokun"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                  priority
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-dredd-green rounded-full border-2 border-white ring-1 ring-black/10" title="Available for projects" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-squids text-gray-900 text-xs sm:text-base tracking-tight leading-tight group-hover:text-dredd-green transition-colors truncate">
                  Folayan Olamide
                </span>
                <span className="font-anta text-gray-500 text-[10px] sm:text-xs tracking-wider truncate">
                  Full Stack Developer
                </span>
              </div>
            </button>

            {/* Right: Social & Menu Toggle */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <div className="hidden sm:flex items-center gap-1 sm:gap-2 mr-1">
                {socialLinks.map((l) => {
                  const IconComponent = l.Icon;
                  return (
                    <a
                      key={l.id}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={l.label}
                      className="p-2 text-gray-700 hover:text-dredd-green hover:bg-gray-200/50 rounded-full transition-all duration-150"
                    >
                      <IconComponent size={19} />
                    </a>
                  );
                })}
              </div>

              {/* Menu Toggle Button */}
              <button
                onClick={() => setOpen(!open)}
                aria-label={open ? 'Close navigation overlay' : 'Open navigation overlay'}
                aria-expanded={open}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-gray-800 bg-gray-900/5 hover:bg-gray-900/10 border border-gray-400/40 rounded-full shadow-sm text-xs font-anta font-medium transition-all active:scale-95 hover:border-gray-800/50"
              >
                <span className="text-xs tracking-wider font-semibold">{open ? 'CLOSE' : 'MENU'}</span>
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[95] hero-canvas-bg noise-bg flex flex-col justify-between px-4 sm:px-8 py-16 sm:py-20 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Top Bar inside Overlay */}
            <div className="w-full max-w-5xl mx-auto flex items-center justify-between pb-4 border-b border-gray-300/40">
              <span className="font-anta text-xs text-gray-600 uppercase tracking-widest font-semibold">
                Menu Directory
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
              className="text-center my-6 select-none"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 }}
            >
              <h2 className="font-squids text-gray-900 text-3xl sm:text-5xl md:text-6xl tracking-tight">
                Folayan Olamide Mayokun
              </h2>
              <p className="font-anta text-dredd-green text-sm sm:text-lg mt-1 tracking-wider uppercase font-medium">
                Full Stack Developer | Web & Mobile Applications
              </p>
            </motion.div>

            {/* Nav Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl mx-auto my-auto">
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
                    className={`w-full text-left rounded-2xl border-2 p-5 sm:p-6 transition-all duration-200 backdrop-blur-md shadow-md hover:shadow-xl ${
                      isActive
                        ? 'border-dredd-green bg-white/95 ring-2 ring-dredd-green/30'
                        : 'border-gray-800/25 bg-white/60 hover:border-gray-800 hover:bg-white/85'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <div className="flex justify-between items-start text-gray-800 mb-2">
                      <div className={`p-2.5 rounded-xl border ${isActive ? 'bg-green-50 border-dredd-green/30' : 'bg-gray-200/60 border-gray-300'}`}>
                        <IconComponent size={24} className={isActive ? 'text-dredd-green' : 'text-gray-700'} />
                      </div>
                      <MdAir size={18} className="opacity-30" />
                    </div>
                    <span className="font-squids text-gray-900 text-2xl sm:text-3xl block mt-2">{item.text}</span>
                    <span className="font-anta text-xs text-gray-500 mt-1 block">
                      {item.view === null && 'Homepage & introduction canvas'}
                      {item.view === 'about' && 'Full stack profile & experience'}
                      {item.view === 'projects' && 'Production web & mobile builds'}
                      {item.view === 'skills' && 'Tooling, APIs, and frameworks'}
                      {item.view === 'contact' && 'Direct channels, WhatsApp & email'}
                    </span>
                    {isActive ? (
                      <span className="mt-3 text-dredd-green font-anta text-xs font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-dredd-green animate-ping" />
                        Currently Open
                      </span>
                    ) : (
                      <span className="mt-3 text-gray-400 font-anta text-xs group-hover:text-gray-700">
                        Click to view →
                      </span>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Bottom social strip for mobile */}
            <div className="flex sm:hidden items-center justify-center gap-5 pt-6 border-t border-gray-300/40 w-full">
              {socialLinks.map((l) => {
                const IconComponent = l.Icon;
                return (
                  <a
                    key={l.id}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={l.label}
                    className="text-gray-700 hover:text-dredd-green"
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
