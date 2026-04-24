'use client';

import { 
  Sparkles, 
  History, 
  Gift, 
  Fingerprint, 
  Globe, 
  Calculator 
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import Reveal from '@/components/ui/Reveal';
import LabGrid from '@/components/lab/LabGrid';
import LabCard from '@/components/lab/LabCard';

const TOOLS = [
  { 
    name: 'Sweet Finder Quiz', 
    description: 'A multi-step visual analysis that maps your personality to our current sweet drops.', 
    Icon: Fingerprint, 
    href: '/the-lab/sweet-finder', 
    status: 'live' as const 
  },
  { 
    name: 'Nostalgia Decoder', 
    description: 'Enter a childhood memory and our AI will decode it into matching retro sweets.', 
    Icon: History, 
    href: '/the-lab/nostalgia-decoder', 
    status: 'live' as const 
  },
  { 
    name: 'Gift Concierge', 
    description: 'Precision gifting for the person who has everything. AI-curated hampers.', 
    Icon: Gift, 
    href: '#', 
    status: 'coming-soon' as const 
  },
  { 
    name: 'Flavour Match AI', 
    description: 'Upload a photo of your favourite drink or dessert to find its sweet equivalent.', 
    Icon: Sparkles, 
    href: '#', 
    status: 'coming-soon' as const 
  },
  { 
    name: 'World Explorer', 
    description: 'Real-time global sweet trend analysis and limited drop forecasting.', 
    Icon: Globe, 
    href: '#', 
    status: 'coming-soon' as const 
  },
  { 
    name: 'Trade Calculator', 
    description: 'Advanced unit-cost analysis and margin forecasting for retail partners.', 
    Icon: Calculator, 
    href: '#', 
    status: 'coming-soon' as const 
  },
];

export default function LabPage() {
  return (
    <LabGrid className="pt-[120px] pb-24">
      <Container>
        <header className="max-w-[800px] mb-20">
          <Reveal>
            <SectionLabel text="AI TOOLS ↗" />
            <h1 className="text-display-lg font-clash mt-4 mb-6 font-extrabold tracking-tight">Welcome to the Lab.</h1>
            <p className="text-body-lg text-text-secondary leading-relaxed">
              Six tools. Powered by AI. Built for sweet discovery. Experiments in the future of global confectionery.
            </p>
          </Reveal>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOOLS.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 0.1}>
              <LabCard {...tool} />
            </Reveal>
          ))}
        </div>

        {/* Lab Footer Note */}
        <Reveal delay={0.6}>
          <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-mono-xs font-mono text-text-muted uppercase tracking-[0.2em]">
              EXPERIMENT_TYPE: DISCOVERY_GEN_001
            </p>
            <p className="text-mono-xs font-mono text-text-muted">
              ALL AI RESPONSES ARE SYNTHETIC AND BASED ON OUR EXCLUSIVE GLOBAL VAULT DATA.
            </p>
          </div>
        </Reveal>
      </Container>
    </LabGrid>
  );
}
