import React from 'react';

export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      {...props}
    >
      {children}
    </button>
  );
}
