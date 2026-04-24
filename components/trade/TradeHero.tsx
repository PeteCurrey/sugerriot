'use client';

import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';

export default function TradeHero() {
  return (
    <section className="relative min-h-[100svh] flex items-center bg-white overflow-hidden">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Column: Content */}
        <div className="space-y-8 z-10">
          <Reveal>
            <SectionLabel text="WHOLESALE ↗" className="text-magenta" />
            <h1 className="text-display-lg font-clash font-extrabold text-text-primary leading-[0.9] tracking-tight mt-6">
              The UK's Most <span className="text-magenta">Premium</span> Sweet Supplier — Built for Business.
            </h1>
            <p className="text-body-lg text-text-secondary max-w-[540px] mt-8 leading-relaxed">
              Curated global inventory, exclusive regional drops, and surgical logistics. Scalable confectionery solutions for high-end retail, hospitality, and events.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-12">
              <Button variant="primary" className="bg-magenta border-magenta px-10">
                Apply for a Trade Account →
              </Button>
              <button className="text-mono-xs font-mono font-bold text-text-muted hover:text-text-primary transition-colors border-b border-transparent hover:border-text-primary">
                ALREADY HAVE AN ACCOUNT? SIGN IN
              </button>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Abstract CSS Composition */}
        <div className="relative h-[500px] lg:h-[600px] hidden lg:flex items-center justify-center">
           <Reveal delay={0.3}>
              <div className="relative w-[400px] h-[400px]">
                 {/* Stacked rectangles representing shelving/logistics */}
                 <div className="absolute top-0 right-0 w-[280px] h-[120px] bg-magenta opacity-10 rounded-sm" />
                 <div className="absolute top-[140px] right-[40px] w-[320px] h-[100px] bg-magenta opacity-20 rounded-sm" />
                 <div className="absolute top-[260px] right-0 w-[240px] h-[140px] bg-magenta opacity-30 rounded-sm" />
                 
                 {/* Accents */}
                 <div className="absolute top-[20px] left-[20px] w-4 h-4 rounded-full bg-magenta" />
                 <div className="absolute bottom-[40px] left-[60px] w-8 h-8 rounded-sm border-2 border-magenta opacity-40 rotate-12" />
              </div>
           </Reveal>
        </div>
      </Container>
    </section>
  );
}
