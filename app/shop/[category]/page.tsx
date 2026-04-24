'use client';

import { useParams } from 'next/navigation';
import ShopTemplate from '@/components/shop/ShopTemplate';

const CATEGORY_MAP: Record<string, { title: string, subtitle: string, region: string }> = {
  'british': { title: 'British Retro', subtitle: 'The corner shop icons of your childhood. Curated for the new generation.', region: 'British' },
  'american': { title: 'American Candy', subtitle: 'Big, bold, and unapologetically sweet. Exclusive imports from the USA.', region: 'American' },
  'japanese': { title: 'Japanese Sweets', subtitle: 'Artistry meets flavour. A curated collection of the finest exports from Japan.', region: 'Japanese' },
  'european': { title: 'European Classics', subtitle: 'The refined sweetness of the continent. From Belgian truffles to Swedish salt.', region: 'European' },
};

export default function CategoryPage() {
  const { category } = useParams();
  const slug = Array.isArray(category) ? category[0] : category;
  const config = CATEGORY_MAP[slug as string] || { 
    title: 'World Sweets', 
    subtitle: 'A journey across six continents. Every product tells a story.',
    region: 'Global'
  };

  return (
    <ShopTemplate 
      title={config.title} 
      subtitle={config.subtitle} 
      initialCategory={config.region} 
    />
  );
}
