import Container from '@/components/ui/Container';
import Link from 'next/link';

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.309 17.41z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[var(--sr-void)] pt-32 pb-12 border-t border-[var(--sr-fog)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="font-playfair text-[28px] font-medium text-[var(--sr-white)]">
              SUGAR RIOT
            </Link>
            <p className="text-[var(--sr-cloud)] text-lg leading-relaxed max-w-sm">
              Premium international confectionery. Cinematic retail for the modern explorer. From Tokyo to Tennessee.
            </p>
            <div className="flex items-center gap-6 text-[var(--sr-steel)]">
              <a href="#" className="hover:text-[var(--sr-white)] transition-colors"><InstagramIcon /></a>
              <a href="#" className="hover:text-[var(--sr-white)] transition-colors"><XIcon /></a>
            </div>
          </div>

          {/* Column 2: Worlds */}
          <div className="lg:col-span-2 space-y-6">
            <span className="label-mono text-[var(--sr-steel)]">The Worlds</span>
            <ul className="space-y-4">
              {['British Retro', 'American Candy', 'Japanese & Asian', 'World Sweets'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-[var(--sr-cloud)] hover:text-[var(--sr-white)] transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2 space-y-6">
            <span className="label-mono text-[var(--sr-steel)]">Company</span>
            <ul className="space-y-4">
              {['About', 'Journal', 'Wholesale', 'Careers', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-[var(--sr-cloud)] hover:text-[var(--sr-white)] transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-4 space-y-8">
            <span className="label-mono text-[var(--sr-steel)]">Join the Riot</span>
            <div className="space-y-4">
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="flex-grow bg-[var(--sr-chrome)] border border-[var(--sr-fog)] px-6 py-4 text-[var(--sr-white)] text-[12px] font-mono tracking-widest focus:border-[var(--sr-riot)] focus:outline-none transition-all placeholder:text-[var(--sr-steel)]"
                />
                <button className="bg-[var(--sr-riot)] text-white px-8 py-4 text-[12px] font-mono uppercase tracking-widest hover:brightness-110 transition-all">
                  Join
                </button>
              </div>
              <p className="text-[var(--sr-steel)] text-sm">
                No spam. New arrivals and world explorations only.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-12 border-t border-[var(--sr-fog)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-[var(--sr-steel)] text-[11px] font-mono tracking-wider space-x-4">
            <span>© 2026 SUGAR RIOT. ALL RIGHTS RESERVED.</span>
            <span className="hidden md:inline">|</span>
            <Link href="#" className="hover:text-[var(--sr-white)] transition-colors">PRIVACY</Link>
            <Link href="#" className="hover:text-[var(--sr-white)] transition-colors">TERMS</Link>
            <Link href="#" className="hover:text-[var(--sr-white)] transition-colors">COOKIES</Link>
          </div>
          
          <div className="text-[var(--sr-steel)] text-[11px] font-mono tracking-wider">
            BUILT BY AVORRIA
          </div>
        </div>
      </Container>
    </footer>
  );
}

