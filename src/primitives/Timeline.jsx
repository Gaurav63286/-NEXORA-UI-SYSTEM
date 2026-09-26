import { motion } from 'framer-motion';
import { springConfig } from '../animations/spring';

export default function Timeline({ items, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...springConfig, delay: index * 0.1 }}
          className="relative pl-12 pb-8"
        >
          <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-accent border-2 border-background" />
          <div className="text-sm text-text-secondary mb-1">{item.date}</div>
          <div className="font-medium text-text-primary">{item.title}</div>
          {item.description && (
            <div className="mt-1 text-sm text-text-secondary">{item.description}</div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
