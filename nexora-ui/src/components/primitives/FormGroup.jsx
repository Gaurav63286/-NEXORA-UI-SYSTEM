import React from 'react';
import { cn } from '../../utils';

const FormGroup = ({ className, label, description, children, error, ...props }) => (
  <div className={cn("flex flex-col gap-2", className)} {...props}>
    {label && <label className="font-mono text-xs uppercase tracking-widest text-text-primary">{label}</label>}
    {description && <p className="text-xs text-text-secondary">{description}</p>}
    {children}
    {error && <p className="text-xs text-red-400 font-mono mt-1">{error}</p>}
  </div>
);
export { FormGroup };