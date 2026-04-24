'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { History, Search } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import AnalyzingState from './AnalyzingState';
import ProductCard from '@/components/product/ProductCard';
import { PRODUCTS } from '@/data/products';

export default function NostalgiaDecoder() {
  const [memory, setMemory] = useState('');
  const [isDecoding, setIsDecoding] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleDecode = () => {
    if (!memory.trim()) return;
    
    setIsDecoding(true);
    // Simulate AI decoding
    setTimeout(() => {
      setIsDecoding(false);
      setResult({
        memorySummary: "Your memory features high level of coastal ozone, vintage paper, and strawberry-profiles.",
        poeticResult: "We have mapped these nodes to the British Retro era. The specific combination of salt air and high-sugar strawberry points directly to our corner shop icons of the late 1960s.",
        products: PRODUCTS.filter(p => p.region === 'British' || p.type === 'Retro').slice(0, 3)
      });
    }, 5000);
  };

  return (
    <div className="min-h-[600px] flex items-center justify-center py-20">
      <AnimatePresence mode="wait">
        {isDecoding ? (
          <motion.div key="decoding" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
             <AnalyzingState />
          </motion.div>
        ) : result ? (
          <motion.div key="results" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="w-full">
            <Container className="max-w-[1000px]">
               <div className="bg-off-white border border-border p-12 mb-16 rounded-sm text-left">
                  <SectionLabel text="DECODING_COMPLETE" />
                  <div className="flex flex-col md:flex-row gap-12 mt-8">
                     <div className="md:w-1/2">
                        <h2 className="text-display-sm font-clash font-extrabold mb-4 uppercase">The Analysis</h2>
                        <p className="text-body-md text-text-primary leading-relaxed">
                          {result.memorySummary}
                        </p>
                     </div>
                     <div className="md:w-1/2">
                        <h2 className="text-display-sm font-clash font-extrabold mb-4 uppercase">The Match</h2>
                        <p className="text-body-md text-text-secondary italic leading-relaxed">
                          "{result.poeticResult}"
                        </p>
                     </div>
                  </div>
               </div>
               
               <h3 className="text-display-xs font-clash font-extrabold mb-10 text-center uppercase tracking-widest">Matched Retro Icons</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {result.products.map((p: any, i: number) => (
                    <div key={p.id} className="animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
                       <ProductCard product={p} />
                    </div>
                  ))}
               </div>

               <div className="mt-20 flex justify-center gap-6">
                  <Button variant="ghost" onClick={() => { setMemory(''); setResult(null); }}>Decode New Memory</Button>
               </div>
            </Container>
          </motion.div>
        ) : (
          <motion.div 
            key="input" 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            exit={{ y: -20, opacity: 0 }}
            className="w-full max-w-[720px] px-8 text-center"
          >
            <div className="mb-12">
               <div className="w-16 h-16 bg-off-white flex items-center justify-center rounded-full mx-auto mb-8 text-magenta border border-border">
                  <History size={24} />
               </div>
               <SectionLabel text="DECODE_MEMORIES" />
               <h2 className="text-display-md font-clash mt-6 mb-4">What does your sweetness feel like?</h2>
               <p className="text-body-lg text-text-secondary leading-relaxed">
                 Describe a childhood memory, a specific place, or a feeling. Our AI will decode the sensory nodes into sweet equivalents.
               </p>
            </div>

            <div className="space-y-8">
               <div className="relative">
                  <textarea
                    value={memory}
                    onChange={(e) => setMemory(e.target.value)}
                    placeholder="E.g. Grandpa's pipe and rainy Saturdays in London..."
                    className="w-full h-48 bg-off-white border-2 border-border p-10 text-body-lg font-satoshi text-text-primary placeholder:text-text-muted focus:border-black focus:outline-none transition-all rounded-sm resize-none"
                  />
                  <div className="absolute top-4 right-4 text-mono-xs text-text-muted font-mono uppercase tracking-widest">
                    READY_FOR_INPUT
                  </div>
               </div>

               <Button 
                variant="primary" 
                className="w-full justify-center py-5 uppercase tracking-widest flex items-center gap-4"
                onClick={handleDecode}
                disabled={!memory.trim()}
               >
                 <Search size={18} /> Run Decoder Sequence
               </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
