'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Entrance Sequence
      const tl = gsap.timeline();

      tl.to(videoRef.current, { opacity: 1, duration: 1.2, ease: 'power2.inOut' })
        .from('.hero-label', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.reveal-line span', {
          yPercent: 100,
          duration: 0.8,
          ease: 'power4.out',
          stagger: 0.15
        }, '-=0.2')
        .from('.hero-subline', { opacity: 0, y: 10, duration: 0.6 }, '-=0.4')
        .from('.hero-ctas', { opacity: 0, y: 10, duration: 0.6, stagger: 0.1 }, '-=0.3')
        .from(scrollIndicatorRef.current, { opacity: 0, y: -20, duration: 0.8 }, '-=0.2');

      // 2. Scroll Animations
      gsap.to(videoRef.current, {
        scale: 1.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      gsap.to(contentRef.current, {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '20% top',
          scrub: true
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-[100dvh] overflow-hidden bg-[var(--sr-void)] flex items-center"
    >
      {/* Background Video Layer */}
      <div 
        ref={videoRef} 
        className="absolute inset-0 opacity-0 transition-transform duration-1000 ease-out"
      >
        {/* Particle Fallback / Ambient Layer */}
        <div className="absolute inset-0 bg-[#1A0A0A] bg-gradient-to-b from-transparent to-[var(--sr-void)]" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="vignette" />
        
        {/* Simple Particle Field Mock (CSS) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-[1px] h-[1px] bg-white/20 rounded-full animate-drift"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 20}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="container-custom relative z-10 w-full" ref={contentRef}>
        <div className="max-w-4xl">
          <span className="hero-label label-mono text-[var(--sr-riot)] block mb-6">
            The World in Every Piece
          </span>
          
          <h1 className="text-hero text-white mb-8">
            <div className="overflow-hidden reveal-line">
              <span className="block">Confectionery</span>
            </div>
            <div className="overflow-hidden reveal-line">
              <span className="block text-editorial italic font-normal">Without</span>
            </div>
            <div className="overflow-hidden reveal-line">
              <span className="block">Borders.</span>
            </div>
          </h1>

          <p className="hero-subline text-[var(--sr-cloud)] text-lg md:text-xl max-w-lg mb-12 leading-relaxed">
            From Tokyo to Tennessee. British heritage to global obsession. Every sweet tells a story.
          </p>

          <div className="hero-ctas flex flex-wrap gap-4">
            <Link 
              href="/worlds" 
              className="bg-[var(--sr-riot)] text-white px-10 py-5 text-[13px] font-mono uppercase tracking-[0.15em] hover:brightness-110 transition-all cta-hover"
            >
              Explore the Worlds →
            </Link>
            <Link 
              href="/the-lab" 
              className="border border-white/30 text-white px-10 py-5 text-[13px] font-mono uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all cta-hover"
            >
              Find Your Sweet
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-12 right-[var(--container-x)] flex flex-col items-center gap-4 z-20"
      >
        <span className="text-[10px] font-mono text-[var(--sr-steel)] vertical-text tracking-[0.2em] uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-[var(--sr-fog)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[var(--sr-riot)] animate-scroll-line" />
        </div>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
        }

        @keyframes drift {
          from { transform: translateY(0); opacity: 0; }
          20% { opacity: 0.3; }
          80% { opacity: 0.3; }
          to { transform: translateY(-100vh); opacity: 0; }
        }

        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        .animate-scroll-line {
          animation: scroll-line 2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
      `}</style>
    </section>
  );
}

