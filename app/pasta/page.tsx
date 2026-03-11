import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pasta | Crumb & Craft',
  description: 'Pasta — coming soon.',
};

type Props = { searchParams?: Promise<{ category?: string }> };

const validTabs = ['cakes','cheesecakes','cupcakes','brownies','cookies','pasta'] as const;

export default async function PastaPage({ searchParams }: Props) {
  const params = await searchParams;
  const cat = (params?.category || '').toString();
  const defaultTab = validTabs.includes(cat as any) ? (cat as any) : 'pasta';

  return (
    <main className="min-h-screen p-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold" style={{ color: 'var(--primary)' }}>
          Pasta
        </h1>
        <p className="mt-4 text-lg">to follow....</p>
      </div>
    </main>
  );
}
