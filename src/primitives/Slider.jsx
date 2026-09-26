import { forwardRef } from 'react';

const Slider = forwardRef(({ className = '', min = 0, max = 100, value = 0, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type="range"
      min={min}
      max={max}
      value={value}
      className={`w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer accent-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background ${className}`}
      {...props}
    />
  );
});

Slider.displayName = 'Slider';

export default Slider;
