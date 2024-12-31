// src/components/shared/Icon.jsx
import * as Icons from 'lucide-react';

export const Icon = ({ name, size = 24, className = '' }) => {
  const IconComponent = Icons[name];
  return IconComponent ? <IconComponent size={size} className={className} /> : null;
};