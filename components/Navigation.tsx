import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Услуги', path: '/services' },
    { name: 'Блог', path: '/blog' },
    { name: 'Оракул AI', path: '/oracle' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-mystic-950/90 backdrop-blur-md border-b border-purple-900/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <Sparkles className="h-8 w-8 text-mystic-gold animate-pulse-slow" />
              <span className="font-serif text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-mystic-gold to-purple-400">
                Ezotveril
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-mystic-gold border-b-2 border-mystic-gold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="https://t.me/ezotveril" 
                target="_blank" 
                rel="noreferrer"
                className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-[0_0_15px_rgba(126,34,206,0.5)]"
              >
                Написать в TG
              </a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
              aria-label="Открыть меню"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-mystic-950 border-b border-purple-900/30 shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                   isActive(link.path) 
                   ? 'text-mystic-gold bg-white/10 border-l-4 border-mystic-gold' 
                   : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-white/10">
              <a 
                href="https://t.me/ezotveril" 
                target="_blank" 
                rel="noreferrer"
                className="block w-full text-center bg-gradient-to-r from-purple-700 to-purple-600 text-white px-4 py-3 rounded-xl font-bold shadow-lg"
              >
                Связаться в Telegram
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};