import { useState, useMemo } from 'react';
import { Product } from '@/data/products';

export interface BoxSize {
  id: string;
  name: string;
  weight: number; // in grams
  price: number;
}

export const BOX_SIZES: BoxSize[] = [
  { id: 'taster', name: 'Taster', weight: 250, price: 8.99 },
  { id: 'classic', name: 'Classic', weight: 500, price: 14.99 },
  { id: 'riot', name: 'Riot Box', weight: 1000, price: 24.99 },
  { id: 'mega', name: 'Mega Box', weight: 2000, price: 44.99 },
];

export function useBoxBuilder() {
  const [selectedSize, setSelectedSize] = useState<BoxSize>(BOX_SIZES[2]); // Default to Riot Box (1kg)
  const [items, setItems] = useState<{ product: Product; quantity: number }[]>([]);
  const [showToast, setShowToast] = useState(false);

  // Each '+' click adds 100g as per my plan (simplified logic for the user's "100g" theme)
  const WEIGHT_PER_UNIT = 100;

  const totalWeight = useMemo(() => {
    return items.reduce((acc, item) => acc + item.quantity * WEIGHT_PER_UNIT, 0);
  }, [items]);

  const isFull = totalWeight >= selectedSize.weight;

  const addItem = (product: Product) => {
    if (totalWeight + WEIGHT_PER_UNIT > selectedSize.weight) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    setItems(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) {
        return prev.map(i => i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeItem = (productId: string) => {
    setItems(prev => {
      const existing = prev.find(i => i.product.id === productId);
      if (existing && existing.quantity > 1) {
        return prev.map(i => i.product.id === productId ? { ...i, quantity: i.quantity - 1 } : i);
      }
      return prev.filter(i => i.product.id !== productId);
    });
  };

  const clearBox = () => setItems([]);

  return {
    selectedSize,
    setSelectedSize,
    items,
    totalWeight,
    isFull,
    addItem,
    removeItem,
    clearBox,
    showToast,
    setShowToast,
    WEIGHT_PER_UNIT
  };
}
