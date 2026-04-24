'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ACCORDIONS = [
  { id: 'details', title: 'DETAILS', content: 'Crafted with artisanal precision, our products use the finest ingredients sourced from the most exclusive global estates. Every component is measured with surgical accuracy to ensure the perfect flavour profile.' },
  { id: 'shipping', title: 'DELIVERY & RETURNS', content: 'Priority global logistics. UK Next-Day delivery for orders before 2pm. International shipping via express courier. 14-day hassle-free returns on sealed products.' },
  { id: 'nutritional', title: 'NUTRITIONAL INFO', content: 'Total Fat: 34g | Sugars: 42g | Energy: 540kcal per 100g. Full ingredient list available on physical packaging for verification.' },
];

export default function ProductAccordions() {
  const [openId, setOpenId] = useState<string | null>('details');

  return (
    <div className="border-t border-[var(--sr-fog)]">
      {ACCORDIONS.map((item) => (
        <div key={item.id} className="border-b border-[var(--sr-fog)]">
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="flex items-center justify-between w-full py-8 text-left group"
          >
            <span className={`label-mono text-[11px] transition-colors ${
              openId === item.id ? 'text-[var(--sr-riot)]' : 'text-[var(--sr-steel)] group-hover:text-white'
            }`}>
              {item.title}
            </span>
            <motion.div
              animate={{ rotate: openId === item.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={14} className={openId === item.id ? 'text-[var(--sr-riot)]' : 'text-[var(--sr-steel)]'} />
            </motion.div>
          </button>
          
          <AnimatePresence initial={false}>
            {openId === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="pb-10 text-[var(--sr-cloud)] text-md leading-relaxed max-w-[480px]">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

