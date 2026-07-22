export type Page =
  | 'home'
  | 'profile'
  | 'watch'
  | 'marketplace'
  | 'gaming'
  | 'saved'
  | 'groups'
  | 'memorise';

export interface User {
  id: string;
  name: string;
  avatar: string;
  cover?: string;
}

export interface Comment {
  id: string;
  author: string;
  avatar: string;
  text: string;
  time: string;
  likes: number;
}

export interface Post {
  id: string;
  author: string;
  avatar: string;
  time: string;
  text: string;
  image?: string;
  likes: number;
  comments: Comment[];
  shares: number;
  liked?: boolean;
  saved?: boolean;
}

export interface Story {
  id: string;
  author: string;
  avatar: string;
  image: string;
  viewed?: boolean;
}

export interface Group {
  id: string;
  name: string;
  cover: string;
  members: number;
  category: string;
}

export interface MarketItem {
  id: string;
  title: string;
  price: string;
  image: string;
  location: string;
  seller: string;
}

export interface Game {
  id: string;
  title: string;
  image: string;
  genre: string;
  players: string;
}
