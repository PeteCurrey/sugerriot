import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProduct, getRelatedProducts } from '@/lib/get-product';
import Container from '@/components/ui/Container';
import ProductCard from '@/components/product/ProductCard';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductAccordions from '@/components/product/ProductAccordions';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.name} | ${product.brand} | Sugar Riot`,
    description: `Shop ${product.name} by ${product.brand}. Premium ${product.type} from ${product.region}.`,
    openGraph: {
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': product.name,
    'description': `Premium ${product.type} from ${product.region}.`,
    'image': product.image,
    'brand': {
      '@type': 'Brand',
      'name': product.brand,
    },
    'offers': {
      '@type': 'Offer',
      'price': product.price,
      'priceCurrency': 'GBP',
      'availability': 'https://schema.org/InStock',
    },
  };

  return (
    <div className="bg-[var(--sr-void)] min-h-screen pt-32 pb-32">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container>
        {/* Main Product Section */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/* Left: Media Gallery (55%) */}
          <div className="flex-grow lg:w-[55%]">
            <ProductGallery images={[product.image]} />
          </div>

          {/* Right: Info Section (45%) — Sticky */}
          <div className="flex-shrink-0 lg:w-[45%] lg:sticky lg:top-32 h-fit space-y-12">
            <ProductInfo product={product} />
            <ProductAccordions />
          </div>
        </div>

        {/* Below the Fold: Related Products */}
        <section className="mt-48 pt-24 border-t border-[var(--sr-fog)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <span className="label-mono text-[var(--sr-riot)] block mb-4">DISCOVER MORE</span>
              <h2 className="text-section-title text-white">You may also like</h2>
            </div>
            <Link href="/shop" className="label-mono text-[var(--sr-white)] hover:text-[var(--sr-riot)] transition-colors cta-hover">
              View Collection →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}

