'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorRing = useRef<HTMLDivElement>(null);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isProduct, setIsProduct] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window) return;

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Dot: Instant
      gsap.to(cursorDot.current, {
        x: clientX,
        y: clientY,
        duration: 0,
      });

      // Ring: Lag (80ms feel via 0.4s duration + ease)
      gsap.to(cursorRing.current, {
        x: clientX,
        y: clientY,
        duration: 0.4,
        ease: 'power3.out',
      });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const interactive = !!target.closest('a, button, .cta-hover');
      const product = !!target.closest('.product-card');
      
      setIsInteractive(interactive);
      setIsProduct(product);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  useEffect(() => {
    if (!cursorRing.current || !cursorDot.current) return;

    if (isProduct) {
      gsap.to(cursorRing.current, {
        width: 80,
        height: 80,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderColor: 'transparent',
        duration: 0.3,
      });
    } else if (isInteractive) {
      gsap.to(cursorRing.current, {
        width: 64,
        height: 64,
        backgroundColor: 'rgba(255, 46, 46, 0.2)', // --sr-riot at 20%
        borderColor: 'transparent',
        duration: 0.3,
      });
    } else {
      gsap.to(cursorRing.current, {
        width: 40,
        height: 40,
        backgroundColor: 'transparent',
        borderColor: 'rgba(255, 255, 255, 0.4)',
        duration: 0.3,
      });
    }
  }, [isInteractive, isProduct]);

  return (
    <>
      <div
        ref={cursorDot}
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={cursorRing}
        className="fixed top-0 left-0 w-10 h-10 border border-white/40 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden transition-[background-color,border-color]"
      >
        {isProduct && (
          <span className="text-[10px] font-mono font-medium tracking-[0.2em] text-white uppercase">
            EXPLORE
          </span>
        )}
      </div>
    </>
  );
}

