import React from 'react';
import { cn } from '../../utils';

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-accent text-black hover:bg-accent/80 border-transparent",
    secondary: "bg-base-800 text-text-primary border-border hover:bg-base-700",
    outline: "text-text-primary border-border",
    destructive: "bg-red-900/50 text-red-400 border-red-900",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  );
});

Badge.displayName = "Badge";

export { Badge };
