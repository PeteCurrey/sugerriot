'use client';

import { cn } from '../ui/Container';

export default function MegaMenuShop({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-full left-0 w-full bg-white border-b border-border shadow-2xl z-50 overflow-hidden"
      onMouseLeave={onClose}
    >
      <div className="container-custom py-12 grid grid-cols-6 gap-8">
        {/* BY REGION */}
        <div className="col-span-1">
          <span className="text-mono-sm text-magenta block mb-6">BY REGION ↗</span>
          <ul className="space-y-4">
            {['🇬🇧 British Retro', '🇺🇸 American Candy', '🇯🇵 Japanese Sweets', '🇰🇷 Korean Snacks', '🌍 World Sweets'].map((item) => (
              <li key={item}>
                <a href="#" className="text-body-sm text-text-primary/70 hover:text-text-primary flex items-center group transition-all">
                  <span className="w-0 h-full border-l-2 border-magenta opacity-0 group-hover:w-1 group-hover:opacity-100 transition-all mr-2" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* BY TYPE */}
        <div className="col-span-1">
          <span className="text-mono-sm text-magenta block mb-6">BY TYPE ↗</span>
          <ul className="space-y-4">
            {['Gummies & Jellies', 'Chocolate', 'Boiled & Hard', 'Fizzy & Sour', 'Chewy', 'Lollipops', 'Novelty'].map((item) => (
              <li key={item}>
                <a href="#" className="text-body-sm text-text-primary/70 hover:text-text-primary block transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* BY DIET */}
        <div className="col-span-1">
          <span className="text-mono-sm text-magenta block mb-6">BY DIET ↗</span>
          <ul className="space-y-4">
            {['Vegan', 'Vegetarian', 'Halal', 'Gluten-Free', 'Sugar-Free', 'Dairy-Free'].map((item) => (
              <li key={item}>
                <a href="#" className="text-body-sm text-text-primary/70 hover:text-text-primary block transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* BY OCCASION */}
        <div className="col-span-1">
          <span className="text-mono-sm text-magenta block mb-6">BY OCCASION ↗</span>
          <ul className="space-y-4">
            {['Birthday', 'Valentine\'s', 'Easter', 'Christmas', 'Halloween', 'Thank You'].map((item) => (
              <li key={item}>
                <a href="#" className="text-body-sm text-text-primary/70 hover:text-text-primary block transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* TRENDING VISUAL */}
        <div className="col-span-2 bg-off-white p-6 rounded-sm">
          <div className="aspect-[4/5] bg-border mb-6 flex items-center justify-center">
             <span className="text-mono-sm text-text-muted">IMAGE PREVIEW</span>
          </div>
          <span className="text-mono-sm text-magenta block mb-2 uppercase">Featured Product</span>
          <h3 className="text-heading-md mb-4 font-clash">The Midnight Box</h3>
          <a href="#" className="text-mono-sm text-text-primary underline underline-offset-4">SHOP NOW</a>
        </div>
      </div>
    </div>
  );
}
