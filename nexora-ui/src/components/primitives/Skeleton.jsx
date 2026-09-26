import React from 'react';
import { cn } from '../../utils';

const Skeleton = ({ className, ...props }) => (
  <div className={cn("animate-pulse bg-base-800", className)} {...props} />
);
export { Skeleton };