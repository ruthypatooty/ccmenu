'use client';

import { MenuCategory } from '@/data/menuData';

type MenuTabsProps = {
  activeTab: MenuCategory;
  onTabChange: (tab: MenuCategory) => void;
};

const tabs: { id: MenuCategory; label: string }[] = [
  { id: 'cakes', label: 'Cakes' },
  { id: 'cheesecakes', label: 'Cheesecakes' },
  { id: 'cupcakes', label: 'Cupcakes' },
  { id: 'main_dish', label: 'Main Dish' },
  { id: 'pasta', label: 'Pasta' },
  { id: 'brownies', label: 'Brownies & Bars' },
  { id: 'cookies', label: 'Cookies & Muffins' },
  { id: 'bespoke_cakes', label: 'Bespoke Cakes' },
];

export default function MenuTabs({ activeTab, onTabChange }: MenuTabsProps) {
  return (
    <div className="grid grid-cols-2 gap-2 mb-6 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">
      {tabs.map((tab) => {
        const active = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="px-2 py-1.5 rounded-full text-xs leading-tight font-medium text-center transition-colors sm:px-3 sm:py-2 sm:text-sm sm:leading-normal"
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
