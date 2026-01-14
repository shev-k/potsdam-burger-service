import React from 'react';
import { AdditionalOffer } from '../types';
import { ChevronRight } from 'lucide-react';

interface AdditionalOffersProps {
  offers: AdditionalOffer[];
}

const AdditionalOffers: React.FC<AdditionalOffersProps> = ({ offers }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
      <h3 className="text-2xl font-bold text-potsdam-dark mb-6 border-b pb-4">
        More Services
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {offers.map((offer, idx) => (
          <div key={idx} className="flex items-start group">
            <div className="mt-1 mr-3 text-potsdam-red flex-shrink-0">
               <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
            <div>
              {offer.link ? (
                 <a 
                   href={offer.link}
                   className="font-bold text-potsdam-dark hover:text-potsdam-red transition-colors block text-lg mb-1"
                 >
                   {offer.title}
                 </a>
              ) : (
                <h4 className="font-bold text-potsdam-dark text-lg mb-1">{offer.title}</h4>
              )}
              <p className="text-gray-600 text-sm">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalOffers;