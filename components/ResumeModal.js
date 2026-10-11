import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdClose, MdDownload, MdOpenInNew } from 'react-icons/md';

const PDF_PATH = '/Folayan Olamide Mayokun-1.pdf';

export default function ResumeModal({ isOpen, onClose }) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="resume-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[200] flex flex-col bg-gray-950/92 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Resume Viewer"
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          {/* Top action bar */}
          <div className="flex items-center justify-between px-4 sm:px-8 py-3 border-b border-white/10 bg-gray-900/80 backdrop-blur-lg shrink-0">
            <div className="flex flex-col">
              <span className="font-squids text-white text-lg sm:text-2xl tracking-tight">
                Folayan Olamide Mayokun
              </span>
              <span className="font-anta text-gray-400 text-xs sm:text-sm tracking-wider">
                Full Stack Developer — Resume / CV
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Open in new tab */}
              <a
                href={PDF_PATH}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open resume in new tab"
                className="flex items-center gap-1.5 font-anta text-xs sm:text-sm text-gray-300 hover:text-white border border-white/20 hover:border-white/50 px-3 py-2 rounded-full transition-all duration-150"
              >
                <MdOpenInNew size={15} />
                <span className="hidden sm:inline">Open in Tab</span>
              </a>

              {/* Download */}
              <a
                href={PDF_PATH}
                download="Folayan_Olamide_Mayokun_Resume.pdf"
                aria-label="Download resume PDF"
                className="flex items-center gap-1.5 font-anta text-xs sm:text-sm bg-dredd-green text-white hover:bg-green-600 px-3 sm:px-4 py-2 rounded-full transition-all duration-150 shadow-lg"
              >
                <MdDownload size={15} />
                <span>Download</span>
              </a>

              {/* Close */}
              <button
                onClick={onClose}
                aria-label="Close resume viewer"
                className="flex items-center justify-center w-9 h-9 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-150"
              >
                <MdClose size={20} />
              </button>
            </div>
          </div>

          {/* PDF iframe viewer */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 280, damping: 26 }}
            className="flex-1 w-full overflow-hidden"
          >
            <iframe
              src={`${PDF_PATH}#toolbar=1&navpanes=0`}
              title="Folayan Olamide Mayokun Resume"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </motion.div>

          {/* Mobile fallback bar (for browsers that don't embed PDFs well) */}
          <div className="sm:hidden flex items-center justify-center gap-3 py-3 border-t border-white/10 bg-gray-900/80 shrink-0">
            <a
              href={PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="font-anta text-sm text-dredd-green underline"
            >
              Tap to view full PDF
            </a>
            <span className="text-gray-600">·</span>
            <a
              href={PDF_PATH}
              download="Folayan_Olamide_Mayokun_Resume.pdf"
              className="font-anta text-sm text-white underline"
            >
              Download
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
