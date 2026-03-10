import type { Metadata } from 'next';
import MenuPageClient from '@/components/MenuPageClient';

export const metadata: Metadata = {
  title: 'Cakes, Cheesecakes & Cupcakes | Crumb & Craft',
  description: 'Explore our handcrafted cakes, creamy cheesecakes and cupcakes — baked fresh with love.',
};

type Props = { searchParams?: { category?: string } };

const validTabs = ['cakes','cheesecakes','cupcakes','brownies','cookies','pasta'] as const;

export default function CakesPage({ searchParams }: Props) {
  const cat = (searchParams?.category || '').toString();
  const defaultTab = validTabs.includes(cat as any) ? (cat as any) : 'cakes';
  return <MenuPageClient defaultTab={defaultTab} />;
}
