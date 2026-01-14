import React, { useState, useEffect } from 'react';
import { CONTENT } from './constants';
import { Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Alert from './components/Alert';
import ServiceCard from './components/ServiceCard';
import AdditionalOffers from './components/AdditionalOffers';
import Footer from './components/Footer';
import ReservationModule from './components/ReservationModule';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [currentView, setCurrentView] = useState<'home' | 'reservation'>('home');

  // Load language preference if persisted (optional enhancement)
  useEffect(() => {
    // Simple mock for initial load or logic to read browser lang could go here
    document.documentElement.lang = lang;
  }, [lang]);

  const currentContent = CONTENT[lang];

  const handleNavigate = (path: string) => {
    if (path.startsWith('internal:')) {
      setCurrentView('reservation');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (currentView === 'reservation') {
    return (
      <ReservationModule onBack={() => setCurrentView('home')} />
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-gray-50">
      
      <Navbar 
        metadata={currentContent.siteMetadata} 
        navLinks={currentContent.navigation}
        currentLang={lang}
        onToggleLang={setLang}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero content={currentContent.pageContent.hero} />

        {/* Main Content Area */}
        <div className="container mx-auto px-4 lg:px-8 -mt-16 relative z-10 mb-20">
          
          {/* Info Alert */}
          <Alert content={currentContent.pageContent.alert} />

          {/* Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {currentContent.pageContent.services.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onNavigate={handleNavigate}
              />
            ))}
          </div>

          {/* Additional Services */}
          <AdditionalOffers offers={currentContent.pageContent.additionalOffers} />
        </div>
      </main>

      <Footer content={currentContent.footer} />
    </div>
  );
};

export default App;