import Container from '@/components/ui/Container';
import Link from 'next/link';
import Image from 'next/image';

const ARTICLES = [
  { 
    id: 1, 
    title: "The Ultimate Guide to Japanese KitKat Flavours", 
    cat: 'WORLD GUIDES', 
    time: '6 MIN READ', 
    image: 'https://images.unsplash.com/photo-1582305540412-f0da3691656c?q=80&w=1200',
    featured: true
  },
  { 
    id: 2, 
    title: "TikTok's Most Viral Sweets of 2026", 
    cat: 'TRENDING', 
    time: '4 MIN READ', 
    image: 'https://images.unsplash.com/photo-1543157145-f78c636d023d?q=80&w=800'
  },
  { 
    id: 3, 
    title: "50 Retro Sweets You Forgot Existed", 
    cat: 'NOSTALGIA', 
    time: '12 MIN READ', 
    image: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?q=80&w=800'
  },
];

export default function JournalTeaser() {
  return (
    <section className="bg-[var(--sr-void)] py-[var(--section-y-xl)]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <span className="label-mono text-[var(--sr-riot)] block mb-4">THE JOURNAL</span>
            <h2 className="text-section-title text-white">Sugar Riot Stories</h2>
          </div>
          <Link href="/journal" className="label-mono text-[var(--sr-white)] hover:text-[var(--sr-riot)] transition-colors mt-8 md:mt-0 cta-hover">
            Read the Journal →
          </Link>
        </div>

        {/* Featured Article */}
        <div className="mb-20">
          <Link href="/journal/kitkat" className="group relative block aspect-[21/9] w-full overflow-hidden">
            <Image 
              src={ARTICLES[0].image} 
              alt={ARTICLES[0].title} 
              fill 
              className="object-cover grayscale-[30%] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--sr-void)] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-12 left-12 max-w-2xl">
              <span className="label-mono text-[var(--sr-riot)] mb-4 block">{ARTICLES[0].cat} — {ARTICLES[0].time}</span>
              <h3 className="text-white text-4xl md:text-5xl font-medium leading-tight">
                {ARTICLES[0].title}
              </h3>
            </div>
          </Link>
        </div>

        {/* Secondary Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {ARTICLES.slice(1).map((article) => (
            <Link key={article.id} href={`/journal/${article.id}`} className="group block space-y-6">
              <div className="aspect-[16/9] relative overflow-hidden">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  fill 
                  className="object-cover grayscale-[30%] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-3">
                <span className="label-mono text-[var(--sr-steel)] block">{article.cat} — {article.time}</span>
                <h4 className="text-white text-2xl font-medium group-hover:text-[var(--sr-riot)] transition-colors">
                  {article.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

