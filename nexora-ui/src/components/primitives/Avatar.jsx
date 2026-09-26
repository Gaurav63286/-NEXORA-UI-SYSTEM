import React, { useState } from 'react';
import { cn } from '../../utils';

const Avatar = React.forwardRef(({ className, src, alt, fallback, ...props }, ref) => {
  const [error, setError] = useState(false);

  return (
    <div
      ref={ref}
      className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden bg-base-800 border border-border", className)}
      {...props}
    >
      {!error && src ? (
        <img
          src={src}
          alt={alt}
          onError={() => setError(true)}
          className="aspect-square h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center font-mono text-xs text-text-secondary uppercase">
          {fallback}
        </div>
      )}
    </div>
  );
});

Avatar.displayName = "Avatar";

export { Avatar };
