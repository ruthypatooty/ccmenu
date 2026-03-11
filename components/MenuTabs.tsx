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
  { id: 'main_dish', label: 'Main dish' },
  { id: 'pasta', label: 'Pasta' },
  { id: 'brownies', label: 'Brownies & Bars' },
  { id: 'cookies', label: 'Cookies & Muffins' },
];

export default function MenuTabs({ activeTab, onTabChange }: MenuTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-6">
      {tabs.map((tab) => {
        const active = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-3 py-2 rounded-full text-sm font-medium transition-colors`}
            style={
              active
                ? { background: 'var(--primary)', color: 'white' }
                : { background: 'var(--aqua-1)', color: 'var(--primary)' }
            }
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
