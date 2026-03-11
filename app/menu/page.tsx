import type { Metadata } from 'next';
import MenuPageClient from '@/components/MenuPageClient';

type Props = { searchParams?: Promise<{ category?: string }> };

const validTabs = ['cakes','cheesecakes','cupcakes','brownies','cookies','main_dish','pasta'] as const;

const BASE = 'https://crumbandcraft.net';

function categoryMetadata(category: string | undefined): Metadata {
  const cat = category || 'cakes';

  const map: Record<string, { title: string; description: string; image: string; canonical: string }> = {
    cakes: {
      title: 'Cakes | Crumb & Craft',
      description: 'Explore our handcrafted cakes, creamy cheesecakes and cupcakes — baked fresh with love.',
      image: '/menu/Fresh_Berry_Cream_Cake-qc-quezoncity-commonwealth-manila.png',
      canonical: `${BASE}/cakes`,
    },
    cheesecakes: {
      title: 'Cheesecakes | Crumb & Craft',
      description: 'Creamy cheesecakes in different flavors — handcrafted and rich.',
      image: '/menu/Fresh_Berry_Cheesecake-qc-quezoncity-commonwealth-manila.png',
      canonical: `${BASE}/cakes`,
    },
    cupcakes: {
      title: 'Cupcakes & Individual Desserts | Crumb & Craft',
      description: 'Small-batch cupcakes and individual desserts — perfect for gifting and parties.',
      image: '/menu/Funfetti_Cupcakes-qc-quezoncity-commonwealth-manila.jpg',
      canonical: `${BASE}/cakes`,
    },
    brownies: {
      title: 'Brownies & Bars | Crumb & Craft',
      description: 'Decadent brownies, bars, and traybakes made with quality chocolate.',
      image: '/menu/Four_Shades_of_Fudge-qc-quezoncity-commonwealth-manila.jpg',
      canonical: `${BASE}/desserts`,
    },
    cookies: {
      title: 'Cookies & Muffins | Crumb & Craft',
      description: 'Freshly baked cookies and muffins — crisp edges, soft centers.',
      image: '/menu/Chocolate_Chip_Cookies-qc-quezoncity-commonwealth-manila.jpg',
      canonical: `${BASE}/desserts`,
    },
    main_dish: {
      title: 'Main Dish | Crumb & Craft',
      description: 'Savory mains including seafood boils, ribs, cordon bleu and roast beef.',
      image: '/menu/Hickory_Pork_Ribs-qc-quezoncity-commonwealth-manila.jpg',
      canonical: `${BASE}/mains`,
    },
    pasta: {
      title: 'Pasta | Crumb & Craft',
      description: 'Pasta favorites from truffle cream to baked classics.',
      image: '/menu/Chelles_Creamy_Black_Truffle_Pasta-qc-quezoncity-commonwealth-manila.jpg',
      canonical: `${BASE}/pasta`,
    },
  };

  const entry = map[cat] || map.cakes;

  return {
    title: entry.title,
    description: entry.description,
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: entry.canonical,
      siteName: 'Crumb & Craft',
      type: 'website',
      images: [
        {
          url: `${BASE}${entry.image}`,
          width: 1200,
          height: 630,
          alt: entry.title,
        },
      ],
    },
    alternates: { canonical: entry.canonical },
  } as Metadata;
}

export async function generateMetadata({ searchParams }: { searchParams?: { category?: string } }) {
  const cat = (searchParams?.category || '').toString();
  const chosen = validTabs.includes(cat as any) ? cat : 'cakes';
  return categoryMetadata(chosen);
}

export default async function MenuPage({ searchParams }: Props) {
  const params = await searchParams;
  const cat = (params?.category || '').toString();
  const defaultTab = validTabs.includes(cat as any) ? (cat as any) : 'cakes';
  return <MenuPageClient defaultTab={defaultTab} />;
}
