'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: any;
  setFilters: (filters: any) => void;
  clearFilters: () => void;
  resultCount: number;
}

const REGIONS = ['British', 'American', 'Japanese', 'European', 'Global'];
const TYPES = ['Gummies', 'Chocolate', 'Hard Candy', 'Sour', 'Licorice', 'Retro'];
const DIETS = ['Vegan', 'Halal', 'Gluten-Free', 'Sugar-Free'];
const OCCASIONS = ['Gift', 'Self-Treat', 'Party', 'Wedding'];

export default function FilterDrawer({ 
  isOpen, 
  onClose, 
  filters, 
  setFilters, 
  clearFilters,
  resultCount
}: FilterDrawerProps) {
  
  const toggleFilter = (category: string, value: string) => {
    const current = filters[category] || [];
    const next = current.includes(value)
      ? current.filter((v: string) => v !== value)
      : [...current, value];
    setFilters({ ...filters, [category]: next });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[200]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[201] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-border">
              <h2 className="text-[18px] font-semibold font-satoshi">Filter Products</h2>
              <div className="flex items-center gap-6">
                <button 
                  onClick={clearFilters}
                  className="text-mono-sm text-text-muted hover:text-magenta transition-colors"
                >
                  CLEAR ALL
                </button>
                <button onClick={onClose} className="p-1 hover:text-magenta transition-colors">
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-grow overflow-y-auto px-8 py-8 space-y-10">
              <FilterGroup title="BY REGION" isOpen={true}>
                <div className="grid grid-cols-1 gap-4 pt-4">
                  {REGIONS.map((region) => (
                    <Checkbox 
                      key={region} 
                      label={region} 
                      checked={filters.region?.includes(region)} 
                      onChange={() => toggleFilter('region', region)} 
                    />
                  ))}
                </div>
              </FilterGroup>

              <FilterGroup title="BY TYPE">
                <div className="grid grid-cols-1 gap-4 pt-4">
                  {TYPES.map((type) => (
                    <Checkbox 
                      key={type} 
                      label={type} 
                      checked={filters.type?.includes(type)} 
                      onChange={() => toggleFilter('type', type)} 
                    />
                  ))}
                </div>
              </FilterGroup>

              <FilterGroup title="BY DIET">
                <div className="grid grid-cols-1 gap-4 pt-4">
                  {DIETS.map((diet) => (
                    <Checkbox 
                      key={diet} 
                      label={diet} 
                      checked={filters.diet?.includes(diet)} 
                      onChange={() => toggleFilter('diet', diet)} 
                    />
                  ))}
                </div>
              </FilterGroup>

              <FilterGroup title="BY OCCASION">
                <div className="grid grid-cols-1 gap-4 pt-4">
                  {OCCASIONS.map((occ) => (
                    <Checkbox 
                      key={occ} 
                      label={occ} 
                      checked={filters.occasion?.includes(occ)} 
                      onChange={() => toggleFilter('occasion', occ)} 
                    />
                  ))}
                </div>
              </FilterGroup>

              <FilterGroup title="PRICE RANGE" isOpen={true}>
                <div className="pt-8 pb-4">
                  <DualRangeSlider 
                    min={0} 
                    max={50} 
                    value={filters.priceRange || [0, 50]} 
                    onChange={(val) => setFilters({ ...filters, priceRange: val })} 
                  />
                  <div className="flex justify-between mt-4">
                    <span className="text-mono-sm">£{(filters.priceRange?.[0] || 0).toFixed(2)}</span>
                    <span className="text-mono-sm">£{(filters.priceRange?.[1] || 50).toFixed(2)}</span>
                  </div>
                </div>
              </FilterGroup>
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-border bg-white sticky bottom-0 flex flex-col gap-3">
              <Button variant="primary" className="w-full justify-center" onClick={onClose}>
                Apply Filters — {resultCount} Results
              </Button>
              <Button variant="ghost" className="w-full justify-center" onClick={clearFilters}>
                Clear All
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function FilterGroup({ title, children, isOpen: defaultOpen = false }: { title: string, children: React.ReactNode, isOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border pb-8 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-[14px] font-medium font-satoshi tracking-wider text-text-primary uppercase"
      >
        <span>{title}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown size={18} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Checkbox({ label, checked, onChange }: { label: string, checked: boolean, onChange: () => void }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div className={`w-5 h-5 border rounded-sm flex items-center justify-center transition-colors ${checked ? 'bg-black border-black' : 'border-border group-hover:border-magenta'}`}>
        {checked && <div className="w-2 h-2 bg-white rounded-full" />}
      </div>
      <span className={`text-[15px] font-satoshi transition-colors ${checked ? 'text-text-primary font-medium' : 'text-text-secondary group-hover:text-text-primary'}`}>
        {label}
      </span>
    </label>
  );
}

function DualRangeSlider({ min, max, value, onChange }: { min: number, max: number, value: [number, number], onChange: (val: [number, number]) => void }) {
  const [minVal, maxVal] = value;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxVal - 1);
    onChange([value, maxVal]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minVal + 1);
    onChange([minVal, value]);
  };

  return (
    <div className="relative w-full h-1 bg-[#E8E8E8] rounded-full mt-4">
      <div 
        className="absolute h-full bg-magenta rounded-full"
        style={{
          left: `${(minVal / max) * 100}%`,
          right: `${100 - (maxVal / max) * 100}%`
        }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={handleMinChange}
        className="absolute w-full appearance-none bg-transparent pointer-events-none -top-2 left-0 z-10 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:cursor-pointer"
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={handleMaxChange}
        className="absolute w-full appearance-none bg-transparent pointer-events-none -top-2 left-0 z-10 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:cursor-pointer"
      />
    </div>
  );
}
