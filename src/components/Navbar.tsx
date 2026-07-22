import { Search, Moon, Sun, Home, Users, Store, Gamepad2, Bookmark, Menu } from 'lucide-react';
import type { User, Page } from '../types';

interface Props {
  user: User;
  darkMode: boolean;
  onToggleDark: () => void;
  onNavigate: (p: Page) => void;
  currentPage: Page;
}

export default function Navbar({ user, darkMode, onToggleDark, onNavigate, currentPage }: Props) {
  const navItems: { page: Page; icon: typeof Home; label: string }[] = [
    { page: 'home', icon: Home, label: 'الرئيسية' },
    { page: 'watch', icon: Users, label: 'المشاهدة' },
    { page: 'marketplace', icon: Store, label: 'السوق' },
    { page: 'gaming', icon: Gamepad2, label: 'الألعاب' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-fb-dark shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="flex items-center justify-between px-4 h-16">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-full bg-fb-blue flex items-center justify-center text-white font-bold text-lg shadow-md">
              T
            </div>
            <span className="hidden sm:block text-xl font-bold text-fb-blue dark:text-white">Tourloop</span>
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(({ page, icon: Icon, label }) => (
            <button
              key={page}
              onClick={() => onNavigate(page)}
              className={`px-6 py-2 rounded-lg flex items-center gap-2 transition-all hover:bg-fb-hover dark:hover:bg-gray-700 ${
                currentPage === page
                  ? 'text-fb-blue dark:text-emerald-400 border-b-2 border-fb-blue'
                  : 'text-fb-textGray dark:text-gray-300'
              }`}
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{label}</span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleDark}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="تبديل الوضع الليلي"
          >
            {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
          </button>
          <button
            onClick={() => onNavigate('saved')}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <Bookmark size={20} className="text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={() => onNavigate('profile')}
            className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-transparent hover:ring-fb-blue transition-all"
          >
            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
          </button>
        </div>
      </div>
    </header>
  );
}
