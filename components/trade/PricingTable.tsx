'use client';

import Container from '@/components/ui/Container';
import { Check } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import { cn } from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

const TIERS = [
  {
    name: 'Bronze',
    accent: '#CD7F32',
    discount: '5',
    minMonthly: '£250',
    minOrder: '£50',
    features: ['Standard Support', 'Monthly Catalog', 'Real-time Stock'],
  },
  {
    name: 'Silver',
    accent: '#2B86C5',
    discount: '15',
    minMonthly: '£1,000',
    minOrder: '£200',
    features: ['Priority Support', 'Dedicated Account Manager', 'Custom Drops', 'Most Popular'],
    popular: true
  },
  {
    name: 'Gold',
    accent: '#C9A84C',
    discount: '25',
    minMonthly: '£5,000',
    minOrder: '£1,000',
    features: ['Executive Support', 'Flash-Drop Access', 'Custom Packaging', 'Net-30 Payment Terms'],
  }
];

export default function PricingTable() {
  return (
    <section className="py-[var(--section-y-lg)] bg-off-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.1}>
              <div 
                className={cn(
                  "bg-white border rounded-sm p-12 relative flex flex-col items-start transition-all duration-500",
                  tier.popular ? "border-[2px] border-magenta shadow-xl ring-2 ring-magenta/10" : "border-border"
                )}
              >
                {tier.popular && (
                  <Badge variant="new" className="absolute top-6 right-6 bg-magenta text-white border-none py-1.5 px-3">
                    MOST POPULAR
                  </Badge>
                )}

                <h3 className="text-display-xs font-clash font-extrabold uppercase tracking-tight mb-8">
                  {tier.name}
                </h3>

                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-[56px] font-clash font-extrabold" style={{ color: tier.accent }}>
                    {tier.discount}
                  </span>
                  <span className="text-mono-md font-mono font-bold text-text-muted">
                    % OFF RRP
                  </span>
                </div>

                <div className="w-full space-y-4 mb-12">
                   <div className="flex justify-between text-mono-xs font-mono">
                      <span className="text-text-muted">MIN. MONTHLY SPEND</span>
                      <span className="text-text-primary font-bold">{tier.minMonthly}</span>
                   </div>
                   <div className="flex justify-between text-mono-xs font-mono">
                      <span className="text-text-muted">MIN. ORDER VALUE</span>
                      <span className="text-text-primary font-bold">{tier.minOrder}</span>
                   </div>
                </div>

                <div className="w-full h-[1px] bg-border mb-12" />

                <ul className="space-y-6 flex-grow w-full mb-16">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-4">
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" 
                        style={{ backgroundColor: `${tier.accent}20` }}
                      >
                         <Check size={12} style={{ color: tier.accent }} />
                      </div>
                      <span className="text-body-sm font-satoshi text-text-secondary">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={cn(
                    "w-full py-5 rounded-sm border font-mono font-bold text-mono-sm uppercase tracking-widest transition-all",
                    tier.popular ? "bg-magenta text-white border-magenta hover:opacity-90 shadow-lg" : "border-magenta text-magenta hover:bg-magenta hover:text-white"
                  )}
                >
                   APPLY FOR {tier.name.toUpperCase()} ACCOUNT
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
