import { motion, useAnimation } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { springConfig } from '../animations/spring';

export default function HorizontalGallery({ items, className = '' }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0);
      setCanScrollRight(
        scrollRef.current.scrollLeft <
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      );
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...springConfig, delay: index * 0.1 }}
            className="flex-shrink-0 w-80 bg-surface border border-border rounded-lg overflow-hidden"
          >
            <div className="aspect-video bg-surface-elevated" />
            <div className="p-4">
              <h3 className="font-medium mb-2">{item.title}</h3>
              <p className="text-sm text-text-secondary">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="flex justify-end gap-2 mt-4">
        <motion.button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className="p-2 border border-border rounded hover:border-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={springConfig}
        >
          <ChevronLeft size={20} />
        </motion.button>
        <motion.button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className="p-2 border border-border rounded hover:border-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={springConfig}
        >
          <ChevronRight size={20} />
        </motion.button>
      </div>
    </div>
  );
}
