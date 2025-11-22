import React, { useState, useEffect } from 'react';
import { SEOHead } from '../components/SEOHead';
import { askOracle, generateDailyEnergy } from '../services/geminiService';
import { Sparkles, Moon, Sun, ArrowRight } from 'lucide-react';

export const OraclePage: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [dailyEnergy, setDailyEnergy] = useState<{title: string, text: string} | null>(null);

  useEffect(() => {
    // Load daily energy on mount
    const fetchDaily = async () => {
      const energy = await generateDailyEnergy();
      setDailyEnergy(energy);
    };
    fetchDaily();
  }, []);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setAnswer(null);
    const result = await askOracle(question);
    setAnswer(result);
    setLoading(false);
  };

  return (
    <div className="pt-24 pb-12 min-h-screen bg-mystic-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-mystic-950 to-mystic-950">
      <SEOHead 
        title="Бесплатный Оракул Онлайн | Гадание AI" 
        description="Задайте вопрос магическому Оракулу бесплатно онлайн. Быстрый ответ нейросети. Для точного гадания и серьезных ритуалов запишитесь на личную консультацию." 
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Daily Energy Card */}
        <div className="mb-12 bg-white/5 border border-mystic-gold/20 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Sun size={100} />
          </div>
          <h2 className="text-sm text-mystic-gold uppercase tracking-widest mb-2 font-bold flex items-center gap-2">
            <Sparkles size={16} /> Энергия Дня
          </h2>
          {dailyEnergy ? (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-serif text-white mb-2">{dailyEnergy.title}</h3>
              <p className="text-gray-300 italic">"{dailyEnergy.text}"</p>
            </div>
          ) : (
            <div className="h-20 flex items-center text-gray-500">
              <span className="animate-pulse">Считывание эфира...</span>
            </div>
          )}
        </div>

        {/* Oracle Chat Interface */}
        <div className="text-center mb-8">
          <Moon className="w-16 h-16 text-purple-400 mx-auto mb-4 opacity-80" />
          <h1 className="text-4xl font-serif text-white mb-4">Спроси Оракула</h1>
          <p className="text-gray-400 mb-8">
            Это автоматический оракул. Он даст совет-подсказку. <br/>
            Помните: для решения серьезных проблем нужна <strong>личная работа с Мастером</strong>.
          </p>
        </div>

        <div className="bg-mystic-900/50 rounded-3xl border border-purple-500/30 p-1">
          <form onSubmit={handleAsk} className="relative">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Что меня ждет в любви? Стоит ли менять работу?"
              className="w-full bg-mystic-950/80 text-white placeholder-gray-600 rounded-2xl py-4 pl-6 pr-32 focus:outline-none focus:ring-2 focus:ring-purple-500/50 border border-transparent"
              maxLength={100}
            />
            <button
              type="submit"
              disabled={loading || !question.trim()}
              className="absolute right-2 top-2 bottom-2 bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 text-white px-6 rounded-xl font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {loading ? '...' : 'Спросить'}
            </button>
          </form>
        </div>

        {/* Answer Display */}
        {loading && (
          <div className="mt-8 text-center space-y-2">
            <div className="inline-block w-2 h-2 bg-mystic-gold rounded-full animate-bounce delay-0"></div>
            <div className="inline-block w-2 h-2 bg-mystic-gold rounded-full animate-bounce delay-150 mx-1"></div>
            <div className="inline-block w-2 h-2 bg-mystic-gold rounded-full animate-bounce delay-300"></div>
            <p className="text-xs text-purple-300/70">Обращение к инфополю...</p>
          </div>
        )}

        {answer && !loading && (
          <div className="mt-8 p-8 bg-gradient-to-b from-purple-900/20 to-transparent border border-purple-500/30 rounded-2xl text-center animate-[fadeIn_0.5s_ease-out]">
            <h3 className="text-mystic-gold font-serif text-lg mb-4">Ответ Оракула:</h3>
            <p className="text-xl font-serif text-white leading-relaxed tracking-wide mb-8">
              {answer}
            </p>
            
            {/* Upsell Banner */}
            <div className="border-t border-white/10 pt-6 mt-6">
              <p className="text-sm text-gray-400 mb-4">
                Искусственный интеллект дает лишь общий совет. <br/>
                Чтобы увидеть полную картину судьбы и получить реальную помощь, запишитесь на <strong>личный платный расклад</strong>.
              </p>
              <a 
                href="https://t.me/ezotveril" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-mystic-gold hover:text-mystic-950 text-white px-6 py-2 rounded-full transition-all duration-300 font-medium"
              >
                Записаться к Мастеру <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};