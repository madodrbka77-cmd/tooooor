import { Gamepad2, Users, Star } from 'lucide-react';
import { games } from '../data/mockData';

export default function Gaming() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-fb-blue flex items-center justify-center">
          <Gamepad2 size={28} className="text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-fb-text dark:text-white">الألعاب</h1>
          <p className="text-sm text-fb-textGray dark:text-gray-400">اكتشف ألعاباً جديدة</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {games.map(g => (
          <div key={g.id} className="bg-white dark:bg-fb-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
            <div className="relative h-40 overflow-hidden">
              <img src={g.image} alt={g.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-3 right-3 left-3">
                <p className="text-white font-bold text-lg">{g.title}</p>
                <p className="text-white/80 text-sm">{g.genre}</p>
              </div>
            </div>
            <div className="p-3 flex items-center justify-between">
              <div className="flex items-center gap-1 text-sm text-fb-textGray dark:text-gray-400">
                <Users size={16} /> {g.players} لاعب
              </div>
              <div className="flex items-center gap-1 text-sm text-yellow-500">
                <Star size={16} className="fill-current" /> 4.5
              </div>
              <button className="px-4 py-1.5 bg-fb-blue text-white rounded-lg text-sm font-semibold hover:bg-emerald-800 transition-colors">
                العب
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
