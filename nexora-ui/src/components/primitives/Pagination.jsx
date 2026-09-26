import React from 'react';
import { cn } from '../../utils';
import { Button } from './Button';

const Pagination = ({ className, currentPage = 1, totalPages = 5, ...props }) => (
  <div className={cn("flex items-center justify-center gap-2", className)} {...props}>
    <Button variant="outline" size="sm" disabled={currentPage <= 1}>PREV</Button>
    <span className="font-mono text-xs uppercase text-text-secondary">Page {currentPage} of {totalPages}</span>
    <Button variant="outline" size="sm" disabled={currentPage >= totalPages}>NEXT</Button>
  </div>
);
export { Pagination };