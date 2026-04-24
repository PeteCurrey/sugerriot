'use client';

import { useState, useEffect, useLayoutEffect } from 'react';
import Hero from '@/components/sections/Hero';
import WorldsScroll from '@/components/sections/WorldsScroll';
import LabTeaser from '@/components/sections/LabTeaser';
import JournalTeaser from '@/components/sections/JournalTeaser';
import B2BStrip from '@/components/sections/B2BStrip';
import Footer from '@/components/navigation/Footer';
import Container from '@/components/ui/Container';
import ProductCard from '@/components/product/ProductCard';
import { Product } from '@/data/products';
import { getAllProducts } from '@/lib/get-product';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

export default function Home() {
  const [newProducts, setNewProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function load() {
      const all = await getAllProducts();
      setNewProducts(all.slice(0, 3)); // Only show top 3 on home
    }
    load();
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1500);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', handleResize);
    
    return () => {
        clearTimeout(timeout);
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[var(--sr-void)]">
      {/* Section 0: Hero */}
      <Hero />

      {/* Section 1: Worlds Scroll Strip */}
      <WorldsScroll />

      {/* Section 2: New In Products */}
      <section className="py-[var(--section-y-xl)] bg-[var(--sr-void)]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <span className="label-mono text-[var(--sr-riot)] block mb-4">JUST LANDED</span>
              <h2 className="text-section-title text-white mb-6">New Arrivals</h2>
              <p className="text-[var(--sr-cloud)] text-lg max-w-[500px] leading-relaxed">
                The latest artisanal drops from our global partners. Updated daily at midday.
              </p>
            </div>
            <div className="hidden md:block">
              <button className="label-mono text-[var(--sr-white)] hover:text-[var(--sr-riot)] transition-colors cta-hover">
                View All New In →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 md:hidden">
              <button className="w-full bg-[var(--sr-chrome)] border border-[var(--sr-fog)] py-5 label-mono text-white">
                View All New In →
              </button>
          </div>
        </Container>
      </section>

      {/* Section 3: AI Sweet Finder Promo */}
      <LabTeaser />

      {/* Section 4: Journal Editorial */}
      <JournalTeaser />

      {/* Section 5: B2B Strip */}
      <B2BStrip />

      {/* Section 6: Footer */}
      <Footer />
    </div>
  );
}

