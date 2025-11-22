import React from 'react';
import { ServiceItem } from '../types';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="group relative h-full flex flex-col bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:bg-white/[0.05] hover:border-mystic-gold/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] hover:-translate-y-2">
      
      {/* Glow effect background */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {service.popular && (
        <span className="absolute top-4 right-4 bg-gradient-to-r from-mystic-gold to-amber-300 text-mystic-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 shadow-lg">
          Топ
        </span>
      )}
      
      <div className="relative z-10 mb-6">
        <div className="w-14 h-14 rounded-2xl bg-purple-900/30 flex items-center justify-center text-purple-300 group-hover:text-mystic-gold group-hover:scale-110 transition-all duration-500 group-hover:bg-purple-900/50">
           {Icon ? <Icon size={32} strokeWidth={1.5} /> : <div className="h-10 w-10 bg-gray-700 rounded-full" />}
        </div>
      </div>

      <h3 className="relative z-10 text-xl font-serif font-bold text-white mb-3 group-hover:text-mystic-gold transition-colors">{service.title}</h3>
      <p className="relative z-10 text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow group-hover:text-gray-300">
        {service.description}
      </p>

      <div className="relative z-10 flex items-center justify-between mt-auto pt-4 border-t border-white/5 group-hover:border-mystic-gold/20 transition-colors">
        <span className="text-mystic-gold font-semibold text-lg">{service.price}</span>
        <a 
          href={`https://t.me/ezotveril?start=order_${service.id}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-all group-hover:translate-x-1"
        >
          Заказать <ArrowRight size={16} className="text-purple-400 group-hover:text-mystic-gold" />
        </a>
      </div>
    </div>
  );
};