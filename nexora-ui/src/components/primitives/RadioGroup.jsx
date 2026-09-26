import React, { useState } from 'react';
import { cn } from '../../utils';
import { motion } from 'framer-motion';

const RadioGroup = ({ className, options, defaultValue, onValueChange, ...props }) => {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (v) => {
    setValue(v);
    if (onValueChange) onValueChange(v);
  };
  return (
    <div className={cn("flex flex-col gap-3", className)} {...props}>
      {options.map((opt) => (
        <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
          <div className="relative flex h-4 w-4 items-center justify-center rounded-full border border-border group-hover:border-accent">
            {value === opt.value && <motion.div layoutId="radio" className="h-2 w-2 rounded-full bg-accent" />}
          </div>
          <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">{opt.label}</span>
        </label>
      ))}
    </div>
  );
};
export { RadioGroup };