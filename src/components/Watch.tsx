import { Play, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';
import { initialPosts } from '../data/mockData';

export default function Watch() {
  const videos = initialPosts.filter(p => p.image);

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-fb-text dark:text-white mb-4">المشاهدة</h1>
      <div className="flex gap-2 overflow-x-auto no-scrollbar mb-4 pb-2">
        {['الكل', 'مباشر', 'موسيقى', 'ألعاب', 'رياضة', 'كوميديا'].map((cat, i) => (
          <button
            key={cat}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              i === 0
                ? 'bg-fb-blue text-white'
                : 'bg-white dark:bg-fb-dark text-fb-text dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      {videos.map(v => (
        <div key={v.id} className="bg-white dark:bg-fb-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 mb-4 overflow-hidden">
          <div className="flex items-center gap-2 p-3">
            <img src={v.avatar} alt={v.author} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-semibold text-fb-text dark:text-white text-sm">{v.author}</p>
              <p className="text-xs text-fb-textGray dark:text-gray-400">{v.time}</p>
            </div>
          </div>
          <p className="px-3 pb-2 text-fb-text dark:text-gray-200 text-sm">{v.text}</p>
          <div className="relative">
            <img src={v.image} alt="video" className="w-full max-h-96 object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/80 transition-colors">
                <Play size={32} className="text-white fill-white mr-1" />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-around px-2 py-2 border-t border-gray-100 dark:border-gray-700">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-fb-textGray dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm">
              <ThumbsUp size={18} /> إعجاب
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-fb-textGray dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm">
              <MessageCircle size={18} /> تعليق
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-fb-textGray dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm">
              <Share2 size={18} /> مشاركة
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
