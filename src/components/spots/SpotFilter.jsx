// src/components/spots/SpotFilter.jsx
import { Map, Beer, Utensils, Coffee, Heart } from 'lucide-react';

const SpotFilter = ({ selectedType, setSelectedType }) => {
  const filters = [
    { id: 'all', name: 'Tout voir', icon: Map },
    { id: 'bars', name: 'Bars', icon: Beer },
    { id: 'food', name: 'Restaurants', icon: Utensils },
    { id: 'cafe', name: 'Cafés', icon: Coffee },
    { id: 'romantic', name: 'Romantique', icon: Heart }
  ];

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {filters.map(filter => {
        const IconComponent = filter.icon;
        return (
          <button
            key={filter.id}
            onClick={() => setSelectedType(filter.id)}
            className={`flex items-center px-4 py-2 rounded-full transition-colors ${
              selectedType === filter.id 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <IconComponent className="w-4 h-4 mr-2" />
            {filter.name}
          </button>
        );
      })}
    </div>
  );
};

export default SpotFilter;