// src/components/romantic/CategorySection.jsx
import { Heart } from 'lucide-react';

const CategorySection = ({ category }) => {
  return (
    <div>
      <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
        <Heart className="w-5 h-5 text-pink-500" />
        {category.category}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.spots.map((spot, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
            <h3 className="font-medium mb-2">{spot.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{spot.description}</p>
            
            {spot.bestTime && (
              <p className="text-sm text-purple-600">
                Meilleur moment: {spot.bestTime}
              </p>
            )}
            
            {spot.tip && (
              <p className="text-sm text-blue-600 mt-2">
                Conseil: {spot.tip}
              </p>
            )}

            {spot.atmosphere && (
              <span className="mt-2 inline-block text-xs px-2 py-1 bg-pink-100 text-pink-600 rounded-full">
                {spot.atmosphere}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;