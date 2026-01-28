export interface Donut {
  id: number;
  name: string;
  description: string;
  quantity: string;
  price: number;
  badge?: 'hit' | 'new' | 'sugar-free';
  image: string;
}

export const donuts: Donut[] = [
  {
    id: 1,
    name: "Classic Glaze",
    description: "Нежная ванильная глазурь на воздушном тесте",
    quantity: "1 шт",
    price: 8,
    badge: 'hit',
    image: '/donuts/classic-glaze.png'
  },
  {
    id: 2,
    name: "Choco Crunch",
    description: "Шоколадная глазурь с хрустящей посыпкой",
    quantity: "6 шт",
    price: 9,
    badge: 'hit',
    image: '/donuts/choco-crunch.png'
  },
  {
    id: 3,
    name: "Berry Cloud",
    description: "Ягодный микс с воздушным кремом",
    quantity: "1 шт",
    price: 9,
    badge: 'new',
    image: '/donuts/berry-cloud.png'
  },
  {
    id: 4,
    name: "Salted Caramel",
    description: "Карамель с морской солью — идеальный баланс",
    quantity: "12 шт",
    price: 10,
    image: '/donuts/salted-caramel.png'
  },
  {
    id: 5,
    name: "Matcha Dream",
    description: "Японская матча с белым шоколадом",
    quantity: "6 шт",
    price: 11,
    badge: 'new',
    image: '/donuts/matcha-dream.png'
  },
  {
    id: 6,
    name: "Peanut Bomb",
    description: "Арахисовая паста и шоколадная глазурь",
    quantity: "1 шт",
    price: 12,
    image: '/donuts/peanut-bomb.png'
  },
];

export const reviews = [
  {
    id: 1,
    name: "Анна К.",
    text: "Лучшие пончики в городе! Всегда свежие, невероятно вкусные.",
    rating: 5,
    avatar: '/avatars/avatar-1.jpg'
  },
  {
    id: 2,
    name: "Михаил П.",
    text: "Заказываю каждую неделю на работу. Коллеги в восторге! Доставка быстрая, упаковка аккуратная. Рекомендую!",
    rating: 5,
    avatar: '/avatars/avatar-2.jpg'
  },
  {
    id: 3,
    name: "Елена С.",
    text: "Очень вкусные пончики, нежные и свежие. Приятно удивило качество и разнообразие выбора.",
    rating: 5,
    avatar: '/avatars/avatar-3.jpg'
  },
  {
    id: 4,
    name: "Дмитрий В.",
    text: "Отличное качество и разумные цены. Пончики действительно свежие каждый день. Буду заказывать ещё!",
    rating: 5,
    avatar: '/avatars/avatar-4.jpg'
  },
];

export const galleryImages = [
  '/gallery/shop-1.jpg',
  '/gallery/shop-2.jpg',
  '/gallery/shop-3.jpg',
  '/gallery/shop-4.jpg',
  '/gallery/shop-5.jpg',
];
