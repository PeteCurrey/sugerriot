import { PRODUCTS, Product } from '@/data/products';

export async function getProduct(slug: string): Promise<Product | undefined> {
  return PRODUCTS.find(p => p.slug === slug);
}

export async function getAllProducts(): Promise<Product[]> {
  return PRODUCTS;
}

export async function getAllSlugs(): Promise<string[]> {
  return PRODUCTS.map(p => p.slug);
}

export function getRelatedProducts(product: Product, limit: number = 4): Product[] {
  return PRODUCTS
    .filter(p => p.id !== product.id && (p.region === product.region || p.type === product.type))
    .slice(0, limit);
}
