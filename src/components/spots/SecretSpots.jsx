// src/components/spots/SecretSpots.jsx
import React from 'react';
import { useKrakowPlanner } from '../../context/PlannerContext';
import { MapPin, Beer, Utensils } from 'lucide-react';

const SecretSpots = () => {
  const { dailyData, selectedType } = useKrakowPlanner();

  const allSpots = dailyData.reduce((acc, day) => {
    const bars = day.secretSpots.bars.map(bar => ({ ...bar, category: 'bars' }));
    const food = day.secretSpots.food.map(spot => ({ ...spot, category: 'food' }));
    return [...acc, ...bars, ...food];
  }, []);

  const filteredSpots = selectedType === 'all' 
    ? allSpots 
    : allSpots.filter(spot => spot.category === selectedType);

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {filteredSpots.map((spot, index) => (
        <div 
          key={index}
          className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start gap-3">
            {spot.category === 'bars' ? (
              <Beer className="w-5 h-5 text-amber-500" />
            ) : (
              <Utensils className="w-5 h-5 text-green-500" />
            )}
            
            <div>
              <h3 className="font-medium text-gray-800">{spot.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{spot.description}</p>
              
              {spot.address && (
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>{spot.address}</span>
                </div>
              )}
              
              {spot.specialty && (
                <div className="mt-2">
                  <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {spot.specialty}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SecretSpots;