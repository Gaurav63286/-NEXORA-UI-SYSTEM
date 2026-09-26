import React from 'react';
import { cn } from '../../utils';
import { motion } from 'framer-motion';

const KineticText = ({ className, text, ...props }) => {
  const letters = Array.from(text);
  return (
    <div className={cn("flex overflow-hidden font-serif", className)} {...props}>
      {letters.map((letter, i) => (
        <motion.span key={i} initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.5, delay: i * 0.05, ease: [0.2, 0.65, 0.3, 0.9] }} viewport={{ once: true }}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
  );
};
export { KineticText };