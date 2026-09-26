import { motion } from 'framer-motion';
import { springConfig } from '../animations/spring';

export default function Card({ children, className = '', hover = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={springConfig}
      whileHover={hover ? { y: -4, borderColor: '#BFFF00' } : {}}
      className={`bg-surface border border-border rounded-lg p-6 ${hover ? 'transition-colors cursor-pointer' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}
