const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components', 'primitives');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const files = {
  'Textarea.jsx': `import React from 'react';
import { cn } from '../../utils';

const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn("flex min-h-[80px] w-full bg-base-900 border border-border px-3 py-2 text-sm text-text-primary focus-visible:outline-none focus-visible:border-accent disabled:opacity-50", className)} {...props} />
));
Textarea.displayName = "Textarea";
export { Textarea };`,

  'Label.jsx': `import React from 'react';
import { cn } from '../../utils';

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <label ref={ref} className={cn("font-mono text-xs uppercase tracking-widest text-text-secondary", className)} {...props} />
));
Label.displayName = "Label";
export { Label };`,

  'Checkbox.jsx': `import React, { useState } from 'react';
import { cn } from '../../utils';
import { Check } from 'lucide-react';

const Checkbox = React.forwardRef(({ className, checked, onCheckedChange, ...props }, ref) => {
  const [internal, setInternal] = useState(false);
  const isChecked = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (checked === undefined) setInternal(!isChecked);
    if (onCheckedChange) onCheckedChange(!isChecked);
  };
  return (
    <button type="button" role="checkbox" aria-checked={isChecked} onClick={toggle} ref={ref} className={cn("peer h-5 w-5 shrink-0 border border-border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:opacity-50 flex items-center justify-center bg-base-900 transition-colors", isChecked && "bg-accent text-black border-accent", className)} {...props}>
      {isChecked && <Check className="h-3.5 w-3.5" />}
    </button>
  );
});
Checkbox.displayName = "Checkbox";
export { Checkbox };`,

  'Skeleton.jsx': `import React from 'react';
import { cn } from '../../utils';

const Skeleton = ({ className, ...props }) => (
  <div className={cn("animate-pulse bg-base-800", className)} {...props} />
);
export { Skeleton };`,

  'Spinner.jsx': `import React from 'react';
import { cn } from '../../utils';
import { motion } from 'framer-motion';

const Spinner = ({ className, size = "md", ...props }) => {
  const sizes = { sm: "h-4 w-4 border-2", md: "h-8 w-8 border-2", lg: "h-12 w-12 border-4" };
  return (
    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className={cn("rounded-full border-t-accent border-r-accent border-b-base-800 border-l-base-800", sizes[size], className)} {...props} />
  );
};
export { Spinner };`,

  'Kbd.jsx': `import React from 'react';
import { cn } from '../../utils';

const Kbd = ({ className, ...props }) => (
  <kbd className={cn("pointer-events-none inline-flex h-6 select-none items-center gap-1 border border-border bg-base-800 px-1.5 font-mono text-[10px] font-medium text-text-secondary opacity-100", className)} {...props} />
);
export { Kbd };`,

  'Code.jsx': `import React from 'react';
import { cn } from '../../utils';

const Code = ({ className, ...props }) => (
  <code className={cn("relative bg-base-800 border border-border px-[0.3rem] py-[0.2rem] font-mono text-sm text-accent", className)} {...props} />
);
export { Code };`,

  'Table.jsx': `import React from 'react';
import { cn } from '../../utils';

const Table = React.forwardRef(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto"><table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} /></div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b border-border", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
));
TableBody.displayName = "TableBody";

const TableRow = React.forwardRef(({ className, ...props }, ref) => (
  <tr ref={ref} className={cn("border-b border-border transition-colors hover:bg-base-800/50", className)} {...props} />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef(({ className, ...props }, ref) => (
  <th ref={ref} className={cn("h-12 px-4 text-left align-middle font-mono text-xs uppercase tracking-widest text-text-secondary", className)} {...props} />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef(({ className, ...props }, ref) => (
  <td ref={ref} className={cn("p-4 align-middle font-light", className)} {...props} />
));
TableCell.displayName = "TableCell";

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell };`,

  'Marquee.jsx': `import React from 'react';
import { cn } from '../../utils';

const Marquee = ({ className, children, ...props }) => (
  <div className={cn("relative flex w-full overflow-hidden border-y border-border bg-base-900 py-4", className)} {...props}>
    <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-serif text-4xl uppercase tracking-widest text-text-secondary">
      {children} &bull; {children} &bull; {children} &bull; {children}
    </div>
  </div>
);
export { Marquee };`,

  'Breadcrumb.jsx': `import React from 'react';
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
export { Breadcrumb };`,

  'Pagination.jsx': `import React from 'react';
import { cn } from '../../utils';
import { Button } from './Button';

const Pagination = ({ className, currentPage = 1, totalPages = 5, ...props }) => (
  <div className={cn("flex items-center justify-center gap-2", className)} {...props}>
    <Button variant="outline" size="sm" disabled={currentPage <= 1}>PREV</Button>
    <span className="font-mono text-xs uppercase text-text-secondary">Page {currentPage} of {totalPages}</span>
    <Button variant="outline" size="sm" disabled={currentPage >= totalPages}>NEXT</Button>
  </div>
);
export { Pagination };`,

  'Drawer.jsx': `import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../utils';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Drawer = ({ isOpen, onClose, children, position = "right", className }) => {
  const xVariants = { right: { x: "100%" }, left: { x: "-100%" } };
  
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => document.body.style.overflow = 'unset';
  }, [isOpen]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-40 bg-base-900/80 backdrop-blur-sm" />
          <motion.div initial={xVariants[position]} animate={{ x: 0 }} exit={xVariants[position]} transition={{ type: "spring", stiffness: 400, damping: 28 }} className={cn("fixed top-0 bottom-0 z-50 w-full max-w-sm bg-base-900 border-x border-border shadow-2xl p-6 overflow-y-auto", position === 'right' ? 'right-0' : 'left-0', className)}>
            <button onClick={onClose} className="absolute top-4 right-4 text-text-secondary hover:text-accent"><X size={20} /></button>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};
export { Drawer };`,

  'Timeline.jsx': `import React from 'react';
import { cn } from '../../utils';

const Timeline = ({ className, items, ...props }) => (
  <div className={cn("flex flex-col border-l border-border ml-3", className)} {...props}>
    {items.map((item, i) => (
      <div key={i} className="relative pl-6 pb-8 last:pb-0">
        <div className="absolute left-[-5px] top-1.5 h-2 w-2 border border-border bg-base-900" />
        <div className="font-mono text-xs uppercase text-accent mb-1">{item.date}</div>
        <div className="font-serif text-xl text-text-primary mb-2">{item.title}</div>
        <div className="text-sm text-text-secondary font-light">{item.description}</div>
      </div>
    ))}
  </div>
);
export { Timeline };`,

  'Toast.jsx': `import React from 'react';
import { cn } from '../../utils';
import { motion } from 'framer-motion';

const Toast = ({ className, title, description, visible = true, ...props }) => (
  <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50, scale: visible ? 1 : 0.9 }} className={cn("fixed bottom-4 right-4 z-50 w-full max-w-sm bg-base-900 border border-border shadow-2xl p-4", className)} {...props}>
    <div className="font-mono text-xs uppercase tracking-widest text-accent mb-1">{title}</div>
    <div className="text-sm text-text-secondary font-light">{description}</div>
  </motion.div>
);
export { Toast };`,

  'Tooltip.jsx': `import React from 'react';
import { cn } from '../../utils';

const Tooltip = ({ className, content, children, ...props }) => (
  <div className={cn("group relative inline-block", className)} {...props}>
    {children}
    <div className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
      <div className="bg-base-800 border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-text-primary whitespace-nowrap">
        {content}
      </div>
    </div>
  </div>
);
export { Tooltip };`,

  'RadioGroup.jsx': `import React, { useState } from 'react';
import { cn } from '../../utils';
import { motion } from 'framer-motion';

const RadioGroup = ({ className, options, defaultValue, onValueChange, ...props }) => {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (v) => {
    setValue(v);
    if (onValueChange) onValueChange(v);
  };
  return (
    <div className={cn("flex flex-col gap-3", className)} {...props}>
      {options.map((opt) => (
        <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
          <div className="relative flex h-4 w-4 items-center justify-center rounded-full border border-border group-hover:border-accent">
            {value === opt.value && <motion.div layoutId="radio" className="h-2 w-2 rounded-full bg-accent" />}
          </div>
          <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">{opt.label}</span>
        </label>
      ))}
    </div>
  );
};
export { RadioGroup };`,

  'MagneticButton.jsx': `import React, { useRef, useState } from 'react';
import { cn } from '../../utils';
import { motion } from 'framer-motion';

const MagneticButton = ({ className, children, ...props }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouse = (e) => {
    if(!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };
  const reset = () => setPosition({ x: 0, y: 0 });
  return (
    <motion.button ref={ref} onMouseMove={handleMouse} onMouseLeave={reset} animate={{ x: position.x, y: position.y }} transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }} className={cn("relative px-8 py-4 bg-accent text-black font-mono text-xs uppercase tracking-widest border border-transparent hover:border-text-primary transition-colors", className)} {...props}>
      {children}
    </motion.button>
  );
};
export { MagneticButton };`,

  'Reveal.jsx': `import React from 'react';
import { cn } from '../../utils';
import { motion } from 'framer-motion';

const Reveal = ({ className, children, delay = 0, ...props }) => (
  <div className={cn("relative overflow-hidden inline-block", className)} {...props}>
    <motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }} initial="hidden" whileInView="visible" transition={{ duration: 0.5, delay }} viewport={{ once: true }}>
      {children}
    </motion.div>
    <motion.div variants={{ hidden: { left: 0 }, visible: { left: "100%" } }} initial="hidden" whileInView="visible" transition={{ duration: 0.5, ease: "easeIn", delay }} viewport={{ once: true }} className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-accent" />
  </div>
);
export { Reveal };`,

  'Spotlight.jsx': `import React, { useRef, useState } from 'react';
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
      <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300" style={{ opacity: isFocused ? 1 : 0, background: \`radial-gradient(600px circle at \${position.x}px \${position.y}px, rgba(204,255,0,0.05), transparent 40%)\` }} />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
export { Spotlight };`,
  
  'FormGroup.jsx': `import React from 'react';
import { cn } from '../../utils';

const FormGroup = ({ className, label, description, children, error, ...props }) => (
  <div className={cn("flex flex-col gap-2", className)} {...props}>
    {label && <label className="font-mono text-xs uppercase tracking-widest text-text-primary">{label}</label>}
    {description && <p className="text-xs text-text-secondary">{description}</p>}
    {children}
    {error && <p className="text-xs text-red-400 font-mono mt-1">{error}</p>}
  </div>
);
export { FormGroup };`,
};

Object.entries(files).forEach(([name, content]) => {
  fs.writeFileSync(path.join(dir, name), content);
  console.log('Created ' + name);
});
