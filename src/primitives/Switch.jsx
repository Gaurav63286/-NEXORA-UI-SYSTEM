import { forwardRef } from 'react';

const Switch = forwardRef(({ className = '', checked, ...props }, ref) => {
  return (
    <button
      ref={ref}
      role="switch"
      aria-checked={checked}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background ${
        checked ? 'bg-accent' : 'bg-surface border border-border'
      } ${className}`}
      {...props}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-background transition-transform ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );
});

Switch.displayName = 'Switch';

export default Switch;
