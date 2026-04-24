'use client';

import { Plus, Minus } from 'lucide-react';
import { Product } from '@/data/products';
import { cn } from '@/components/ui/Container';

interface CandyCardProps {
  product: Product;
  quantity: number;
  onAdd: (product: Product) => void;
  onRemove: (productId: string) => void;
}

export default function CandyCard({ product, quantity, onAdd, onRemove }: CandyCardProps) {
  const isInBox = quantity > 0;

  return (
    <div 
      className={cn(
        "bg-white border transition-all duration-300 rounded-sm overflow-hidden",
        isInBox ? "border-magenta ring-1 ring-magenta" : "border-border hover:border-text-muted"
      )}
    >
      <div className="aspect-square bg-off-white overflow-hidden relative">
        <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
      </div>

      <div className="p-4 flex flex-col gap-3">
        <div className="space-y-1">
          <h3 className="text-body-sm font-semibold font-satoshi text-text-primary line-clamp-2 min-h-[2.5rem]">
            {product.name}
          </h3>
          <p className="font-mono text-[11px] text-text-muted uppercase tracking-wider">
            £{(product.price / 4).toFixed(2)} / 100g
          </p>
        </div>

        <div className="flex items-center justify-between">
          {!isInBox ? (
            <button
              onClick={() => onAdd(product)}
              className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center hover:bg-magenta transition-colors hover:scale-110 active:scale-95"
            >
              <Plus size={18} />
            </button>
          ) : (
            <div className="flex items-center gap-4">
              <button 
                onClick={() => onRemove(product.id)}
                className="w-7 h-7 bg-off-white text-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
                <Minus size={14} />
              </button>
              <span className="font-mono text-[13px] font-bold text-text-primary">{quantity}</span>
              <button 
                onClick={() => onAdd(product)}
                className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center hover:bg-magenta transition-colors"
              >
                <Plus size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
