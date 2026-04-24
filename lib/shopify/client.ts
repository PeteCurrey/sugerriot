import { GraphQLClient } from 'graphql-request';

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

const endpoint = domain ? `https://${domain}/api/2025-01/graphql.json` : '';

export const shopifyClient = new GraphQLClient(endpoint, {
  headers: {
    'X-Shopify-Storefront-Access-Token': storefrontAccessToken || '',
    'Content-Type': 'application/json',
  },
});

export async function shopifyFetch<T>(query: string, variables = {}): Promise<T | null> {
  if (!domain || !storefrontAccessToken) {
    console.warn('Shopify credentials missing. Falling back to mock data or demo mode.');
    return null;
  }

  try {
    const data = await shopifyClient.request<T>(query, variables);
    return data;
  } catch (error) {
    console.error('Shopify Fetch Error:', error);
    return null;
  }
}

// Utility to handle shopify error data structures
export function extractShopifyErrors(data: any): string[] {
  if (!data) return ['Fetch failed'];
  const errors = data.userErrors || data.customerUserErrors || [];
  return errors.map((e: any) => e.message);
}
