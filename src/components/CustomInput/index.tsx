import React from 'react';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function CustomInput({ label, id, ...props }: CustomInputProps) {
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={inputId}
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        {...props}
      />
    </div>
  );
}
