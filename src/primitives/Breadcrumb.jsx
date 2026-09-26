import { ChevronRight } from 'lucide-react';

export default function Breadcrumb({ items, className = '' }) {
  return (
    <nav className={`flex items-center space-x-2 text-sm ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && (
            <ChevronRight size={14} className="text-text-secondary mx-2" />
          )}
          {item.href ? (
            <a
              href={item.href}
              className="text-text-secondary hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-text-primary">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
