import React from 'react';
import { BookingState, ReservationData } from '../../types';
import { CheckCircle, Calendar, Clock, MapPin } from 'lucide-react';

interface ConfirmationProps {
  bookingData: BookingState;
  reservationData: ReservationData;
  onConfirm: () => void;
  isProcessing: boolean;
}

const Confirmation: React.FC<ConfirmationProps> = ({ bookingData, reservationData, onConfirm, isProcessing }) => {
  const getServiceName = (id: string) => {
    for (const cat of reservationData.categories) {
      const srv = cat.services.find(s => s.id === id);
      if (srv) return srv.name;
    }
    return id;
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-potsdam-dark mb-6">Confirm Appointment</h2>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gray-50 p-6 border-b">
           <div className="flex items-center text-potsdam-dark mb-2">
             <Calendar className="mr-2" size={20} />
             <span className="font-bold text-xl">
               {bookingData.selectedDate?.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
             </span>
           </div>
           <div className="flex items-center text-potsdam-dark">
             <Clock className="mr-2" size={20} />
             <span className="font-bold text-xl">{bookingData.selectedTime}</span>
           </div>
        </div>

        {/* Details */}
        <div className="p-6 space-y-6">
          
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Location</h3>
            <div className="flex items-start">
              <MapPin className="mr-2 text-potsdam-red mt-0.5" size={18} />
              <p className="text-gray-900">{reservationData.settings.centerLocation}</p>
            </div>
          </div>

          <div>
             <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Selected Services</h3>
             <ul className="space-y-2">
               {Object.entries(bookingData.selectedServices).map(([id, count]) => (
                 (count as number) > 0 && (
                   <li key={id} className="flex justify-between border-b border-gray-100 pb-2">
                     <span>{getServiceName(id)}</span>
                     <span className="font-bold">x {count}</span>
                   </li>
                 )
               ))}
             </ul>
          </div>

          <div>
             <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Personal Data</h3>
             <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500 block">Name</span>
                  <span className="font-medium">{bookingData.userData.firstName} {bookingData.userData.lastName}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Email</span>
                  <span className="font-medium">{bookingData.userData.email}</span>
                </div>
             </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50 border-t flex flex-col items-center space-y-4">
          <p className="text-xs text-gray-500 text-center">
            By clicking confirm, a binding appointment will be booked. You will receive an email confirmation.
          </p>
          <button
            onClick={onConfirm}
            disabled={isProcessing}
            className="w-full md:w-auto px-8 py-3 bg-potsdam-red text-white font-bold rounded shadow hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center justify-center"
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Processing...
              </>
            ) : (
              'Confirm Appointment'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;