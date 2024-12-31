// src/context/PlannerContext.jsx
import { createContext, useContext, useState } from 'react';

const PlannerContext = createContext();

export const PlannerProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedDay, setSelectedDay] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const value = {
    activeTab,
    setActiveTab,
    selectedDay,
    setSelectedDay,
    selectedType,
    setSelectedType
  };

  return (
    <PlannerContext.Provider value={value}>
      {children}
    </PlannerContext.Provider>
  );
};

export const useKrakowPlanner = () => {
  const context = useContext(PlannerContext);
  if (!context) {
    throw new Error('useKrakowPlanner must be used within a PlannerProvider');
  }
  return context;
};