import type { Metadata } from 'next';
import MenuPageClient from '@/components/MenuPageClient';

export const metadata: Metadata = {
  title: "Cakes, Cheesecakes & Cupcakes | Chelle's",
  description: 'Explore our handcrafted cakes, creamy cheesecakes and cupcakes — baked fresh with love.',
  openGraph: {
    title: "Cakes, Cheesecakes & Cupcakes | Chelle's",
    description: 'Explore our handcrafted cakes, creamy cheesecakes and cupcakes — baked fresh with love.',
    url: 'https://chelles.net/cakes',
    siteName: "Chelle's",
    type: 'website',
  },
  alternates: {
    canonical: 'https://chelles.net/cakes',
  },
};

type Props = { searchParams?: Promise<{ category?: string }> };

const validTabs = ['cakes','cheesecakes','cupcakes','brownies','cookies','main_dish','pasta','bespoke_cakes'] as const;

export default async function CakesPage({ searchParams }: Props) {
  const params = await searchParams;
  const cat = (params?.category || '').toString();
  const defaultTab = validTabs.includes(cat as any) ? (cat as any) : 'cakes';
  return <MenuPageClient defaultTab={defaultTab} />;
}
