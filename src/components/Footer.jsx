import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 border-t border-slate-700/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p className="flex items-center space-x-2">
              <span>© 2023 Sadhiq. Made with</span>
              <Heart className="text-red-400" size={16} />
              <span>and lots of coffee.</span>
            </p>
          </div>
          
          <div className="text-gray-400 text-sm">
            <p>Built with React, JavaScript & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;