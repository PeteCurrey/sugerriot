import { MetadataRoute } from 'next';
import { getAllSlugs } from '@/lib/get-product';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://sugarriot.com';
  
  // Fetch all product slugs for dynamic sitemap
  const productSlugs = await getAllSlugs();
  const productEntries = productSlugs.map((slug) => ({
    url: `${baseUrl}/product/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  const routes = ['', '/shop', '/worlds', '/journal', '/the-lab', '/gifts'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes, ...productEntries];
}
