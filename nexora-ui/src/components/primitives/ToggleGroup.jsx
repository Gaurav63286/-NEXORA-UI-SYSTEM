import React from 'react';
import { cn } from '../../utils';

const ToggleGroup = ({ className, children, ...props }) => (
  <div className={cn("flex items-center gap-1 border border-border p-1 bg-base-900 inline-flex", className)} {...props}>
    {children}
  </div>
);
export { ToggleGroup };