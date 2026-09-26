import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';

export default function CursorPreview({ children, previewContent, className = '' }) {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 300 };
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
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative ${className}`}
    >
      {children}
      {isHovering && (
        <motion.div
          style={{ x: springX, y: springY }}
          className="fixed pointer-events-none z-50 bg-surface border border-border px-3 py-2 rounded shadow-xl text-sm"
        >
          {previewContent}
        </motion.div>
      )}
    </div>
  );
}
