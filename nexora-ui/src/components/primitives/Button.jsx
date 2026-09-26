import React from 'react';
import { cn } from '../../utils';
import { motion } from 'framer-motion';

const Button = React.forwardRef(({
  className,
  variant = 'primary',
  size = 'md',
  asChild = false,
  children,
  ...props
}, ref) => {
  const Comp = asChild ? motion.div : motion.button;
  
  const baseStyles = "inline-flex items-center justify-center font-mono uppercase tracking-widest text-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    primary: "bg-accent text-black hover:bg-accent-hover",
    secondary: "bg-base-800 text-text-primary border border-border hover:border-accent hover:text-accent",
    ghost: "text-text-secondary hover:text-text-primary hover:bg-base-800",
  };
  
  const sizes = {
    sm: "h-8 px-3",
    md: "h-10 px-6",
    lg: "h-12 px-8 text-sm",
    icon: "h-10 w-10",
  };

  return (
    <Comp
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      ref={ref}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      {...props}
    >
      {children}
    </Comp>
  );
});

Button.displayName = "Button";

export { Button };
