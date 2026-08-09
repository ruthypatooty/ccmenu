"use client";

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
        className="h-full flex flex-col rounded-lg overflow-hidden cursor-pointer transition-transform duration-150 active:scale-95"
        style={{ background: 'transparent' }}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') setOpen(true); }}
      >
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.image} alt={item.name} className="w-full h-48 md:h-56 object-cover block shrink-0" />
        ) : (
          <div className="w-full h-48 md:h-56 bg-gray-50 shrink-0" />
        )}

         <div className="w-full flex-1 flex flex-col justify-center" style={{ background: 'var(--aqua-1)' }}>
           <div className="px-4 py-3">
             <div className="text-lg font-bold" style={{ color: 'var(--text)' }}>{item.name}</div>
             <div className="text-sm mt-1" style={{ color: 'var(--muted)', opacity: 0.85 }}>{item.price}</div>
           </div>
          </div>

          {/* description intentionally omitted here — details shown in modal */}
        </div>

      <ItemModal item={item} isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
