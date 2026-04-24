'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';

const HUB_WORLDS = [
  { id: 'british-retro', title: 'British Retro', desc: 'Corner shop nostalgia. Sherbet, cola and paper.', accent: '#D4890A', href: '/worlds/british-retro' },
  { id: 'american-candy', title: 'American Candy', desc: 'Big, bold, and unapologetic. The taste of the States.', accent: '#E63946', href: '/worlds/american-candy' },
  { id: 'japanese-asian', title: 'Japanese & Asian', desc: 'Artistry meets flavor. Precision in every granule.', accent: '#E8748A', href: '/worlds/japanese-asian' },
  { id: 'world-sweets', title: 'World Sweets', desc: 'A curated journey across six continents.', accent: '#27AE60', href: '/worlds/world-sweets' },
];

export default function WorldsHub() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = sectionRefs.current;
    if (!sections || sections.length === 0) return;

    // GSAP Stacking Effect
    sections.forEach((section, i) => {
      if (!section || i === 0) return;

      ScrollTrigger.create({
        trigger: sections[i - 1], // The previous section
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        animation: gsap.fromTo(section, 
          { y: '80vh' }, 
          { y: '0vh', ease: 'none' }
        ),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-white min-h-screen pt-[72px]">
      {/* Introduction */}
      <section className="py-24 border-b border-border">
        <Container>
          <SectionLabel text="THE DIRECTORY ↗" />
          <h1 className="text-display-md font-clash mt-4 mb-6">Explore the Worlds.</h1>
          <p className="text-body-lg text-text-secondary max-w-[600px]">
             We have divided the global sweet market into four distinct editorial universes. 
             Enter a world to discover the culture behind the sugar.
          </p>
        </Container>
      </section>

      {/* Stacked Worlds Sections */}
      <div className="relative">
        {HUB_WORLDS.map((world, i) => (
          <div
            key={world.id}
            ref={(el) => { sectionRefs.current[i] = el; }}
            className={`sticky top-[72px] h-[80vh] w-full bg-[#F7F7F7] border-b border-white flex flex-col items-center justify-center p-8 z-[${i + 1}]`}
          >
            {/* Top Border Accent */}
            <div 
              className="absolute top-0 left-0 w-full h-[4px]" 
              style={{ backgroundColor: world.accent }} 
            />

            <Container className="text-center group">
              <Link href={world.href} className="flex flex-col items-center justify-center">
                <h2 className="text-display-lg font-clash font-extrabold tracking-tight group-hover:text-magenta transition-colors">
                  {world.title}
                </h2>
                <p className="text-body-lg text-text-secondary mt-6 max-w-[400px] group-hover:text-text-primary transition-colors">
                  {world.desc}
                </p>
                <div className="mt-12 text-mono-md font-semibold uppercase tracking-widest text-[#0A0A0A/40] group-hover:text-magenta transition-colors flex items-center gap-4">
                   Enter World <span className="transition-transform group-hover:translate-x-3 duration-300">→</span>
                </div>
              </Link>
            </Container>

            {/* Background Graphic Placeholder */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10 flex items-center justify-center">
              <span className="text-[20vw] font-clash font-extrabold select-none">{world.id.split('-')[0].toUpperCase()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
