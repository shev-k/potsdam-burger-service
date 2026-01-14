import React from 'react';
import { HeroSection } from '../types';

interface HeroProps {
  content: HeroSection;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <div className="relative w-full h-80 md:h-96 lg:h-[28rem] bg-gray-200 overflow-hidden">
      {/* Background Image */}
      <img 
        src={content.image} 
        alt="Hero Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-potsdam-dark/90 to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-md">
              {content.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-100 font-light leading-relaxed drop-shadow-sm">
              {content.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;