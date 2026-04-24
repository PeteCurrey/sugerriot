import { createClient } from '@sanity/client';
import { PRODUCTS } from '../data/products';

/**
 * MIGRATION SCRIPT
 * 
 * To run this: 
 * 1. Ensure you have your Project ID and a Write Token from Sanity.
 * 2. Run: npx ts-node scripts/import-to-sanity.ts
 */

const client = createClient({
  projectId: 'REPLACE_WITH_YOUR_ID',
  dataset: 'production',
  token: 'REPLACE_WITH_WRITE_TOKEN',
  useCdn: false,
  apiVersion: '2023-05-03',
});

async function importData() {
  console.log('🚀 Starting migration to Sanity...');

  for (const product of PRODUCTS) {
    console.log(`📦 Importing: ${product.name}`);
    
    // Note: This script imports the data. 
    // Images are imported as external URLs for now. 
    // For a better experience, upload the actual files via the Studio.
    
    const doc = {
      _type: 'product',
      _id: `product-${product.id}`,
      name: product.name,
      slug: {
        _type: 'slug',
        current: product.slug,
      },
      brand: product.brand,
      price: product.price,
      originalPrice: product.originalPrice,
      region: product.region,
      type: product.type,
      diet: product.diet,
      occasion: product.occasion,
      // We store the external URL as a fallback if not using Sanity Assets
      externalImage: product.image, 
    };

    try {
      await client.createOrReplace(doc);
      console.log(`✅ Success: ${product.name}`);
    } catch (err) {
      console.error(`❌ Error importing ${product.name}:`, err);
    }
  }

  console.log('✨ Migration complete!');
}

importData();
