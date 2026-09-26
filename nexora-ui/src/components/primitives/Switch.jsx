import React, { useState } from 'react';
import { cn } from '../../utils';
import { motion } from 'framer-motion';

const Switch = React.forwardRef(({ className, checked, onCheckedChange, disabled = false, ...props }, ref) => {
  const [internalChecked, setInternalChecked] = useState(false);
  
  const isChecked = checked !== undefined ? checked : internalChecked;
  
  const handleChange = () => {
    if (disabled) return;
    const newValue = !isChecked;
    if (checked === undefined) {
      setInternalChecked(newValue);
    }
    if (onCheckedChange) {
      onCheckedChange(newValue);
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      disabled={disabled}
      onClick={handleChange}
      ref={ref}
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base-900 disabled:cursor-not-allowed disabled:opacity-50",
        isChecked ? "bg-accent" : "bg-base-700",
        className
      )}
      {...props}
    >
      <motion.span
        layout
        initial={false}
        animate={{
          x: isChecked ? 20 : 0
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={cn(
          "pointer-events-none block h-5 w-5 bg-base-900 shadow-lg ring-0"
        )}
      />
    </button>
  );
});

Switch.displayName = "Switch";

export { Switch };
