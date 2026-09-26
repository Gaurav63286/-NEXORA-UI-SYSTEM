import React, { useState } from 'react';
import { cn } from '../../utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Accordion = React.forwardRef(({ className, children, type = "single", ...props }, ref) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (value) => {
    if (type === "single") {
      setOpenItems(openItems.includes(value) ? [] : [value]);
    } else {
      setOpenItems(openItems.includes(value)
        ? openItems.filter(item => item !== value)
        : [...openItems, value]
      );
    }
  };

  return (
    <div ref={ref} className={cn("border border-border", className)} {...props}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isOpen: openItems.includes(child.props.value),
            onToggle: () => toggleItem(child.props.value)
          });
        }
        return child;
      })}
    </div>
  );
});
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef(({ className, value, isOpen, onToggle, children, ...props }, ref) => (
  <div ref={ref} className={cn("border-b border-border last:border-b-0", className)} {...props}>
    {React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { isOpen, onToggle });
      }
      return child;
    })}
  </div>
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(({ className, isOpen, onToggle, children, ...props }, ref) => (
  <button
    ref={ref}
    onClick={onToggle}
    className={cn(
      "flex w-full flex-1 items-center justify-between py-4 px-6 font-mono text-sm transition-all hover:text-accent",
      isOpen ? "text-accent" : "text-text-primary",
      className
    )}
    {...props}
  >
    {children}
    <motion.div
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      <ChevronDown className="h-4 w-4 shrink-0" />
    </motion.div>
  </button>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(({ className, isOpen, children, ...props }, ref) => (
  <AnimatePresence initial={false}>
    {isOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="overflow-hidden"
      >
        <div ref={ref} className={cn("pb-4 pt-0 px-6 text-sm text-text-secondary font-light", className)} {...props}>
          {children}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
));
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
