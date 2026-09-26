import { motion } from 'framer-motion';
import { springConfig } from '../animations/spring';

export default function Avatar({ src, alt, initials, size = 'md', className = '' }) {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={springConfig}
      className={`relative rounded-full bg-surface border border-border flex items-center justify-center overflow-hidden ${sizes[size]} ${className}`}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span className="font-medium text-text-primary">{initials}</span>
      )}
    </motion.div>
  );
}
