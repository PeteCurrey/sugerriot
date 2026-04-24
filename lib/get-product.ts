import { PRODUCTS, Product } from '@/data/products';
import { client } from './sanity.client';
import { allProductsQuery, productBySlugQuery, productSlugsQuery } from './sanity.queries';

const isSanityConfigured = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && 
                          process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'replace-me';

export async function getProduct(slug: string): Promise<Product | undefined> {
  if (isSanityConfigured) {
    try {
      return await client.fetch(productBySlugQuery, { slug });
    } catch (e) {
      console.error('Sanity fetch error:', e);
    }
  }
  // Fallback to mock data
  return PRODUCTS.find(p => p.slug === slug);
}

export async function getAllProducts(): Promise<Product[]> {
  if (isSanityConfigured) {
    try {
      return await client.fetch(allProductsQuery);
    } catch (e) {
      console.error('Sanity fetch error:', e);
    }
  }
  return PRODUCTS;
}

export async function getAllSlugs(): Promise<string[]> {
  if (isSanityConfigured) {
    try {
      const products = await client.fetch(productSlugsQuery);
      return products.map((p: any) => p.slug);
    } catch (e) {
      console.error('Sanity fetch error:', e);
    }
  }
  return PRODUCTS.map(p => p.slug);
}

export function getRelatedProducts(product: Product, limit: number = 4): Product[] {
  return PRODUCTS
    .filter(p => p.id !== product.id && (p.region === product.region || p.type === product.type))
    .slice(0, limit);
}
