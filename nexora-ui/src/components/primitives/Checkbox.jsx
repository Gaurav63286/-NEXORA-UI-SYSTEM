import React, { useState } from 'react';
import { cn } from '../../utils';
import { Check } from 'lucide-react';

const Checkbox = React.forwardRef(({ className, checked, onCheckedChange, ...props }, ref) => {
  const [internal, setInternal] = useState(false);
  const isChecked = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (checked === undefined) setInternal(!isChecked);
    if (onCheckedChange) onCheckedChange(!isChecked);
  };
  return (
    <button type="button" role="checkbox" aria-checked={isChecked} onClick={toggle} ref={ref} className={cn("peer h-5 w-5 shrink-0 border border-border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:opacity-50 flex items-center justify-center bg-base-900 transition-colors", isChecked && "bg-accent text-black border-accent", className)} {...props}>
      {isChecked && <Check className="h-3.5 w-3.5" />}
    </button>
  );
});
Checkbox.displayName = "Checkbox";
export { Checkbox };