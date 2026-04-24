'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  className?: string;
}

export default function Reveal({
  children,
  delay = 0,
  duration = 0.9,
  y = 50,
  stagger = 0.07,
  className,
}: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const target = containerRef.current;
    if (!target) return;

    gsap.fromTo(
      target,
      { 
        y, 
        opacity: 0,
        visibility: 'hidden'
      },
      {
        y: 0,
        opacity: 1,
        visibility: 'visible',
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: target,
          start: 'top 92%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [delay, duration, y]);

  return <div ref={containerRef} className={className}>{children}</div>;
}
