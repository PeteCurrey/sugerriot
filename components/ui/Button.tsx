'use client';

import Link from 'next/link';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { cn } from './Container';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark';
  children: React.ReactNode;
  className?: string;
  magnetic?: boolean;
  href?: string;
}

export default function Button({
  variant = 'primary',
  children,
  className,
  magnetic = true,
  href,
  ...props
}: ButtonProps) {
  const buttonRef = useRef<any>(null);

  useEffect(() => {
    if (!magnetic || !buttonRef.current) return;

    const btn = buttonRef.current;
    
    const onMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
      
      gsap.to(btn, {
        x,
        y,
        duration: 0.35,
        ease: 'power2.out',
      });
    };

    const onMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.55,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    btn.addEventListener('mousemove', onMouseMove);
    btn.addEventListener('mouseleave', onMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', onMouseMove);
      btn.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [magnetic]);

  const variants = {
    primary: 'bg-[#FF3CAC] text-[#0A0A0A] border-none hover:bg-[#ff55b8]',
    secondary: 'bg-transparent text-[#0A0A0A] border-[1px] border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white',
    ghost: 'bg-transparent text-[#0A0A0A] border-none flex items-center gap-2 hover:translate-x-1',
    dark: 'bg-[#0A0A0A] text-white border-none',
  };

  const commonClass = cn(
    'inline-flex items-center justify-center font-satoshi font-semibold text-[13px] uppercase tracking-[0.06em] px-10 py-4 transition-colors duration-200 cursor-pointer disabled:opacity-50 no-underline',
    variant === 'ghost' ? 'px-0' : 'rounded-[2px]',
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link 
        href={href} 
        className={commonClass} 
        ref={buttonRef}
      >
        {children}
        {variant === 'ghost' && <span className="transition-transform duration-200 ml-2">→</span>}
      </Link>
    );
  }

  return (
    <button
      ref={buttonRef}
      className={commonClass}
      {...(props as any)}
    >
      {children}
      {variant === 'ghost' && <span className="transition-transform duration-200 ml-2">→</span>}
    </button>
  );
}
