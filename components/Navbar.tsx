import React from 'react';
import { Search, Globe } from 'lucide-react';
import { NavLink, Language, SiteMetadata } from '../types';

interface NavbarProps {
  metadata: SiteMetadata;
  navLinks: NavLink[];
  currentLang: Language;
  onToggleLang: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ metadata, navLinks, currentLang, onToggleLang }) => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-potsdam-red rounded-sm flex items-center justify-center text-white font-bold text-xl">
            P
          </div>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-gray-500">
              {currentLang === 'en' ? 'State Capital City' : 'Landeshauptstadt'}
            </span>
            <span className="font-bold text-lg leading-tight text-potsdam-dark">
              Potsdam
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className="text-potsdam-dark hover:text-potsdam-red font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Utilities */}
        <div className="flex items-center space-x-4">
          {/* Hotline (Desktop only) */}
          <div className="hidden lg:flex flex-col items-end mr-4">
            <span className="text-xs text-gray-500">{metadata.hotlineLabel}</span>
            <a href={`tel:${metadata.hotline.replace(/[^\d+]/g, '')}`} className="font-bold text-potsdam-red hover:underline">
              {metadata.hotline}
            </a>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center bg-gray-100 rounded-full p-1">
            <button
              onClick={() => onToggleLang('de')}
              className={`px-3 py-1 text-sm rounded-full transition-all ${
                currentLang === 'de' ? 'bg-potsdam-dark text-white shadow-sm' : 'text-gray-600 hover:text-potsdam-dark'
              }`}
            >
              DE
            </button>
            <button
              onClick={() => onToggleLang('en')}
              className={`px-3 py-1 text-sm rounded-full transition-all ${
                currentLang === 'en' ? 'bg-potsdam-dark text-white shadow-sm' : 'text-gray-600 hover:text-potsdam-dark'
              }`}
            >
              EN
            </button>
          </div>

          {/* Search Icon */}
          <button className="p-2 text-gray-600 hover:text-potsdam-red transition-colors" aria-label="Search">
            <Search size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;