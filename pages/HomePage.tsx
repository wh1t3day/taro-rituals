import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { 
  Heart, ShieldAlert, Sparkles, Gem, Quote, UserCheck, Scale, Shield, 
  Moon, Star, Sun, ArrowRight, ChevronDown, Eye, Zap, Crown, Search, Send
} from 'lucide-react';

export const HomePage: React.FC = () => {
  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-mystic-950 font-sans">
      <SEOHead 
        title="Ezotveril | Магическая Помощь, Таро и Ритуалы" 
        description="Профессиональная магия от Ezotveril: сильные привороты, денежные ритуалы, снятие порчи и защита. Точные расклады Таро и разбор Матрицы Судьбы. Личная работа мастера до результата." 
      />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-30 bg-[size:20px_20px] bg-stars"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-800/20 rounded-full blur-[120px] animate-pulse-slow"></div>
          
          {/* Mystical Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-purple-500/10 rounded-full animate-spin-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-mystic-gold/10 rounded-full animate-[spin_25s_linear_reverse_infinite]"></div>
          
          {/* Floating Symbols */}
          <div className="absolute top-1/4 left-10 sm:left-20 text-purple-500/30 animate-float">
            <Moon size={48} strokeWidth={1} />
          </div>
          <div className="absolute bottom-1/4 right-10 sm:right-20 text-mystic-gold/30 animate-float-delayed">
            <Sun size={64} strokeWidth={1} />
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in shadow-[0_0_20px_rgba(126,34,206,0.3)]">
            <Crown className="w-4 h-4 text-mystic-gold" />
            <span className="text-xs uppercase tracking-widest text-gray-300 font-bold">Премиальная Эзотерика</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold leading-tight mb-8 animate-slide-up">
            <span className="block text-white drop-shadow-2xl">Магия</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mystic-gold via-amber-200 to-mystic-gold bg-[length:200%_auto] animate-shimmer">
              Вашей Судьбы
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-slide-up opacity-90" style={{ animationDelay: '0.2s' }}>
            Я объединяю древние знания Таро, точность Матрицы Судьбы и силу Ритуальной магии для решения нерешаемых задач.
            <span className="block mt-4 text-purple-300 font-medium">Личный прием. Дорого. Результативно.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link 
              to="/services" 
              className="group relative px-10 py-4 bg-gradient-to-r from-mystic-gold to-amber-600 rounded-full overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/30 group-hover:translate-x-full transition-transform duration-700 ease-out -skew-x-12"></div>
              <span className="relative flex items-center justify-center gap-3 text-mystic-950 font-bold tracking-wide text-lg">
                Каталог Услуг <ArrowRight size={20} />
              </span>
            </Link>
            
            <Link 
              to="/oracle" 
              className="group px-10 py-4 rounded-full border border-purple-500/40 bg-purple-950/30 backdrop-blur-md hover:bg-purple-900/50 hover:border-purple-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(126,34,206,0.2)]"
            >
              <span className="flex items-center justify-center gap-2 text-purple-200 font-medium text-lg">
                <Sparkles size={20} className="text-purple-400 group-hover:animate-spin" />
                Оракул (Free)
              </span>
            </Link>
          </div>
        </div>
        
        {/* Decorative gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-mystic-950 to-transparent z-20"></div>
      </section>

      {/* SECTION 2: ABOUT (Redesigned - Asymmetric & Magical) */}
      <section className="py-24 relative overflow-hidden bg-mystic-950">
        {/* Background noise texture */}
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-soft-light"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Visual Composition */}
            <div className="relative group perspective-1000">
               {/* Glowing blob behind */}
               <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-mystic-gold opacity-30 blur-2xl rounded-full group-hover:opacity-50 transition duration-1000"></div>
               
               {/* Main Card */}
               <div className="relative bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transform transition-transform duration-700 group-hover:rotate-y-2 group-hover:scale-[1.02]">
                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none"></div>
                 
                 <div className="flex items-start gap-6 mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-mystic-gold to-amber-700 flex items-center justify-center shadow-lg shrink-0">
                       <Crown size={40} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif text-white font-bold">Эзотерическая Практика</h3>
                      <p className="text-mystic-gold">Ezotveril</p>
                    </div>
                 </div>
                 
                 <div className="space-y-6">
                   <div className="flex items-center gap-4 p-4 bg-black/40 rounded-xl border border-white/5">
                     <Star className="text-purple-400" />
                     <div>
                       <div className="text-2xl font-bold text-white">5+ Лет</div>
                       <div className="text-xs text-gray-400 uppercase tracking-wider">Опыта работы</div>
                     </div>
                   </div>
                   <div className="flex items-center gap-4 p-4 bg-black/40 rounded-xl border border-white/5">
                     <Zap className="text-mystic-gold" />
                     <div>
                       <div className="text-2xl font-bold text-white">1000+</div>
                       <div className="text-xs text-gray-400 uppercase tracking-wider">Проведенных ритуалов</div>
                     </div>
                   </div>
                 </div>
               </div>
            </div>

            {/* Right: Text Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-purple-400 font-bold tracking-wider uppercase text-sm">
                <span className="w-8 h-[2px] bg-purple-500"></span>
                Обо мне
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                Не поток. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mystic-gold to-amber-500">Личное Искусство.</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed border-l-2 border-purple-500/50 pl-6">
                В мире эзотерики личность мастера — это фундамент результата. Я не скрываюсь за логотипами агентств. 
                Ezotveril — это моя душа, моя сила и моя ответственность перед вами.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Каждый ритуал, каждый расклад я пропускаю через себя. Здесь нет шаблонных решений, потому что нет двух одинаковых судеб. 
                Я работаю с теми, кто готов к переменам и понимает ценность профессиональной магии.
              </p>
              
              <div className="flex gap-8 pt-4">
                 <div className="flex flex-col">
                    <span className="text-white font-bold text-lg">Диагностика</span>
                    <span className="text-sm text-gray-500">Глубокий анализ</span>
                 </div>
                 <div className="w-px h-12 bg-white/10"></div>
                 <div className="flex flex-col">
                    <span className="text-white font-bold text-lg">Защита</span>
                    <span className="text-sm text-gray-500">Мощные обереги</span>
                 </div>
                 <div className="w-px h-12 bg-white/10"></div>
                 <div className="flex flex-col">
                    <span className="text-white font-bold text-lg">Результат</span>
                    <span className="text-sm text-gray-500">Без пустых слов</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES (Tarot Card Effect with FIXED IMAGES) */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-purple-900/30 via-black to-black"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Избранные Услуги</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Направления, в которых моя сила проявляется наиболее ярко.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 - Love */}
            <Link to="/services" className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-4 block">
              <img 
                src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80" 
                alt="Любовная магия приворот" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              
              <div className="absolute inset-0 border border-white/10 rounded-2xl transition-colors group-hover:border-red-500/50"></div>

              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-12 bg-red-900/50 rounded-full flex items-center justify-center mb-4 backdrop-blur-md border border-red-500/30">
                  <Heart className="text-red-400" size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Любовная Магия</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                  Привороты, гармонизация, сексуальная привязка. Возвращение любимых и разжигание угасшей страсти.
                </p>
                <div className="mt-6 flex items-center gap-2 text-red-400 font-bold uppercase tracking-wider text-xs">
                  Подробнее <ArrowRight size={14} />
                </div>
              </div>
            </Link>

            {/* Service Card 2 - Money */}
            <Link to="/services" className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-4 block">
              <img 
                src="https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=800" 
                alt="Денежная магия успех" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              
              <div className="absolute inset-0 border border-white/10 rounded-2xl transition-colors group-hover:border-mystic-gold/50"></div>

              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-12 bg-amber-900/50 rounded-full flex items-center justify-center mb-4 backdrop-blur-md border border-mystic-gold/30">
                  <Gem className="text-mystic-gold" size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Финансы и Успех</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                  Открытие денежных дорог, устранение блоков, ритуалы на фарт в бизнесе и карьере.
                </p>
                <div className="mt-6 flex items-center gap-2 text-mystic-gold font-bold uppercase tracking-wider text-xs">
                  Подробнее <ArrowRight size={14} />
                </div>
              </div>
            </Link>

            {/* Service Card 3 - Curse/Cleansing */}
            <Link to="/services" className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-4 block">
              <img 
                src="https://images.unsplash.com/photo-1509557965875-b88c97052f0e?auto=format&fit=crop&q=80" 
                alt="Снятие порчи и проклятий" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              
              <div className="absolute inset-0 border border-white/10 rounded-2xl transition-colors group-hover:border-purple-500/50"></div>

              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center mb-4 backdrop-blur-md border border-purple-500/30">
                  <ShieldAlert className="text-purple-400" size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Чистка и Порчи</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                  Снятие негатива любой сложности. Жесткие воздействия на врагов. Порчи (дорого).
                </p>
                <div className="mt-6 flex items-center gap-2 text-purple-400 font-bold uppercase tracking-wider text-xs">
                  Подробнее <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY ME (Magical Artifacts Grid) */}
      <section className="py-24 bg-mystic-950 relative">
         {/* Grid background */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Принципы Мастера</h2>
               <div className="w-20 h-1 bg-mystic-gold mx-auto rounded-full shadow-[0_0_10px_#d4af37]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { icon: UserCheck, title: "Личная работа", text: "Я работаю сама. Без помощников, администраторов и потоковых схем." },
                 { icon: Scale, title: "Честность", text: "Говорю как есть. Не обещаю невозможного, но делаю максимум возможного." },
                 { icon: Shield, title: "Тайна", text: "Всё, что происходит в магии, остается между нами. Полная анонимность." },
                 { icon: Eye, title: "Ясновидение", text: "Вижу суть проблемы, а не только то, что вы рассказываете." }
               ].map((item, idx) => (
                 <div key={idx} className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-2">
                    {/* Glow on hover */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-500/10 to-transparent blur-xl"></div>
                    
                    <div className="relative z-10">
                       <item.icon size={40} className="text-gray-500 group-hover:text-mystic-gold transition-colors duration-500 mb-6" strokeWidth={1} />
                       <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200">{item.title}</h3>
                       <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 5: REVIEWS (Whispers style) */}
      <section className="py-24 bg-gradient-to-b from-mystic-950 to-purple-950/20 relative">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
           <h2 className="text-3xl md:text-4xl font-serif text-center text-white mb-12">Голоса тех, кто изменил судьбу</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { text: "Обращалась в полном отчаянии. Муж ушел, долги... Работали месяц. Сейчас я не узнаю свою жизнь. Спасибо за чудо.", name: "Виктория", type: "Любовная магия" },
               { text: "Жестко, дорого, но это работает. Конкуренты сами отошли в сторону. Бизнес пошел в гору. Рекомендую тем, кто не боится силы.", name: "Дмитрий", type: "Бизнес магия" },
               { text: "Таро расклад открыл глаза на измену. Было больно, но лучше знать правду. Сейчас новая жизнь, и я счастлива.", name: "Алина", type: "Расклад Таро" }
             ].map((review, idx) => (
               <div key={idx} className="relative bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-purple-500/10 hover:border-purple-500/40 transition-colors">
                  <Quote className="absolute top-4 right-4 text-purple-900 w-8 h-8" />
                  <p className="text-gray-300 italic mb-6 relative z-10 text-sm leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                     <span className="font-serif font-bold text-white">{review.name}</span>
                     <span className="text-xs text-mystic-gold uppercase tracking-widest">{review.type}</span>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* SECTION 6: FAQ (Accordion) */}
      <section className="py-20 bg-mystic-950">
        <div className="max-w-3xl mx-auto px-4">
           <h2 className="text-3xl font-serif text-white mb-10 text-center">Частые вопросы</h2>
           <div className="space-y-4">
             {[
               { q: "Это безопасно?", a: "Я использую проверенные веками методы защиты. При правильном проведении ритуала откат исключен для заказчика. Я беру удар на себя и заземляю энергию." },
               { q: "Как быстро наступит результат?", a: "Магия — не доставка пиццы. Первые изменения обычно видны через лунный цикл (28 дней). В сложных случаях работа может занять до 3 месяцев." },
               { q: "Можно ли работать дистанционно?", a: "Да. Энергия не знает расстояний. Для работы мне нужны только ваши свежие фотографии и данные (имя, дата рождения)." },
               { q: "Почему так дорого?", a: "Вы платите не за свечи, а за мою жизненную энергию, опыт и решение проблемы, которую не смогли решить другие. Качественная работа не может стоить копейки." }
             ].map((item, idx) => (
               <div key={idx} className="border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden">
                 <button 
                   onClick={() => toggleFaq(idx)}
                   className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                 >
                   <span className="text-lg font-medium text-white">{item.q}</span>
                   <ChevronDown className={`text-purple-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                 </button>
                 <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                   <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                     {item.a}
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 relative overflow-hidden flex items-center justify-center">
        {/* Mystical Portal Background */}
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-900/20 to-mystic-gold/10 rounded-full blur-3xl animate-pulse-slow"></div>
           <div className="absolute inset-0 bg-stars opacity-20"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Время менять <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mystic-gold to-amber-200">Реальность</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-mystic-gold to-transparent mx-auto mb-8"></div>

          <p className="text-gray-300 text-lg md:text-xl mb-10 font-light leading-relaxed">
            Хватит ждать милости от судьбы. Возьмите жизнь в свои руки. <br/>
            Напишите мне, и мы найдем выход.
          </p>
          
          <a 
            href="https://t.me/ezotveril" 
            target="_blank" 
            rel="noreferrer"
            className="group relative inline-flex items-center gap-3 bg-white/5 border border-mystic-gold/40 px-8 py-4 rounded-full overflow-hidden transition-all hover:border-mystic-gold hover:bg-white/10 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
          >
             <span className="relative z-10 text-white font-bold tracking-wider text-lg">Открыть диалог в Telegram</span>
             <Send size={20} className="relative z-10 text-mystic-gold group-hover:translate-x-1 transition-transform" />
             
             {/* Shine effect */}
             <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
          </a>
        </div>
      </section>

      {/* SEO FOOTER TEXT (OPTIMIZED FOR YANDEX) */}
      <section className="py-12 bg-black text-gray-600 text-xs leading-relaxed border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             
             {/* Block 1 */}
             <div>
                <h3 className="text-gray-500 font-bold mb-3 uppercase tracking-wider flex items-center gap-2">
                   <Search size={12}/> Любовная магия
                </h3>
                <p>
                   Сильный приворот на мужчину по фото, вернуть мужа в семью гарантированно. 
                   Присушка на любовь, егильет, сексуальная привязка партнера. 
                   Как вернуть парня если он ушел к другой. Обряд на замужество, ритуалы на женскую привлекательность. 
                   Белый приворот без греха и последствий. Гармонизация отношений в паре, устранение соперницы навсегда.
                   Магия любви Тверь, Москва, онлайн гадание на любовь.
                </p>
             </div>

             {/* Block 2 */}
             <div>
                <h3 className="text-gray-500 font-bold mb-3 uppercase tracking-wider flex items-center gap-2">
                   <Search size={12}/> Диагностика и Чистка
                </h3>
                <p>
                   Снять порчу на одиночество, венец безбрачия, родовое проклятие. 
                   Диагностика негатива по фото, как узнать есть ли порча. 
                   Снятие сглаза с ребенка и взрослого. Отливка воском, чистка рунами.
                   Защита от колдовства, энергетическая безопасность семьи. 
                   Снять приворот с мужа. Экзорцизм и работа с сущностями (только для сложных случаев).
                   Диагностика чакр и ауры онлайн.
                </p>
             </div>

             {/* Block 3 */}
             <div>
                <h3 className="text-gray-500 font-bold mb-3 uppercase tracking-wider flex items-center gap-2">
                   <Search size={12}/> Деньги и Успех
                </h3>
                <p>
                   Ритуал на деньги и удачу, открытие денежного канала. 
                   Заговор на торговлю, бизнес магия, устранение конкурентов. 
                   Как разбогатеть с помощью магии. Амулеты на богатство, денежный код.
                   Матрица судьбы расчет онлайн, финансовый код по дате рождения. 
                   Обряд на продажу квартиры или машины. 
                   Успех в карьере и поиск предназначения.
                </p>
             </div>

             {/* Block 4 */}
             <div>
                <h3 className="text-gray-500 font-bold mb-3 uppercase tracking-wider flex items-center gap-2">
                   <Search size={12}/> Гадание и Таро
                </h3>
                <p>
                   Расклад Таро на отношения, будущее, работу. 
                   Гадание онлайн на картах Таро Уэйта, Манара, Тота.
                   Вопрос оракулу бесплатно. Консультация таролога в Telegram.
                   Нумерологический расчет, квадрат Пифагора, кармический хвост.
                   Ясновидящая онлайн помощь. Эзотерический блог, обучение магии.
                   Ezotveril - ваш проводник в мир тайных знаний.
                </p>
             </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-900 text-center opacity-50">
             <p>
                Услуги предоставляются для лиц старше 18 лет. Результат может варьироваться в зависимости от индивидуальных обстоятельств. 
                Не является медицинской услугой.
             </p>
             <p className="mt-2">
                Ключевые слова: гадалка, экстрасенс, помощь мага, таролог, приворот онлайн, порча, сглаз, обереги, магия вуду, черная магия, белая магия, руны.
             </p>
          </div>
        </div>
      </section>
    </div>
  );
};