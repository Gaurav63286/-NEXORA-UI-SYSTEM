import React from 'react';
import { cn } from '../../utils';
import { Search } from 'lucide-react';

const Command = ({ className, ...props }) => (
  <div className={cn("flex h-full w-full flex-col overflow-hidden bg-base-900 text-text-primary border border-border max-w-lg", className)} {...props}>
    <div className="flex items-center border-b border-border px-3" cmdk-input-wrapper="">
      <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
      <input placeholder="Type a command or search..." className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-text-secondary disabled:cursor-not-allowed disabled:opacity-50" />
    </div>
    <div className="max-h-[300px] overflow-y-auto p-2 space-y-1">
      <div className="px-2 py-1.5 text-xs font-mono uppercase tracking-widest text-text-secondary">Suggestions</div>
      {['Components', 'Tokens', 'Playground', 'Settings'].map(item => (
        <div key={item} className="relative flex cursor-pointer select-none items-center px-2 py-1.5 text-sm outline-none hover:bg-base-800 hover:text-accent transition-colors">{item}</div>
      ))}
    </div>
  </div>
);
export { Command };