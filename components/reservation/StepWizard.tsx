import React, { useState } from 'react';
import { ReservationData, BookingState } from '../../types';
import ServiceSelector from './ServiceSelector';
import CalendarWidget from './CalendarWidget';
import UserDataForm from './UserDataForm';
import Confirmation from './Confirmation';
import { Check } from 'lucide-react';

interface StepWizardProps {
  data: ReservationData;
  onDone: () => void;
}

const StepWizard: React.FC<StepWizardProps> = ({ data, onDone }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [confirmationDetails, setConfirmationDetails] = useState<{id: string, pin: string} | null>(null);

  const [bookingState, setBookingState] = useState<BookingState>({
    selectedServices: {},
    selectedDate: null,
    selectedTime: null,
    userData: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dob: '',
      gdpr: false
    }
  });

  const updateService = (id: string, delta: number) => {
    setBookingState(prev => {
      const current = prev.selectedServices[id] || 0;
      const next = Math.max(0, current + delta);
      return {
        ...prev,
        selectedServices: { ...prev.selectedServices, [id]: next }
      };
    });
  };

  const hasServices = Object.values(bookingState.selectedServices).some((v) => (v as number) > 0);
  const isUserValid = bookingState.userData.firstName && 
                      bookingState.userData.lastName && 
                      bookingState.userData.email.includes('@') && 
                      bookingState.userData.dob &&
                      bookingState.userData.gdpr;

  const nextStep = () => {
    setLoading(true);
    setTimeout(() => {
      setStep(s => s + 1);
      setLoading(false);
    }, 400); // Fake transition
  };

  const prevStep = () => setStep(s => s - 1);

  const confirmBooking = () => {
    setLoading(true);
    // Simulate backend call
    setTimeout(() => {
      setConfirmationDetails({
        id: `P-2026-${Math.floor(Math.random() * 10000)}`,
        pin: Math.floor(1000 + Math.random() * 9000).toString()
      });
      setCompleted(true);
      setLoading(false);
    }, 1500);
  };

  if (completed && confirmationDetails) {
    return (
      <div className="max-w-xl mx-auto text-center py-12 bg-white rounded-lg shadow p-8">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="text-green-600" size={40} />
        </div>
        <h2 className="text-3xl font-bold text-potsdam-dark mb-4">Booking Confirmed!</h2>
        <p className="text-gray-600 mb-8">
          Thank you. Your appointment has been successfully booked. 
          A confirmation email has been sent to <strong>{bookingState.userData.email}</strong>.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8 inline-block text-left w-full">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Appointment ID</p>
              <p className="text-2xl font-mono font-bold text-potsdam-dark">{confirmationDetails.id}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Security PIN</p>
              <p className="text-2xl font-mono font-bold text-potsdam-dark">{confirmationDetails.pin}</p>
            </div>
          </div>
          <p className="text-xs text-red-500 mt-4">* Please save these details to modify or cancel your appointment.</p>
        </div>

        <button 
          onClick={onDone}
          className="bg-potsdam-dark text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Progress Bar */}
      <div className="flex items-center justify-center mb-8 px-4">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center">
             <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
               step >= s ? 'bg-potsdam-red text-white' : 'bg-gray-200 text-gray-500'
             }`}>
               {s}
             </div>
             {s < 4 && <div className={`w-8 md:w-16 h-1 mx-2 ${step > s ? 'bg-potsdam-red' : 'bg-gray-200'}`}></div>}
          </div>
        ))}
      </div>

      <div className="mb-20">
        {step === 1 && (
          <ServiceSelector 
            categories={data.categories} 
            selectedServices={bookingState.selectedServices}
            onUpdateService={updateService}
          />
        )}
        
        {step === 2 && (
          <CalendarWidget 
            mockSlots={data.mockSlots}
            selectedDate={bookingState.selectedDate}
            selectedTime={bookingState.selectedTime}
            onSelectDate={(d) => setBookingState(p => ({...p, selectedDate: d, selectedTime: null}))}
            onSelectTime={(t) => setBookingState(p => ({...p, selectedTime: t}))}
          />
        )}

        {step === 3 && (
          <UserDataForm 
            data={bookingState.userData}
            onChange={(d) => setBookingState(p => ({...p, userData: d}))}
            isValid={!!isUserValid}
          />
        )}

        {step === 4 && (
          <Confirmation 
             bookingData={bookingState} 
             reservationData={data}
             onConfirm={confirmBooking}
             isProcessing={loading}
          />
        )}
      </div>

      {/* Sticky Footer */}
      {step < 4 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
          <div className="container mx-auto flex justify-between items-center max-w-4xl">
            {step > 1 ? (
              <button 
                onClick={prevStep}
                className="px-6 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors font-medium"
              >
                Back
              </button>
            ) : (
              <div></div> // Spacer
            )}
            
            <button 
              onClick={nextStep}
              disabled={
                (step === 1 && !hasServices) ||
                (step === 2 && (!bookingState.selectedDate || !bookingState.selectedTime)) ||
                (step === 3 && !isUserValid) ||
                loading
              }
              className="px-8 py-2 bg-potsdam-red text-white rounded hover:bg-red-700 disabled:opacity-50 disabled:hover:bg-potsdam-red transition-colors font-bold shadow-sm"
            >
               {loading ? '...' : step === 3 ? 'Review' : 'Next'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StepWizard;