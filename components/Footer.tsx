import React from 'react';
import { Facebook, Youtube, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import { FooterContent } from '../types';

interface FooterProps {
  content: FooterContent;
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'facebook': return <Facebook size={20} />;
      case 'youtube': return <Youtube size={20} />;
      case 'xing': return <Linkedin size={20} />; // Using Linkedin icon as Xing placeholder
      case 'instagram': return <Instagram size={20} />;
      default: return <ExternalLink size={20} />;
    }
  };

  return (
    <footer className="bg-potsdam-dark text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          
          {/* Logo / Branding */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-2xl font-bold mb-2">Potsdam</div>
            <p className="text-gray-400 text-sm">{content.copyright}</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
            {content.links.map((link) => (
              <a 
                key={link.label}
                href={link.url}
                className="text-gray-300 hover:text-white hover:underline transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex space-x-4">
            {content.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded-full hover:bg-potsdam-red transition-colors"
                aria-label={social.platform}
              >
                {getIcon(social.platform)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;