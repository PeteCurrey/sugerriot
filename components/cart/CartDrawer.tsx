'use client';

import React from 'react';
import { useCart } from '@/lib/shopify/cart-context';
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Divider from '@/components/ui/Divider';

export default function CartDrawer() {
  const { cart, isOpen, closeCart, removeItem, isLoading } = useCart();

  const lines = cart?.lines?.edges || [];
  const isEmpty = lines.length === 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-[480px] bg-white shadow-2xl z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6" />
                <h2 className="text-heading-md font-clash">Your Loot Bag</h2>
                <span className="bg-black text-white text-[10px] px-2 py-1 rounded-full font-mono">
                  {cart?.totalQuantity || 0}
                </span>
              </div>
              <button 
                onClick={closeCart}
                className="p-2 hover:bg-off-white rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-grow overflow-y-auto p-8">
              {isEmpty ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-off-white rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag className="w-10 h-10 text-text-muted" />
                  </div>
                  <h3 className="text-heading-md mb-2">Your bag is empty</h3>
                  <p className="text-body-md text-text-secondary max-w-[280px] mb-8">
                    Discover artisanal sweets from across the globe and fill your loot bag.
                  </p>
                  <Button variant="primary" onClick={closeCart}>Start Exploring</Button>
                </div>
              ) : (
                <div className="space-y-8">
                  {lines.map(({ node: line }: any) => (
                    <div key={line.id} className="flex gap-6 group">
                      {/* Image */}
                      <div className="w-24 h-24 bg-off-white rounded-sm overflow-hidden flex-shrink-0 border border-border">
                        <img 
                          src={line.merchandise.product.featuredImage?.url} 
                          alt={line.merchandise.product.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-grow flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="text-body-md font-bold font-satoshi pr-8">{line.merchandise.product.title}</h4>
                            <span className="text-body-md font-clash">
                              £{parseFloat(line.merchandise.price.amount).toFixed(2)}
                            </span>
                          </div>
                          <p className="text-mono-sm text-text-muted uppercase tracking-wider">
                            {line.merchandise.title !== 'Default Title' ? line.merchandise.title : 'Artisanal Batch'}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border border-border rounded-sm">
                            <button className="px-3 py-1 hover:bg-off-white border-r border-border"><Minus className="w-3 h-3" /></button>
                            <span className="px-4 text-[13px] font-mono">{line.quantity}</span>
                            <button className="px-3 py-1 hover:bg-off-white border-l border-border"><Plus className="w-3 h-3" /></button>
                          </div>
                          <button 
                            onClick={() => removeItem(line.id)}
                            className="text-text-muted hover:text-magenta transition-colors p-2"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {!isEmpty && (
              <div className="p-8 bg-off-white border-t border-border">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-body-lg font-medium">Subtotal</span>
                  <span className="text-heading-md font-clash">
                    £{parseFloat(cart?.cost?.totalAmount?.amount || '0').toFixed(2)}
                  </span>
                </div>
                <p className="text-mono-sm text-text-muted mb-8 italic">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="space-y-3">
                  <Button 
                    variant="primary" 
                    className="w-full justify-center text-lg py-7"
                    onClick={() => {
                        if (cart?.checkoutUrl) window.location.href = cart.checkoutUrl;
                    }}
                  >
                    Proceed to Checkout
                  </Button>
                  <Button variant="ghost" className="w-full justify-center" onClick={closeCart}>
                    Continue Shopping
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
