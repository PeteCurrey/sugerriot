'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '../ui/Container';
import MegaMenuShop from './MegaMenuShop';
import MegaMenuWorlds from './MegaMenuWorlds';
import { useCart } from '@/lib/shopify/cart-context';

const NAV_LINKS = [
  { label: 'Worlds', href: '/worlds', type: 'mega-worlds' },
  { label: 'Shop', href: '/shop', type: 'mega-shop' },
  { label: 'AI Finder', href: '/the-lab' },
  { label: 'Wholesale', href: '/trade' },
  { label: 'Journal', href: '/journal' },
];

export default function Header() {
  const { cart, openCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
        
        gsap.to(headerRef.current, {
          backgroundColor: scrolled ? 'rgba(26, 26, 26, 0.95)' : 'rgba(8, 8, 8, 0)',
          borderBottomColor: scrolled ? 'rgba(42, 42, 42, 1)' : 'rgba(42, 42, 42, 0)',
          height: scrolled ? 64 : 72,
          duration: 0.4,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const handleMenuHover = (type: string | null) => {
    setActiveMenu(type);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] flex items-center transition-colors duration-300 border-b border-transparent',
          isScrolled && 'backdrop-blur-xl'
        )}
        style={{ height: 72 }}
      >
        <div className="container-custom w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-playfair text-[24px] font-medium tracking-tight text-[var(--sr-white)]">
            SUGAR RIOT
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                onMouseEnter={() => handleMenuHover(link.type || null)}
                onMouseLeave={() => activeMenu === link.type && handleMenuHover(null)}
                className="relative h-[72px] flex items-center"
              >
                <Link
                  href={link.href}
                  className="label-mono text-[var(--sr-cloud)] hover:text-[var(--sr-white)] transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[var(--sr-riot)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Link>
              </div>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <button className="text-[var(--sr-white)] hover:text-[var(--sr-riot)] transition-colors p-1 cta-hover">
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button className="hidden sm:block text-[var(--sr-white)] hover:text-[var(--sr-riot)] transition-colors p-1 cta-hover">
                <User size={20} strokeWidth={1.5} />
              </button>
              <button 
                onClick={openCart}
                className="text-[var(--sr-white)] hover:text-[var(--sr-riot)] transition-colors p-1 relative cta-hover"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--sr-riot)] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {cart?.totalQuantity || 0}
                </span>
              </button>
              <button 
                className="lg:hidden text-[var(--sr-white)] p-1 cta-hover"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menus */}
        <MegaMenuShop 
          isOpen={activeMenu === 'mega-shop'} 
          onClose={() => setActiveMenu(null)} 
        />
        <MegaMenuWorlds 
          isOpen={activeMenu === 'mega-worlds'} 
          onClose={() => setActiveMenu(null)} 
        />
      </header>
      
      {/* Mobile Nav */}
      <div 
        className={cn(
          "fixed inset-0 bg-[var(--sr-void)] z-[90] lg:hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pt-[72px]",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container-custom py-12">
          <nav className="flex flex-col gap-8">
            {NAV_LINKS.map(link => (
              <Link 
                key={link.label} 
                href={link.href}
                className="font-playfair text-[32px] font-medium text-[var(--sr-white)] hover:text-[var(--sr-riot)] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

