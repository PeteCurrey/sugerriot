'use client';

import { useEffect, useRef } from 'react';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import gsap from 'gsap';

export default function LabTeaser() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.mock-card');
      const tl = gsap.timeline({ repeat: -1 });

      cards.forEach((card: any, i) => {
        tl.fromTo(card,
          { x: 40, opacity: 0, scale: 0.95 },
          { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }
        )
        .to(card, { 
          borderColor: '#FF2E2E', 
          backgroundColor: 'rgba(255, 46, 46, 0.05)',
          duration: 0.4, 
          delay: 0.5 
        })
        .to(card, { 
          x: -40, 
          opacity: 0, 
          scale: 0.95, 
          duration: 0.8, 
          ease: 'power3.in', 
          delay: 1 
        });
      });
    }, cardsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[var(--sr-obsidian)] py-[var(--section-y-xl)] overflow-hidden border-y border-[var(--sr-fog)]">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left Side: Content */}
          <div className="lg:w-[55%]">
            <span className="label-mono text-[var(--sr-riot)] block mb-6">
              AI POWERED DISCOVERY
            </span>
            <h2 className="text-section-title text-white mb-8">
              Find your <br />
              <span className="text-editorial italic font-normal">perfect</span> sweet.
            </h2>
            <p className="text-[var(--sr-cloud)] text-xl mb-12 max-w-lg leading-relaxed">
              Answer five questions. Our AI matches your taste profile to thousands of products across every world category. No guesswork. Just surgical precision.
            </p>
            <Link 
              href="/the-lab"
              className="bg-[var(--sr-riot)] text-white px-10 py-5 text-[13px] font-mono uppercase tracking-[0.15em] hover:brightness-110 transition-all cta-hover inline-block"
            >
              Start Finder →
            </Link>
          </div>

          {/* Right Side: Animated Mock */}
          <div className="lg:w-[45%] w-full">
            <div 
              ref={cardsRef}
              className="relative aspect-square bg-[var(--sr-chrome)] border border-[var(--sr-fog)] flex items-center justify-center overflow-hidden"
            >
              {/* Mock UI Cards */}
              {[
                "What is your primary flavor profile?",
                "Which texture do you prefer?",
                "Select your desired intensity level.",
                "Any dietary requirements?"
              ].map((text, i) => (
                <div 
                  key={i}
                  className="mock-card absolute w-[80%] bg-[var(--sr-void)] border border-[var(--sr-fog)] p-10 opacity-0"
                >
                  <span className="label-mono text-[var(--sr-steel)] block mb-4">Question 0{i + 1}</span>
                  <p className="text-white text-xl font-medium mb-10">{text}</p>
                  <div className="space-y-3">
                    {[1, 2, 3].map(j => (
                      <div key={j} className="h-12 border border-[var(--sr-fog)] w-full opacity-40" />
                    ))}
                  </div>
                </div>
              ))}

              {/* Background Accent */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-[var(--sr-riot)]/5 blur-[120px] rounded-full pointer-events-none" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

