import React from 'react';
import { cn } from '../../utils';
import { motion, useScroll } from 'framer-motion';

const ScrollProgress = ({ className, ...props }) => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div className={cn("fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left", className)} style={{ scaleX: scrollYProgress }} {...props} />
  );
};
export { ScrollProgress };