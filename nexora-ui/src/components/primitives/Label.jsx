import React from 'react';
import { cn } from '../../utils';

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <label ref={ref} className={cn("font-mono text-xs uppercase tracking-widest text-text-secondary", className)} {...props} />
));
Label.displayName = "Label";
export { Label };