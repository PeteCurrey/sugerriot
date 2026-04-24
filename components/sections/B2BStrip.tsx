import Container from '@/components/ui/Container';
import Link from 'next/link';

export default function B2BStrip() {
  return (
    <section className="bg-[var(--sr-obsidian)] py-[var(--section-y-xl)] border-t border-[var(--sr-fog)]">
      <Container>
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Side: Trade Benefits */}
          <div className="lg:w-1/2 space-y-10">
            <div>
              <span className="label-mono text-[var(--sr-gold)] block mb-6">WHOLESALE & TRADE</span>
              <h2 className="text-section-title text-white mb-8">
                Global supply. <br />
                <span className="text-editorial italic font-normal text-[var(--sr-gold)]">Elite</span> pricing.
              </h2>
              <p className="text-[var(--sr-cloud)] text-xl leading-relaxed max-w-md">
                For retailers, hospitality, events, and corporate gifting. Access the world vault at scale.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                'Exclusive trade-only pricing tiers',
                'Dedicated account management',
                'Priority global logistics',
                'Early access to limited drops'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-[var(--sr-cloud)]">
                  <span className="w-1.5 h-1.5 bg-[var(--sr-gold)] rotate-45" />
                  {item}
                </li>
              ))}
            </ul>

            <Link 
              href="/trade"
              className="bg-[var(--sr-gold)] text-black px-10 py-5 text-[13px] font-mono uppercase tracking-[0.15em] hover:brightness-110 transition-all cta-hover inline-block"
            >
              Apply Now →
            </Link>
          </div>

          {/* Right Side: Mock Pricing Table */}
          <div className="lg:w-1/2 bg-[var(--sr-chrome)] border border-[var(--sr-fog)] p-12">
            <span className="label-mono text-[var(--sr-steel)] block mb-8 text-center">TRADE TIERS</span>
            <div className="space-y-6">
              {[
                { name: 'Retailer', discount: '15% OFF', req: '£500 min' },
                { name: 'Distributor', discount: '25% OFF', req: '£2k min' },
                { name: 'Corporate', discount: 'Custom', req: 'Annual' },
              ].map((tier, i) => (
                <div 
                  key={i} 
                  className="flex items-center justify-between py-6 border-b border-[var(--sr-fog)] last:border-0"
                >
                  <div>
                    <h4 className="text-white text-xl font-medium">{tier.name}</h4>
                    <p className="text-[var(--sr-steel)] text-sm">{tier.req}</p>
                  </div>
                  <span className="text-[var(--sr-gold)] font-mono text-lg font-bold">{tier.discount}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-[var(--sr-steel)] text-sm italic">
                Verified trade accounts only. Approval within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

