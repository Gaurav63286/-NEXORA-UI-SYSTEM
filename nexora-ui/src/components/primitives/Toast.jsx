import React from 'react';
import { cn } from '../../utils';
import { motion } from 'framer-motion';

const Toast = ({ className, title, description, visible = true, ...props }) => (
  <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50, scale: visible ? 1 : 0.9 }} className={cn("fixed bottom-4 right-4 z-50 w-full max-w-sm bg-base-900 border border-border shadow-2xl p-4", className)} {...props}>
    <div className="font-mono text-xs uppercase tracking-widest text-accent mb-1">{title}</div>
    <div className="text-sm text-text-secondary font-light">{description}</div>
  </motion.div>
);
export { Toast };