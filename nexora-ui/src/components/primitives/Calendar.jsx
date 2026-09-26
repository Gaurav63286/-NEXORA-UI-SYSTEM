import React from 'react';
import { cn } from '../../utils';

const Calendar = ({ className, ...props }) => (
  <div className={cn("p-4 border border-border bg-base-900 inline-block", className)} {...props}>
    <div className="font-mono text-sm text-center mb-4 uppercase text-accent tracking-widest">September 2026</div>
    <div className="grid grid-cols-7 gap-2 text-center text-xs font-mono text-text-secondary mb-2">
      <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
    </div>
    <div className="grid grid-cols-7 gap-2 text-sm font-light">
      {Array.from({length: 30}).map((_, i) => (
        <button key={i} className={cn("h-8 w-8 flex items-center justify-center hover:border border-transparent hover:border-accent hover:text-accent transition-colors", i === 15 && "bg-accent text-black font-medium")}>{i + 1}</button>
      ))}
    </div>
  </div>
);
export { Calendar };