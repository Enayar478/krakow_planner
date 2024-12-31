// src/components/tips/PracticalTips.jsx
import { Info } from 'lucide-react';
import { PRACTICAL_TIPS } from '../../data/practicalTips';

const PracticalTips = () => {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-6 rounded-lg">
        <h2 className="text-lg font-medium mb-4">Conseils Pratiques</h2>
        <div className="space-y-4">
          {PRACTICAL_TIPS.map((tip, index) => (
            <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
              <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticalTips;