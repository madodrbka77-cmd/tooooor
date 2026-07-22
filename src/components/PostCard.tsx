import { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Send } from 'lucide-react';
import type { Post, Comment } from '../types';

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  const [liked, setLiked] = useState(post.liked ?? false);
  const [saved, setSaved] = useState(post.saved ?? false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<Comment[]>(post.comments);
  const [commentText, setCommentText] = useState('');

  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const submitComment = () => {
    if (!commentText.trim()) return;
    const c: Comment = {
      id: `c${Date.now()}`,
      author: 'أحمد محمد',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: commentText,
      time: 'الآن',
      likes: 0,
    };
    setComments([...comments, c]);
    setCommentText('');
  };

  return (
    <div className="bg-white dark:bg-fb-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 mb-4 animate-fadeIn">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="font-semibold text-fb-text dark:text-white text-sm">{post.author}</p>
            <p className="text-xs text-fb-textGray dark:text-gray-400">{post.time}</p>
          </div>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <MoreHorizontal size={20} className="text-fb-textGray dark:text-gray-300" />
        </button>
      </div>

      <div className="px-3 pb-3">
        <p className="text-fb-text dark:text-gray-200 text-sm leading-relaxed">{post.text}</p>
      </div>

      {post.image && (
        <div className="w-full max-h-[500px] overflow-hidden">
          <img src={post.image} alt="post" className="w-full object-cover" />
        </div>
      )}

      <div className="flex items-center justify-between px-4 py-2 text-xs text-fb-textGray dark:text-gray-400">
        <span className="flex items-center gap-1">
          <Heart size={14} className="fill-red-500 text-red-500" /> {likeCount}
        </span>
        <span>{comments.length} تعليق · {post.shares} مشاركة</span>
      </div>

      <div className="flex items-center justify-around px-2 py-1 border-t border-gray-100 dark:border-gray-700">
        <button
          onClick={toggleLike}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
            liked ? 'text-red-500' : 'text-fb-textGray dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <Heart size={18} className={liked ? 'fill-red-500' : ''} /> إعجاب
        </button>
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-fb-textGray dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
        >
          <MessageCircle size={18} /> تعليق
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-fb-textGray dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm font-medium">
          <Share2 size={18} /> مشاركة
        </button>
        <button
          onClick={() => setSaved(!saved)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
            saved ? 'text-fb-blue dark:text-emerald-400' : 'text-fb-textGray dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <Bookmark size={18} className={saved ? 'fill-current' : ''} /> حفظ
        </button>
      </div>

      {showComments && (
        <div className="px-3 py-2 border-t border-gray-100 dark:border-gray-700 space-y-2">
          {comments.map(c => (
            <div key={c.id} className="flex items-start gap-2">
              <img src={c.avatar} alt={c.author} className="w-8 h-8 rounded-full object-cover mt-1" />
              <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl px-3 py-2 flex-1">
                <p className="font-semibold text-fb-text dark:text-white text-xs">{c.author}</p>
                <p className="text-fb-text dark:text-gray-200 text-sm">{c.text}</p>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-2 mt-2">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200" alt="me" className="w-8 h-8 rounded-full object-cover" />
            <div className="flex-1 flex items-center bg-gray-100 dark:bg-gray-700 rounded-full px-3">
              <input
                type="text"
                value={commentText}
                onChange={e => setCommentText(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && submitComment()}
                placeholder="اكتب تعليقاً..."
                className="flex-1 bg-transparent text-fb-text dark:text-white text-sm py-2 focus:outline-none placeholder:text-fb-textGray dark:placeholder:text-gray-500"
              />
              <button onClick={submitComment} className="p-1 text-fb-blue hover:text-emerald-700">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
