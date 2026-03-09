"use client";

import { useState } from 'react';
import { menuData, MenuCategory } from '@/data/menuData';
import MenuTabs from '@/components/MenuTabs';
import MenuList from '@/components/MenuList';

export default function Home() {
  const [activeTab, setActiveTab] = useState<MenuCategory>('cakes');

  return (
    <div className="min-h-screen p-6 hero">
      <div className="mx-auto max-w-5xl">
        <header className="mb-6">
          <div className="relative overflow-hidden mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/menu/landing2.png" alt="Hero" className="w-full h-72 md:h-96 object-cover" />
            {/* Edge gradients that fade into the page background */}
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
            CC Menu
          </h2>
          <p style={{ color: 'var(--muted)' }}>Freshly baked selections — choose a category below.</p>
        </header>

        <MenuTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <section>
          <MenuList items={menuData[activeTab]} />
        </section>
      </div>
    </div>
  );
}
