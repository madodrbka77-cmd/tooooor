import { useState } from 'react';
import CreatePost from './CreatePost';
import PostCard from './PostCard';
import StoryReel from './StoryReel';
import { initialPosts } from '../data/mockData';
import type { Post } from '../types';

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const addPost = (post: Post) => setPosts([post, ...posts]);

  return (
    <div className="max-w-2xl mx-auto">
      <StoryReel />
      <CreatePost onPost={addPost} />
      <div>
        {posts.map(p => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
