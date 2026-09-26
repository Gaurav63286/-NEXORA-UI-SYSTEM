import React from 'react';
import { cn } from '../../utils';

const Kbd = ({ className, ...props }) => (
  <kbd className={cn("pointer-events-none inline-flex h-6 select-none items-center gap-1 border border-border bg-base-800 px-1.5 font-mono text-[10px] font-medium text-text-secondary opacity-100", className)} {...props} />
);
export { Kbd };