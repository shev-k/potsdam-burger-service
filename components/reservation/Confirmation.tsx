import React, { useState } from 'react';
import { BookingState, ReservationData, ReservationText, Language } from '../../types';
import { CheckCircle, Calendar, Clock, MapPin } from 'lucide-react';

interface ConfirmationProps {
  bookingData: BookingState;
  reservationData: ReservationData;
  onConfirm: () => void;
  isProcessing: boolean;
  labels: ReservationText['wizard']['confirm'];
  title: string;
  btnLabel: string;
  lang: Language;
}

const Confirmation: React.FC<ConfirmationProps> = ({ bookingData, reservationData, onConfirm, isProcessing, labels, title, btnLabel, lang }) => {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [hasOldPassport, setHasOldPassport] = useState(false);

  const getServiceName = (id: string) => {
    for (const cat of reservationData.categories) {
      const srv = cat.services.find(s => s.id === id);
      if (srv) return srv.name;
    }
    return id;
  };

  const locale = lang === 'de' ? 'de-DE' : 'en-US';

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-potsdam-dark mb-6">{title}</h2>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gray-50 p-6 border-b">
           <div className="flex items-center text-potsdam-dark mb-2">
             <Calendar className="mr-2" size={20} />
             <span className="font-bold text-xl">
               {bookingData.selectedDate?.toLocaleDateString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
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
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">{labels.location}</h3>
            <div className="flex items-start">
              <MapPin className="mr-2 text-potsdam-red mt-0.5" size={18} />
              <p className="text-gray-900">{reservationData.settings.centerLocation}</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">{labels.services}</h3>
             <ul className="space-y-2">
               {Object.entries(bookingData.selectedServices).map(([id, count]) => (
                 (count as number) > 0 && (
                   <li key={id} className="flex justify-between items-center text-gray-900 pb-2 border-b border-gray-100 last:border-0">
                     <span>{getServiceName(id)}</span>
                     <span className="font-bold bg-gray-100 px-2 py-0.5 rounded text-sm">x{count}</span>
                   </li>
                 )
               ))}
             </ul>
          </div>

          <div>
             <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">{labels.contact}</h3>
             <div className="bg-gray-50 p-3 rounded text-sm space-y-1 text-gray-700">
                <p><span className="font-medium">Name:</span> {bookingData.userData.firstName} {bookingData.userData.lastName}</p>
                <p><span className="font-medium">Email:</span> {bookingData.userData.email}</p>
                {bookingData.userData.phone && <p><span className="font-medium">Phone:</span> {bookingData.userData.phone}</p>}
             </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg flex items-start">
             <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={20} />
             <div>
               <p className="text-sm text-blue-800">
                 {labels.bringDocs}
               </p>
             </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
             <h3 className="text-sm font-bold text-yellow-800 uppercase tracking-wider mb-2">My Checklist</h3>
             <div className="space-y-2">
               <label className="flex items-center space-x-2 cursor-pointer">
                 <input 
                   type="checkbox" 
                   checked={hasPhoto} 
                   onChange={(e) => setHasPhoto(e.target.checked)}
                   className="rounded text-potsdam-red focus:ring-potsdam-red"
                 />
                 <span className="text-sm text-yellow-900">I have a Biometric Photo</span>
               </label>
               <label className="flex items-center space-x-2 cursor-pointer">
                 <input 
                   type="checkbox" 
                   checked={hasOldPassport} 
                   onChange={(e) => setHasOldPassport(e.target.checked)}
                   className="rounded text-potsdam-red focus:ring-potsdam-red"
                 />
                 <span className="text-sm text-yellow-900">I have my Old Passport</span>
               </label>
             </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 border-t">
           <button 
             onClick={onConfirm}
             disabled={isProcessing || !hasPhoto || !hasOldPassport}
             className="w-full bg-potsdam-red text-white py-3 rounded font-bold text-lg hover:bg-red-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-wait"
           >
             {isProcessing ? 'Processing...' : btnLabel}
           </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
