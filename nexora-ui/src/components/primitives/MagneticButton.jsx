import React, { useRef, useState } from 'react';
import { cn } from '../../utils';
import { motion } from 'framer-motion';

const MagneticButton = ({ className, children, ...props }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouse = (e) => {
    if(!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };
  const reset = () => setPosition({ x: 0, y: 0 });
  return (
    <motion.button ref={ref} onMouseMove={handleMouse} onMouseLeave={reset} animate={{ x: position.x, y: position.y }} transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }} className={cn("relative px-8 py-4 bg-accent text-black font-mono text-xs uppercase tracking-widest border border-transparent hover:border-text-primary transition-colors", className)} {...props}>
      {children}
    </motion.button>
  );
};
export { MagneticButton };