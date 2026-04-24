import TradeHero from '@/components/trade/TradeHero';
import PricingTable from '@/components/trade/PricingTable';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

const STATS = [
  { value: '3,000+', label: 'PRODUCTS AVAILABLE' },
  { value: 'NEXT DAY', label: 'UK DELIVERY' },
  { value: 'NO MIN.', label: 'GOLD TIER LIMIT' },
  { value: '24/7', label: 'DEDICATED SUPPORT' }
];

export const metadata = {
  title: 'B2B Trade Portal | Sugar Riot',
  description: 'The UK’s most premium sweet supplier. Trade accounts, wholesale pricing, and dedicated support for professional partners.',
};

export default function TradePage() {
  return (
    <main className="trade-portal bg-white min-h-screen">
      {/* Trade Badge in Header handled by global layout if we had one, 
          but for now we'll just implement the page content */}
      
      <TradeHero />

      {/* Stats Bar */}
      <section className="bg-off-white border-y border-border py-12">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2 group">
                 <Reveal delay={i * 0.05}>
                    <span className="text-[40px] font-clash font-extrabold text-magenta leading-none">
                      {stat.value}
                    </span>
                    <span className="text-mono-xs font-mono text-text-muted mt-2 tracking-widest block">
                      {stat.label}
                    </span>
                 </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <PricingTable />

      {/* Trust Quote */}
      <section className="py-32 bg-white">
        <Container className="text-center max-w-[900px]">
          <Reveal>
             <h2 className="text-display-sm font-clash italic text-text-primary leading-tight">
               "Sugar Riot hasn't just supplied us with sweets; they've supplied us with an editorial edge that our customers obsess over."
             </h2>
             <p className="text-mono-xs font-mono font-bold text-text-muted mt-12 uppercase tracking-widest">
               — HARRODS FOOD HALL PARTNER
             </p>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
