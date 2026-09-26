import React from 'react';
import { cn } from '../../utils';

const Select = React.forwardRef(({ className, options = [], ...props }, ref) => (
  <select ref={ref} className={cn("flex h-10 w-full items-center justify-between border border-border bg-base-900 px-3 py-2 text-sm placeholder:text-text-secondary focus:outline-none focus:border-accent disabled:cursor-not-allowed disabled:opacity-50 appearance-none rounded-none", className)} {...props}>
    {options.map((opt, i) => <option key={i} value={opt.value} className="bg-base-900 text-text-primary">{opt.label}</option>)}
  </select>
));
Select.displayName = "Select";
export { Select };