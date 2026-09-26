import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { springConfig } from '../animations/spring';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function EditorialModal({ open, onClose, children, className = '' }) {
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
          className="absolute inset-0 bg-background/90 backdrop-blur-md"
          onClick={onClose}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          exit={{ opacity: 0, scale: 0.95, rotateX: 10 }}
          transition={prefersReducedMotion ? { duration: 0.1 } : springConfig}
          className="relative bg-surface border border-border max-w-2xl w-full p-8 md:p-12 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-text-secondary hover:text-accent transition-colors"
          >
            <X size={24} />
          </button>
          <div className="font-serif text-3xl md:text-4xl mb-6">{children}</div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
