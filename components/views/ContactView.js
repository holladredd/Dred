import { motion } from 'framer-motion';
import { MdEmail, MdPhone, MdLocationOn, MdFacebook } from 'react-icons/md';
import { RiInstagramFill, RiTwitterXLine } from 'react-icons/ri';
import { IoLogoWhatsapp, IoLogoGithub } from 'react-icons/io5';

const links = [
  {
    id: 1,
    linkTo: 'https://web.facebook.com/folayan.olamide.1',
    Icon: MdFacebook,
    name: 'Facebook',
    color: '#1877F2',
  },
  {
    id: 2,
    linkTo: 'https://www.instagram.com/dev_dredd?igsh=NXozcGk5eTFoajZo',
    Icon: RiInstagramFill,
    name: 'Instagram',
    color: '#E4405F',
  },
  {
    id: 3,
    linkTo: 'https://wa.me/+2348160630642',
    Icon: IoLogoWhatsapp,
    name: 'WhatsApp',
    color: '#25D366',
  },
  {
    id: 4,
    linkTo: 'https://github.com/holladredd',
    Icon: IoLogoGithub,
    name: 'GitHub',
    color: '#181717',
  },
  {
    id: 5,
    linkTo: 'https://x.com/Holla_Dredd?s=09',
    Icon: RiTwitterXLine,
    name: 'Twitter/X',
    color: '#1DA1F2',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
    },
  },
};

export default function ContactView() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-6">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          {/* Header Title */}
          <motion.div variants={itemVariants} className="mb-10">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-squids text-gray-800 mb-3 select-none">
              Let&apos;s Connect
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-gray-400 to-gray-800 mb-6" />
            <p className="font-anta text-gray-700 text-lg sm:text-2xl max-w-3xl leading-relaxed">
              I&apos;m always open to discussing new engineering projects, full stack web & mobile applications, creative ideas, or opportunities to be part of your vision.
            </p>
          </motion.div>

          {/* Contact Details List - NO CARDS */}
          <div className="space-y-8 my-10 max-w-3xl">
            {/* Email */}
            <motion.div variants={itemVariants} className="flex items-start">
              <div className="bg-gray-100 p-4 rounded-full mr-5 shrink-0 shadow-sm">
                <MdEmail className="text-gray-800 text-2xl" />
              </div>
              <div>
                <h3 className="text-gray-500 font-anta text-sm uppercase tracking-wider mb-1">Email</h3>
                <a
                  href="mailto:folayanolamide@gmail.com"
                  className="font-anta text-gray-900 hover:text-dredd-green hover:underline text-xl sm:text-2xl md:text-3xl font-medium break-all transition-colors"
                >
                  folayanolamide@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Phone / WhatsApp */}
            <motion.div variants={itemVariants} className="flex items-start">
              <div className="bg-gray-100 p-4 rounded-full mr-5 shrink-0 shadow-sm">
                <MdPhone className="text-gray-800 text-2xl" />
              </div>
              <div>
                <h3 className="text-gray-500 font-anta text-sm uppercase tracking-wider mb-1">Phone / WhatsApp</h3>
                <a
                  href="tel:+2348160630642"
                  className="font-anta text-gray-900 hover:text-dredd-green hover:underline text-xl sm:text-2xl md:text-3xl font-medium transition-colors"
                >
                  +234 816 063 0642
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div variants={itemVariants} className="flex items-start">
              <div className="bg-gray-100 p-4 rounded-full mr-5 shrink-0 shadow-sm">
                <MdLocationOn className="text-gray-800 text-2xl" />
              </div>
              <div>
                <h3 className="text-gray-500 font-anta text-sm uppercase tracking-wider mb-1">Location</h3>
                <p className="font-anta text-gray-800 text-xl sm:text-2xl md:text-3xl">
                  Lagos, Nigeria <span className="text-gray-500 text-base">(Available for Remote Worldwide)</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="mt-14 pt-8 border-t border-gray-300/60 max-w-4xl">
            <h3 className="font-anta text-gray-700 text-base sm:text-lg mb-6 font-medium">
              Connect with me on social media & engineering networks:
            </h3>
            <div className="flex flex-wrap gap-4">
              {links.map((link) => {
                const IconComponent = link.Icon;
                return (
                  <a
                    key={link.id}
                    href={link.linkTo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="group"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: link.color,
                      }}
                      className="bg-gray-100 p-4 rounded-full shadow-sm transition-all duration-300 flex items-center justify-center text-gray-800 group-hover:text-white"
                    >
                      <IconComponent size={26} />
                    </motion.div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
