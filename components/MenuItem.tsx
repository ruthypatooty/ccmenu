import React, { useState } from 'react';
import { MenuItem as MenuItemType } from '@/data/menuData';
import ItemModal from './ItemModal';

type MenuItemProps = {
  item: MenuItemType;
};

export default function MenuItem({ item }: MenuItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="rounded-xl overflow-hidden cursor-pointer"
        style={{ background: 'transparent' }}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') setOpen(true); }}
      >
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.image} alt={item.name} className="w-full h-48 md:h-56 object-cover block" />
        ) : (
          <div className="w-full h-48 md:h-56 bg-gray-50" />
        )}

        <div className="p-4">
          <div className="w-full rounded-md overflow-hidden" style={{ background: 'var(--aqua-1)' }}>
            <div className="px-3 py-2">
              <div className="text-lg font-bold" style={{ color: 'var(--text)' }}>{item.name}</div>
              <div className="text-sm mt-1" style={{ color: 'var(--muted)', opacity: 0.85 }}>{item.price}</div>
            </div>
          </div>

          {item.description ? (
            <div className="text-sm mt-2" style={{ color: 'var(--muted)' }}>{item.description}</div>
          ) : null}
        </div>
      </div>

      <ItemModal item={item} isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
