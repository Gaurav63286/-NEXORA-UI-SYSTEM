import React from 'react';
import { cn } from '../../utils';
import { motion } from 'framer-motion';

const ImageReveal = ({ className, src, alt, ...props }) => (
  <div className={cn("relative overflow-hidden group border border-border", className)} {...props}>
    <div className="absolute inset-0 bg-base-900 z-10 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:-translate-y-full origin-top" />
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);
export { ImageReveal };