import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { springConfig } from '../animations/spring';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Drawer({ open, onClose, children, position = 'right', className = '' }) {
  const prefersReducedMotion = useReducedMotion();

  if (!open) return null;

  const positions = {
    right: 'right-0',
    left: 'left-0',
    top: 'top-0',
    bottom: 'bottom-0',
  };

  const animations = {
    right: { x: '100%' },
    left: { x: '-100%' },
    top: { y: '-100%' },
    bottom: { y: '100%' },
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={prefersReducedMotion ? { duration: 0.1 } : springConfig}
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div
          initial={animations[position]}
          animate={{ x: 0, y: 0 }}
          exit={animations[position]}
          transition={prefersReducedMotion ? { duration: 0.1 } : springConfig}
          className={`absolute ${positions[position]} h-full w-full max-w-md bg-surface border-l border-border shadow-xl ${className}`}
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
