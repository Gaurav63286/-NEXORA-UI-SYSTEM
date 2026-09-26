import { motion } from 'framer-motion';

export default function Skeleton({ className = '', variant = 'default' }) {
  const variants = {
    default: 'h-4 w-full',
    circle: 'h-12 w-12 rounded-full',
    text: 'h-4 w-3/4',
    avatar: 'h-10 w-10 rounded-full',
  };

  return (
    <motion.div
      className={`bg-surface border border-border rounded ${variants[variant]} ${className}`}
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}
