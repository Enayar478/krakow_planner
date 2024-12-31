// src/hooks/useActiveTab.js
import { useState, useCallback } from 'react';

export const useActiveTab = (initialTab = 'overview') => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const changeTab = useCallback((tabId) => {
    setActiveTab(tabId);
  }, []);

  return [activeTab, changeTab];
};