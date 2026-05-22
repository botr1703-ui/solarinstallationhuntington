/**
 * Content model for static generation. Duplicate this template per niche/city site
 * or replace with Astro Content Collections later.
 */
export type ServicePage = {
  slug: string;
  title: string;
  description: string;
};

export type AreaPage = {
  slug: string;
  title: string;
};

export const services: ServicePage[] = [
  {
    slug: 'junk-removal',
    title: 'Junk Removal',
    description:
      'Fast, insured junk removal for homes and businesses. Same-day options in many areas.',
  },
  {
    slug: 'furniture-removal',
    title: 'Furniture Removal',
    description:
      'Heavy lifting and responsible disposal—couches, mattresses, office furniture, and more.',
  },
];

export const areas: AreaPage[] = [
  { slug: 'north-austin', title: 'North Austin' },
  { slug: 'south-austin', title: 'South Austin' },
];
