// src/components/daily/DailySchedule.jsx
import { useState } from 'react';
import { Clock, MapPin, Euro } from 'lucide-react';
import { DAILY_DATA } from '../../data/dailyData';
import DayFilter from './DayFilter';
import ScheduleItem from './ScheduleItem';

const DailySchedule = () => {
  const [selectedDay, setSelectedDay] = useState('all');

  const filteredData = selectedDay === 'all' 
    ? DAILY_DATA 
    : DAILY_DATA.filter(day => day.day === selectedDay);

  return (
    <div className="space-y-6">
      <DayFilter selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      {filteredData.map((day) => (
        <div key={day.day} className="space-y-4">
          <h2 className="text-xl font-bold">{day.title}</h2>
          <div className="space-y-4">
            {day.mainProgram.map((item, index) => (
              <ScheduleItem key={index} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailySchedule;