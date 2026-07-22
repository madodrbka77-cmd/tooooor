import { Plus } from 'lucide-react';
import { stories, currentUser } from '../data/mockData';
import type { Story } from '../types';

export default function StoryReel() {
  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-4">
      <div className="shrink-0 w-28 h-44 rounded-xl overflow-hidden relative bg-white dark:bg-fb-dark shadow-sm border border-gray-100 dark:border-gray-700 cursor-pointer group">
        <img src={currentUser.avatar} alt="create" className="w-full h-3/4 object-cover" />
        <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-fb-blue flex items-center justify-center border-4 border-white dark:border-fb-dark">
          <Plus size={16} className="text-white" />
        </div>
        <p className="absolute bottom-2 left-0 right-0 text-center text-xs font-semibold text-fb-text dark:text-white px-1">إنشاء قصة</p>
      </div>
      {stories.map((s: Story) => (
        <div key={s.id} className="shrink-0 w-28 h-44 rounded-xl overflow-hidden relative bg-gray-800 cursor-pointer group">
          <img src={s.image} alt={s.author} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className={`absolute top-2 right-2 w-9 h-9 rounded-full p-0.5 ${s.viewed ? 'bg-gray-400' : 'bg-fb-blue'}`}>
            <img src={s.avatar} alt={s.author} className="w-full h-full rounded-full object-cover" />
          </div>
          <p className="absolute bottom-2 right-2 left-2 text-white text-xs font-semibold truncate">{s.author}</p>
        </div>
      ))}
    </div>
  );
}
