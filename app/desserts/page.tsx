import type { Metadata } from 'next';
import MenuPageClient from '@/components/MenuPageClient';

export const metadata: Metadata = {
  title: "Brownies, Bars & Cookies | Chelle's",
  description: 'Indulge in our freshly baked brownies, bars, cookies and muffins — homemade goodness in every bite.',
  openGraph: {
    title: "Brownies, Bars & Cookies | Chelle's",
    description: 'Indulge in our freshly baked brownies, bars, cookies and muffins — homemade goodness in every bite.',
    url: 'https://chelles.net/desserts',
    siteName: "Chelle's",
    type: 'website',
  },
  alternates: {
    canonical: 'https://chelles.net/desserts',
  },
};

type Props = { searchParams?: Promise<{ category?: string }> };

const validTabs = ['cakes','cheesecakes','cupcakes','brownies','cookies','main_dish','pasta','bespoke_cakes'] as const;

export default async function DessertsPage({ searchParams }: Props) {
  const params = await searchParams;
  const cat = (params?.category || '').toString();
  const defaultTab = validTabs.includes(cat as any) ? (cat as any) : 'brownies';
  return <MenuPageClient defaultTab={defaultTab} />;
}
