'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Fallback for thumbnails
  const galleryImages = [
    images[0],
    'https://images.unsplash.com/photo-1543157145-f78c636d023d?q=80&w=1000',
    'https://images.unsplash.com/photo-1599321955419-78536d36e0d3?q=80&w=1000',
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Primary Image */}
      <div 
        className="relative aspect-[4/5] bg-[var(--sr-chrome)] border border-[var(--sr-fog)] overflow-hidden cursor-zoom-in group"
        onClick={() => setIsLightboxOpen(true)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={galleryImages[activeIndex]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full object-cover grayscale-[10%]"
            alt="Product image"
          />
        </AnimatePresence>
        
        <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <Maximize2 size={20} />
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4">
        {galleryImages.map((image, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-24 h-24 border overflow-hidden transition-all duration-300 ${
              activeIndex === i ? 'border-[var(--sr-riot)]' : 'border-[var(--sr-fog)] hover:border-[var(--sr-steel)]'
            }`}
          >
            <img src={image} className="w-full h-full object-cover grayscale-[30%]" alt={`Thumbnail ${i + 1}`} />
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-[var(--sr-void)]/95 flex items-center justify-center p-8 cursor-zoom-out"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              src={galleryImages[activeIndex]}
              className="max-w-full max-h-full object-contain"
              alt="Full size product image"
            />
            <button 
              className="absolute top-8 right-8 text-[var(--sr-steel)] hover:text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(false); }}
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

