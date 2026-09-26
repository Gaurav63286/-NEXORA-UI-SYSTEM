import { motion } from 'framer-motion';
import { springConfig } from '../animations/spring';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background';
  
  const variants = {
    primary: 'bg-accent text-background hover:bg-accent/90',
    secondary: 'bg-surface border border-border text-text-primary hover:border-accent hover:text-accent',
    ghost: 'text-text-primary hover:text-accent',
    outline: 'border border-border text-text-primary hover:border-accent hover:text-accent',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={springConfig}
      {...props}
    >
      {children}
    </motion.button>
  );
}
