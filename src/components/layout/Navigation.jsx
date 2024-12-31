// src/components/layout/Navigation.jsx
import { Map, Calendar, MapPin, Heart, Info, Hotel } from 'lucide-react';
import { useKrakowPlanner } from '../../context/PlannerContext';

const Navigation = () => {
  const { activeTab, setActiveTab } = useKrakowPlanner();

  const tabs = [
    { id: 'overview', name: 'Aperçu', icon: <Map className="w-4 h-4" /> },
    { id: 'daily', name: 'Jour par jour', icon: <Calendar className="w-4 h-4" /> },
    { id: 'spots', name: 'Spots Secrets', icon: <MapPin className="w-4 h-4" /> },
    { id: 'romantic', name: 'Romance', icon: <Heart className="w-4 h-4" /> },
    { id: 'tips', name: 'Conseils', icon: <Info className="w-4 h-4" /> },
    { id: 'hotel', name: 'Hôtels', icon: <Hotel className="w-4 h-4" /> }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
      <div className="flex gap-2 overflow-x-auto pb-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === tab.id 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {tab.icon}
            <span className="ml-2">{tab.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navigation;