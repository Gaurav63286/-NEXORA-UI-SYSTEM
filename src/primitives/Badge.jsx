import { motion } from 'framer-motion';
import { springConfig } from '../animations/spring';

export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-surface border border-border text-text-primary',
    accent: 'bg-accent/10 border border-accent text-accent',
    success: 'bg-green-500/10 border border-green-500 text-green-400',
    warning: 'bg-yellow-500/10 border border-yellow-500 text-yellow-400',
    error: 'bg-red-500/10 border border-red-500 text-red-400',
  };

  return (
    <motion.span
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={springConfig}
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </motion.span>
  );
}
