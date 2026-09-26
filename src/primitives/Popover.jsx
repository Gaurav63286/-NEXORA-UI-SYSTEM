import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { springConfig } from '../animations/spring';

export default function Popover({ trigger, children, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative inline-block ${className}`}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={springConfig}
              className="absolute z-50 w-64 p-4 bg-surface border border-border rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
