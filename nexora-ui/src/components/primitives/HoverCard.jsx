import React from 'react';
import { cn } from '../../utils';

const HoverCard = ({ trigger, children, className }) => (
  <div className={cn("group relative inline-block", className)}>
    {trigger}
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-50 border border-border bg-base-900 p-4 shadow-2xl">
      {children}
    </div>
  </div>
);
export { HoverCard };