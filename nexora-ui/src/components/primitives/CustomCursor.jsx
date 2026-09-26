import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const update = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', update);
    return () => window.removeEventListener('mousemove', update);
  }, []);
  return (
    <motion.div animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }} transition={{ type: "tween", ease: "backOut", duration: 0.15 }} className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent pointer-events-none z-[999] hidden md:block" />
  );
};
export { CustomCursor };