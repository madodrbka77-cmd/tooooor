import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Watch from './components/Watch';
import Marketplace from './components/Marketplace';
import Gaming from './components/Gaming';
import SavedItems from './components/SavedItems';
import Memorise from './components/Memorise';
import { currentUser } from './data/mockData';
import type { Page } from './types';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const navigate = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-fb-gray dark:bg-fb-dark transition-colors duration-300">
      <Navbar
        user={currentUser}
        darkMode={darkMode}
        onToggleDark={() => setDarkMode(!darkMode)}
        onNavigate={navigate}
        currentPage={page}
      />
      <div className="flex max-w-7xl mx-auto pt-16">
        {!isMobile && (
          <Sidebar currentPage={page} onNavigate={navigate} />
        )}
        <main className="flex-1 min-h-screen px-2 sm:px-4 py-4">
          {page === 'home' && <Feed />}
          {page === 'profile' && <Profile />}
          {page === 'watch' && <Watch />}
          {page === 'marketplace' && <Marketplace />}
          {page === 'gaming' && <Gaming />}
          {page === 'saved' && <SavedItems />}
          {page === 'groups' && <Memorise />}
          {page === 'memorise' && <Memorise />}
        </main>
        {!isMobile && page === 'home' && <Rightbar />}
      </div>
    </div>
  );
}
