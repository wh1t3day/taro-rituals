import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { blogPosts } from '../blogPosts';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

export const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-24 pb-12 min-h-screen">
      {/* Dynamic SEO for this specific article */}
      <SEOHead 
        title={post.title} 
        description={post.excerpt} 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-mystic-gold mb-8 transition-colors animate-fade-in"
        >
          <ArrowLeft size={20} /> Назад в блог
        </Link>

        <article className="bg-mystic-900/50 border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="h-[300px] md:h-[400px] w-full relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-t from-mystic-900 to-transparent z-10" />
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 md:p-10 -mt-20 relative z-20 opacity-0 animate-slide-up">
            <div className="flex flex-wrap gap-3 mb-6">
              {post.tags.map(tag => (
                <span key={tag} className="inline-flex items-center gap-1 text-xs font-bold text-mystic-950 bg-mystic-gold px-3 py-1 rounded-full">
                  <Tag size={12} /> {tag}
                </span>
              ))}
              <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                <Calendar size={12} /> {post.date}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="prose prose-invert prose-lg max-w-none text-gray-300">
              <p className="text-xl text-gray-200 italic mb-8 border-l-4 border-purple-500 pl-4">
                {post.excerpt}
              </p>
              {post.content ? (
                <div className="whitespace-pre-wrap">{post.content}</div>
              ) : (
                <p>Текст статьи готовится к публикации...</p>
              )}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-400 mb-4">Понравилась статья? Запишитесь на консультацию.</p>
              <a 
                href="https://t.me/ezotveril" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block bg-purple-700 hover:bg-purple-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
              >
                Обсудить с Мастером
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};