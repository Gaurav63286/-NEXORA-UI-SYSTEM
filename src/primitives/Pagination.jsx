import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { springConfig } from '../animations/spring';

export default function Pagination({ currentPage, totalPages, onPageChange, className = '' }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <motion.button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 border border-border rounded hover:border-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={springConfig}
      >
        <ChevronLeft size={16} />
      </motion.button>

      {pages.map((page) => (
        <motion.button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 text-sm font-medium rounded transition-colors ${
            currentPage === page
              ? 'bg-accent text-background'
              : 'bg-surface border border-border text-text-primary hover:border-accent'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={springConfig}
        >
          {page}
        </motion.button>
      ))}

      <motion.button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 border border-border rounded hover:border-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={springConfig}
      >
        <ChevronRight size={16} />
      </motion.button>
    </div>
  );
}
