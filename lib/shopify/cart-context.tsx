'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { shopifyFetch } from './client';
import { 
  CREATE_CART_MUTATION, 
  GET_CART_QUERY, 
  ADD_TO_CART_MUTATION,
  REMOVE_FROM_CART_MUTATION
} from './queries';

interface CartContextType {
  cart: any | null;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (variantId: string, quantity?: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
  isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<any | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize Cart
  useEffect(() => {
    async function initCart() {
      const storedCartId = localStorage.getItem('sugar_riot_cart_id');
      if (storedCartId) {
        const data: any = await shopifyFetch(GET_CART_QUERY, { cartId: storedCartId });
        if (data?.cart) {
          setCart(data.cart);
          return;
        }
      }
      
      // If no cart or cart expired, create a new one
      const data: any = await shopifyFetch(CREATE_CART_MUTATION, { input: {} });
      if (data?.cartCreate?.cart) {
        setCart(data.cartCreate.cart);
        localStorage.setItem('sugar_riot_cart_id', data.cartCreate.cart.id);
      }
    }
    
    initCart();
  }, []);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addItem = async (variantId: string, quantity: number = 1) => {
    if (!cart?.id) return;
    setIsLoading(true);
    setIsOpen(true);

    const data: any = await shopifyFetch(ADD_TO_CART_MUTATION, {
      cartId: cart.id,
      lines: [{ merchandiseId: variantId, quantity }]
    });

    if (data?.cartLinesAdd?.cart) {
      setCart(data.cartLinesAdd.cart);
    }
    setIsLoading(false);
  };

  const removeItem = async (lineId: string) => {
    if (!cart?.id) return;
    setIsLoading(true);

    const data: any = await shopifyFetch(REMOVE_FROM_CART_MUTATION, {
      cartId: cart.id,
      lineIds: [lineId]
    });

    if (data?.cartLinesRemove?.cart) {
      setCart(data.cartLinesRemove.cart);
    }
    setIsLoading(false);
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      isOpen, 
      openCart, 
      closeCart, 
      addItem, 
      removeItem, 
      isLoading 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
