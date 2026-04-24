'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { useBoxBuilder } from '@/hooks/use-box-builder';
import Container from '@/components/ui/Container';
import BoxSizeSelector from './BoxSizeSelector';
import BoxSummary from './BoxSummary';
import CandyCard from './CandyCard';
import SectionLabel from '@/components/ui/SectionLabel';
import Reveal from '@/components/ui/Reveal';
import { cn } from '@/components/ui/Container';

const CATEGORIES = ['All', 'British Retro', 'American', 'Japanese & Asian', 'World Sweets', 'Chocolate', 'Fizzy', 'Gummies'];

export default function BoxBuilder() {
  const { 
    selectedSize, setSelectedSize, 
    items, addItem, removeItem, clearBox, 
    totalWeight, isFull, showToast, setShowToast 
  } = useBoxBuilder();

  const [activeCategory, setActiveCategory] = useState('All');

  // Filter products for the picker (only candy types)
  const filteredProducts = PRODUCTS.filter(p => {
    if (activeCategory === 'All') return true;
    if (p.region === activeCategory || p.type === activeCategory) return true;
    return false;
  });

  return (
    <div className="relative pt-[120px] pb-24">
      <Container>
        {/* Header Section */}
        <Reveal>
          <SectionLabel text="INTERACTIVE ↗" />
          <h1 className="text-display-md font-clash mt-4 mb-4 font-extrabold tracking-tight">Build Your Riot Box.</h1>
          <p className="text-body-lg text-text-secondary max-w-[600px] mb-12">
            Pick your sweets. Choose your size. We’ll do the rest. Curated weekly for the fashion-forward.
          </p>
        </Reveal>

        <div className="w-full h-[1px] bg-border mb-16" />

        {/* Main Builder Layout */}
        <div className="flex flex-col lg:flex-row gap-16 items-start relative">
          
          {/* Left Panel: Picker (65%) */}
          <div className="w-full lg:w-[65%] space-y-16">
            
            {/* Box Size Selector */}
            <div className="space-y-8">
              <SectionLabel text="STEP 1: SELECT CAPACITY" />
              <BoxSizeSelector 
                selected={selectedSize} 
                onSelect={(size) => {
                  setSelectedSize(size);
                  clearBox();
                }} 
              />
            </div>

            {/* Category Tabs */}
            <div className="space-y-8">
              <SectionLabel text="STEP 2: FILL YOUR BOX" />
              <div className="flex items-center gap-6 overflow-x-auto no-scrollbar border-b border-border">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "py-4 px-2 text-[13px] font-medium font-satoshi uppercase tracking-widest whitespace-nowrap transition-all relative",
                      activeCategory === cat 
                        ? "text-text-primary" 
                        : "text-text-muted hover:text-text-primary"
                    )}
                  >
                    {cat}
                    {activeCategory === cat && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-black" 
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                  const itemInBox = items.find(i => i.product.id === product.id);
                  return (
                    <CandyCard 
                      key={product.id}
                      product={product}
                      quantity={itemInBox?.quantity || 0}
                      onAdd={addItem}
                      onRemove={removeItem}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Panel: Sticky Summary (35%) */}
          <div className="w-full lg:w-[35%] relative">
             <BoxSummary 
                selectedSize={selectedSize}
                items={items}
                totalWeight={totalWeight}
                isFull={isFull}
                onRemove={removeItem}
                onClear={clearBox}
             />
          </div>
        </div>
      </Container>

      {/* Floating Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[200] bg-black text-white px-8 py-5 rounded-sm shadow-2xl flex items-center gap-4 border border-white/20"
          >
            <AlertCircle size={20} className="text-magenta" />
            <span className="text-mono-sm font-mono uppercase tracking-widest">
              Box is full — upgrade your size or remove items.
            </span>
            <button 
              onClick={() => setShowToast(false)}
              className="ml-4 hover:text-magenta transition-colors"
            >
              <SectionLabel text="DISMISS" className="text-white hover:text-magenta" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
