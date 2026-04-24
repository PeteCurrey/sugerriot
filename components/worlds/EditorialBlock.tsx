import Container from '@/components/ui/Container';
import { cn } from '@/components/ui/Container';
import Image from 'next/image';

interface EditorialBlockProps {
  title: string;
  content: string;
  image: string;
  reverse?: boolean;
}

export default function EditorialBlock({ title, content, image, reverse = false }: EditorialBlockProps) {
  return (
    <section className="py-[var(--section-y-xl)] bg-[var(--sr-void)] border-b border-[var(--sr-fog)] last:border-0">
      <Container>
        <div className={cn(
          "flex flex-col lg:flex-row items-center gap-20 lg:gap-32",
          reverse ? "lg:flex-row-reverse" : ""
        )}>
          {/* Image Layer */}
          <div className="w-full lg:w-1/2">
            <div className="aspect-[4/5] bg-[var(--sr-chrome)] border border-[var(--sr-fog)] overflow-hidden relative group">
              <Image 
                src={image} 
                alt={title} 
                fill 
                className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--sr-void)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-6">
              <span className="label-mono text-[var(--sr-riot)] block mb-4">EDITORIAL PERSPECTIVE</span>
              <h3 className="font-playfair text-4xl md:text-5xl text-white leading-tight font-medium">
                {title}
              </h3>
              <p className="text-[var(--sr-cloud)] text-xl leading-relaxed max-w-[500px]">
                {content}
              </p>
            </div>
            
            <div className="h-[1px] w-12 bg-[var(--sr-riot)]" />
          </div>
        </div>
      </Container>
    </section>
  );
}

