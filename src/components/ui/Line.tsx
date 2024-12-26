import React from 'react';

interface LineProps {
  color?: string;
  thickness?: number;
  width?: string;
  className?: string;
}

export function Line({ 
  color = 'gray-300', 
  thickness = 1, 
  width = 'full', 
  className = '' 
}: LineProps) {
  return (
    <hr 
      className={`border-0 bg-${color} h-px w-${width} ${className}`}
      style={{ height: `${thickness}px` }}
    />
  );
}

