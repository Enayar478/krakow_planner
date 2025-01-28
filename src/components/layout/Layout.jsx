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
  const { activeTab, setActiveTab, selectedDay, setSelectedDay, selectedType, setSelectedType, isFiltersOpen, setIsFiltersOpen } = useKrakowPlanner();

  const tabs = [
    { id: 'overview', name: 'Aperçu', icon: <Map className="w-5 h-5" /> },
    { id: 'daily', name: 'Planning', icon: <Calendar className="w-5 h-5" /> },
    { id: 'spots', name: 'Spots', icon: <MapPin className="w-5 h-5" /> },
    { id: 'romantic', name: 'Romance', icon: <Heart className="w-5 h-5" /> },
    { id: 'tips', name: 'Conseils', icon: <Info className="w-5 h-5" /> },
    { id: 'map', name: 'Carte', icon: <Map className="w-5 h-5" /> }
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
    <div className="min-h-screen bg-neutral-50">
      {/* Header conditionnel - caché sur la page d'accueil */}
      {activeTab !== 'overview' && (
        <header className="bg-[#264653] text-white py-4 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-karla text-2xl font-bold">Voyage à Cracovie</h1>
            <p className="font-inter text-sm opacity-80">5-8 février 2025</p>
          </div>
        </header>
      )}

      {/* Contenu principal avec padding ajusté */}
      <main className={`${
        activeTab === 'overview' ? 'p-0' : 'pb-24 pt-4 px-4'
      }`}>
        {renderContent()}
      </main>

      {/* Navigation bottom avec nouveau style */}
      <nav className={`fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 ${
        activeTab === 'overview' || activeTab === 'map' ? 'hidden' : ''
      }`}>
        <div className="max-w-6xl mx-auto flex justify-around">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center py-3 px-4 relative ${
                activeTab === tab.id 
                  ? 'text-[#2A9D8F]' 
                  : 'text-neutral-400'
              }`}
            >
              {activeTab === tab.id && (
                <span className="absolute top-0 left-0 right-0 h-0.5 bg-[#2A9D8F]" />
              )}
              {React.cloneElement(tab.icon, { 
                className: `w-6 h-6 ${activeTab === tab.id ? 'stroke-[#2A9D8F]' : 'stroke-current'}` 
              })}
              <span className="text-xs mt-1 font-inter">{tab.name}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Layout;