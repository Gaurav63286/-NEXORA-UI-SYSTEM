import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../utils';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Drawer = ({ isOpen, onClose, children, position = "right", className }) => {
  const xVariants = { right: { x: "100%" }, left: { x: "-100%" } };
  
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => document.body.style.overflow = 'unset';
  }, [isOpen]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-40 bg-base-900/80 backdrop-blur-sm" />
          <motion.div initial={xVariants[position]} animate={{ x: 0 }} exit={xVariants[position]} transition={{ type: "spring", stiffness: 400, damping: 28 }} className={cn("fixed top-0 bottom-0 z-50 w-full max-w-sm bg-base-900 border-x border-border shadow-2xl p-6 overflow-y-auto", position === 'right' ? 'right-0' : 'left-0', className)}>
            <button onClick={onClose} className="absolute top-4 right-4 text-text-secondary hover:text-accent"><X size={20} /></button>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};
export { Drawer };