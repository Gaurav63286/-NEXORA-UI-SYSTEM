import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { springConfig } from '../animations/spring';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Modal({ open, onClose, children, className = '' }) {
  const prefersReducedMotion = useReducedMotion();

  if (!open) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={prefersReducedMotion ? { duration: 0.1 } : springConfig}
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={prefersReducedMotion ? { duration: 0.1 } : springConfig}
          className={`relative bg-surface border border-border rounded-lg shadow-xl max-w-lg w-full ${className}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors"
          >
            <X size={20} />
          </button>
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
