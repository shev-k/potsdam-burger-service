import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { MockSlots, ReservationText, Language } from '../../types';

interface CalendarWidgetProps {
  mockSlots: MockSlots;
  selectedDate: Date | null;
  selectedTime: string | null;
  onSelectDate: (date: Date) => void;
  onSelectTime: (time: string) => void;
  labels: ReservationText['wizard']['date'];
  lang: Language;
}

const CalendarWidget: React.FC<CalendarWidgetProps> = ({ 
  mockSlots, 
  selectedDate, 
  selectedTime, 
  onSelectDate, 
  onSelectTime,
  labels,
  lang
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  
  const locale = lang === 'de' ? 'de-DE' : 'en-US';

  // Generate calendar days
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 = Sun, 1 = Mon...
    
    // Adjust for Monday start (Germany standard)
    // Sunday (0) becomes 6, Monday (1) becomes 0
    const startOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    const days = [];
    // Padding
    for (let i = 0; i < startOffset; i++) {
      days.push(null);
    }
    // Actual days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const days = getDaysInMonth(currentMonth);

  const changeMonth = (delta: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + delta, 1);
    setCurrentMonth(newDate);
  };

  const isDateBlocked = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    return mockSlots.blockedDates.includes(dateStr) || mockSlots.fullyBookedDates.includes(dateStr);
  };

  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  // Simulating fetching slots
  useEffect(() => {
    if (selectedDate) {
      setLoadingSlots(true);
      setAvailableTimeSlots([]);
      setTimeout(() => {
        // Mock generation of slots
        const slots = ['08:00', '08:30', '09:00', '09:45', '11:00', '13:30', '14:45', '16:00'];
        setAvailableTimeSlots(slots);
        setLoadingSlots(false);
      }, 500);
    }
  }, [selectedDate]);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Calendar */}
      <div>
        <h3 className="text-lg font-bold text-potsdam-dark mb-4">{labels.subtitle}</h3>
        <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => changeMonth(-1)} className="p-1 hover:bg-gray-100 rounded">
              <ChevronLeft size={20} />
            </button>
            <span className="font-bold text-gray-800">
              {currentMonth.toLocaleDateString(locale, { month: 'long', year: 'numeric' })}
            </span>
            <button onClick={() => changeMonth(1)} className="p-1 hover:bg-gray-100 rounded">
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
            {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(d => (
              <div key={d} className="text-gray-400 font-medium">{d}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {days.map((d, idx) => {
              if (!d) return <div key={idx}></div>;
              
              const isSelected = selectedDate && 
                                 d.getDate() === selectedDate.getDate() && 
                                 d.getMonth() === selectedDate.getMonth();
              
              const blocked = isDateBlocked(d) || (isWeekend(d) && !mockSlots.openingHours.weekend);

              return (
                <button
                  key={idx}
                  onClick={() => !blocked && onSelectDate(d)}
                  disabled={blocked}
                  className={`h-10 rounded flex items-center justify-center text-sm transition-colors ${
                    isSelected 
                      ? 'bg-potsdam-red text-white font-bold shadow-sm'
                      : blocked 
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100 font-medium'
                  }`}
                >
                  {d.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Time Slots */}
      <div>
        <h3 className="text-lg font-bold text-potsdam-dark mb-4">
          {selectedDate 
            ? selectedDate.toLocaleDateString(locale, { weekday: 'long', month: 'long', day: 'numeric' }) 
            : labels.selectTime}
        </h3>
        
        {!selectedDate ? (
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg text-gray-400 bg-gray-50">
             <Clock size={32} className="mr-2 opacity-50" />
             <span>{labels.selectTime}</span>
          </div>
        ) : loadingSlots ? (
          <div className="h-64 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-potsdam-red"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
             {availableTimeSlots.map(time => (
               <button
                 key={time}
                 onClick={() => onSelectTime(time)}
                 className={`py-2 px-4 rounded border text-center transition-all ${
                   selectedTime === time
                     ? 'border-potsdam-red bg-red-50 text-potsdam-red font-bold ring-1 ring-potsdam-red'
                     : 'border-gray-200 hover:border-potsdam-red hover:text-potsdam-red text-gray-600'
                 }`}
               >
                 {time}
               </button>
             ))}
             {availableTimeSlots.length === 0 && (
               <p className="col-span-3 text-center text-gray-500 py-8">{labels.noSlots}</p>
             )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarWidget;
