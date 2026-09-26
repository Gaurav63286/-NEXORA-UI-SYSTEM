import React, { useState } from 'react';
import { cn } from '../../utils';
import { Calendar } from './Calendar';

const DatePicker = ({ className }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative inline-block", className)}>
      <button onClick={() => setOpen(!open)} className="border border-border bg-base-800 px-4 py-2 font-mono text-sm text-text-secondary hover:text-accent w-48 text-left">Pick a date...</button>
      {open && (
        <div className="absolute top-full left-0 mt-2 z-50 shadow-2xl">
          <Calendar />
        </div>
      )}
    </div>
  );
};
export { DatePicker };