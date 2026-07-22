import { Heart, Users } from 'lucide-react';
import { groups } from '../data/mockData';

export default function Memorise() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-fb-blue flex items-center justify-center">
          <Heart size={24} className="text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-fb-text dark:text-white">المجموعات</h1>
          <p className="text-sm text-fb-textGray dark:text-gray-400">انضم إلى مجموعات تناسب اهتماماتك</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {groups.map(g => (
          <div key={g.id} className="bg-white dark:bg-fb-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
            <div className="h-32 overflow-hidden">
              <img src={g.cover} alt={g.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-fb-text dark:text-white">{g.name}</h3>
              <div className="flex items-center gap-1 text-sm text-fb-textGray dark:text-gray-400 mt-1">
                <Users size={16} /> {g.members.toLocaleString()} عضو · {g.category}
              </div>
              <button className="w-full mt-3 py-2 rounded-lg bg-fb-blue/10 text-fb-blue dark:text-emerald-400 font-semibold text-sm hover:bg-fb-blue/20 transition-colors">
                انضمام للمجموعة
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
