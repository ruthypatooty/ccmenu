'use client';

import { MenuCategory } from '@/data/menuData';

type MenuTabsProps = {
  activeTab: MenuCategory;
  onTabChange: (tab: MenuCategory) => void;
};

const tabs: { id: MenuCategory; label: string }[] = [
  { id: 'cakes', label: 'Cakes' },
  { id: 'cheesecakes', label: 'Cheesecakes' },
  { id: 'cupcakes', label: 'Cupcakes & Individual Desserts' },
  { id: 'brownies', label: 'Brownies & Bars' },
  { id: 'cookies', label: 'Cookies & Baked Goods' },
];

export default function MenuTabs({ activeTab, onTabChange }: MenuTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === tab.id
              ? 'bg-slate-800 text-white'
              : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
