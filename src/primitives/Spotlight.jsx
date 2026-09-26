import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function Spotlight({ children, className = '' }) {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden bg-surface border border-border ${className}`}
    >
      <motion.div
        style={{
          background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(191, 255, 0, 0.1), transparent 40%)',
          x: springX,
          y: springY,
        }}
        className="absolute inset-0 pointer-events-none"
      />
      {children}
    </div>
  );
}
