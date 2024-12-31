// src/components/romantic/RomanticSpots.jsx
import { ROMANTIC_SPOTS, ROMANTIC_MOMENTS } from '../../data/romanticData';
import CategorySection from './CategorySection';

const RomanticSpots = () => {
  return (
    <div className="space-y-8">
      {ROMANTIC_SPOTS.map((category, index) => (
        <CategorySection key={index} category={category} />
      ))}
      <div className="mt-8 p-6 bg-pink-50 rounded-lg">
        <h3 className="text-lg font-medium mb-4">Moments Magiques</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ROMANTIC_MOMENTS.map((moment, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow">
              <h4 className="font-medium">{moment.name}</h4>
              <p className="text-sm text-gray-600 mt-2">{moment.description}</p>
              <p className="text-sm text-blue-500 mt-2">{moment.tip}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RomanticSpots;