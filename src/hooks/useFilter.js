// src/hooks/useFilter.js
import { useState, useCallback } from 'react';

export const useFilter = (initialValue = 'all') => {
  const [filter, setFilter] = useState(initialValue);

  const toggleFilter = useCallback((value) => {
    setFilter(current => current === value ? 'all' : value);
  }, []);

  return [filter, toggleFilter];
};