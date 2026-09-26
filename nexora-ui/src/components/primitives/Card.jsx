import React from 'react';
import { cn } from '../../utils';
import { motion } from 'framer-motion';

const Card = React.forwardRef(({ className, children, ...props }, ref) => (
  <motion.div
    ref={ref}
    className={cn("bg-base-900 border border-border overflow-hidden transition-colors hover:border-text-secondary group", className)}
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 400, damping: 28 }}
    {...props}
  >
    {children}
  </motion.div>
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6 border-b border-border", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn("font-serif text-2xl leading-none tracking-tight text-text-primary", className)} {...props} />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0 text-text-secondary text-sm", className)} {...props} />
));
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardTitle, CardContent };
