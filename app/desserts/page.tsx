import type { Metadata } from 'next';
import MenuPageClient from '@/components/MenuPageClient';

export const metadata: Metadata = {
  title: 'Brownies, Bars & Cookies | Crumb & Craft',
  description: 'Indulge in our freshly baked brownies, bars, cookies and muffins — homemade goodness in every bite.',
};

type Props = { searchParams?: { category?: string } };

const validTabs = ['cakes','cheesecakes','cupcakes','brownies','cookies','pasta'] as const;

export default function DessertsPage({ searchParams }: Props) {
  const cat = (searchParams?.category || '').toString();
  const defaultTab = validTabs.includes(cat as any) ? (cat as any) : 'brownies';
  return <MenuPageClient defaultTab={defaultTab} />;
}
