import ShopTemplate from '@/components/shop/ShopTemplate';

export const metadata = {
  title: 'The Sweet Vault', // Will become "The Sweet Vault | SUGAR RIOT"
  description: 'Explore our complete vault of 1,200+ curated artisanal sweets from across six continents.',
};

export default function ShopPage() {
  return (
    <ShopTemplate 
      title="The Sweet Vault" 
      subtitle="1,200+ products from six continents. Curated weekly for the fashion-forward." 
    />
  );
}
