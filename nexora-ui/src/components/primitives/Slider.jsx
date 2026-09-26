import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../utils';

const Slider = React.forwardRef(({ className, min = 0, max = 100, step = 1, defaultValue = [0], value, onValueChange, ...props }, ref) => {
  const [internalValue, setInternalValue] = useState(value || defaultValue);
  const trackRef = useRef(null);
  
  const currentVal = value !== undefined ? value[0] : internalValue[0];
  const percentage = ((currentVal - min) / (max - min)) * 100;

  const handlePointerMove = (e) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    let newPercentage = ((e.clientX - rect.left) / rect.width) * 100;
    newPercentage = Math.max(0, Math.min(100, newPercentage));
    
    let newValue = (newPercentage / 100) * (max - min) + min;
    newValue = Math.round(newValue / step) * step;
    
    const nextVal = [newValue];
    if (value === undefined) {
      setInternalValue(nextVal);
    }
    if (onValueChange) {
      onValueChange(nextVal);
    }
  };

  const handlePointerDown = (e) => {
    handlePointerMove(e);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
  };

  const handlePointerUp = () => {
    window.removeEventListener('pointermove', handlePointerMove);
    window.removeEventListener('pointerup', handlePointerUp);
  };

  useEffect(() => {
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("relative flex w-full touch-none select-none items-center h-5", className)}
      {...props}
    >
      <div 
        ref={trackRef}
        onPointerDown={handlePointerDown}
        className="relative h-1.5 w-full grow overflow-hidden bg-base-800 cursor-pointer"
      >
        <div 
          className="absolute h-full bg-accent"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div 
        className="absolute h-4 w-4 border border-border bg-base-900 shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 pointer-events-none"
        style={{ left: `calc(${percentage}% - 8px)` }}
      />
    </div>
  );
});

Slider.displayName = "Slider";

export { Slider };
