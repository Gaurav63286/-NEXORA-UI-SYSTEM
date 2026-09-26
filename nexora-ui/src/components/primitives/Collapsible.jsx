import React, { useState } from 'react';
import { cn } from '../../utils';
import { motion, AnimatePresence } from 'framer-motion';

const Collapsible = ({ className, triggerText, children, ...props }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("border border-border", className)} {...props}>
      <button onClick={() => setOpen(!open)} className="flex w-full justify-between items-center px-4 py-3 bg-base-800 hover:bg-base-700 transition-colors text-sm font-mono uppercase tracking-widest">
        {triggerText} <span className="text-accent">{open ? '-' : '+'}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="p-4 text-text-secondary text-sm font-light bg-base-900">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export { Collapsible };