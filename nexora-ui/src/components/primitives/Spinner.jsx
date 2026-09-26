import React from 'react';
import { cn } from '../../utils';
import { motion } from 'framer-motion';

const Spinner = ({ className, size = "md", ...props }) => {
  const sizes = { sm: "h-4 w-4 border-2", md: "h-8 w-8 border-2", lg: "h-12 w-12 border-4" };
  return (
    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className={cn("rounded-full border-t-accent border-r-accent border-b-base-800 border-l-base-800", sizes[size], className)} {...props} />
  );
};
export { Spinner };