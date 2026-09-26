import React from 'react';
import { cn } from '../../utils';

const ContextMenu = ({ className, children, trigger, ...props }) => (
  <div className={cn("relative group inline-block", className)} {...props}>
    {trigger}
    <div className="absolute left-1/2 top-1/2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-50 bg-base-900 border border-border min-w-[150px] p-1 shadow-2xl">
      <div className="px-3 py-1 font-mono text-[10px] uppercase text-text-secondary border-b border-border mb-1">Context Options</div>
      {children}
    </div>
  </div>
);
export { ContextMenu };