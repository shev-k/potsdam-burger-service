import React, { useState } from 'react';
import { ExistingAppointment, ReservationText, ReservationData } from '../../types';
import { Search, Trash2, Calendar, Clock, User } from 'lucide-react';

interface ManageAppointmentProps {
  data: ReservationData;
  labels: ReservationText['manage'];
}

const ManageAppointment: React.FC<ManageAppointmentProps> = ({ data, labels }) => {
  const [appointmentId, setAppointmentId] = useState('');
  const [pin, setPin] = useState('');
  const [foundAppointment, setFoundAppointment] = useState<ExistingAppointment | null>(null);
  const [error, setError] = useState('');
  const [cancelled, setCancelled] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setCancelled(false);
    setFoundAppointment(null);

    // Mock search logic
    const appt = data.existingAppointments.find(
      a => a.appointmentId === appointmentId && a.pin === pin
    );

    if (appt) {
      setFoundAppointment(appt);
    } else {
      setError(labels.errorNotFound);
    }
  };

  const handleCancel = () => {
    if (confirm(labels.confirmCancel)) {
      setCancelled(true);
      setFoundAppointment(null);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-potsdam-dark">{labels.title}</h2>
        <p className="text-gray-600">{labels.subtitle}</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        {!foundAppointment && !cancelled && (
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{labels.labelApptId}</label>
              <input 
                type="text" 
                value={appointmentId}
                onChange={(e) => setAppointmentId(e.target.value)}
                className="w-full border p-2 rounded focus:ring-potsdam-blue focus:border-potsdam-blue"
                placeholder="e.g. 392810"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{labels.labelPin}</label>
              <input 
                type="password" 
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full border p-2 rounded focus:ring-potsdam-blue focus:border-potsdam-blue"
                placeholder="****"
                maxLength={4}
                required
              />
              <div className="flex justify-end mt-1">
                <button 
                  type="button"
                  onClick={() => alert("Mock: This would trigger the PIN recovery process (e.g. email/SMS).")}
                  className="text-sm text-blue-600 hover:text-blue-800 underline"
                >
                  Forgot PIN?
                </button>
              </div>
            </div>
            
            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button 
              type="submit"
              className="w-full bg-potsdam-dark text-white py-2 rounded hover:bg-gray-800 transition-colors flex justify-center items-center"
            >
              <Search size={18} className="mr-2" />
              {labels.btnSearch}
            </button>
          </form>
        )}

        {foundAppointment && (
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded p-4 text-green-800 text-center">
              {labels.apptFound}
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-800">
                <User size={18} className="mr-3 text-gray-400" />
                <span className="font-medium">{foundAppointment.customerName}</span>
              </div>
              <div className="flex items-center text-gray-800">
                <Calendar size={18} className="mr-3 text-gray-400" />
                <span>{foundAppointment.date}</span>
              </div>
              <div className="flex items-center text-gray-800">
                <Clock size={18} className="mr-3 text-gray-400" />
                <span>{foundAppointment.time}</span>
              </div>
               <div className="flex items-start text-gray-800">
                <div className="w-5 mr-3">
                    <span className="block w-2 h-2 rounded-full bg-potsdam-red mt-2 mx-auto"></span>
                </div>
                <span>{foundAppointment.service}</span>
              </div>
            </div>

            <button 
              onClick={handleCancel}
              className="w-full border border-red-200 text-red-600 bg-red-50 py-2 rounded hover:bg-red-100 transition-colors flex justify-center items-center"
            >
              <Trash2 size={18} className="mr-2" />
              {labels.cancelBtn}
            </button>
          </div>
        )}

        {cancelled && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{labels.successCancelled}</h3>
            
            <button 
              onClick={() => { setCancelled(false); setAppointmentId(''); setPin(''); }}
              className="text-potsdam-blue hover:underline font-medium"
            >
              Back to search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageAppointment;
