import { groq } from 'next-sanity';

export const allProductsQuery = groq`
  *[_type == "product"] {
    "id": _id,
    name,
    "slug": slug.current,
    brand,
    price,
    originalPrice,
    image,
    badge,
    region,
    type,
    diet,
    occasion,
    description
  }
`;

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    "id": _id,
    name,
    "slug": slug.current,
    brand,
    price,
    originalPrice,
    image,
    badge,
    region,
    type,
    diet,
    occasion,
    description
  }
`;

export const productSlugsQuery = groq`
  *[_type == "product"] {
    "slug": slug.current
  }
`;
