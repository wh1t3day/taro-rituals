import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { ServiceCard } from '../components/ServiceCard';
import { ServiceCategory, ServiceItem } from '../types';
import { Heart, Coins, Skull, Sparkles, Eye, User, Layers } from 'lucide-react';

const servicesData: ServiceItem[] = [
  {
    id: 'love-binding',
    title: 'Любовный приворот',
    description: 'Мой авторский ритуал на разжигание чувств и создание привязанности. Работаю по фото, лично контролирую процесс.',
    price: 'от 7 000 ₽',
    category: ServiceCategory.RITUALS,
    icon: Heart,
    popular: true
  },
  {
    id: 'sex-binding',
    title: 'Сексуальная привязка',
    description: 'Ритуал на пробуждение дикой страсти. Партнер будет желать только вас. Провожу лично.',
    price: 'от 6 500 ₽',
    category: ServiceCategory.RITUALS,
    icon: Heart
  },
  {
    id: 'money-channel',
    title: 'Открытие денежного канала',
    description: 'Снимаю блоки, мешающие притоку денег. Ставлю защиту на бизнес и привлекаю удачу.',
    price: 'от 6 000 ₽',
    category: ServiceCategory.RITUALS,
    icon: Coins,
    popular: true
  },
  {
    id: 'curse',
    title: 'Наведение порчи',
    description: 'Жесткое воздействие на врага. Наказание обидчиков, устранение конкурентов. Дорого. Конфиденциально.',
    price: 'от 50 000 ₽',
    category: ServiceCategory.RITUALS,
    icon: Skull
  },
  {
    id: 'self-cleanse',
    title: 'Чистка от негатива',
    description: 'Лично снимаю сглаз, порчу, родовые проклятия. Восстанавливаю ваше энергетическое поле.',
    price: 'от 5 500 ₽',
    category: ServiceCategory.ENERGY,
    icon: Sparkles
  },
  {
    id: 'tarot',
    title: 'Личный расклад Таро',
    description: 'Я сама делаю расклад на вашу ситуацию. Глубокий анализ отношений, работы и будущего. Не нейросеть.',
    price: '300 ₽',
    category: ServiceCategory.DIVINATION,
    icon: Layers
  },
  {
    id: 'matrix',
    title: 'Разбор Матрицы Судьбы',
    description: 'Персональный расчет и расшифровка вашего предназначения, кармы и денежного потенциала по дате рождения.',
    price: '2 000 ₽',
    category: ServiceCategory.DIVINATION,
    icon: User
  },
  {
    id: 'diagnostics',
    title: 'Энергодиагностика',
    description: 'Просмотр вашего биополя (по фото). Выявляю пробои, крадники и магические воздействия.',
    price: '1 500 ₽',
    category: ServiceCategory.ENERGY,
    icon: Eye
  }
];

export const ServicesPage: React.FC = () => {
  const [filter, setFilter] = useState<ServiceCategory | 'All'>('All');

  const filteredServices = filter === 'All' 
    ? servicesData 
    : servicesData.filter(s => s.category === filter);

  return (
    <div className="pt-24 pb-12 min-h-screen">
      <SEOHead 
        title="Услуги и Цены | Магия, Таро, Привороты" 
        description="Прайс на услуги Ezotveril: Таро расклады (300₽), Матрица Судьбы (2000₽), диагностика (1500₽), любовные ритуалы (от 6000₽) и порчи (от 50к). Индивидуальный подход." 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Платные Услуги Мастера</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Я лично работаю с каждым клиентом. Цены отражают качество и энергозатраты. Сложные работы требуют серьезных вложений.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', ...Object.values(ServiceCategory)].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as ServiceCategory | 'All')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                  ? 'bg-mystic-gold text-mystic-950 shadow-[0_0_15px_rgba(212,175,55,0.3)]' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {cat === 'All' ? 'Все услуги' : cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="mt-16 bg-purple-900/20 border border-purple-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-serif text-white mb-4">Нужна индивидуальная помощь?</h3>
          <p className="text-gray-300 mb-6">
            Если вы не нашли нужной услуги или ситуация требует особого подхода, напишите мне.
            Я проведу диагностику и предложу решение.
          </p>
          <a 
            href="https://t.me/ezotveril" 
            target="_blank" 
            rel="noreferrer" 
            className="text-mystic-gold font-bold hover:underline text-lg"
          >
            Написать в Telegram лично Мастеру &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};