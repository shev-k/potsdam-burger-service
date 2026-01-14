import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { MockSlots } from '../../types';

interface CalendarWidgetProps {
  mockSlots: MockSlots;
  selectedDate: Date | null;
  selectedTime: string | null;
  onSelectDate: (date: Date) => void;
  onSelectTime: (time: string) => void;
}

const CalendarWidget: React.FC<CalendarWidgetProps> = ({ 
  mockSlots, 
  selectedDate, 
  selectedTime, 
  onSelectDate, 
  onSelectTime 
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

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
    const dateString = date.toISOString().split('T')[0];
    if (mockSlots.blockedDates.includes(dateString)) return true;
    if (mockSlots.fullyBookedDates.includes(dateString)) return true;
    
    // Block weekends if configured
    const day = date.getDay();
    if (!mockSlots.openingHours.weekend && (day === 0 || day === 6)) return true;

    // Block past dates
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) return true;

    return false;
  };

  const isSelected = (date: Date) => {
    return selectedDate && 
           date.getDate() === selectedDate.getDate() && 
           date.getMonth() === selectedDate.getMonth() && 
           date.getFullYear() === selectedDate.getFullYear();
  };

  // Simulate fetching slots when date changes
  useEffect(() => {
    if (selectedDate) {
      setLoadingSlots(true);
      setAvailableTimeSlots([]);
      
      // Fake API delay
      const timer = setTimeout(() => {
        const slots: string[] = [];
        const startHour = parseInt(mockSlots.openingHours.start.split(':')[0]);
        const endHour = parseInt(mockSlots.openingHours.end.split(':')[0]);
        
        for (let h = startHour; h < endHour; h++) {
          for (let m = 0; m < 60; m += 15) {
            // Randomly block some slots to simulate real bookings
            if (Math.random() > 0.4) {
               const timeStr = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
               slots.push(timeStr);
            }
          }
        }
        setAvailableTimeSlots(slots);
        setLoadingSlots(false);
      }, 600);
      
      return () => clearTimeout(timer);
    }
  }, [selectedDate, mockSlots]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Calendar Side */}
      <div>
        <h2 className="text-2xl font-bold text-potsdam-dark mb-6">Choose Date</h2>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gray-50 border-b">
            <button onClick={() => changeMonth(-1)} className="p-2 hover:bg-gray-200 rounded-full">
              <ChevronLeft size={20} />
            </button>
            <span className="font-bold text-lg">
              {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </span>
            <button onClick={() => changeMonth(1)} className="p-2 hover:bg-gray-200 rounded-full">
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Grid Header */}
          <div className="grid grid-cols-7 text-center p-2 text-xs font-bold text-gray-500 uppercase tracking-wide">
            <div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 p-2 gap-1">
            {days.map((date, idx) => {
              if (!date) return <div key={idx} className="h-10"></div>;
              
              const blocked = isDateBlocked(date);
              const selected = isSelected(date);
              
              return (
                <button
                  key={idx}
                  onClick={() => !blocked && onSelectDate(date)}
                  disabled={blocked}
                  className={`
                    h-10 w-full rounded-md flex items-center justify-center text-sm font-medium transition-all
                    ${selected 
                      ? 'bg-potsdam-red text-white shadow-md transform scale-105' 
                      : blocked 
                        ? 'text-gray-300 cursor-not-allowed bg-gray-50' 
                        : 'text-gray-700 hover:bg-blue-50 hover:text-potsdam-blue'
                    }
                  `}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
          
          <div className="p-4 bg-gray-50 text-xs text-gray-500 flex justify-between border-t">
            <div className="flex items-center"><div className="w-3 h-3 bg-potsdam-red rounded-full mr-1"></div> Selected</div>
            <div className="flex items-center"><div className="w-3 h-3 bg-white border border-gray-300 rounded-full mr-1"></div> Available</div>
            <div className="flex items-center"><div className="w-3 h-3 bg-gray-200 rounded-full mr-1"></div> Blocked</div>
          </div>
        </div>
      </div>

      {/* Time Slots Side */}
      <div>
        <h2 className="text-2xl font-bold text-potsdam-dark mb-6">Choose Time</h2>
        
        {!selectedDate ? (
          <div className="h-64 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded-lg">
            <Clock size={48} className="mb-4 opacity-20" />
            <p>Please select a date first</p>
          </div>
        ) : loadingSlots ? (
          <div className="h-64 flex items-center justify-center">
             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-potsdam-red"></div>
          </div>
        ) : availableTimeSlots.length === 0 ? (
          <div className="h-64 flex items-center justify-center text-red-500 border border-red-100 bg-red-50 rounded-lg">
            <p>No appointments available for this date.</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 max-h-96 overflow-y-auto">
             <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
               {availableTimeSlots.map((time) => (
                 <button
                   key={time}
                   onClick={() => onSelectTime(time)}
                   className={`
                     py-2 px-1 rounded text-sm font-medium border transition-colors
                     ${selectedTime === time
                       ? 'bg-potsdam-blue text-white border-potsdam-blue'
                       : 'border-gray-200 text-gray-700 hover:border-potsdam-blue hover:text-potsdam-blue'
                     }
                   `}
                 >
                   {time}
                 </button>
               ))}
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarWidget;