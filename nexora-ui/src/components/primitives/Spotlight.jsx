import React, { useRef, useState } from 'react';
import { cn } from '../../utils';

const Spotlight = ({ className, children, ...props }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  return (
    <div ref={divRef} onMouseMove={handleMouseMove} onMouseEnter={() => setIsFocused(true)} onMouseLeave={() => setIsFocused(false)} className={cn("relative overflow-hidden border border-border bg-base-900 p-8", className)} {...props}>
      <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300" style={{ opacity: isFocused ? 1 : 0, background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(204,255,0,0.05), transparent 40%)` }} />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
export { Spotlight };