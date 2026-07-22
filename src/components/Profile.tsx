import { Camera, CreditCard as Edit, Users, MapPin, Briefcase, GraduationCap, Heart, Calendar } from 'lucide-react';
import { currentUser, sampleUsers, initialPosts } from '../data/mockData';
import PostCard from './PostCard';

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-fb-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="relative h-48 sm:h-64 bg-gradient-to-l from-emerald-700 to-emerald-900">
          <img src={currentUser.cover} alt="cover" className="w-full h-full object-cover" />
          <button className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-black/60 text-white rounded-lg text-sm hover:bg-black/80 transition-colors">
            <Camera size={16} /> تعديل الغلاف
          </button>
        </div>
        <div className="px-4 pb-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 -mt-12 sm:-mt-16">
            <div className="relative">
              <img src={currentUser.avatar} alt={currentUser.name} className="w-28 h-28 rounded-full object-cover border-4 border-white dark:border-fb-dark shadow-lg" />
              <button className="absolute bottom-1 left-1 p-1.5 bg-gray-200 dark:bg-gray-600 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">
                <Camera size={16} className="text-fb-text dark:text-white" />
              </button>
            </div>
            <div className="flex-flex-1 text-center sm:text-right">
              <h1 className="text-2xl font-bold text-fb-text dark:text-white">{currentUser.name}</h1>
              <p className="text-sm text-fb-textGray dark:text-gray-400">1,240 صديق</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-fb-blue text-white rounded-lg text-sm font-semibold hover:bg-emerald-800 transition-colors">
              <Edit size={16} /> تعديل الملف
            </button>
          </div>

          <div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar">
            {sampleUsers.slice(0, 8).map(u => (
              <div key={u.id} className="shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-600">
                <img src={u.avatar} alt={u.name} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        <div className="space-y-4">
          <div className="bg-white dark:bg-fb-dark rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="font-bold text-fb-text dark:text-white mb-3">تفاصيل</h3>
            <div className="space-y-3 text-sm text-fb-textGray dark:text-gray-300">
              <div className="flex items-center gap-2"><Briefcase size={18} /> يعمل كمطور برمجيات</div>
              <div className="flex items-center gap-2"><GraduationCap size={18} /> درس في جامعة الملك سعود</div>
              <div className="flex items-center gap-2"><MapPin size={18} /> يعيش في الرياض</div>
              <div className="flex items-center gap-2"><Heart size={18} /> متزوج</div>
              <div className="flex items-center gap-2"><Calendar size={18} /> انضم في 2024</div>
            </div>
          </div>
          <div className="bg-white dark:bg-fb-dark rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="font-bold text-fb-text dark:text-white mb-3">الأصدقاء</h3>
            <div className="grid grid-cols-3 gap-2">
              {sampleUsers.map(u => (
                <div key={u.id} className="text-center">
                  <img src={u.avatar} alt={u.name} className="w-full aspect-square rounded-lg object-cover" />
                  <p className="text-xs mt-1 text-fb-text dark:text-gray-200 truncate">{u.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-fb-dark rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 mb-4">
            <div className="flex items-center gap-2">
              <img src={currentUser.avatar} alt={currentUser.name} className="w-10 h-10 rounded-full object-cover" />
              <button className="flex-1 text-right bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2.5 text-fb-textGray dark:text-gray-300 text-sm">
                بماذا تفكر يا {currentUser.name.split(' ')[0]}؟
              </button>
            </div>
          </div>
          {initialPosts.map(p => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
