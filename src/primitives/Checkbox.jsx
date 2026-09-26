import { forwardRef } from 'react';

const Checkbox = forwardRef(({ className = '', checked, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type="checkbox"
      checked={checked}
      className={`w-4 h-4 bg-surface border border-border rounded accent-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background cursor-pointer ${className}`}
      {...props}
    />
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
