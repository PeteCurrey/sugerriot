'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container, { cn } from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

const STEPS = [
  'Business Details',
  'Contact & Delivery',
  'Account Preferences'
];

export default function TradeApplication() {
  const [step, setStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => setStep(prev => Math.min(prev + 1, STEPS.length - 1));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 0));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Container className="max-w-[600px] text-center py-32">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          <CheckCircle2 size={80} className="text-magenta mx-auto mb-8" />
          <h2 className="text-display-md font-clash font-extrabold mb-4">Application Received.</h2>
          <p className="text-body-lg text-text-secondary leading-relaxed">
            Your verification sequence is now active. Our trade team will be in touch within 24 business hours to finalize your account credentials.
          </p>
          <div className="mt-12">
             <Button variant="primary" href="/trade">Back to Trade Hub</Button>
          </div>
        </motion.div>
      </Container>
    );
  }

  return (
    <Container className="max-w-[720px] py-20">
      <div className="mb-16">
        <SectionLabel text="APPLICATION ↗" />
        <h1 className="text-heading-lg font-clash font-extrabold mt-4 mb-8">Register as a Supplier.</h1>
        
        {/* Step Progress Bar */}
        <div className="w-full h-[3px] bg-border relative overflow-hidden rounded-full mb-4">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-magenta"
            initial={{ width: '0%' }}
            animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="flex justify-between text-mono-xs font-mono text-text-muted uppercase tracking-widest">
           <span>{STEPS[step]}</span>
           <span>STEP {step + 1} OF {STEPS.length}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="step0" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-mono-xs font-mono font-bold text-text-primary uppercase tracking-widest">Business Legal Name</label>
                  <input type="text" className="w-full bg-white border border-border p-4 rounded-sm focus:border-magenta outline-none transition-colors" placeholder="E.g. Sweet Ventures Ltd" required />
                </div>
                <div className="space-y-3">
                  <label className="text-mono-xs font-mono font-bold text-text-primary uppercase tracking-widest">Trading Name</label>
                  <input type="text" className="w-full bg-white border border-border p-4 rounded-sm focus:border-magenta outline-none transition-colors" placeholder="E.g. Sugar Riot" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-mono-xs font-mono font-bold text-text-primary uppercase tracking-widest">VAT Number</label>
                  <input type="text" className="w-full bg-white border border-border p-4 rounded-sm focus:border-magenta outline-none transition-colors" placeholder="GB12345678" />
                </div>
                <div className="space-y-3">
                   <label className="text-mono-xs font-mono font-bold text-text-primary uppercase tracking-widest">Business Category</label>
                   <select className="w-full bg-white border border-border p-4 rounded-sm focus:border-magenta outline-none transition-colors appearance-none cursor-pointer">
                      <option>Independent Retailer</option>
                      <option>Chain Store</option>
                      <option>Hospitality / Café</option>
                      <option>Events / PR Agency</option>
                      <option>Online Marketplace</option>
                   </select>
                </div>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="step1" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-mono-xs font-mono font-bold text-text-primary uppercase tracking-widest">Primary Contact Name</label>
                  <input type="text" className="w-full bg-white border border-border p-4 rounded-sm focus:border-magenta outline-none transition-colors" placeholder="Alice Smith" required />
                </div>
                <div className="space-y-3">
                  <label className="text-mono-xs font-mono font-bold text-text-primary uppercase tracking-widest">Work Email</label>
                  <input type="email" className="w-full bg-white border border-border p-4 rounded-sm focus:border-magenta outline-none transition-colors" placeholder="alice@business.com" required />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-mono-xs font-mono font-bold text-text-primary uppercase tracking-widest">Business Address</label>
                <textarea className="w-full h-32 bg-white border border-border p-4 rounded-sm focus:border-magenta outline-none transition-colors resize-none mb-4" placeholder="Street, City, Postcode" required />
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-8">
               <div className="space-y-3">
                  <label className="text-mono-xs font-mono font-bold text-text-primary uppercase tracking-widest">Estimated Monthly Spend</label>
                  <select className="w-full bg-white border border-border p-4 rounded-sm focus:border-magenta outline-none transition-colors appearance-none cursor-pointer">
                      <option>Under £1,000</option>
                      <option>£1,000 - £5,000</option>
                      <option>£5,000 - £10,000</option>
                      <option>£10,000+</option>
                   </select>
               </div>
               <div className="space-y-3">
                  <label className="text-mono-xs font-mono font-bold text-text-primary uppercase tracking-widest">Primary Interests</label>
                  <div className="grid grid-cols-2 gap-4">
                     {['Bulk Sours', 'Fizzy Retro', 'Japanese Exclusives', 'USA Drops', 'Gift Packaging', 'Bespoke Mixes'].map(cat => (
                        <label key={cat} className="flex items-center gap-4 p-4 border border-border rounded-sm hover:border-magenta cursor-pointer transition-colors group">
                           <input type="checkbox" className="w-4 h-4 accent-magenta" />
                           <span className="text-body-sm text-text-primary">{cat}</span>
                        </label>
                     ))}
                  </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-12 border-t border-border mt-16">
          <button 
            type="button"
            onClick={prevStep}
            className={cn(
              "text-mono-xs font-mono font-bold uppercase tracking-widest hover:text-magenta transition-colors",
              step === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
          >
            ← Previous Step
          </button>
          
          {step === STEPS.length - 1 ? (
            <Button variant="primary" className="bg-magenta border-magenta w-full sm:w-auto">
              Submit Trade Application
            </Button>
          ) : (
            <Button type="button" variant="primary" onClick={nextStep} className="bg-magenta border-magenta w-full sm:w-auto">
              Next Step ↗
            </Button>
          )}
        </div>
      </form>
    </Container>
  );
}
