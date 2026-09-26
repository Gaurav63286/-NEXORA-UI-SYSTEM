import React from 'react';
import { cn } from '../../utils';

const AspectRatio = ({ className, ratio = 16/9, children, ...props }) => (
  <div className={cn("relative w-full", className)} style={{ paddingBottom: `${100 / ratio}%` }} {...props}>
    <div className="absolute inset-0">
      {children}
    </div>
  </div>
);
export { AspectRatio };