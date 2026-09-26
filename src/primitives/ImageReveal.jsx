import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { springConfig } from '../animations/spring';

export default function ImageReveal({ src, alt, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ scale: 1.2 }}
        animate={isInView && isLoaded ? { scale: 1 } : { scale: 1.2 }}
        transition={springConfig}
        className="w-full h-full"
      >
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={isInView && isLoaded ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-surface"
      />
    </div>
  );
}
