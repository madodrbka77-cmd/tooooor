import { Bookmark } from 'lucide-react';
import { savedPosts } from '../data/mockData';
import PostCard from './PostCard';

export default function SavedItems() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-fb-blue flex items-center justify-center">
          <Bookmark size={24} className="text-white" />
        </div>
        <h1 className="text-2xl font-bold text-fb-text dark:text-white">المحفوظات</h1>
      </div>
      {savedPosts.length === 0 ? (
        <div className="bg-white dark:bg-fb-dark rounded-xl p-8 text-center shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-fb-textGray dark:text-gray-400">لا توجد منشورات محفوظة بعد</p>
        </div>
      ) : (
        savedPosts.map(p => <PostCard key={p.id} post={p} />)
      )}
    </div>
  );
}
