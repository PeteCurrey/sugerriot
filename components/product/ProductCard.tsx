'use client';

import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/shopify/cart-context';
import { urlFor } from '@/lib/sanity.client';

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string | any;
  badge?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id);
  };

  return (
    <div 
      data-cursor="view"
      className="product-card group bg-[var(--sr-obsidian)] border border-transparent transition-all duration-500 hover:border-[var(--sr-fog)] cursor-pointer overflow-hidden flex flex-col h-full"
    >
      {/* Image Layer */}
      <div className="aspect-[4/5] bg-[var(--sr-void)] overflow-hidden relative">
        <img
          src={typeof product.image === 'string' ? product.image : urlFor(product.image).width(600).url()}
          alt={product.name}
          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-[1.06]"
        />
        
        {/* Quick Add Button */}
        <button 
          onClick={handleAddToCart}
          className="absolute bottom-6 right-6 bg-[var(--sr-riot)] text-white p-4 rounded-full opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 z-10 shadow-xl"
        >
          <ShoppingBag size={18} />
        </button>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-6 left-6 z-20">
            <span className="label-mono bg-white text-black px-3 py-1 text-[9px] font-bold">
              {product.badge.toUpperCase()}
            </span>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="p-6 pb-8 flex-grow flex flex-col justify-between transition-transform duration-500 group-hover:-translate-y-2">
        <div>
          <span className="label-mono text-[var(--sr-steel)] block mb-3">
            {product.brand}
          </span>
          <h3 className="text-white text-lg font-medium leading-tight mb-4 relative inline-block">
            {product.name}
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[var(--sr-riot)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </h3>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-[var(--sr-riot)] font-mono text-lg font-semibold tracking-tight">
            £{product.price.toFixed(2)}
          </span>
          <span className="label-mono text-[var(--sr-steel)] text-[9px] group-hover:text-[var(--sr-white)] transition-colors">
            SHOP NOW →
          </span>
        </div>
      </div>
    </div>
  );
}

