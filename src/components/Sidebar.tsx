import { Home, Users, Store, Gamepad2, Bookmark, UsersRound, Heart, ChevronLeft } from 'lucide-react';
import { currentUser } from '../data/mockData';
import type { Page } from '../types';

interface Props {
  currentPage: Page;
  onNavigate: (p: Page) => void;
}

export default function Sidebar({ currentPage, onNavigate }: Props) {
  const items: { page: Page; icon: typeof Home; label: string }[] = [
    { page: 'home', icon: Home, label: 'الرئيسية' },
    { page: 'profile', icon: Users, label: 'الملف الشخصي' },
    { page: 'watch', icon: UsersRound, label: 'المشاهدة' },
    { page: 'marketplace', icon: Store, label: 'السوق' },
    { page: 'gaming', icon: Gamepad2, label: 'الألعاب' },
    { page: 'saved', icon: Bookmark, label: 'المحفوظات' },
    { page: 'groups', icon: Heart, label: 'المجموعات' },
    { page: 'memorise', icon: Heart, label: 'الذكريات' },
  ];

  return (
    <aside className="w-64 shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto no-scrollbar py-4 px-2">
      <button
        onClick={() => onNavigate('profile')}
        className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-fb-hover dark:hover:bg-gray-700 transition-colors mb-2"
      >
        <img src={currentUser.avatar} alt={currentUser.name} className="w-9 h-9 rounded-full object-cover" />
        <span className="font-semibold text-fb-text dark:text-white text-sm">{currentUser.name}</span>
      </button>
      {items.map(({ page, icon: Icon, label }) => (
        <button
          key={page}
          onClick={() => onNavigate(page)}
          className={`flex items-center gap-3 w-full p-2 rounded-lg transition-colors ${
            currentPage === page
              ? 'bg-fb-blue/10 text-fb-blue dark:text-emerald-400'
              : 'hover:bg-fb-hover dark:hover:bg-gray-700 text-fb-text dark:text-gray-200'
          }`}
        >
          <Icon size={22} />
          <span className="text-sm font-medium">{label}</span>
        </button>
      ))}
      <div className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-fb-hover dark:hover:bg-gray-700 transition-colors cursor-pointer">
        <ChevronLeft size={22} className="text-fb-textGray dark:text-gray-400" />
        <span className="text-sm font-medium text-fb-textGray dark:text-gray-400">المزيد</span>
      </div>
    </aside>
  );
}
