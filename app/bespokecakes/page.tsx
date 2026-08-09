import type { Metadata } from 'next';
import MenuPageClient from '@/components/MenuPageClient';

export const metadata: Metadata = {
  title: "Bespoke Cakes | Chelle's",
  description: "Custom-designed cakes from Chelle's.",
};

export default function BespokeCakesPage() {
  return <MenuPageClient defaultTab="bespoke_cakes" />;
}