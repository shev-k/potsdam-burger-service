import React, { useState } from 'react';
import { RESERVATION_DATA } from '../reservationData';
import StepWizard from './reservation/StepWizard';
import ManageAppointment from './reservation/ManageAppointment';
import { ArrowLeft } from 'lucide-react';

interface ReservationModuleProps {
  onBack: () => void;
}

const ReservationModule: React.FC<ReservationModuleProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'new' | 'manage'>('new');

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-20 z-40 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-gray-500 hover:text-potsdam-red transition-colors font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </button>
          <h1 className="text-lg font-bold text-potsdam-dark hidden md:block">
            Online Appointment System
          </h1>
        </div>
        
        {/* Tabs */}
        <div className="container mx-auto px-4 lg:px-8 flex space-x-6">
          <button
            onClick={() => setActiveTab('new')}
            className={`pb-3 px-1 font-medium text-sm transition-colors border-b-2 ${
              activeTab === 'new' 
                ? 'border-potsdam-red text-potsdam-red' 
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            Book Appointment
          </button>
          <button
            onClick={() => setActiveTab('manage')}
            className={`pb-3 px-1 font-medium text-sm transition-colors border-b-2 ${
              activeTab === 'manage' 
                ? 'border-potsdam-red text-potsdam-red' 
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            Manage Existing
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-8">
        {activeTab === 'new' ? (
          <StepWizard data={RESERVATION_DATA} onDone={onBack} />
        ) : (
          <ManageAppointment />
        )}
      </div>
    </div>
  );
};

export default ReservationModule;