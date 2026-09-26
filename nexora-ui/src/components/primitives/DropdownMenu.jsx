import React, { useState } from 'react';
import { cn } from '../../utils';
import { motion, AnimatePresence } from 'framer-motion';

const DropdownMenu = ({ trigger, children, className }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative inline-block", className)}>
      <div onClick={() => setOpen(!open)}>{trigger}</div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="absolute top-full left-0 mt-2 min-w-[200px] border border-border bg-base-900 z-50 flex flex-col p-1">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export { DropdownMenu };