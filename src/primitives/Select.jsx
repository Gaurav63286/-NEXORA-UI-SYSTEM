import { forwardRef } from 'react';

const Select = forwardRef(({ className = '', children, ...props }, ref) => {
  return (
    <select
      ref={ref}
      className={`w-full px-4 py-2 bg-surface border border-border rounded text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors ${className}`}
      {...props}
    >
      {children}
    </select>
  );
});

Select.displayName = 'Select';

export default Select;
