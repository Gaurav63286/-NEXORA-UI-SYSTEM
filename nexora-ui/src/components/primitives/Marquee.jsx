import React from 'react';
import { cn } from '../../utils';

const Marquee = ({ className, children, ...props }) => (
  <div className={cn("relative flex w-full overflow-hidden border-y border-border bg-base-900 py-4", className)} {...props}>
    <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-serif text-4xl uppercase tracking-widest text-text-secondary">
      {children} &bull; {children} &bull; {children} &bull; {children}
    </div>
  </div>
);
export { Marquee };