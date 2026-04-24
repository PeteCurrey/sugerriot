'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

const WORLDS = [
  {
    id: 'british',
    number: '01',
    title: 'British Retro',
    desc: 'The sweet taste of heritage and nostalgia.',
    image: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?q=80&w=2000&auto=format&fit=crop',
    color: '#F5A623',
    flagImage: 'https://images.unsplash.com/photo-1580131495204-51829e06a382?q=80&w=2000',
    products: [
      'https://images.unsplash.com/photo-1621939514649-280e2eeea7f4?q=80&w=600',
      'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?q=80&w=600',
      'https://images.unsplash.com/photo-1582050058244-4e1804c21e35?q=80&w=600',
    ]
  },
  {
    id: 'american',
    number: '02',
    title: 'American Candy',
    desc: 'Neon lights and unapologetic sweetness.',
    image: 'https://images.unsplash.com/photo-1543157145-f78c636d023d?q=80&w=2000&auto=format&fit=crop',
    color: '#FF2E2E',
    flagImage: 'https://images.unsplash.com/photo-1508344928928-7137b2f60295?q=80&w=2000',
    products: [
      'https://images.unsplash.com/photo-1543157145-f78c636d023d?q=80&w=600',
      'https://images.unsplash.com/photo-1512516704019-b145610214a1?q=80&w=600',
      'https://images.unsplash.com/photo-1557142046-c704a3adf364?q=80&w=600',
    ]
  },
  {
    id: 'japanese',
    number: '03',
    title: 'Japanese & Asian',
    desc: 'Artistry meets flavor in every bite.',
    image: 'https://images.unsplash.com/photo-1582305540412-f0da3691656c?q=80&w=2000&auto=format&fit=crop',
    color: '#FFB7C5',
    flagImage: 'https://images.unsplash.com/photo-1520625902047-92e1069eb070?q=80&w=2000',
    products: [
      'https://images.unsplash.com/photo-1599321955419-78536d36e0d3?q=80&w=600',
      'https://images.unsplash.com/photo-1582305540412-f0da3691656c?q=80&w=600',
      'https://images.unsplash.com/photo-1601000542385-e6f7df2b6b58?q=80&w=600',
    ]
  },
  {
    id: 'world',
    number: '04',
    title: 'World Sweets',
    desc: 'A curated journey across six continents.',
    image: 'https://images.unsplash.com/photo-1621939514649-280e2eeea7f4?q=80&w=2000&auto=format&fit=crop',
    color: '#C9A84C',
    flagImage: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2000',
    products: [
      'https://images.unsplash.com/photo-1534954413000-880572da9a19?q=80&w=600',
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600',
      'https://images.unsplash.com/photo-1541781257406-8d1e2e1ec926?q=80&w=600',
    ]
  }
];

export default function WorldsScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const track = trackRef.current;
    if (!track) return;

    const sections = gsap.utils.toArray('.world-panel');
    const scrollDistance = track.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${scrollDistance}`,
          invalidateOnRefresh: true,
        }
      });

      // Clip-path reveals for titles
      sections.forEach((section: any) => {
        const title = section.querySelector('.world-title');
        gsap.fromTo(title, 
          { clipPath: 'inset(0 100% 0 0)' },
          { 
            clipPath: 'inset(0 0% 0 0)',
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              containerAnimation: gsap.to(track, { x: -scrollDistance, ease: 'none' }),
              start: 'left center',
              horizontal: true
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[var(--sr-void)]">
      <div ref={trackRef} className="flex h-screen w-fit will-change-transform">

        {WORLDS.map((world) => (
          <div 
            key={world.id}
            data-cursor="explore"
            className="world-panel relative w-screen h-full flex-shrink-0 flex items-center"
          >
            {/* Background Image with World Gradient Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src={world.image}
                alt={world.title}
                fill
                className="object-cover grayscale-[40%] contrast-[1.2]"
              />
              
              {/* Faded Flag Background */}
              {world.flagImage && (
                <div className="absolute right-0 top-0 w-[80vw] h-[100vh] opacity-[0.03] mix-blend-screen pointer-events-none z-0 scale-150 translate-x-1/4">
                  <Image
                    src={world.flagImage}
                    alt={`${world.title} Flag`}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--sr-void)] via-[var(--sr-void)]/80 to-transparent z-10" />
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 w-full flex items-center justify-between">
              <div className="max-w-2xl">
                <span className="label-mono text-[var(--sr-steel)] block mb-4">
                  {world.number} — WORLD CATEGORY
                </span>
                <h2 className="world-title text-section-title text-white mb-6 font-medium">
                  {world.title}
                </h2>
                <p className="text-[var(--sr-cloud)] text-xl mb-10 max-w-md leading-relaxed">
                  {world.desc}
                </p>
                <Link 
                  href={`/worlds/${world.id}`}
                  data-cursor="explore"
                  className="label-mono text-[var(--sr-white)] hover:text-[var(--sr-riot)] transition-colors flex items-center gap-4 group cta-hover"
                >
                  Explore World <span className="transition-transform group-hover:translate-x-2">→</span>
                </Link>
              </div>


              {/* Floating Micro Cards */}
              <div className="hidden lg:flex gap-8 relative h-[400px] w-[500px]">
                {world.products.map((p, i) => (
                  <div 
                    key={i}
                    className="absolute bg-[var(--sr-obsidian)] border border-[var(--sr-fog)] w-[200px] h-[260px] overflow-hidden"
                    style={{
                      top: i === 0 ? '0' : i === 1 ? '100px' : '40px',
                      left: i === 0 ? '0' : i === 1 ? '240px' : '140px',
                      zIndex: 3 - i,
                      transform: `translateY(${i * 20}px)`
                    }}
                  >
                    <Image src={p} alt="Product" fill className="object-cover opacity-80" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
