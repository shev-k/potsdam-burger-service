import React from 'react';
import { AlertSection } from '../types';
import { Info, AlertTriangle, AlertCircle } from 'lucide-react';

interface AlertProps {
  content: AlertSection;
}

const Alert: React.FC<AlertProps> = ({ content }) => {
  const getIcon = () => {
    switch (content.type) {
      case 'warning': return <AlertTriangle className="text-orange-600" />;
      case 'error': return <AlertCircle className="text-red-600" />;
      default: return <Info className="text-potsdam-blue" />;
    }
  };

  const getStyles = () => {
     switch (content.type) {
      case 'warning': return "bg-orange-50 border-orange-200 text-orange-800";
      case 'error': return "bg-red-50 border-red-200 text-red-800";
      default: return "bg-blue-50 border-blue-200 text-blue-900";
    }
  }

  return (
    <div className={`border-l-4 p-4 rounded-r shadow-sm flex items-start space-x-3 mb-8 ${getStyles()}`}>
      <div className="flex-shrink-0 mt-0.5">
        {getIcon()}
      </div>
      <div>
        <p className="font-medium">{content.text}</p>
      </div>
    </div>
  );
};

export default Alert;