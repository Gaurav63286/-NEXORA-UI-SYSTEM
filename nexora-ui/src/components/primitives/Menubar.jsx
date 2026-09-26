import React from 'react';
import { cn } from '../../utils';

const Menubar = ({ className, items, ...props }) => (
  <div className={cn("flex h-10 items-center space-x-1 border border-border bg-base-900 p-1", className)} {...props}>
    {items.map(item => (
      <button key={item} className="cursor-pointer select-none px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground hover:bg-base-800 transition-colors">{item}</button>
    ))}
  </div>
);
export { Menubar };