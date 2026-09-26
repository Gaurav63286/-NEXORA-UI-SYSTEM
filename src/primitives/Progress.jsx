import { motion } from 'framer-motion';
import { springConfig } from '../animations/spring';

export default function Progress({ value = 0, max = 100, className = '' }) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={`w-full h-2 bg-surface rounded-full overflow-hidden ${className}`}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={springConfig}
        className="h-full bg-accent"
      />
    </div>
  );
}
