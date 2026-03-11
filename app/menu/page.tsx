import type { Metadata } from 'next';
import MenuPageClient from '@/components/MenuPageClient';

export const metadata: Metadata = {
  title: 'Menu | Crumb & Craft',
  description: 'Browse our full menu of handcrafted cakes, desserts, brownies, cookies and more.',
};

type Props = { searchParams?: Promise<{ category?: string }> };

const validTabs = ['cakes','cheesecakes','cupcakes','brownies','cookies','pasta'] as const;

export default async function MenuPage({ searchParams }: Props) {
  const params = await searchParams;
  const cat = (params?.category || '').toString();
  const defaultTab = validTabs.includes(cat as any) ? (cat as any) : 'cakes';
  return <MenuPageClient defaultTab={defaultTab} />;
}
