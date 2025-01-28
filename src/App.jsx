// src/App.jsx
import React from 'react';
import './styles/globals.css';
import { PlannerProvider } from './context/PlannerContext';
import Layout from './components/layout/Layout';

function App() {
  return (
    <PlannerProvider>
      <Layout />
    </PlannerProvider>
  );
}

export default App;