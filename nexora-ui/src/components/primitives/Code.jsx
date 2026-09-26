import React from 'react';
import { cn } from '../../utils';

const Code = ({ className, ...props }) => (
  <code className={cn("relative bg-base-800 border border-border px-[0.3rem] py-[0.2rem] font-mono text-sm text-accent", className)} {...props} />
);
export { Code };