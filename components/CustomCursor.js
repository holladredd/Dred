import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e) => { setPos({ x: e.clientX, y: e.clientY }); setVisible(true); };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      animate={{ x: pos.x - 14, y: pos.y - 14, opacity: visible ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.3 }}
      aria-hidden="true"
    />
  );
}
