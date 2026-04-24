'use client';

import { useState } from 'react';
import { Minus, Plus, Heart, Check, ShoppingBag } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('Standard');
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const variants = ['Standard', 'Gift Pack', 'Wholesale Box'];

  return (
    <div className="flex flex-col gap-10">
      {/* Brand & Category */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <span className="label-mono text-[var(--sr-riot)] tracking-[0.2em]">
            {product.brand.toUpperCase()}
          </span>
          <div className="h-[1px] w-8 bg-[var(--sr-fog)]" />
          <span className="label-mono text-[var(--sr-steel)]">
            {product.region.toUpperCase()}
          </span>
        </div>
        <h1 className="font-playfair text-5xl md:text-6xl text-white leading-[1.1] font-medium">
          {product.name}
        </h1>
      </div>

      {/* Price & Badge */}
      <div className="flex items-center gap-6">
        <span className="text-[var(--sr-riot)] font-mono text-3xl font-bold">
          £{product.price.toFixed(2)}
        </span>
        <div className="flex gap-2">
          {product.diet.map((d) => (
            <span key={d} className="label-mono text-[9px] border border-[var(--sr-fog)] px-2 py-1 text-[var(--sr-steel)]">
              {d.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="text-[var(--sr-cloud)] text-lg leading-relaxed max-w-[500px]">
        Premium {product.type.toLowerCase()} from {product.region}. Curated globally, delivered with surgical precision. 
        Experience the authentic taste of luxury confectionery.
      </p>

      {/* Variant Selector */}
      <div className="space-y-4">
        <span className="label-mono text-[var(--sr-steel)] text-[10px]">SELECT FORMAT</span>
        <div className="flex flex-wrap gap-2">
          {variants.map((variant) => (
            <button
              key={variant}
              onClick={() => setSelectedVariant(variant)}
              className={`px-8 py-3 text-[12px] font-mono tracking-widest transition-all border ${
                selectedVariant === variant 
                  ? "bg-white text-black border-white" 
                  : "bg-transparent text-[var(--sr-cloud)] border-[var(--sr-fog)] hover:border-[var(--sr-white)]"
              }`}
            >
              {variant.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity & CTA */}
      <div className="space-y-8 pt-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center h-14 bg-[var(--sr-chrome)] border border-[var(--sr-fog)]">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-6 h-full text-[var(--sr-white)] hover:text-[var(--sr-riot)] transition-colors"
            >
              <Minus size={16} />
            </button>
            <span className="w-12 text-center font-mono text-white text-lg">
              {quantity}
            </span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="px-6 h-full text-[var(--sr-white)] hover:text-[var(--sr-riot)] transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
          
          <button 
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`flex-grow h-14 flex items-center justify-center gap-3 font-mono text-[13px] uppercase tracking-[0.2em] transition-all ${
              isAdded 
                ? "bg-green-600 text-white" 
                : "bg-[var(--sr-riot)] text-white hover:brightness-110 active:scale-[0.98]"
            }`}
          >
            {isAdded ? (
              <>
                <Check size={18} /> ADDED
              </>
            ) : (
              <>
                <ShoppingBag size={18} /> ADD TO BAG
              </>
            )}
          </button>
        </div>

        <div className="flex items-center justify-between border-t border-[var(--sr-fog)] pt-8">
          <button className="flex items-center gap-2 label-mono text-[var(--sr-steel)] hover:text-white transition-colors">
            <Heart size={14} /> ADD TO WISHLIST
          </button>
          <span className="label-mono text-[var(--sr-steel)]">SECURE CHECKOUT</span>
        </div>
      </div>
    </div>
  );
}

