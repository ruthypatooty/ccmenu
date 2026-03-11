import type { Metadata } from 'next';
import MenuPageClient from '@/components/MenuPageClient';

export const metadata: Metadata = {
  title: 'Cakes, Cheesecakes & Cupcakes | Crumb & Craft',
  description: 'Explore our handcrafted cakes, creamy cheesecakes and cupcakes — baked fresh with love.',
};

type Props = { searchParams?: Promise<{ category?: string }> };

const validTabs = ['cakes','cheesecakes','cupcakes','brownies','cookies','main_dish','pasta'] as const;

export default async function CakesPage({ searchParams }: Props) {
  const params = await searchParams;
  const cat = (params?.category || '').toString();
  const defaultTab = validTabs.includes(cat as any) ? (cat as any) : 'cakes';
  return <MenuPageClient defaultTab={defaultTab} />;
}
