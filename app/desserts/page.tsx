import type { Metadata } from 'next';
import MenuPageClient from '@/components/MenuPageClient';

export const metadata: Metadata = {
  title: 'Brownies, Bars & Cookies | Crumb & Craft',
  description: 'Indulge in our freshly baked brownies, bars, cookies and muffins — homemade goodness in every bite.',
};

type Props = { searchParams?: Promise<{ category?: string }> };

const validTabs = ['cakes','cheesecakes','cupcakes','brownies','cookies','main_dish','pasta'] as const;

export default async function DessertsPage({ searchParams }: Props) {
  const params = await searchParams;
  const cat = (params?.category || '').toString();
  const defaultTab = validTabs.includes(cat as any) ? (cat as any) : 'brownies';
  return <MenuPageClient defaultTab={defaultTab} />;
}
