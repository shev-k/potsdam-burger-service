import React from 'react';
import { ServiceCategory, ReservationText } from '../../types';
import { Info } from 'lucide-react';

interface ServiceSelectorProps {
  categories: ServiceCategory[];
  selectedServices: Record<string, number>;
  onUpdateService: (serviceId: string, delta: number) => void;
  labels: ReservationText['wizard']['services'];
  title: string;
}

const ServiceSelector: React.FC<ServiceSelectorProps> = ({ categories, selectedServices, onUpdateService, labels, title }) => {
  const getCount = (id: string) => selectedServices[id] || 0;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-potsdam-dark">{title}</h2>
      <p className="text-gray-600">{labels.subtitle}</p>

      <div className="space-y-4">
        {categories.map((cat) => (
          <div key={cat.id} className="border rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="bg-gray-50 p-4 border-b">
              <h3 className="font-bold text-lg text-potsdam-dark">{cat.name}</h3>
              <p className="text-sm text-gray-500">{cat.description}</p>
            </div>
            <div className="divide-y">
              {cat.services.map((service) => (
                <div key={service.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
                  <div className="flex-grow">
                    <div className="flex items-center">
                       <span className="font-medium text-gray-900">{service.name}</span>
                       <div className="group relative ml-2">
                          <Info size={16} className="text-gray-400 cursor-help" />
                          <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block w-64 bg-gray-800 text-white text-xs p-2 rounded z-10">
                            {labels.docsRequired} {service.docsRequired}
                          </div>
                       </div>
                    </div>
                    <span className="text-xs text-gray-500 block mt-1">
                      {labels.duration} {service.duration} {labels.mins}
                    </span>
                  </div>
                  
                  <div className="flex items-center bg-white border rounded-lg shadow-sm">
                    <button 
                      onClick={() => onUpdateService(service.id, -1)}
                      disabled={getCount(service.id) === 0}
                      className="p-2 text-gray-500 hover:text-potsdam-red disabled:opacity-30 disabled:hover:text-gray-500 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="w-10 text-center font-bold">{getCount(service.id)}</span>
                    <button 
                      onClick={() => onUpdateService(service.id, 1)}
                      className="p-2 text-gray-500 hover:text-potsdam-red transition-colors"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelector;
