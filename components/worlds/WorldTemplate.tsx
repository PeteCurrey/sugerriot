'use client';

import WorldHero from './WorldHero';
import EditorialBlock from './EditorialBlock';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import Reveal from '@/components/ui/Reveal';
import ProductCard from '@/components/product/ProductCard';
import Divider from '@/components/ui/Divider';
import Button from '@/components/ui/Button';
import { Product } from '@/data/products';
import Link from 'next/link';

interface WorldTemplateProps {
  slug: 'british' | 'american' | 'japanese' | 'global';
  accentColor: string;
  hero: {
    title: string;
    highlightWords: string[];
    subtitle: string;
  };
  intro: {
    quote: string;
    paragraph: string;
  };
  products: Product[];
  editorial: {
    title: string;
    content: string;
  }[];
  nextWorld: {
    name: string;
    href: string;
  };
  children?: React.ReactNode;
}

export default function WorldTemplate({ 
  slug, 
  accentColor, 
  hero, 
  intro, 
  products, 
  editorial, 
  nextWorld,
  children 
}: WorldTemplateProps) {
  return (
    <div className="bg-white min-h-screen">
      {/* Top Accent Border */}
      <div 
        className="fixed top-0 left-0 w-full h-[4px] z-[110]" 
        style={{ backgroundColor: accentColor }} 
      />

      {/* Hero */}
      <WorldHero 
        type={slug}
        accentColor={accentColor}
        title={hero.title}
        highlightWords={hero.highlightWords}
        subtitle={hero.subtitle}
      />

      {/* Intro Block */}
      <section className="py-[var(--section-y-lg)] bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
            <div className="lg:w-1/2">
              <Reveal>
                <h2 className="text-display-sm font-clash italic font-medium leading-tight text-text-primary">
                  "{intro.quote}"
                </h2>
              </Reveal>
            </div>
            <div className="lg:w-1/2">
              <Reveal delay={0.2}>
                <p className="text-body-lg text-text-secondary leading-relaxed">
                  {intro.paragraph}
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Best of World Carousel */}
      <section className="py-[var(--section-y-lg)] bg-off-white overflow-hidden">
        <Container>
          <div className="flex justify-between items-end mb-16">
            <Reveal>
              <SectionLabel text={`BEST OF ${slug.toUpperCase()} ↗`} />
              <h2 className="text-display-md font-clash font-extrabold">Regional Favourites</h2>
            </Reveal>
          </div>

          <div className="flex gap-8 overflow-x-auto no-scrollbar pb-8">
            {products.map((product, i) => (
              <div key={product.id} className="w-[300px] flex-shrink-0">
                <Reveal delay={i * 0.1}>
                  <ProductCard product={product} />
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Custom World Content (e.g. tabs, banners) */}
      {children}

      {/* Editorial Blocks */}
      {editorial.map((block, i) => (
        <EditorialBlock 
          key={i}
          title={block.title}
          content={block.content}
          image="https://images.unsplash.com/photo-1543157145-f78c636d023d?q=80&w=1000"
          reverse={i % 2 === 1}
        />
      ))}

      {/* Full Category Grid */}
      <section className="py-[var(--section-y-lg)] border-t border-border">
        <Container>
          <div className="flex justify-between items-end mb-16">
            <Reveal>
              <SectionLabel text="FULL COLLECTION ↗" />
              <h2 className="text-display-md font-clash font-extrabold">The Complete Vault</h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
            {products.map((product, i) => (
              <Reveal key={product.id} delay={i % 6 * 0.05}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
          
          <div className="mt-20 flex justify-center">
            <Button variant="secondary" className="px-16">Load More {slug.toUpperCase()} Sweets</Button>
          </div>
        </Container>
      </section>

      {/* Next World Strip */}
      <Link href={nextWorld.href} className="block group">
        <section className="py-32 border-t border-border bg-white transition-colors group-hover:bg-off-white">
          <Container className="flex items-center justify-between">
            <div>
              <span className="text-mono-sm text-text-muted mb-4 block group-hover:text-text-primary transition-colors">CONTINUE THE JOURNEY</span>
              <h2 className="text-display-lg font-clash font-extrabold tracking-tight group-hover:text-magenta transition-colors">
                Next World: {nextWorld.name} →
              </h2>
            </div>
          </Container>
        </section>
      </Link>
    </div>
  );
}
