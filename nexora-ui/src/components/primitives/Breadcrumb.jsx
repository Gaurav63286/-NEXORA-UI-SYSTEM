import React from 'react';
import { cn } from '../../utils';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = ({ className, items, ...props }) => (
  <nav aria-label="breadcrumb" className={cn("flex items-center font-mono text-xs text-text-secondary uppercase tracking-widest", className)} {...props}>
    {items.map((item, index) => (
      <React.Fragment key={index}>
        <a href={item.href || '#'} className={cn("hover:text-accent transition-colors", item.active && "text-text-primary")}>
          {item.label}
        </a>
        {index < items.length - 1 && <ChevronRight className="h-3 w-3 mx-2" />}
      </React.Fragment>
    ))}
  </nav>
);
export { Breadcrumb };