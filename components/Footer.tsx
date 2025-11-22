import React from 'react';
import { Send } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-mystic-950 border-t border-purple-900/30 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif text-mystic-gold mb-4">Ezotveril</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ваш путеводитель в мир непознанного. Мы помогаем найти ответы, обрести гармонию и изменить судьбу.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#/" className="hover:text-mystic-gold">Главная</a></li>
              <li><a href="#/services" className="hover:text-mystic-gold">Услуги</a></li>
              <li><a href="#/blog" className="hover:text-mystic-gold">Магический Блог</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Контакты</h3>
            <p className="text-gray-400 text-sm mb-4">
              Индивидуальный подход к каждой ситуации. Полная конфиденциальность.
            </p>
            <a 
              href="https://t.me/ezotveril" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-mystic-gold hover:text-purple-400 transition-colors"
            >
              <Send size={18} />
              t.me/ezotveril
            </a>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Ezotveril. Все права защищены. Магия существует.</p>
        </div>
      </div>
    </footer>
  );
};
