'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '@/components/ui/SectionLabel';
import Container from '@/components/ui/Container';

const WORLDS = [
  { id: 'british', title: 'British Retro', color: '#F5A623', desc: 'The sweet taste of 80s nostalgia.', image: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?q=80&w=2000&auto=format&fit=crop' },
  { id: 'american', title: 'American Candy', color: '#E63946', desc: 'Big, bold, and unapologetically sweet.', image: 'https://images.unsplash.com/photo-1543157145-f78c636d023d?q=80&w=2000&auto=format&fit=crop' },
  { id: 'japanese', title: 'Japanese Sweets', color: '#FFB7C5', desc: 'Artistry meets flavor in every bite.', image: 'https://images.unsplash.com/photo-1582305540412-f0da3691656c?q=80&w=2000&auto=format&fit=crop' },
  { id: 'world', title: 'World Sweets', color: '#2ECC71', desc: 'A curated journey across six continents.', image: 'https://images.unsplash.com/photo-1621939514649-280e2eeea7f4?q=80&w=2000&auto=format&fit=crop' },
];

interface WorldsCarouselProps {
  onWorldHover: (worldId: string | null) => void;
}

export default function WorldsCarousel({ onWorldHover }: WorldsCarouselProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const track = trackRef.current;
    const trigger = triggerRef.current;
    if (!track || !trigger) return;

    // Calculate total scroll distance
    const trackWidth = track.scrollWidth;
    const scrollDistance = trackWidth - window.innerWidth + 240; // Add padding

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: trigger,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${scrollDistance}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, trigger);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden z-10 bg-white">
      <div ref={triggerRef} className="h-screen flex flex-col justify-center">
        <Container className="mb-12">
          <SectionLabel text="EXPLORE THE WORLDS ↗" />
          <h2 className="text-display-lg font-extrabold mb-4">Four Worlds. Infinite Discovery.</h2>
          <p className="text-body-lg text-text-secondary max-w-[600px]">
            A curated journey across six continents. Every world tells a story. Every story has a flavor.
          </p>
        </Container>
        
        <div className="relative">
          <div 
            ref={trackRef} 
            className="flex gap-8 px-[var(--container-x)] transition-none will-change-transform"
          >
            {WORLDS.map((world) => (
              <div
                key={world.id}
                onMouseEnter={() => onWorldHover(world.id)}
                onMouseLeave={() => onWorldHover(null)}
                className="group flex-shrink-0 w-[560px] h-[400px] border border-border rounded-sm bg-white/60 backdrop-blur-md p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:bg-white/90"
              >
                {/* Top Accent */}
                <div 
                  className="absolute top-0 left-0 w-full h-[4px] transition-all duration-300 group-hover:h-full group-hover:w-[4px]"
                  style={{ backgroundColor: world.color }}
                />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-full h-[180px] bg-off-white mb-8 overflow-hidden rounded-sm relative">
                      <div className="absolute inset-0 bg-border opacity-20" />
                      <span className="absolute inset-0 flex items-center justify-center text-mono-sm text-text-muted">WORLD PREVIEW</span>
                    </div>
                    <h3 className="text-heading-lg font-extrabold font-clash mb-3">{world.title}</h3>
                    <p className="text-body-md text-text-secondary pr-12">{world.desc}</p>
                  </div>

                  <div className="flex items-center gap-2 text-text-primary text-[13px] font-semibold uppercase tracking-wider group-hover:text-magenta transition-colors">
                    Enter World <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
