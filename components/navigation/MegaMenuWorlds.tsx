'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';

const WORLDS = [
  { 
    id: 'british', 
    title: 'BRITISH RETRO', 
    image: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?q=80&w=1200&auto=format&fit=crop',
    desc: 'The sweet taste of heritage and nostalgia.'
  },
  { 
    id: 'american', 
    title: 'AMERICAN CANDY', 
    image: 'https://images.unsplash.com/photo-1543157145-f78c636d023d?q=80&w=1200&auto=format&fit=crop',
    desc: 'Neon lights and unapologetic sweetness.'
  },
  { 
    id: 'japanese', 
    title: 'JAPANESE & ASIAN', 
    image: 'https://images.unsplash.com/photo-1582305540412-f0da3691656c?q=80&w=1200&auto=format&fit=crop',
    desc: 'Artistry meets flavor in every bite.'
  },
  { 
    id: 'world', 
    title: 'WORLD SWEETS', 
    image: 'https://images.unsplash.com/photo-1621939514649-280e2eeea7f4?q=80&w=1200&auto=format&fit=crop',
    desc: 'A curated journey across six continents.'
  },
];

export default function MegaMenuWorlds({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeWorld, setActiveWorld] = useState(WORLDS[0]);
  const panelRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(panelRef.current, 
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' }
      );
    }
  }, [isOpen]);

  const handleHover = (world: typeof WORLDS[0]) => {
    if (world.id === activeWorld.id) return;
    
    gsap.to(imageRef.current, {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        setActiveWorld(world);
        gsap.to(imageRef.current, { opacity: 1, duration: 0.3 });
      }
    });
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={panelRef}
      className="absolute top-full left-0 w-full bg-[var(--sr-obsidian)] border-b border-[var(--sr-fog)] z-50 overflow-hidden"
      onMouseLeave={onClose}
    >
      <div className="container-custom flex h-[520px]">
        {/* Left: World Links */}
        <div className="w-[40%] py-16 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="label-mono text-[var(--sr-steel)] block mb-8">Select a World</span>
            {WORLDS.map((world) => (
              <Link
                key={world.id}
                href={`/worlds/${world.id}`}
                onMouseEnter={() => handleHover(world)}
                className={`block font-playfair text-[42px] leading-tight transition-all duration-300 ${
                  activeWorld.id === world.id ? 'text-[var(--sr-riot)] translate-x-4' : 'text-[var(--sr-cloud)] hover:text-[var(--sr-white)]'
                }`}
              >
                {world.title}
              </Link>
            ))}
          </div>
          
          <div className="pb-4">
            <Link href="/worlds" className="label-mono text-[var(--sr-white)] hover:text-[var(--sr-riot)] transition-colors flex items-center gap-2 group">
              View All Worlds <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* Right: Immersive Image */}
        <div className="w-[60%] relative overflow-hidden">
          <div ref={imageRef} className="absolute inset-0">
            <Image
              src={activeWorld.image}
              alt={activeWorld.title}
              fill
              className="object-cover grayscale-[30%] contrast-[1.1]"
              priority
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--sr-obsidian)] via-transparent to-transparent opacity-80" />
            
            {/* World Info */}
            <div className="absolute bottom-16 left-16 max-w-sm">
              <span className="label-mono text-[var(--sr-white)] mb-2 block">Featured Collection</span>
              <p className="text-[var(--sr-cloud)] text-lg mb-6 leading-relaxed">
                {activeWorld.desc}
              </p>
              <div className="h-[1px] w-12 bg-[var(--sr-riot)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

