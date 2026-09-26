import { forwardRef } from 'react';

const Radio = forwardRef(({ className = '', ...props }, ref) => {
  return (
    <input
      ref={ref}
      type="radio"
      className={`w-4 h-4 bg-surface border border-border accent-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background cursor-pointer ${className}`}
      {...props}
    />
  );
});

Radio.displayName = 'Radio';

export default Radio;
