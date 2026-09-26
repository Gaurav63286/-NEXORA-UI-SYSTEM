import React from 'react';
import { cn } from '../../utils';

const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn("flex min-h-[80px] w-full bg-base-900 border border-border px-3 py-2 text-sm text-text-primary focus-visible:outline-none focus-visible:border-accent disabled:opacity-50", className)} {...props} />
));
Textarea.displayName = "Textarea";
export { Textarea };