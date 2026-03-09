"use client";

import { useState } from 'react';
import { menuData, MenuCategory } from '@/data/menuData';
import MenuTabs from '@/components/MenuTabs';
import MenuList from '@/components/MenuList';

export default function Home() {
  const [activeTab, setActiveTab] = useState<MenuCategory>('cakes');

  return (
    <div className="min-h-screen bg-zinc-50 p-6">
      <div className="mx-auto max-w-5xl">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-slate-900">Bakery Menu</h1>
          <p className="text-slate-600">Freshly baked selections — choose a category below.</p>
        </header>

        <MenuTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <section>
          <MenuList items={menuData[activeTab]} />
        </section>
      </div>
    </div>
  );
}
