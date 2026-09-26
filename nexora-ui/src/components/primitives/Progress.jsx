import React from 'react';
import { cn } from '../../utils';
import { motion } from 'framer-motion';

const Progress = React.forwardRef(({ className, value, max = 100, ...props }, ref) => {
  const percentage = Math.min(Math.max((value || 0) / max, 0), 1) * 100;

  return (
    <div
      ref={ref}
      className={cn("relative h-2 w-full overflow-hidden bg-base-800", className)}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      {...props}
    >
      <motion.div
        className="h-full w-full flex-1 bg-accent transition-all"
        initial={{ x: "-100%" }}
        animate={{ x: `-${100 - percentage}%` }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />
    </div>
  );
});

Progress.displayName = "Progress";

export { Progress };
