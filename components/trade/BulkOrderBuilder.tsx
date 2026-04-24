'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ShoppingCart, Plus, Minus, Info } from 'lucide-react';
import Container from '@/components/ui/Container';
import { PRODUCTS, Product } from '@/data/products';
import Badge from '@/components/ui/Badge';
import { cn } from '@/components/ui/Container';

export default function BulkOrderBuilder() {
  const [orders, setOrders] = useState<{ product: Product; cases: number }[]>([]);
  const [search, setSearch] = useState('');

  const CASE_SIZE = 24; // Standard units per case
  const TRADE_DISCOUNT = 0.85; // Silver Tier (15% off RRP)

  const filteredProducts = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) || 
    p.region.toLowerCase().includes(search.toLowerCase())
  );

  const totalCases = useMemo(() => orders.reduce((acc, o) => acc + o.cases, 0), [orders]);
  const subtotal = useMemo(() => orders.reduce((acc, o) => acc + (o.product.price * CASE_SIZE * TRADE_DISCOUNT * o.cases), 0), [orders]);
  const totalWeight = useMemo(() => orders.reduce((acc, o) => acc + (o.cases * CASE_SIZE * 50), 0) / 1000, [orders]); // kg

  const updateOrder = (product: Product, delta: number) => {
    setOrders(prev => {
      const existing = prev.find(o => o.product.id === product.id);
      if (existing) {
        const newCases = Math.max(0, existing.cases + delta);
        if (newCases === 0) return prev.filter(o => o.product.id !== product.id);
        return prev.map(o => o.product.id === product.id ? { ...o, cases: newCases } : o);
      }
      if (delta > 0) return [...prev, { product, cases: delta }];
      return prev;
    });
  };

  return (
    <div className="flex-grow flex flex-col h-screen overflow-hidden">
      {/* Search Header */}
      <div className="bg-white border-b border-border p-8 flex items-center justify-between gap-8 flex-shrink-0">
        <div className="relative flex-grow max-w-[600px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
          <input 
            type="text" 
            placeholder="Search SKU, Product, or Brand..." 
            className="w-full bg-off-white border border-border p-4 pl-12 rounded-sm focus:border-magenta outline-none transition-colors font-mono text-mono-xs" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4">
           <button className="flex items-center gap-2 px-6 py-4 border border-border font-mono text-mono-xs font-bold uppercase transition-all hover:border-magenta whitespace-nowrap">
             <Filter size={16} /> Filters
           </button>
           <button className="px-6 py-4 border border-border font-mono text-mono-xs font-bold uppercase transition-all hover:border-magenta whitespace-nowrap">
             Inventory Status
           </button>
        </div>
      </div>

      {/* Product Grid Area */}
      <div className="flex-grow overflow-y-auto p-8 pb-32 no-scrollbar bg-white">
        <div className="flex justify-between items-end mb-8">
           <h2 className="text-heading-md font-clash font-extrabold">All Bulk Units.</h2>
           <span className="text-mono-xs font-mono text-text-muted">{filteredProducts.length} PRODUCTS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const currentOrder = orders.find(o => o.product.id === product.id);
            const casePrice = product.price * CASE_SIZE * TRADE_DISCOUNT;
            const rrp = product.price * CASE_SIZE;
            const margin = (((rrp - casePrice) / rrp) * 100).toFixed(0);

            return (
              <div 
                key={product.id} 
                className={cn(
                  "bg-white border p-6 rounded-sm transition-all duration-300 relative group flex flex-col",
                  currentOrder ? "border-magenta ring-1 ring-magenta" : "border-border hover:border-text-muted"
                )}
              >
                <div className="flex gap-6 mb-6">
                  <div className="w-20 h-20 bg-off-white border border-border rounded-sm flex-shrink-0 overflow-hidden">
                    <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-mono-xs font-mono text-text-muted uppercase tracking-wider">{product.region}</span>
                    <h3 className="text-body-md font-extrabold font-clash text-text-primary line-clamp-1 truncate">{product.name}</h3>
                    <p className="text-mono-xs font-mono text-text-muted mt-1 uppercase tracking-widest">SKU_{product.id.split('-')[0].toUpperCase()}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-border/50">
                  <div className="space-y-1">
                    <p className="text-mono-xs font-mono text-text-muted">CASE PRICE (EX. VAT)</p>
                    <p className="text-heading-sm font-clash font-extrabold text-text-primary">£{casePrice.toFixed(2)}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-mono-xs font-mono text-text-muted">UNIT RRP</p>
                    <p className="text-body-sm font-bold font-satoshi text-text-secondary">£{product.price}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                   <div className="flex flex-col gap-1">
                     <span className="text-mono-xs font-mono text-text-muted">EST. MARGIN</span>
                     <Badge className="bg-emerald-50 text-emerald-600 border-none font-bold">{margin}%</Badge>
                   </div>
                   
                   {!currentOrder ? (
                     <button 
                       onClick={() => updateOrder(product, 1)}
                       className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-sm font-mono text-mono-xs font-bold uppercase hover:bg-magenta transition-colors shadow-lg active:scale-95"
                     >
                        <Plus size={14} /> Add Case
                     </button>
                   ) : (
                     <div className="flex items-center gap-4 bg-off-white p-1 rounded-sm border border-border">
                        <button onClick={() => updateOrder(product, -1)} className="p-2 hover:text-magenta transition-colors"><Minus size={14} /></button>
                        <span className="font-mono text-mono-sm font-bold min-w-[2ch] text-center">{currentOrder.cases}</span>
                        <button onClick={() => updateOrder(product, 1)} className="p-2 hover:text-magenta transition-colors"><Plus size={14} /></button>
                     </div>
                   )}
                </div>

                {currentOrder && (
                  <div className="absolute top-4 right-4 text-magenta">
                    <Info size={14} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Persistent Order Summary Footer */}
      <AnimatePresence>
        {totalCases > 0 && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 lg:left-[260px] right-0 h-24 bg-black text-white px-8 flex items-center justify-between z-[200] border-t border-white/10"
          >
             <div className="flex items-center gap-12">
                <div className="space-y-1">
                   <p className="text-mono-xs font-mono text-white/40 uppercase tracking-widest">Cases</p>
                   <p className="text-mono-md font-bold text-white">{totalCases}</p>
                </div>
                <div className="space-y-1">
                   <p className="text-mono-xs font-mono text-white/40 uppercase tracking-widest">Weight</p>
                   <p className="text-mono-md font-bold text-white">{totalWeight.toFixed(1)} KG</p>
                </div>
                <div className="space-y-1">
                   <p className="text-mono-xs font-mono text-white/40 uppercase tracking-widest">Subtotal (Ex. VAT)</p>
                   <p className="text-heading-sm font-clash font-extrabold text-magenta">£{subtotal.toFixed(2)}</p>
                </div>
             </div>

             <button className="bg-magenta text-white px-10 py-4 h-fit rounded-sm font-mono text-mono-xs font-bold uppercase hover:scale-105 active:scale-95 transition-all flex items-center gap-4">
                Place Bulk Order ↗
             </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
