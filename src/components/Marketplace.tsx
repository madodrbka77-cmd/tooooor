import { Search, Tag, MapPin } from 'lucide-react';
import { marketItems } from '../data/mockData';

export default function Marketplace() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-fb-text dark:text-white">السوق</h1>
        <div className="flex items-center gap-2 bg-white dark:bg-fb-dark rounded-full px-4 py-2 border border-gray-200 dark:border-gray-700">
          <Search size={18} className="text-fb-textGray dark:text-gray-400" />
          <input
            type="text"
            placeholder="ابحث في السوق..."
            className="bg-transparent text-fb-text dark:text-white text-sm focus:outline-none placeholder:text-fb-textGray dark:placeholder:text-gray-500 w-40 sm:w-64"
          />
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar mb-4 pb-2">
        {['الكل', 'إلكترونيات', 'أثاث', 'سيارات', 'ملابس', 'عقارات'].map((cat, i) => (
          <button
            key={cat}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium ${
              i === 0 ? 'bg-fb-blue text-white' : 'bg-white dark:bg-fb-dark text-fb-text dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {marketItems.map(item => (
          <div key={item.id} className="bg-white dark:bg-fb-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
            <div className="aspect-square overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div className="p-3">
              <p className="font-bold text-fb-blue dark:text-emerald-400 text-lg">{item.price}</p>
              <p className="text-sm font-medium text-fb-text dark:text-white truncate">{item.title}</p>
              <div className="flex items-center gap-1 mt-1 text-xs text-fb-textGray dark:text-gray-400">
                <MapPin size={12} /> {item.location}
              </div>
              <div className="flex items-center gap-1 mt-1 text-xs text-fb-textGray dark:text-gray-400">
                <Tag size={12} /> {item.seller}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
