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
          <div className="relative rounded-xl overflow-hidden mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/menu/landing1.png" alt="Hero" className="w-full h-72 md:h-96 object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6" style={{ background: 'linear-gradient(180deg, rgba(13,30,33,0.2), rgba(13,30,33,0.35))' }}>
              <h1 className="text-3xl md:text-5xl font-bold" style={{ color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.45)' }}>
                Freshly Baked, Just for You!
              </h1>
              <p className="mt-2 text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Discover our selection of cakes, cheesecakes, cupcakes and more.
              </p>
              <button className="mt-4 btn-primary">Order Now</button>
            </div>
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
