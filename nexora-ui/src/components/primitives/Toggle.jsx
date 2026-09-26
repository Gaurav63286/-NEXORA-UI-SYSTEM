import React, { useState } from 'react';
import { cn } from '../../utils';

const Toggle = React.forwardRef(({ className, defaultPressed = false, children, ...props }, ref) => {
  const [pressed, setPressed] = useState(defaultPressed);
  return (
    <button ref={ref} onClick={() => setPressed(!pressed)} aria-pressed={pressed} className={cn("inline-flex items-center justify-center h-10 px-4 text-sm transition-colors border", pressed ? "bg-base-800 text-accent border-accent" : "bg-transparent text-text-secondary border-transparent hover:bg-base-800 hover:text-text-primary", className)} {...props}>
      {children}
    </button>
  );
});
Toggle.displayName = "Toggle";
export { Toggle };