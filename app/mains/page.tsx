import type { Metadata } from 'next';
import MenuPageClient from '@/components/MenuPageClient';
import { menuData } from '@/data/menuData';

export const metadata: Metadata = {
  title: "Main Dish | Chelle's",
  description: 'Our savory main dishes — seafood boils, ribs, roast beef and more.',
  openGraph: {
    title: "Main Dish | Chelle's",
    description: 'Our savory main dishes — seafood boils, ribs, roast beef and more.',
    url: 'https://chelles.net/mains',
    siteName: "Chelle's",
    type: 'website',
    images: [
      {
        url: 'https://chelles.net/menu/Hickory_Pork_Ribs-qc-quezoncity-commonwealth-manila.jpg',
        width: 1200,
        height: 630,
        alt: 'Hickory Ribs',
      },
    ],
  },
  alternates: {
    canonical: 'https://chelles.net/mains',
  },
};

export default function MainsPage() {
  const items = menuData.main_dish.map((it) => ({
    name: it.name,
    description: it.description || '',
    image: it.image ? `https://chelles.net${it.image}` : undefined,
    price: it.price ? it.price.replace(/[^0-9.]/g, '') : undefined,
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: 'Main Dish',
    hasMenuSection: {
      '@type': 'MenuSection',
      name: 'Main Dish',
      hasMenuItem: items.map((i) => ({
        '@type': 'MenuItem',
        name: i.name,
        description: i.description,
        image: i.image,
        offers: i.price
          ? {
              '@type': 'Offer',
              price: i.price,
              priceCurrency: 'PHP',
            }
          : undefined,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      <MenuPageClient defaultTab={'main_dish'} />
    </>
  );
}
