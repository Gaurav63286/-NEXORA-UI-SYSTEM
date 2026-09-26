import React from 'react';
import { cn } from '../../utils';

const Timeline = ({ className, items, ...props }) => (
  <div className={cn("flex flex-col border-l border-border ml-3", className)} {...props}>
    {items.map((item, i) => (
      <div key={i} className="relative pl-6 pb-8 last:pb-0">
        <div className="absolute left-[-5px] top-1.5 h-2 w-2 border border-border bg-base-900" />
        <div className="font-mono text-xs uppercase text-accent mb-1">{item.date}</div>
        <div className="font-serif text-xl text-text-primary mb-2">{item.title}</div>
        <div className="text-sm text-text-secondary font-light">{item.description}</div>
      </div>
    ))}
  </div>
);
export { Timeline };