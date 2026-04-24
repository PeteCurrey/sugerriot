'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Container from '@/components/ui/Container';

interface WorldHeroProps {
  title: string;
  highlightWords: string[];
  subtitle: string;
  accentColor: string;
  type: 'british' | 'american' | 'japanese' | 'global';
}

export default function WorldHero({ title, highlightWords, subtitle, accentColor, type }: WorldHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline reveal
      const words = headlineRef.current?.querySelectorAll('.reveal-word');
      if (words) {
        gsap.fromTo(words,
          { yPercent: 100 },
          { 
            yPercent: 0, 
            duration: 1, 
            ease: 'power4.out', 
            stagger: 0.1,
            delay: 0.2
          }
        );
      }

      // Subtitle reveal
      gsap.fromTo('.world-subtitle',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.8 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const words = title.split(' ');

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-[80dvh] flex flex-col justify-center overflow-hidden bg-[var(--sr-void)]"
    >
      {/* Background Accent Layer */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--sr-void)]" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <Container className="relative z-10">
        <span className="label-mono text-[var(--sr-steel)] block mb-8 tracking-[0.3em]">
          EXPLORING THE WORLD OF {type.toUpperCase()}
        </span>
        
        <h1 
          ref={headlineRef}
          className="text-display-xl font-medium text-white leading-[0.9] tracking-tight max-w-[1200px]"
        >
          <div className="flex flex-wrap gap-x-[0.25em]">
            {words.map((word, i) => {
              const isHighlighted = highlightWords.includes(word.replace(/[,.]/g, ''));
              return (
                <span key={i} className="inline-block overflow-hidden py-1">
                  <span 
                    className={`reveal-word inline-block ${isHighlighted ? 'text-editorial italic font-normal' : ''}`}
                    style={{ color: isHighlighted ? accentColor : 'inherit' }}
                  >
                    {word}
                  </span>
                </span>
              );
            })}
          </div>
        </h1>

        <div className="mt-12 max-w-[600px]">
          <p className="world-subtitle text-lg text-[var(--sr-cloud)] leading-relaxed">
            {subtitle}
          </p>
        </div>
      </Container>
      
      {/* Bottom Border Strip */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--sr-fog)]" />
    </section>
  );
}

