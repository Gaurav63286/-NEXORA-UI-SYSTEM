import React from 'react';
import { cn } from '../../utils';
import { motion } from 'framer-motion';

const Alert = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-base-900 border-border text-text-primary",
    accent: "bg-accent/10 border-accent text-accent",
    destructive: "bg-red-900/10 border-red-900 text-red-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      ref={ref}
      role="alert"
      className={cn(
        "relative w-full border p-4",
        variants[variant],
        className
      )}
      {...props}
    />
  );
});
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-mono text-sm uppercase tracking-widest leading-none", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-text-secondary font-light [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
