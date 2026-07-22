import { Search, Users, Calendar, Heart } from 'lucide-react';
import { sampleUsers, groups } from '../data/mockData';

export default function Rightbar() {
  return (
    <aside className="w-72 shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto no-scrollbar py-4 px-2 space-y-4">
      <div className="bg-white dark:bg-fb-dark rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="font-bold text-fb-text dark:text-white mb-3 flex items-center gap-2">
          <Users size={18} className="text-fb-blue" />
          الأصدقاء
        </h3>
        <div className="space-y-2">
          {sampleUsers.map(u => (
            <div key={u.id} className="flex items-center gap-2 p-1 rounded-lg hover:bg-fb-hover dark:hover:bg-gray-700 transition-colors cursor-pointer">
              <div className="relative">
                <img src={u.avatar} alt={u.name} className="w-9 h-9 rounded-full object-cover" />
                <span className="absolute bottom-0 left-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-fb-dark" />
              </div>
              <span className="text-sm font-medium text-fb-text dark:text-gray-200">{u.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-fb-dark rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="font-bold text-fb-text dark:text-white mb-3 flex items-center gap-2">
          <Heart size={18} className="text-fb-blue" />
          المجموعات
        </h3>
        <div className="space-y-2">
          {groups.slice(0, 4).map(g => (
            <div key={g.id} className="flex items-center gap-2 p-1 rounded-lg hover:bg-fb-hover dark:hover:bg-gray-700 transition-colors cursor-pointer">
              <img src={g.cover} alt={g.name} className="w-10 h-10 rounded-lg object-cover" />
              <div>
                <p className="text-sm font-medium text-fb-text dark:text-gray-200 line-clamp-1">{g.name}</p>
                <p className="text-xs text-fb-textGray dark:text-gray-400">{g.members.toLocaleString()} عضو</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-fb-dark rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="font-bold text-fb-text dark:text-white mb-3 flex items-center gap-2">
          <Calendar size={18} className="text-fb-blue" />
          الأحداث
        </h3>
        <div className="space-y-2">
          <div className="text-sm text-fb-textGray dark:text-gray-400">لا توجد أحداث قريبة</div>
        </div>
      </div>
    </aside>
  );
}
