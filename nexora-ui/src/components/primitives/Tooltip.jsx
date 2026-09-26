import React from 'react';
import { cn } from '../../utils';

const Tooltip = ({ className, content, children, ...props }) => (
  <div className={cn("group relative inline-block", className)} {...props}>
    {children}
    <div className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
      <div className="bg-base-800 border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-text-primary whitespace-nowrap">
        {content}
      </div>
    </div>
  </div>
);
export { Tooltip };