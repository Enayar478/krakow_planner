// src/components/daily/DayFilter.jsx
import { Calendar } from 'lucide-react';

const DayFilter = ({ selectedDay, setSelectedDay }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <button
        onClick={() => setSelectedDay('all')}
        className={`px-4 py-2 rounded-full transition-colors ${
          selectedDay === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-100'
        }`}
      >
        <Calendar className="w-4 h-4 inline mr-2" />
        Tous les jours
      </button>
      {[1, 2, 3].map(day => (
        <button
          key={day}
          onClick={() => setSelectedDay(day)}
          className={`px-4 py-2 rounded-full transition-colors ${
            selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-100'
          }`}
        >
          <Calendar className="w-4 h-4 inline mr-2" />
          Jour {day}
        </button>
      ))}
    </div>
  );
};

export default DayFilter;