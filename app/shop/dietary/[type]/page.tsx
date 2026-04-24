'use client';

import { useParams } from 'next/navigation';
import ShopTemplate from '@/components/shop/ShopTemplate';

const DIETARY_MAP: Record<string, { title: string, subtitle: string, diet: string }> = {
  'vegan': { title: 'Vegan Sweets. Zero Compromise.', subtitle: 'Plant-based luxury from the finest global confectionaries.', diet: 'Vegan' },
  'halal': { title: 'Halal Certified. Every Product.', subtitle: 'Our complete collection of certified halal sweets from around the world.', diet: 'Halal' },
  'gluten-free': { title: 'Gluten-Free. Full Flavour.', subtitle: 'Unmistakable taste, zero gluten. Curated for the sweet-toothed connoisseur.', diet: 'Gluten-Free' },
};

export default function DietaryPage() {
  const { type } = useParams();
  const slug = Array.isArray(type) ? type[0] : type;
  const config = DIETARY_MAP[slug as string] || { 
    title: 'Specialty Sweets', 
    subtitle: 'Curated for specific dietary requirements without the compromise.',
    diet: 'Vegan'
  };

  return (
    <ShopTemplate 
      title={config.title} 
      subtitle={config.subtitle} 
      initialType={config.diet} 
    />
  );
}
