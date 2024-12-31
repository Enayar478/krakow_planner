// src/components/daily/ScheduleItem.jsx
import { Clock, MapPin, Euro, Info } from 'lucide-react';

const ScheduleItem = ({ item }) => {
  const getPriceIcons = (price) => {
    return '€'.repeat(price.length);
  };

  return (
    <div className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <div className="flex-shrink-0 pt-1">
        <Clock className="w-5 h-5 text-blue-500" />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-lg">{item.name}</h3>
            {item.type && (
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-600 mt-1 inline-block">
                {item.type}
              </span>
            )}
          </div>
          <span className="text-sm text-gray-500">{item.time}</span>
        </div>
        
        <p className="text-gray-600 mt-2">{item.description}</p>
        
        {item.address && (
          <p className="flex items-center gap-2 text-sm text-gray-500 mt-2">
            <MapPin className="w-4 h-4" />
            {item.address}
          </p>
        )}
        
        <div className="mt-3 flex flex-wrap gap-3">
          {item.price && (
            <span className="text-sm text-gray-600">
              {getPriceIcons(item.price)}
            </span>
          )}
          
          {item.specialty && (
            <span className="text-sm text-blue-600">
              Spécialité: {item.specialty}
            </span>
          )}
          
          {item.atmosphere && (
            <span className="text-sm text-purple-600">
              Ambiance: {item.atmosphere}
            </span>
          )}
        </div>

        {item.mustTry && item.mustTry.length > 0 && (
          <div className="mt-3">
            <p className="text-sm font-medium text-gray-700">À essayer :</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {item.mustTry.map((dish, index) => (
                <span 
                  key={index}
                  className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full"
                >
                  {dish}
                </span>
              ))}
            </div>
          </div>
        )}

        {item.important && (
          <div className="mt-3 p-3 bg-yellow-50 rounded-lg">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-1" />
              <ul className="text-sm text-yellow-700 space-y-1">
                {item.important.map((info, index) => (
                  <li key={index}>• {info}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleItem;