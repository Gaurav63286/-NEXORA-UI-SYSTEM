import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { springConfig } from '../animations/spring';

export default function ContextMenu({ items, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (e) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setIsOpen(true);
  };

  return (
    <div className={`relative inline-block ${className}`} onContextMenu={handleContextMenu}>
      <div className="cursor-pointer">Right-click me</div>
      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={springConfig}
              className="fixed z-50 w-48 py-2 bg-surface border border-border rounded-lg shadow-xl"
              style={{ left: position.x, top: position.y }}
              onClick={(e) => e.stopPropagation()}
            >
              {items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    item.onClick();
                    setIsOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left text-sm text-text-primary hover:bg-surface-elevated hover:text-accent transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
