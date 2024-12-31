// src/components/hotels/HotelAreas.jsx
import { HOTEL_AREAS } from '../../data/hotelData';
import AreaCard from './AreaCard';

const HotelAreas = () => {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-6 rounded-lg mb-6">
        <h2 className="text-lg font-medium mb-2">Recommandations pour votre séjour</h2>
        <p className="text-gray-600">Découvrez nos quartiers préférés pour un séjour authentique à Cracovie.</p>
      </div>
      {HOTEL_AREAS.map((area, index) => (
        <AreaCard key={index} area={area} />
      ))}
    </div>
  );
};

export default HotelAreas;