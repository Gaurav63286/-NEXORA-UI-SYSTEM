import { forwardRef } from 'react';

const Input = forwardRef(({ className = '', ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`w-full px-4 py-2 bg-surface border border-border rounded text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors ${className}`}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;
