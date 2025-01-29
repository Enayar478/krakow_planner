// src/components/layout/Layout.jsx
import React from 'react';
import { useKrakowPlanner } from '../../context/PlannerContext';
import { Map, Calendar, MapPin, Heart, Info, Utensils, Beer, Coffee, ChevronDown } from 'lucide-react';
import DailySchedule from '../daily/DailySchedule';
import SecretSpots from '../spots/SecretSpots';
import RomanticSpots from '../romantic/RomanticSpots';
import PracticalTips from '../tips/PracticalTips';
import Overview from '../overview/Overview';
import MapView from '../map/MapView';

const Layout = () => {
  const { activeTab, setActiveTab } = useKrakowPlanner();

  const tabs = [
    { id: 'overview', name: 'Aperçu', icon: <Map className="w-5 h-5" /> },
    { id: 'daily', name: 'Planning', icon: <Calendar className="w-5 h-5" /> },
    { id: 'spots', name: 'Spots', icon: <MapPin className="w-5 h-5" /> },
    { id: 'romantic', name: 'Romance', icon: <Heart className="w-5 h-5" /> },
    { id: 'tips', name: 'Conseils', icon: <Info className="w-5 h-5" /> }
  ];

  const filters = [
    { id: 'all', name: 'Tout voir', icon: <Map /> },
    { id: 'food', name: 'Restaurants', icon: <Utensils /> },
    { id: 'bars', name: 'Bars', icon: <Beer /> },
    { id: 'coffee', name: 'Cafés', icon: <Coffee /> },
    { id: 'romantic', name: 'Spots Romantiques', icon: <Heart /> }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'daily':
        return <DailySchedule />;
      case 'spots':
        return <SecretSpots />;
      case 'romantic':
        return <RomanticSpots />;
      case 'tips':
        return <PracticalTips />;
      case 'map':
        return <MapView />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header - visible sur toutes les pages sauf Overview */}
      {activeTab !== 'overview' && (
        <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-neutral-200 z-50">
          <div className="max-w-screen-xl mx-auto px-4 h-full flex items-center">
            <div className="flex items-center gap-3">
              <Map className="w-8 h-8" />
              <div>
                <h1 className="text-3xl font-bold mb-2">Voyage à Cracovie</h1>
                <p className="text-sm opacity-90">5-8 février 2025</p>
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Zone de contenu principale */}
      <main className={`flex-1 ${activeTab !== 'overview' ? 'mt-16 mb-16' : ''} relative`}>
        {activeTab === 'overview' && <Overview />}
        {activeTab === 'map' && <MapView />}
        {activeTab === 'daily' && (
          <div className="h-full overflow-y-auto">
            <DailySchedule />
          </div>
        )}
        {activeTab === 'spots' && (
          <div className="h-full overflow-y-auto">
            <SecretSpots />
          </div>
        )}
        {activeTab === 'romantic' && (
          <div className="h-full overflow-y-auto">
            <RomanticSpots />
          </div>
        )}
        {activeTab === 'tips' && (
          <div className="h-full overflow-y-auto">
            <PracticalTips />
          </div>
        )}
      </main>

      {/* Navigation - visible sur toutes les pages sauf Overview */}
      {activeTab !== 'overview' && (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 h-16 z-50">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="flex justify-around h-full items-center">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center px-3 relative ${
                    activeTab === tab.id ? 'text-primary' : 'text-gray-500'
                  }`}
                >
                  {React.cloneElement(tab.icon, { 
                    className: `w-6 h-6 ${activeTab === tab.id ? 'stroke-primary' : 'stroke-current'}` 
                  })}
                  <span className="text-xs mt-1 font-inter">{tab.name}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Layout;