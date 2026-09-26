import { AlertCircle, CheckCircle, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { springConfig } from '../animations/spring';

export default function Alert({ variant = 'info', title, children, onClose, className = '' }) {
  const icons = {
    info: Info,
    success: CheckCircle,
    warning: AlertCircle,
    error: AlertCircle,
  };

  const colors = {
    info: 'border-blue-500 text-blue-400',
    success: 'border-green-500 text-green-400',
    warning: 'border-yellow-500 text-yellow-400',
    error: 'border-red-500 text-red-400',
  };

  const Icon = icons[variant];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={springConfig}
        className={`relative p-4 bg-surface border-l-4 ${colors[variant]} ${className}`}
      >
        <div className="flex items-start gap-3">
          <Icon size={20} className="flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            {title && <h4 className="font-semibold mb-1">{title}</h4>}
            <div className="text-sm text-text-secondary">{children}</div>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
