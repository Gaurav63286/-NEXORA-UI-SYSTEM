import React, { useState } from 'react';
import { cn } from '../../utils';
import { motion, AnimatePresence } from 'framer-motion';

const Tabs = React.forwardRef(({ className, defaultValue, onValueChange, children, ...props }, ref) => {
  const [value, setValue] = useState(defaultValue);
  
  const handleValueChange = (newValue) => {
    setValue(newValue);
    if (onValueChange) onValueChange(newValue);
  };

  return (
    <div ref={ref} className={cn("w-full", className)} {...props}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { value, onValueChange: handleValueChange });
        }
        return child;
      })}
    </div>
  );
});
Tabs.displayName = "Tabs";

const TabsList = React.forwardRef(({ className, value, onValueChange, children, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center gap-2 border-b border-border", className)} {...props}>
    {React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { activeValue: value, onValueChange });
      }
      return child;
    })}
  </div>
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef(({ className, value, activeValue, onValueChange, children, ...props }, ref) => {
  const isActive = value === activeValue;
  
  return (
    <button
      ref={ref}
      onClick={() => onValueChange(value)}
      className={cn(
        "relative px-4 py-3 font-mono text-xs uppercase tracking-widest transition-colors",
        isActive ? "text-accent" : "text-text-secondary hover:text-text-primary",
        className
      )}
      {...props}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
          initial={false}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
        />
      )}
    </button>
  );
});
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef(({ className, value, activeValue, children, ...props }, ref) => {
  if (value !== activeValue) return null;
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className={cn("py-6", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
});
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };
