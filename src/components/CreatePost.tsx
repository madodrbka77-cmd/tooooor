import { useState } from 'react';
import { Image, Smile, Video, MapPin, X, Globe } from 'lucide-react';
import { currentUser } from '../data/mockData';
import type { Post } from '../types';

interface Props {
  onPost: (post: Post) => void;
}

export default function CreatePost({ onPost }: Props) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [image, setImage] = useState('');

  const submit = () => {
    if (!text.trim()) return;
    const post: Post = {
      id: `p${Date.now()}`,
      author: currentUser.name,
      avatar: currentUser.avatar,
      time: 'الآن',
      text,
      image: image || undefined,
      likes: 0,
      shares: 0,
      comments: [],
    };
    onPost(post);
    setText('');
    setImage('');
    setOpen(false);
  };

  return (
    <>
      <div className="bg-white dark:bg-fb-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 mb-4">
        <div className="flex items-center gap-2">
          <img src={currentUser.avatar} alt={currentUser.name} className="w-10 h-10 rounded-full object-cover" />
          <button
            onClick={() => setOpen(true)}
            className="flex-1 text-right bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2.5 text-fb-textGray dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            بماذا تفكر يا {currentUser.name.split(' ')[0]}؟
          </button>
        </div>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
          <button onClick={() => setOpen(true)} className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-fb-textGray dark:text-gray-300 text-sm">
            <Video size={20} className="text-red-500" /> فيديو
          </button>
          <button onClick={() => setOpen(true)} className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-fb-textGray dark:text-gray-300 text-sm">
            <Image size={20} className="text-green-500" /> صورة
          </button>
          <button onClick={() => setOpen(true)} className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-fb-textGray dark:text-gray-300 text-sm">
            <Smile size={20} className="text-yellow-500" /> شعور
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fadeIn" onClick={() => setOpen(false)}>
          <div
            className="bg-white dark:bg-fb-dark rounded-xl shadow-2xl w-full max-w-lg mx-4 overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="font-bold text-lg text-fb-text dark:text-white">إنشاء منشور</h2>
              <button onClick={() => setOpen(false)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <X size={20} className="text-fb-textGray dark:text-gray-300" />
              </button>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <img src={currentUser.avatar} alt={currentUser.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-fb-text dark:text-white text-sm">{currentUser.name}</p>
                  <div className="flex items-center gap-1 text-xs text-fb-textGray dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
                    <Globe size={12} /> عام
                  </div>
                </div>
              </div>
              <textarea
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder={`بماذا تفكر يا ${currentUser.name.split(' ')[0]}؟`}
                className="w-full min-h-[120px] bg-transparent text-fb-text dark:text-white text-lg resize-none focus:outline-none placeholder:text-fb-textGray dark:placeholder:text-gray-500"
                autoFocus
              />
              {image && (
                <div className="relative mt-2">
                  <img src={image} alt="preview" className="w-full max-h-64 object-cover rounded-lg" />
                  <button
                    onClick={() => setImage('')}
                    className="absolute top-2 left-2 p-1.5 bg-black/60 rounded-full text-white hover:bg-black/80"
                  >
                    <X size={18} />
                  </button>
                </div>
              )}
              <div className="flex items-center gap-2 mt-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg justify-between">
                <span className="text-sm font-medium text-fb-text dark:text-white">أضف للمنشور</span>
                <div className="flex items-center gap-1">
                  <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700"><Video size={20} className="text-red-500" /></button>
                  <button onClick={() => setImage('https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800')} className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700"><Image size={20} className="text-green-500" /></button>
                  <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700"><Smile size={20} className="text-yellow-500" /></button>
                  <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700"><MapPin size={20} className="text-red-400" /></button>
                </div>
              </div>
              <button
                onClick={submit}
                disabled={!text.trim()}
                className="w-full mt-3 py-2.5 rounded-lg bg-fb-blue text-white font-semibold disabled:opacity-40 hover:bg-emerald-800 transition-colors"
              >
                نشر
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
