import { motion, AnimatePresence } from 'framer-motion';
import { springConfig } from '../animations/spring';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ variant = 'info', title, message, onClose, className = '' }) {
  const icons = {
    info: Info,
    success: CheckCircle,
    error: AlertCircle,
  };

  const colors = {
    info: 'border-blue-500',
    success: 'border-green-500',
    error: 'border-red-500',
  };

  const Icon = icons[variant];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={springConfig}
        className={`fixed bottom-4 right-4 bg-surface border-l-4 ${colors[variant]} p-4 rounded shadow-lg max-w-sm ${className}`}
      >
        <div className="flex items-start gap-3">
          <Icon size={20} className={`flex-shrink-0 mt-0.5 ${variant === 'success' ? 'text-green-400' : variant === 'error' ? 'text-red-400' : 'text-blue-400'}`} />
          <div className="flex-1">
            {title && <h4 className="font-semibold text-sm mb-1">{title}</h4>}
            <p className="text-sm text-text-secondary">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
