// src/components/spots/SecretSpots.jsx
import { useState } from 'react';
import { DAILY_DATA } from '../../data/dailyData';
import SpotFilter from './SpotFilter';
import SpotCard from './SpotCard';

const SecretSpots = () => {
  const [selectedType, setSelectedType] = useState('all');

  const allSpots = DAILY_DATA.flatMap(day => {
    const spots = [];
    if (selectedType === 'all' || selectedType === 'bars') {
      spots.push(...day.secretSpots.bars.map(spot => ({ ...spot, type: 'bar' })));
    }
    if (selectedType === 'all' || selectedType === 'food') {
      spots.push(...day.secretSpots.food.map(spot => ({ ...spot, type: 'food' })));
    }
    return spots;
  });

  return (
    <div className="space-y-6">
      <SpotFilter selectedType={selectedType} setSelectedType={setSelectedType} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allSpots.map((spot, index) => (
          <SpotCard key={index} spot={spot} />
        ))}
      </div>
    </div>
  );
};

export default SecretSpots;