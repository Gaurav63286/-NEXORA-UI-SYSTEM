import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { springConfig } from '../animations/spring';

export default function Accordion({ items, className = '' }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={className}>
      {items.map((item, index) => (
        <div key={index} className="border-b border-border">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="font-medium">{item.title}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={springConfig}
            >
              <ChevronDown size={16} className="text-text-secondary" />
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={springConfig}
                className="overflow-hidden"
              >
                <div className="pb-4 text-text-secondary">{item.content}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
