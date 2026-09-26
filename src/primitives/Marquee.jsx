import { motion } from 'framer-motion';

export default function Marquee({ children, speed = 20, direction = 'left', className = '' }) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        animate={{
          x: direction === 'left' ? [0, -1000] : [0, 1000],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="inline-block"
      >
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}
