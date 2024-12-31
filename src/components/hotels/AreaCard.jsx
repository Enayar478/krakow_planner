// src/components/hotels/AreaCard.jsx
import { Hotel, Check } from 'lucide-react';

const AreaCard = ({ area }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <Hotel className="w-6 h-6 text-blue-500" />
        <h3 className="text-lg font-medium">{area.name}</h3>
      </div>

      <p className="text-gray-700 mb-4">{area.description}</p>

      <h4 className="font-medium text-sm text-gray-700 mb-2">Avantages :</h4>
      <ul className="space-y-2">
        {area.advantages.map((advantage, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-600">
            <Check className="w-4 h-4 text-green-500 mt-1" />
            <span>{advantage}</span>
          </li>
        ))}
      </ul>

      {area.atmosphere && (
        <div className="mt-4">
          <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            {area.atmosphere}
          </span>
        </div>
      )}
    </div>
  );
};

export default AreaCard;