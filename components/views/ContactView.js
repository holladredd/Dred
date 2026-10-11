import { motion } from 'framer-motion';
import { MdEmail, MdPhone, MdLocationOn, MdFacebook } from 'react-icons/md';
import { RiInstagramFill, RiTwitterXLine } from 'react-icons/ri';
import { IoLogoWhatsapp, IoLogoGithub } from 'react-icons/io';

const socialLinks = [
  { id: 1, href: 'https://web.facebook.com/folayan.olamide.1',                 Icon: MdFacebook,       name: 'Facebook',  color: '#1877F2' },
  { id: 2, href: 'https://www.instagram.com/dev_dredd?igsh=NXozcGk5eTFoajZo', Icon: RiInstagramFill,  name: 'Instagram', color: '#E4405F' },
  { id: 3, href: 'https://wa.me/+2348160630642',                               Icon: IoLogoWhatsapp,   name: 'WhatsApp',  color: '#25D366' },
  { id: 4, href: 'https://github.com/holladredd',                              Icon: IoLogoGithub,     name: 'GitHub',    color: '#181717' },
  { id: 5, href: 'https://x.com/Holla_Dredd?s=09',                             Icon: RiTwitterXLine,   name: 'Twitter/X', color: '#1DA1F2' },
];

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const item = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } } };

export default function ContactView() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-10">
      <motion.div variants={container} initial="hidden" animate="visible">
        <motion.h1 variants={item} className="font-squids text-gray-800 text-4xl md:text-6xl lg:text-7xl mb-2">
          Let&apos;s Connect
        </motion.h1>
        <motion.div variants={item} className="h-0.5 w-24 bg-gradient-to-r from-gray-400 to-gray-800 mb-6" />
        <motion.p variants={item} className="font-anta text-gray-600 text-base md:text-xl mb-10 max-w-xl">
          Feel free to reach out for collaborations, project enquiries, tech mentoring, or just a friendly chat.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Details */}
          <motion.div variants={item} className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 space-y-4">
              <h2 className="font-squids text-gray-800 text-xl mb-4">Contact Information</h2>

              <a href="mailto:folayanolamide03@gmail.com"
                className="flex items-center gap-4 text-gray-700 hover:text-dredd-green transition-colors group">
                <span className="p-3 bg-gray-100 rounded-xl group-hover:bg-green-50 text-gray-800 group-hover:text-dredd-green transition-colors">
                  <MdEmail size={22} />
                </span>
                <div>
                  <span className="block text-xs font-anta text-gray-600">Email</span>
                  <span className="font-anta text-sm md:text-base break-all">folayanolamide03@gmail.com</span>
                </div>
              </a>

              <a href="tel:+2348160630642"
                className="flex items-center gap-4 text-gray-700 hover:text-dredd-green transition-colors group">
                <span className="p-3 bg-gray-100 rounded-xl group-hover:bg-green-50 text-gray-800 group-hover:text-dredd-green transition-colors">
                  <MdPhone size={22} />
                </span>
                <div>
                  <span className="block text-xs font-anta text-gray-600">Phone</span>
                  <span className="font-anta text-sm md:text-base">+234 816 063 0642</span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-700">
                <span className="p-3 bg-gray-100 rounded-xl text-gray-800">
                  <MdLocationOn size={22} />
                </span>
                <div>
                  <span className="block text-xs font-anta text-gray-600">Location</span>
                  <span className="font-anta text-sm md:text-base">Lagos, Nigeria</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links Grid */}
          <motion.div variants={item}>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <h2 className="font-squids text-gray-800 text-xl mb-4">Social Media</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {socialLinks.map((s) => {
                  const IconComp = s.Icon;
                  return (
                    <a
                      key={s.id}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 hover:border-gray-300 hover:shadow-sm transition-all group"
                    >
                      <span className="text-gray-700 group-hover:text-dredd-green transition-colors">
                        <IconComp size={24} />
                      </span>
                      <span className="font-anta text-gray-700 text-sm group-hover:text-gray-900">{s.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
