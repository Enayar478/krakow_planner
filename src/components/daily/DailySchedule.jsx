  // src/components/daily/DailySchedule.jsx
import React from 'react';
import { useKrakowPlanner } from '../../context/PlannerContext';
import { Clock, MapPin } from 'lucide-react';
import DayFilter from './DayFilter';

const DailySchedule = () => {
  const { dailyData, selectedDay } = useKrakowPlanner();

  const filteredData = selectedDay === 'all' 
    ? dailyData 
    : dailyData.filter(day => day.day === selectedDay);

  return (
    <div className="space-y-8">
      <DayFilter />
      
      {filteredData.map(day => (
        <div key={day.day} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">{day.title}</h2>
          
          <div className="space-y-4">
            {day.mainProgram.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{item.time}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">{item.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    
                    {item.address && (
                      <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span>{item.address}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailySchedule;