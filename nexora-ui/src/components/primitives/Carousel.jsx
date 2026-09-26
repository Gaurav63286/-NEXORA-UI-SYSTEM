import React, { useState } from 'react';
import { cn } from '../../utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ className, items, ...props }) => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % items.length);
  const prev = () => setIndex((index - 1 + items.length) % items.length);
  return (
    <div className={cn("relative w-full group", className)} {...props}>
      <div className="overflow-hidden border border-border bg-base-800 aspect-video flex items-center justify-center font-serif text-3xl text-text-secondary">
        {items[index]}
      </div>
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-base-900 border border-border p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:text-accent"><ChevronLeft size={16} /></button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-base-900 border border-border p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:text-accent"><ChevronRight size={16} /></button>
    </div>
  );
};
export { Carousel };