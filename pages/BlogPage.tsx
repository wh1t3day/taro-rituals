import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { blogPosts } from '../blogPosts';
import { Link } from 'react-router-dom';

export const BlogPage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 min-h-screen">
      <SEOHead 
        title="Магический Блог | Статьи о Ритуалах и Таро" 
        description="Авторский блог Ezotveril: читайте свежие статьи про любовную магию, денежные ритуалы, расшифровку Матрицы Судьбы и признаки негатива. Эзотерика 2025." 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">Магический Блог</h1>
          <p className="text-gray-400">Погрузитесь в тайны мироздания.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-mystic-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/30 transition-colors shadow-lg flex flex-col">
              <div className="h-48 overflow-hidden shrink-0">
                <Link to={`/blog/${post.id}`}>
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 opacity-80 hover:opacity-100"
                  />
                </Link>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex gap-2 mb-3">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold text-mystic-gold bg-mystic-gold/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={`/blog/${post.id}`}>
                  <h2 className="text-2xl font-serif font-bold text-white mb-3 hover:text-purple-400 transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-400 mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center mt-4 border-t border-gray-800 pt-4">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-purple-400 hover:text-white text-sm font-medium transition-colors"
                  >
                    Читать далее &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};