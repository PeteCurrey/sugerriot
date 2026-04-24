'use client';

import { BOX_SIZES, BoxSize } from '@/hooks/use-box-builder';
import { cn } from '@/components/ui/Container';

interface BoxSizeSelectorProps {
  selected: BoxSize;
  onSelect: (size: BoxSize) => void;
}

export default function BoxSizeSelector({ selected, onSelect }: BoxSizeSelectorProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {BOX_SIZES.map((size) => (
        <button
          key={size.id}
          onClick={() => onSelect(size)}
          className={cn(
            "text-left p-6 rounded-sm border transition-all duration-300 bg-white",
            selected.id === size.id 
              ? "border-black shadow-md" 
              : "border-border hover:border-text-muted opacity-80"
          )}
        >
          <div className="flex flex-col gap-1">
            <span className="text-[15px] font-semibold font-satoshi text-text-primary">
              {size.name}
            </span>
            <span className="text-mono-xs text-text-muted font-mono uppercase">
              {size.weight}G Limit
            </span>
            <span className="text-display-xs font-clash font-extrabold mt-4 text-text-primary">
              £{size.price}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
