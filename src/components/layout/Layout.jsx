// src/components/layout/Layout.jsx
import React from 'react';
import { Map } from 'lucide-react';
import { useKrakowPlanner } from '../../context/PlannerContext';
import Header from './Header';
import Navigation from './Navigation';
import DailySchedule from '../daily/DailySchedule';
import SecretSpots from '../spots/SecretSpots';
import RomanticSpots from '../romantic/RomanticSpots';
import HotelAreas from '../hotels/HotelAreas';
import PracticalTips from '../tips/PracticalTips';

const Layout = () => {
  const { activeTab } = useKrakowPlanner();

  const renderContent = () => {
    switch (activeTab) {
      case 'daily':
        return <DailySchedule />;
      case 'spots':
        return <SecretSpots />;
      case 'romantic':
        return <RomanticSpots />;
      case 'hotel':
        return <HotelAreas />;
      case 'tips':
        return <PracticalTips />;
      default:
        return (
          <div className="text-center p-12 text-gray-500">
            <Map className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <h2 className="text-xl font-medium">Bienvenue sur votre guide de voyage!</h2>
            <p>Sélectionnez un onglet pour commencer l'exploration.</p>
          </div>
        );
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Header />
      <Navigation />
      <main className="bg-white rounded-lg shadow-lg p-6">
        {renderContent()}
      </main>
    </div>
  );
};

export default Layout;