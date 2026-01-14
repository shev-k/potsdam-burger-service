import React from 'react';

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  gdpr: boolean;
}

interface UserDataFormProps {
  data: UserData;
  onChange: (data: UserData) => void;
  isValid: boolean;
}

const UserDataForm: React.FC<UserDataFormProps> = ({ data, onChange, isValid }) => {
  
  const handleChange = (field: keyof UserData, value: string | boolean) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-potsdam-dark mb-6">Personal Information</h2>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
            <input 
              type="text" 
              value={data.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-potsdam-blue focus:border-potsdam-blue p-2 border"
              placeholder="Max"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
            <input 
              type="text" 
              value={data.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-potsdam-blue focus:border-potsdam-blue p-2 border"
              placeholder="Mustermann"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
          <input 
            type="date" 
            value={data.dob}
            onChange={(e) => handleChange('dob', e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-potsdam-blue focus:border-potsdam-blue p-2 border"
          />
          <p className="text-xs text-gray-500 mt-1">Required for verifying identity for certain documents.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
            <input 
              type="email" 
              value={data.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={`w-full border rounded-md shadow-sm focus:ring-potsdam-blue focus:border-potsdam-blue p-2 ${
                data.email && !data.email.includes('@') ? 'border-red-300 focus:border-red-500' : 'border-gray-300'
              }`}
              placeholder="max@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input 
              type="tel" 
              value={data.phone}
              onChange={(e) => handleChange('phone', e.target.value.replace(/[^0-9+ ]/g, ''))}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-potsdam-blue focus:border-potsdam-blue p-2 border"
              placeholder="+49 123 45678"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
           <label className="flex items-start">
             <input 
               type="checkbox" 
               checked={data.gdpr}
               onChange={(e) => handleChange('gdpr', e.target.checked)}
               className="mt-1 h-4 w-4 text-potsdam-blue focus:ring-potsdam-blue border-gray-300 rounded"
             />
             <span className="ml-2 text-sm text-gray-600">
               I consent to the processing of my personal data for the purpose of appointment booking in accordance with the <a href="#" className="text-potsdam-blue hover:underline">Privacy Policy</a>. *
             </span>
           </label>
        </div>
        
      </div>
    </div>
  );
};

export default UserDataForm;