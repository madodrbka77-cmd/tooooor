import type { Post, Story, Group, MarketItem, Game, User } from '../types';

export const currentUser: User = {
  id: 'u1',
  name: 'أحمد محمد',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
  cover: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1200',
};

export const sampleUsers: User[] = [
  { id: 'u2', name: 'سارة أحمد', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { id: 'u3', name: 'خالد علي', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { id: 'u4', name: 'نورة سعيد', avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { id: 'u5', name: 'عمر حسن', avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { id: 'u6', name: 'ليلى فهد', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200' },
];

export const stories: Story[] = [
  { id: 's1', author: 'سارة أحمد', avatar: sampleUsers[0].avatar, image: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=400' },
  { id: 's2', author: 'خالد علي', avatar: sampleUsers[1].avatar, image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 's3', author: 'نورة سعيد', avatar: sampleUsers[2].avatar, image: 'https://images.pexels.com/photos/2356071/pexels-photo-2356071.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 's4', author: 'عمر حسن', avatar: sampleUsers[3].avatar, image: 'https://images.pexels.com/photos/2356087/pexels-photo-2356087.jpeg?auto=compress&cs=tinysrgb&w=400', viewed: true },
  { id: 's5', author: 'ليلى فهد', avatar: sampleUsers[4].avatar, image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=400', viewed: true },
];

export const initialPosts: Post[] = [
  {
    id: 'p1',
    author: 'سارة أحمد',
    avatar: sampleUsers[0].avatar,
    time: 'قبل 15 دقيقة',
    text: 'يوم رائع في الطبيعة! لا شيء يضاهي جمال الغروب على البحر 🌅',
    image: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=800',
    likes: 142,
    shares: 8,
    comments: [
      { id: 'c1', author: 'خالد علي', avatar: sampleUsers[1].avatar, text: 'صورة جميلة جدا!', time: 'قبل 10 دقائق', likes: 3 },
      { id: 'c2', author: 'نورة سعيد', avatar: sampleUsers[2].avatar, text: 'ما شاء الله، منظر خلاب', time: 'قبل 5 دقائق', likes: 1 },
    ],
  },
  {
    id: 'p2',
    author: 'خالد علي',
    avatar: sampleUsers[1].avatar,
    time: 'قبل ساعة',
    text: 'بدأت مشروع جديد اليوم وأنا متحمس جداً! أتمنى لكم التوفيق جميعاً 💪',
    likes: 89,
    shares: 2,
    comments: [
      { id: 'c3', author: 'أحمد محمد', avatar: currentUser.avatar, text: 'بالتوفيق يا خالد!', time: 'قبل 45 دقيقة', likes: 5 },
    ],
  },
  {
    id: 'p3',
    author: 'نورة سعيد',
    avatar: sampleUsers[2].avatar,
    time: 'قبل 3 ساعات',
    text: 'وصفة جديدة اليوم: كيكة الشوكولاتة بالكريمة 🍫 من يريد الوصفة؟',
    image: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=800',
    likes: 256,
    shares: 34,
    comments: [
      { id: 'c4', author: 'ليلى فهد', avatar: sampleUsers[4].avatar, text: 'أنا أريد! 🙋‍♀️', time: 'قبل ساعتين', likes: 12 },
      { id: 'c5', author: 'عمر حسن', avatar: sampleUsers[3].avatar, text: 'تبين تباعين؟ 😄', time: 'قبل ساعتين', likes: 8 },
    ],
  },
];

export const groups: Group[] = [
  { id: 'g1', name: 'عشاق السفر والرحلات', cover: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400', members: 12400, category: 'سفر' },
  { id: 'g2', name: 'مطبخنا العربي', cover: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=400', members: 8900, category: 'طبخ' },
  { id: 'g3', name: 'عالم التصوير', cover: 'https://images.pexels.com/photos/2356071/pexels-photo-2356071.jpeg?auto=compress&cs=tinysrgb&w=400', members: 5600, category: 'تصوير' },
  { id: 'g4', name: 'تقنية والمستقبل', cover: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=400', members: 15200, category: 'تقنية' },
];

export const marketItems: MarketItem[] = [
  { id: 'm1', title: 'آيفون 15 برو', price: '3,200 ر.س', image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400', location: 'الرياض', seller: 'عمر حسن' },
  { id: 'm2', title: 'دراجة هوائية', price: '850 ر.س', image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=400', location: 'جدة', seller: 'سارة أحمد' },
  { id: 'm3', title: 'ساعة يد فاخرة', price: '1,500 ر.س', image: 'https://images.pexels.com/photos/997872/pexels-photo-997872.jpeg?auto=compress&cs=tinysrgb&w=400', location: 'الدمام', seller: 'خالد علي' },
  { id: 'm4', title: 'كرسي مكتب مريح', price: '600 ر.س', image: 'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=400', location: 'مكة', seller: 'نورة سعيد' },
  { id: 'm5', title: 'كاميرا احترافية', price: '4,800 ر.س', image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=400', location: 'الرياض', seller: 'ليلى فهد' },
  { id: 'm6', title: 'نباتات داخلية', price: '120 ر.س', image: 'https://images.pexels.com/photos/1086198/pexels-photo-1086198.jpeg?auto=compress&cs=tinysrgb&w=400', location: 'جدة', seller: 'أحمد محمد' },
];

export const games: Game[] = [
  { id: 'gm1', title: 'مغامرة الصحراء', image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400', genre: 'مغامرات', players: '1.2M' },
  { id: 'gm2', title: 'سباق السرعة', image: 'https://images.pexels.com/photos/935923/pexels-photo-935923.jpeg?auto=compress&cs=tinysrgb&w=400', genre: 'سباقات', players: '850K' },
  { id: 'gm3', title: 'ألغاز العقل', image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=400', genre: 'ألغاز', players: '600K' },
  { id: 'gm4', title: 'بطل الميدان', image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=400', genre: 'رياضة', players: '2.1M' },
];

export const savedPosts: Post[] = [
  {
    id: 'sp1',
    author: 'ليلى فهد',
    avatar: sampleUsers[4].avatar,
    time: 'أمس',
    text: 'نصائح للنجاح في الحياة والعمل 💼',
    likes: 320,
    shares: 45,
    comments: [],
    saved: true,
  },
];
