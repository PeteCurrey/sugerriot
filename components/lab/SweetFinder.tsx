'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import AnalyzingState from './AnalyzingState';
import ProductCard from '@/components/product/ProductCard';
import { PRODUCTS } from '@/data/products';

const STEPS = [
  {
    id: 'personality',
    question: 'How would your friends describe your current mood?',
    options: [
      { id: 'electric', label: '⚡ Electric & High Energy', value: 'sour' },
      { id: 'nostalgic', label: '📼 Deeply Nostalgic', value: 'retro' },
      { id: 'refined', label: '🍷 Refined & Sophisticated', value: 'chocolate' },
      { id: 'playful', label: '🎈 Playful & Carefree', value: 'gummies' },
    ]
  },
  {
    id: 'flavor',
    question: 'Select your preferred sensory profile.',
    options: [
      { id: 'tart', label: 'Sharp & Tart', value: 'sour' },
      { id: 'rich', label: 'Decadent & Rich', value: 'chocolate' },
      { id: 'classic', label: 'Sugar-Sweet & Familiar', value: 'retro' },
      { id: 'unconventional', label: 'Unconventional & Global', value: 'global' },
    ]
  },
  {
    id: 'texture',
    question: 'What texture is most satisfying?',
    options: [
      { id: 'chewy', label: 'Dense & Chewy', value: 'gummies' },
      { id: 'crunchy', label: 'Hard & Crunchy', value: 'hard-candy' },
      { id: 'smooth', label: 'Velvety & Smooth', value: 'chocolate' },
      { id: 'fizzy', label: 'Effervescent & Fizzy', value: 'retro' },
    ]
  },
  {
    id: 'travel',
    question: 'The best sweet experience comes from...',
    options: [
      { id: 'corner-shop', label: 'A Corner Shop in London', value: 'british' },
      { id: 'tokyo-street', label: 'A Side-street in Tokyo', value: 'japanese' },
      { id: 'nyc-bodega', label: 'A Bodega in Manhattan', value: 'american' },
      { id: 'european-classic', label: 'A European Confectionery', value: 'european' },
    ]
  },
  {
    id: 'lifestyle',
    question: 'Is your sweet-tooth restricted?',
    options: [
      { id: 'none', label: 'Zero Restrictions', value: 'all' },
      { id: 'vegan', label: 'Strictly Vegan', value: 'vegan' },
      { id: 'halal', label: 'Halal Certified', value: 'halal' },
      { id: 'gf', label: 'Gluten-Free', value: 'gluten-free' },
    ]
  }
];

export default function SweetFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleSelect = (category: string, value: string) => {
    const nextAnswers = { ...answers, [category]: value };
    setAnswers(nextAnswers);

    if (step < STEPS.length - 1) {
      setStep(prev => prev + 1);
    } else {
      setIsAnalyzing(true);
      // Simulate AI processing
      setTimeout(() => {
        setIsAnalyzing(false);
        setResults({
          persona: "The Global Connoisseur",
          description: "You have a refined palate that craves the unconventional. You value texture and origin story as much as sugar content.",
          products: PRODUCTS.slice(0, 3) // Mock recommendations
        });
      }, 4000);
    }
  };

  return (
    <div className="min-h-[600px] flex items-center justify-center py-20">
      <AnimatePresence mode="wait">
        {isAnalyzing ? (
          <motion.div key="analyzing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
             <AnalyzingState />
          </motion.div>
        ) : results ? (
          <motion.div key="results" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="w-full">
            <Container className="max-w-[1000px]">
               <div className="bg-off-white border border-border p-12 mb-16 rounded-sm text-center">
                  <SectionLabel text="DISCOVERY_REPORT" />
                  <h2 className="text-display-md font-clash mt-6 mb-4">Your Persona: {results.persona}</h2>
                  <p className="text-body-lg text-text-secondary max-w-2xl mx-auto italic leading-relaxed">
                    "{results.description}"
                  </p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {results.products.map((p: any, i: number) => (
                    <div key={p.id} className="animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
                       <ProductCard product={p} />
                    </div>
                  ))}
               </div>

               <div className="mt-20 flex justify-center gap-6">
                  <Button variant="primary">Add Recommendation to Box</Button>
                  <Button variant="ghost" onClick={() => { setStep(0); setResults(null); }}>Start Again</Button>
               </div>
            </Container>
          </motion.div>
        ) : (
          <motion.div 
            key={step} 
            initial={{ x: 20, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            exit={{ x: -20, opacity: 0 }}
            className="w-full max-w-[640px] px-8"
          >
            <div className="mb-12">
               <span className="text-mono-xs font-mono text-text-muted uppercase tracking-[0.2em] mb-4 block">
                 STEP {step + 1} OF {STEPS.length} ↗
               </span>
               <div className="flex gap-1 h-1 w-full bg-off-white mb-10 overflow-hidden rounded-full">
                  {STEPS.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-full flex-grow transition-colors duration-500 ${i <= step ? 'bg-black' : 'bg-border/30'}`} 
                    />
                  ))}
               </div>
               <h2 className="text-display-sm font-clash font-extrabold leading-tight">
                 {STEPS[step].question}
               </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {STEPS[step].options.map((opt) => (
                 <button
                   key={opt.id}
                   onClick={() => handleSelect(STEPS[step].id, opt.value)}
                   className="p-8 border border-border rounded-sm bg-white text-left transition-all duration-300 hover:border-black hover:bg-off-white group"
                 >
                   <span className="text-body-md font-semibold text-text-primary group-hover:text-magenta transition-colors">
                     {opt.label}
                   </span>
                 </button>
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
