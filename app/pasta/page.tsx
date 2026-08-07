import type { Metadata } from 'next';
import MenuPageClient from '@/components/MenuPageClient';
import { menuData } from '@/data/menuData';

export const metadata: Metadata = {
  title: "Pasta | Chelle's",
  description: 'Explore our pasta favorites, from truffle cream to baked classics.',
  openGraph: {
    title: "Pasta | Chelle's",
    description: 'Explore our pasta favorites, from truffle cream to baked classics.',
    url: 'https://chelles.net/pasta',
    siteName: "Chelle's",
    type: 'website',
    images: [
      {
        url: 'https://chelles.net/menu/Chelles_Creamy_Black_Truffle_Pasta-qc-quezoncity-commonwealth-manila.jpg',
        width: 1200,
        height: 630,
        alt: 'Truffle Pasta',
      },
    ],
  },
  alternates: {
    canonical: 'https://chelles.net/pasta',
  },
};

type Props = { searchParams?: Promise<{ category?: string }> };

const validTabs = ['cakes','cheesecakes','cupcakes','brownies','cookies','main_dish','pasta','bespoke_cakes'] as const;

export default async function PastaPage({ searchParams }: Props) {
  const params = await searchParams;
  const cat = (params?.category || '').toString();
  const defaultTab = validTabs.includes(cat as any) ? (cat as any) : 'pasta';

  const items = menuData.pasta.map((it) => ({
    name: it.name,
    description: it.description || '',
    image: it.image ? `https://chelles.net${it.image}` : undefined,
    price: it.price ? it.price.replace(/[^0-9.]/g, '') : undefined,
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: 'Pasta',
    hasMenuSection: {
      '@type': 'MenuSection',
      name: 'Pasta',
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
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <MenuPageClient defaultTab={defaultTab} />
    </>
  );
}
