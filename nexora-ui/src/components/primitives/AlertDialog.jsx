import React from 'react';
import { cn } from '../../utils';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

const AlertDialog = ({ isOpen, title, description, onCancel, onConfirm }) => {
  if (typeof document === 'undefined') return null;
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-base-900/80 backdrop-blur-sm" />
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative bg-base-900 border-2 border-red-900 p-6 w-full max-w-md shadow-2xl">
            <h2 className="font-serif text-2xl text-red-400 mb-2">{title}</h2>
            <p className="text-text-secondary text-sm mb-8 font-light">{description}</p>
            <div className="flex justify-end gap-4">
              <button onClick={onCancel} className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary uppercase font-mono tracking-widest">Cancel</button>
              <button onClick={onConfirm} className="px-4 py-2 text-sm bg-red-900/50 text-red-400 border border-red-900 hover:bg-red-900/80 uppercase font-mono tracking-widest">Confirm</button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};
export { AlertDialog };