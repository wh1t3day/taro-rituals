import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Heart, ShieldAlert, Sparkles, Gem, Quote, UserCheck, Scale, Shield, Moon, Star, Sun, ArrowRight } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-mystic-950">
      <SEOHead 
        title="Ezotveril | Магическая Помощь, Таро и Ритуалы" 
        description="Профессиональная магия от Ezotveril: сильные привороты, денежные ритуалы, снятие порчи и защита. Точные расклады Таро и разбор Матрицы Судьбы. Личная работа мастера до результата." 
      />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Starry texture */}
          <div className="absolute inset-0 opacity-20 bg-[size:20px_20px] bg-stars"></div>
          
          {/* Central Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow"></div>
          
          {/* Rotating Mystical Circles (The Portal) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-purple-500/10 rounded-full animate-spin-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-mystic-gold/10 rounded-full animate-[spin_20s_linear_reverse_infinite]"></div>
          
          {/* Floating Symbols */}
          <div className="absolute top-1/4 left-10 sm:left-20 text-purple-500/30 animate-float">
            <Moon size={48} strokeWidth={1} />
          </div>
          <div className="absolute bottom-1/4 right-10 sm:right-20 text-mystic-gold/30 animate-float-delayed">
            <Sun size={64} strokeWidth={1} />
          </div>
          <div className="absolute top-20 right-1/4 text-blue-400/20 animate-pulse">
            <Star size={32} fill="currentColor" />
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-mystic-gold" />
            <span className="text-xs uppercase tracking-widest text-gray-300 font-medium">Личная Эзотерическая Практика</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold leading-tight mb-6 animate-slide-up">
            <span className="block text-white drop-shadow-lg">Магия</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mystic-gold via-amber-200 to-mystic-gold bg-[length:200%_auto] animate-shimmer">
              Вашей Судьбы
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Я объединяю древние знания Таро, точность Матрицы Судьбы и силу Ритуальной магии для решения ваших жизненных задач.
            <span className="block mt-2 text-purple-200 font-normal">Личная работа. Без посредников.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link 
              to="/services" 
              className="group relative px-8 py-4 bg-mystic-gold rounded-full overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12"></div>
              <span className="relative flex items-center justify-center gap-2 text-mystic-950 font-bold tracking-wide">
                Выбрать Услугу <ArrowRight size={18} />
              </span>
            </Link>
            
            <Link 
              to="/oracle" 
              className="group px-8 py-4 rounded-full border border-purple-500/30 bg-purple-900/10 backdrop-blur-sm hover:bg-purple-900/30 hover:border-purple-400 transition-all hover:-translate-y-1"
            >
              <span className="flex items-center justify-center gap-2 text-purple-200 font-medium">
                <Sparkles size={18} className="text-purple-400 group-hover:animate-spin" />
                Спросить Оракула (Free)
              </span>
            </Link>
          </div>

          {/* Stats/Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 sm:gap-16 text-sm text-gray-500 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center gap-2">
              <UserCheck size={16} className="text-mystic-gold" />
              <span>Личный прием</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-mystic-gold" />
              <span>100% Анонимно</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={16} className="text-mystic-gold" />
              <span>5+ Лет Практики</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me - Redesigned Block */}
      <section className="py-24 relative overflow-hidden bg-mystic-900">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-900/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Почему обращаются ко мне?
            </h2>
            <div className="h-1 w-24 bg-mystic-gold mx-auto rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1: Personal */}
            <div className="group bg-mystic-950 border border-white/5 hover:border-mystic-gold/50 p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(126,34,206,0.1)]">
              <div className="w-16 h-16 bg-purple-900/20 rounded-2xl flex items-center justify-center mb-6 text-mystic-gold group-hover:scale-110 transition-transform duration-500 group-hover:bg-purple-900/40">
                <UserCheck size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-mystic-gold transition-colors">Личная Практика</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                Я не агентство и не безликий "поток". Ezotveril — это моя личная практика. 
                Я объединяю силу Таро, Матрицы Судьбы и ритуальной магии, лично погружаясь в вашу проблему.
              </p>
            </div>

            {/* Card 2: Value */}
            <div className="group bg-mystic-950 border border-white/5 hover:border-mystic-gold/50 p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(126,34,206,0.1)]">
              <div className="w-16 h-16 bg-purple-900/20 rounded-2xl flex items-center justify-center mb-6 text-mystic-gold group-hover:scale-110 transition-transform duration-500 group-hover:bg-purple-900/40">
                <Scale size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-mystic-gold transition-colors">Честный Обмен</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                Все услуги платные, так как настоящая магия требует равноценного энергообмена. 
                Вы платите за мое время, опыт и результат. Никаких скрытых условий.
              </p>
            </div>

            {/* Card 3: Privacy */}
            <div className="group bg-mystic-950 border border-white/5 hover:border-mystic-gold/50 p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(126,34,206,0.1)]">
              <div className="w-16 h-16 bg-purple-900/20 rounded-2xl flex items-center justify-center mb-6 text-mystic-gold group-hover:scale-110 transition-transform duration-500 group-hover:bg-purple-900/40">
                <Shield size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-mystic-gold transition-colors">Конфиденциальность</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                Гарантирую полную анонимность. Ваши тайны, фотографии и заказанные ритуалы 
                останутся строго между нами. Индивидуальный подход к каждой ситуации.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid (Quick Access) */}
      <section className="py-20 bg-mystic-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center mb-16 text-white">Мои направления работы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-gray-900 to-mystic-950 border border-gray-800 hover:border-purple-500/50 transition-all hover:-translate-y-2 duration-300 group">
              <div className="bg-red-900/20 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-900/40 transition-colors">
                 <Heart className="h-7 w-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors">Любовь и Отношения</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Личные ритуалы на приворот, гармонизацию и сексуальную привязку. Возвращаю любимых, разжигаю страсть.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-b from-gray-900 to-mystic-950 border border-gray-800 hover:border-mystic-gold/50 transition-all hover:-translate-y-2 duration-300 group">
              <div className="bg-amber-900/20 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-900/40 transition-colors">
                <Gem className="h-7 w-7 text-mystic-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-mystic-gold transition-colors">Деньги и Успех</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Индивидуальная работа с денежным каналом. Устранение блоков, ритуалы на богатство и фарт в бизнесе.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-b from-gray-900 to-mystic-950 border border-gray-800 hover:border-purple-500/50 transition-all hover:-translate-y-2 duration-300 group">
              <div className="bg-purple-900/20 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-900/40 transition-colors">
                <ShieldAlert className="h-7 w-7 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">Жесткие Воздействия</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Наказание врагов, порчи (от 50 000₽). Работаю лично, дорого, конфиденциально и до результата.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-mystic-900 relative border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-center text-white mb-4">Отзывы Клиентов</h2>
          <p className="text-center text-gray-400 mb-12">Реальные истории людей, которые доверились мне.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-mystic-950 p-8 rounded-2xl relative border border-white/5 hover:border-purple-500/30 transition-colors">
              <Quote className="absolute top-6 right-6 text-purple-900/40 w-10 h-10" />
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "Заказывала разбор матрицы судьбы. Честно говоря, чудес не ждала, просто было интересно. Но многое совпало, особенно про финансовый потолок. Получила конкретные рекомендации, над чем работать. Спасибо за честность, без лишней 'воды'."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-purple-800 flex items-center justify-center text-white font-serif font-bold shrink-0">Е</div>
                <div>
                  <h4 className="text-white font-medium text-sm">Елена В.</h4>
                  <p className="text-gray-500 text-xs">20 Ноября 2025</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-mystic-950 p-8 rounded-2xl relative border border-white/5 hover:border-purple-500/30 transition-colors">
              <Quote className="absolute top-6 right-6 text-purple-900/40 w-10 h-10" />
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "Обращался за чисткой и диагностикой. Были проблемы на работе и апатия. Сразу скажу - мгновенного результата 'на утро миллион' не было. Но через неделю почувствовал, что стало легче дышать, ушла тревога. Ситуация начала выравниваться."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-serif font-bold shrink-0">А</div>
                <div>
                  <h4 className="text-white font-medium text-sm">Алексей</h4>
                  <p className="text-gray-500 text-xs">12 Ноября 2025</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-mystic-950 p-8 rounded-2xl relative border border-white/5 hover:border-purple-500/30 transition-colors">
              <Quote className="absolute top-6 right-6 text-purple-900/40 w-10 h-10" />
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "Делала расклад Таро на сложную ситуацию в отношениях. Понравилось, что не было пустых обещаний 'все будет хорошо'. Показали реальные риски и варианты. Это помогло принять трезвое решение, а не жить в иллюзиях."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-mystic-gold text-mystic-950 flex items-center justify-center font-serif font-bold shrink-0">М</div>
                <div>
                  <h4 className="text-white font-medium text-sm">Марина К.</h4>
                  <p className="text-gray-500 text-xs">03 Ноября 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-mystic-950 to-purple-900/20 border-t border-purple-500/10">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Запишитесь на личную консультацию</h2>
          <p className="text-gray-300 mb-10 text-lg">Напишите мне в Telegram, чтобы обсудить вашу ситуацию и узнать точную стоимость работы.</p>
          <a 
            href="https://t.me/ezotveril" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white text-mystic-950 px-8 py-4 rounded-full font-bold hover:bg-mystic-gold transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
          >
            <SendIcon /> Написать Мастеру
          </a>
        </div>
      </section>
    </div>
  );
};

const SendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);