import { forwardRef } from 'react';

const DatePicker = forwardRef(({ className = '', ...props }, ref) => {
  return (
    <input
      ref={ref}
      type="date"
      className={`w-full px-4 py-2 bg-surface border border-border rounded text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors ${className}`}
      {...props}
    />
  );
});

DatePicker.displayName = 'DatePicker';

export default DatePicker;
