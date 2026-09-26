import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { springConfig } from '../animations/spring';

export default function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ ...springConfig, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
