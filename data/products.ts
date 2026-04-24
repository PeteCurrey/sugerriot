export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: 'new' | 'sale' | 'limited';
  region: 'British' | 'American' | 'Japanese' | 'European' | 'Global';
  type: 'Gummies' | 'Chocolate' | 'Hard Candy' | 'Sour' | 'Licorice' | 'Retro';
  diet: ('Vegan' | 'Halal' | 'Gluten-Free' | 'Sugar-Free')[];
  occasion: 'Gift' | 'Self-Treat' | 'Party' | 'Wedding';
  slug: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Strawberry Dream Clouds',
    brand: 'BRITISH RETRO',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1582050058244-4e1804c21e35?q=80&w=1000&auto=format&fit=crop',
    badge: 'new',
    region: 'British',
    type: 'Gummies',
    diet: ['Gluten-Free'],
    occasion: 'Self-Treat',
    slug: 'strawberry-dream-clouds'
  },
  {
    id: '2',
    name: 'Sour Matcha Melon',
    brand: 'JAPANESE SWEETS',
    price: 6.95,
    originalPrice: 8.50,
    image: 'https://images.unsplash.com/photo-1599321955419-78536d36e0d3?q=80&w=1000&auto=format&fit=crop',
    badge: 'sale',
    region: 'Japanese',
    type: 'Sour',
    diet: ['Vegan', 'Halal'],
    occasion: 'Self-Treat',
    slug: 'sour-matcha-melon'
  },
  {
    id: '3',
    name: 'Midnight Licorice Twists',
    brand: 'WORLD SWEETS',
    price: 5.25,
    image: 'https://images.unsplash.com/photo-1534954413000-880572da9a19?q=80&w=1000&auto=format&fit=crop',
    region: 'Global',
    type: 'Licorice',
    diet: ['Vegan'],
    occasion: 'Self-Treat',
    slug: 'midnight-licorice-twists'
  },
  {
    id: '4',
    name: 'Sherbet Fountain Classic',
    brand: 'BRITISH RETRO',
    price: 1.50,
    image: 'https://images.unsplash.com/photo-1621939514649-280e2eeea7f4?q=80&w=1000&auto=format&fit=crop',
    region: 'British',
    type: 'Retro',
    diet: ['Gluten-Free'],
    occasion: 'Self-Treat',
    slug: 'sherbet-fountain'
  },
  {
    id: '5',
    name: 'Blue Raspberry Bon Bons',
    brand: 'BRITISH RETRO',
    price: 3.95,
    image: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?q=80&w=1000&auto=format&fit=crop',
    region: 'British',
    type: 'Gummies',
    diet: ['Halal'],
    occasion: 'Party',
    slug: 'blue-raspberry-bon-bons'
  },
  {
    id: '6',
    name: 'Giant Gummy Python',
    brand: 'AMERICAN CANDY',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1543157145-f78c636d023d?q=80&w=1000&auto=format&fit=crop',
    badge: 'limited',
    region: 'American',
    type: 'Gummies',
    diet: ['Gluten-Free'],
    occasion: 'Gift',
    slug: 'giant-gummy-python'
  },
  {
    id: '7',
    name: 'Spicy Chamoy Skittles',
    brand: 'AMERICAN CANDY',
    price: 5.50,
    image: 'https://images.unsplash.com/photo-1621939514649-280e2eeea7f4?q=80&w=1000&auto=format&fit=crop',
    region: 'American',
    type: 'Sour',
    diet: ['Vegan'],
    occasion: 'Self-Treat',
    slug: 'spicy-chamoy-skittles'
  },
  {
    id: '8',
    name: 'Yuzu Pepper Rock Candy',
    brand: 'JAPANESE SWEETS',
    price: 6.50,
    image: 'https://images.unsplash.com/photo-1582305540412-f0da3691656c?q=80&w=1000&auto=format&fit=crop',
    region: 'Japanese',
    type: 'Hard Candy',
    diet: ['Vegan', 'Gluten-Free'],
    occasion: 'Gift',
    slug: 'yuzu-pepper-rock'
  },
  {
    id: '9',
    name: 'Sakura Mochi Gummies',
    brand: 'JAPANESE SWEETS',
    price: 4.95,
    image: 'https://images.unsplash.com/photo-1582050058244-4e1804c21e35?q=80&w=1000&auto=format&fit=crop',
    badge: 'new',
    region: 'Japanese',
    type: 'Gummies',
    diet: ['Gluten-Free'],
    occasion: 'Self-Treat',
    slug: 'sakura-mochi-gummies'
  },
  {
    id: '10',
    name: 'Salted Caramel Stroopwafels',
    brand: 'EUROPEAN CLASSICS',
    price: 7.25,
    image: 'https://images.unsplash.com/photo-1534954413000-880572da9a19?q=80&w=1000&auto=format&fit=crop',
    region: 'European',
    type: 'Retro',
    diet: ['Halal'],
    occasion: 'Gift',
    slug: 'salted-caramel-stroopwafels'
  },
  {
    id: '11',
    name: 'Artisanal Violet Pastilles',
    brand: 'EUROPEAN CLASSICS',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1599321955419-78536d36e0d3?q=80&w=1000&auto=format&fit=crop',
    region: 'European',
    type: 'Hard Candy',
    diet: ['Vegan', 'Gluten-Free'],
    occasion: 'Gift',
    slug: 'violet-pastilles'
  },
  {
    id: '12',
    name: 'Super Sour Apple Rings',
    brand: 'WORLD SWEETS',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?q=80&w=1000&auto=format&fit=crop',
    region: 'Global',
    type: 'Sour',
    diet: ['Vegan', 'Halal'],
    occasion: 'Self-Treat',
    slug: 'sour-apple-rings'
  },
  {
    id: '13',
    name: 'Belgian Dark Truffles',
    brand: 'EUROPEAN CLASSICS',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1543157145-f78c636d023d?q=80&w=1000&auto=format&fit=crop',
    badge: 'limited',
    region: 'European',
    type: 'Chocolate',
    diet: ['Gluten-Free'],
    occasion: 'Gift',
    slug: 'belgian-dark-truffles'
  },
  {
    id: '14',
    name: 'Hokkaido Milk Melts',
    brand: 'JAPANESE SWEETS',
    price: 9.95,
    image: 'https://images.unsplash.com/photo-1582305540412-f0da3691656c?q=80&w=1000&auto=format&fit=crop',
    region: 'Japanese',
    type: 'Chocolate',
    diet: ['Halal'],
    occasion: 'Self-Treat',
    slug: 'hokkaido-milk-melts'
  },
  {
    id: '15',
    name: 'Atomic Fireballs',
    brand: 'AMERICAN CANDY',
    price: 2.50,
    image: 'https://images.unsplash.com/photo-1621939514649-280e2eeea7f4?q=80&w=1000&auto=format&fit=crop',
    region: 'American',
    type: 'Hard Candy',
    diet: ['Vegan', 'Halal', 'Sugar-Free'],
    occasion: 'Party',
    slug: 'atomic-fireballs'
  },
  {
    id: '16',
    name: 'Sugar-Free Gummy Bears',
    brand: 'WORLD SWEETS',
    price: 4.25,
    image: 'https://images.unsplash.com/photo-1582050058244-4e1804c21e35?q=80&w=1000&auto=format&fit=crop',
    region: 'Global',
    type: 'Gummies',
    diet: ['Sugar-Free', 'Halal'],
    occasion: 'Self-Treat',
    slug: 'sugar-free-gummy-bears'
  },
  {
    id: '17',
    name: 'Blackberry Salmiak',
    brand: 'WORLD SWEETS',
    price: 5.75,
    image: 'https://images.unsplash.com/photo-1534954413000-880572da9a19?q=80&w=1000&auto=format&fit=crop',
    region: 'Global',
    type: 'Licorice',
    diet: ['Vegan'],
    occasion: 'Self-Treat',
    slug: 'blackberry-salmiak'
  },
  {
    id: '18',
    name: 'Wedding Favor Mix',
    brand: 'SUGAR RIOT EXCLUSIVE',
    price: 25.00,
    image: 'https://images.unsplash.com/photo-1599321955419-78536d36e0d3?q=80&w=1000&auto=format&fit=crop',
    badge: 'new',
    region: 'British',
    type: 'Retro',
    diet: ['Halal'],
    occasion: 'Wedding',
    slug: 'wedding-favor-mix'
  },
  {
    id: '19',
    name: 'Freeze-Dried Peach Rings',
    brand: 'WORLD SWEETS',
    price: 6.50,
    image: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?q=80&w=1000&auto=format&fit=crop',
    region: 'Global',
    type: 'Sour',
    diet: ['Vegan'],
    occasion: 'Self-Treat',
    slug: 'freeze-dried-peach-rings'
  },
  {
    id: '20',
    name: 'Champagne Gummy Bears',
    brand: 'WORLD SWEETS',
    price: 7.50,
    image: 'https://images.unsplash.com/photo-1543157145-f78c636d023d?q=80&w=1000&auto=format&fit=crop',
    badge: 'limited',
    region: 'European',
    type: 'Gummies',
    diet: ['Gluten-Free'],
    occasion: 'Party',
    slug: 'champagne-gummy-bears'
  }
];
