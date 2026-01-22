import React from 'react';
import { ServiceItem } from '../types';
import { ExternalLink, ArrowRight, Calendar } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onNavigate?: (path: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onNavigate }) => {
  const isInternal = service.cta?.url.startsWith('internal:') ?? false;

  const handleClick = (e: React.MouseEvent) => {
    if (isInternal && onNavigate && service.cta) {
      e.preventDefault();
      onNavigate(service.cta.url);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full border border-gray-100">
      {/* Image Header */}
      <div className="h-48 overflow-hidden relative group">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
      </div>

      {/* Body */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-potsdam-dark mb-3 leading-tight">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
          {service.description}
        </p>

        {/* Links Section */}
        {service.links && service.links.length > 0 && (
          <div className="mb-6 space-y-2">
            {service.links.map((link, idx) => (
              <a 
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-potsdam-blue hover:text-potsdam-red hover:underline transition-colors group"
              >
                <ArrowRight size={14} className="mr-2 group-hover:translate-x-1 transition-transform" />
                {link.label}
              </a>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          {service.cta && (
            <a
              href={isInternal ? '#' : service.cta.url}
              onClick={handleClick}
              target={isInternal ? undefined : "_blank"}
              rel={isInternal ? undefined : "noopener noreferrer"}
              className="w-full block bg-potsdam-red text-white text-center py-3 px-4 rounded font-bold uppercase tracking-wide text-sm hover:bg-red-700 transition-colors shadow-sm hover:shadow active:transform active:scale-[0.98] flex items-center justify-center"
            >
              <span>{service.cta.label}</span>
              {isInternal ? <Calendar size={16} className="ml-2" /> : <ExternalLink size={16} className="ml-2" />}
            </a>
          )}
          
          {service.contact && (
             <p className="text-center text-xs text-gray-400 mt-2">{service.contact}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;