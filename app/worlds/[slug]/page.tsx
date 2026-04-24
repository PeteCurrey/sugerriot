'use client';

import { useParams, notFound } from 'next/navigation';
import WorldTemplate from '@/components/worlds/WorldTemplate';
import { PRODUCTS } from '@/data/products';
import Reveal from '@/components/ui/Reveal';
import Container from '@/components/ui/Container';

const WORLDS_DATA: Record<string, any> = {
  'british-retro': {
    slug: 'british',
    accentColor: '#D4890A',
    hero: {
      title: '60 Years of Corner Shop Nostalgia.',
      highlightWords: ['Nostalgia'],
      subtitle: 'From sherbet fountains to flying saucers — the sweets that built Britain. Experience the golden era of confectionery.',
    },
    intro: {
      quote: 'A time capsule of British sugar and steel.',
      paragraph: 'The British sweet shop was more than a store — it was a community anchor. We have curated the most iconic survivors of that era, from the 60s to the 00s, ensuring the taste of nostalgia remains as sharp as ever.',
    },
    editorial: [
      { title: 'The Sherbet Revolution', content: 'Explore how fizzy powders and edible papers transformed the UK high street in the late 1960s.' },
      { title: 'The Flying Saucer Era', content: 'Invented in the Space Age, these rice-paper icons remain the pinnacle of British retro design.' }
    ],
    nextWorld: { name: 'American Candy', href: '/worlds/american-candy' }
  },
  'american-candy': {
    slug: 'american',
    accentColor: '#E63946',
    hero: {
      title: 'Stars, Stripes & Sugar Rushes.',
      highlightWords: ['Stars', 'Sugar'],
      subtitle: 'Big, bold, and unapologetically sweet. Discover the exclusive imports that define American candy culture.',
    },
    intro: {
      quote: 'The land of the brave and the bold of flavor.',
      paragraph: 'American candy is built on scale and audacity. From oversized chocolate bars to the sourest gummies on the planet, we bring the best of the States directly to your door.',
    },
    editorial: [
      { title: 'Why Import Matters', content: 'Our collection focuses on genuine US recipes, avoiding the tempered versions found in local supermarkets.' },
      { title: 'The Gummy Revolution', content: 'From 5lb bears to spicy chamoy rings, American gummies are a world of their own.' }
    ],
    nextWorld: { name: 'Japanese & Asian', href: '/worlds/japanese-asian' }
  },
  'japanese-asian': {
    slug: 'japanese',
    accentColor: '#E8748A',
    hero: {
      title: 'From Tokyo to Seoul — One Bite at a Time.',
      highlightWords: ['Tokyo', 'Seoul'],
      subtitle: 'Artistry meets flavour. A hyper-clean collection of the finest exports from Japan and Korea.',
    },
    intro: {
      quote: 'Precision in every granule of sugar.',
      paragraph: 'Japanese confectionery is a pursuit of perfection. Every texture is intentional, every flavor is balanced. Experience a world where sweets are treated with the same reverence as fine art.',
    },
    editorial: [
      { title: 'The KitKat Vault', content: 'Did you know Japan has over 300 unique KitKat flavors? We source the most elusive releases for our club.' },
      { title: 'Texture as Flavor', content: 'From bouncy mochi to brittle rock candy, the physical experience of Japanese sweets is paramount.' }
    ],
    nextWorld: { name: 'World Sweets', href: '/worlds/world-sweets' }
  },
  'world-sweets': {
    slug: 'global',
    accentColor: '#27AE60',
    hero: {
      title: 'Six Continents. One Obsession.',
      highlightWords: ['Six', 'Obsession'],
      subtitle: 'A curated journey across the globe. Every product tells a story. Every story has a flavor.',
    },
    intro: {
      quote: 'The world is smaller when you taste it.',
      paragraph: 'Our global vault explores the sweet history of humanity. From European pastilles to South American salted caramels, we find the threads that connect us through sugar.',
    },
    editorial: [
      { title: 'European Craft', content: 'Centuries-old recipes from Belgian truffles to Swedish salted licorice.' },
      { title: 'The Global Spice', content: 'Discover how heat and salt are used in global confectionery to create sophisticated profiles.' }
    ],
    nextWorld: { name: 'British Retro', href: '/worlds/british-retro' }
  }
};

export default function WorldPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const world = WORLDS_DATA[slug as string];

  if (!world) {
    return notFound();
  }

  // Filter products for this world
  const worldProducts = PRODUCTS.filter(p => p.region.toLowerCase() === world.slug || (world.slug === 'global' && p.region === 'Global'));

  return (
    <WorldTemplate 
      {...world}
      products={worldProducts}
    >
      {/* Special Content for British - Decade Tabs */}
      {slug === 'british-retro' && (
        <section className="py-20 bg-white border-y border-border">
          <Container>
            <div className="flex flex-wrap items-center justify-center gap-12">
              {['60s', '70s', '80s', '90s', '00s'].map((decade) => (
                <button
                  key={decade}
                  className="font-mono text-mono-md hover:text-magenta transition-colors relative group"
                >
                  {decade}
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-magenta scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </button>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Special Content for American - Banner */}
      {slug === 'american-candy' && (
        <section className="py-12 bg-white">
          <Container>
             <div className="border-l-[4px] border-magenta pl-8 py-4">
                <h3 className="text-display-xs font-clash font-extrabold mb-4 uppercase">WHY WE CAN'T GET THIS IN THE UK</h3>
                <p className="text-body-md text-text-secondary max-w-2xl leading-relaxed">
                  Genuine American recipes use different sweeteners and processes. We handle the direct import to ensure you get the high-sugar, high-flavor experience the manufacturers intended.
                </p>
             </div>
          </Container>
        </section>
      )}
    </WorldTemplate>
  );
}
