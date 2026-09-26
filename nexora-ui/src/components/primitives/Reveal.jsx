import React from 'react';
import { cn } from '../../utils';
import { motion } from 'framer-motion';

const Reveal = ({ className, children, delay = 0, ...props }) => (
  <div className={cn("relative overflow-hidden inline-block", className)} {...props}>
    <motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }} initial="hidden" whileInView="visible" transition={{ duration: 0.5, delay }} viewport={{ once: true }}>
      {children}
    </motion.div>
    <motion.div variants={{ hidden: { left: 0 }, visible: { left: "100%" } }} initial="hidden" whileInView="visible" transition={{ duration: 0.5, ease: "easeIn", delay }} viewport={{ once: true }} className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-accent" />
  </div>
);
export { Reveal };