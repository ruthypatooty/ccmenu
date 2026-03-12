"use client";

import { useState } from 'react';
import { menuData, MenuCategory } from '@/data/menuData';
import MenuTabs from '@/components/MenuTabs';
import MenuList from '@/components/MenuList';

const tabToUrl: Record<MenuCategory, string> = {
  cakes: '/cakes',
  cheesecakes: '/cakes',
  cupcakes: '/cakes',
  main_dish: '/mains',
  pasta: '/pasta',
  brownies: '/desserts',
  cookies: '/desserts',
};

type Props = { defaultTab: MenuCategory };

export default function MenuPageClient({ defaultTab }: Props) {
  const [activeTab, setActiveTab] = useState<MenuCategory>(defaultTab);

  function buildTabUrl(tab: MenuCategory) {
    const base = tabToUrl[tab];
    const isCanonicalTab =
      tab === 'cakes' ||
      tab === 'brownies' ||
      tab === 'main_dish' ||
      tab === 'pasta';

    if (isCanonicalTab) {
      return base;
    }

    return `${base}?category=${encodeURIComponent(tab)}`;
  }

  function handleTabChange(tab: MenuCategory) {
    setActiveTab(tab);

    // Update URL synchronously to avoid race conditions from rapid router transitions.
    const nextUrl = buildTabUrl(tab);
    if (window.location.pathname + window.location.search !== nextUrl) {
      window.history.pushState({}, '', nextUrl);
    }
  }

  return (
    <div className="min-h-screen p-6 hero">
      <div className="mx-auto max-w-5xl">
        <header className="mb-6">
          <div className="relative overflow-hidden mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/menu/landing2-qc-quezoncity-commonwealth-manila.png" alt="Hero" className="w-full h-72 md:h-96 object-cover" />
            <div className="absolute inset-0 pointer-events-none" style={{
              background: `
                linear-gradient(to top,    var(--bg) 0%, transparent 15%),
                linear-gradient(to bottom, var(--bg) 0%, transparent 15%),
                linear-gradient(to left,   var(--bg) 0%, transparent 15%),
                linear-gradient(to right,  var(--bg) 0%, transparent 15%)
              `
            }} />
          </div>

          <h2 className="text-3xl font-bold" style={{ color: 'var(--primary)' }}>
            Welcome to Crumb & Craft Homemade Goods
          </h2>
          <p style={{ color: 'var(--muted)' }}>We offer handcrafted cakes, desserts, and pasta in Commonwealth, Quezon City, serving customers across Metro Manila. Explore our freshly baked selections and choose a category below.</p>
        </header>

        <MenuTabs activeTab={activeTab} onTabChange={handleTabChange} />

        <section>
          <MenuList items={menuData[activeTab]} />
        </section>
      </div>
    </div>
  );
}
