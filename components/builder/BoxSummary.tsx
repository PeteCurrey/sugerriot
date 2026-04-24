'use client';

import { X, Trash2 } from 'lucide-react';
import { Product } from '@/data/products';
import { BoxSize } from '@/hooks/use-box-builder';
import Button from '@/components/ui/Button';
import { cn } from '@/components/ui/Container';

interface BoxSummaryProps {
  selectedSize: BoxSize;
  items: { product: Product; quantity: number }[];
  totalWeight: number;
  isFull: boolean;
  onRemove: (productId: string) => void;
  onClear: () => void;
}

export default function BoxSummary({ 
  selectedSize, 
  items, 
  totalWeight, 
  isFull, 
  onRemove, 
  onClear 
}: BoxSummaryProps) {
  
  const percentage = Math.min(100, (totalWeight / selectedSize.weight) * 100);

  return (
    <div className="sticky top-[120px] bg-white border border-border rounded-sm flex flex-col h-[calc(100vh-160px)]">
      {/* Header */}
      <div className="p-6 border-b border-border bg-off-white/50">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[16px] font-semibold font-satoshi uppercase tracking-wider">Your Box</h3>
          <button 
            onClick={onClear}
            className="text-mono-xs text-text-muted hover:text-magenta transition-colors flex items-center gap-2"
          >
            <Trash2 size={12} /> CLEAR
          </button>
        </div>

        {/* Progress Bar */}
        <div className="space-y-3">
          <div className="flex justify-between items-end">
            <span className="text-mono-xs font-mono text-text-muted uppercase">Progress</span>
            <span className="text-mono-xs font-bold font-mono text-text-primary">
              {totalWeight}G / {selectedSize.weight}G
            </span>
          </div>
          <div className="h-2 w-full bg-off-white border border-border rounded-full overflow-hidden">
            <div 
              className="h-full bg-black transition-all duration-500 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
          {isFull && (
            <p className="text-[11px] font-medium text-magenta font-mono uppercase tracking-wider">
              ✦ Box is full! Ready to riot.
            </p>
          )}
        </div>
      </div>

      {/* Item List */}
      <div className="flex-grow overflow-y-auto p-6 space-y-4 no-scrollbar">
        {items.length > 0 ? (
          items.map(({ product, quantity }) => (
            <div key={product.id} className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-off-white border border-border rounded-sm overflow-hidden flex-shrink-0">
                <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-body-sm font-semibold truncate leading-tight font-satoshi">
                  {product.name}
                </p>
                <p className="text-mono-xs font-mono text-text-muted mt-0.5">
                  {quantity * 100}G — £{(product.price / 4 * quantity).toFixed(2)}
                </p>
              </div>
              <button 
                onClick={() => onRemove(product.id)}
                className="opacity-0 group-hover:opacity-100 p-2 hover:text-magenta transition-all"
              >
                <X size={14} />
              </button>
            </div>
          ))
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center opacity-40 py-12">
            <div className="w-12 h-12 border-2 border-dashed border-border rounded-full mb-4" />
            <p className="text-mono-xs font-mono uppercase tracking-widest leading-loose">
              Your box is empty.<br/>Start your riot.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-border space-y-4">
        <div className="flex justify-between items-center px-1">
          <span className="text-body-sm font-medium font-satoshi text-text-secondary">Subtotal</span>
          <span className="text-heading-sm font-clash font-extrabold text-text-primary">£{selectedSize.price}</span>
        </div>
        <Button 
          variant="primary" 
          className="w-full justify-center py-4"
          disabled={!isFull}
        >
          {isFull ? "Complete My Box ↗" : `Add ${selectedSize.weight - totalWeight}g More`}
        </Button>
      </div>
    </div>
  );
}
