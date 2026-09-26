import React from 'react';
import { cn } from '../../utils';

const NavigationMenu = ({ className, links, ...props }) => (
  <nav className={cn("flex items-center justify-center gap-6 border-b border-border pb-4", className)} {...props}>
    {links.map(link => (
      <a key={link} href="#" className="font-mono text-xs uppercase tracking-widest text-text-secondary hover:text-accent transition-colors relative after:absolute after:bottom-[-17px] after:left-0 after:w-full after:h-0.5 after:bg-accent after:opacity-0 hover:after:opacity-100">{link}</a>
    ))}
  </nav>
);
export { NavigationMenu };