// src/components/spots/SpotCard.jsx
import { MapPin, Star, Clock } from 'lucide-react';

const SpotCard = ({ spot }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium">{spot.name}</h3>
        {spot.price && (
          <span className="text-sm text-gray-600">
            {'€'.repeat(spot.price.length)}
          </span>
        )}
      </div>

      <p className="text-sm text-gray-600 mb-3">{spot.description}</p>

      {spot.address && (
        <p className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <MapPin className="w-4 h-4" />
          {spot.address}
        </p>
      )}

      {spot.specialty && (
        <p className="flex items-center gap-2 text-sm text-blue-600 mb-2">
          <Star className="w-4 h-4" />
          {spot.specialty}
        </p>
      )}

      {spot.bestTime && (
        <p className="flex items-center gap-2 text-sm text-purple-600">
          <Clock className="w-4 h-4" />
          Meilleur moment: {spot.bestTime}
        </p>
      )}

      {spot.atmosphere && (
        <span className="mt-2 inline-block text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
          {spot.atmosphere}
        </span>
      )}
    </div>
  );
};

export default SpotCard;