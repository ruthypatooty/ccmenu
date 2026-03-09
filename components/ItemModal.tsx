import React, { useState } from 'react';
import { MenuItem as MenuItemType } from '@/data/menuData';

type ItemModalProps = {
  item: MenuItemType;
  isOpen: boolean;
  onClose: () => void;
};

export default function ItemModal({ item, isOpen, onClose }: ItemModalProps) {
  const [zoomed, setZoomed] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" aria-modal="true">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 h-3/4 overflow-hidden z-50 flex">
        {/* Left: image area */}
        <div className="w-1/2 bg-black flex items-center justify-center overflow-auto relative" style={{ minWidth: 320 }}>
          {item.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.image}
              alt={item.name}
              onClick={() => setZoomed((s) => !s)}
              decoding="async"
              loading="eager"
              className={`transition-all duration-300 ${zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
              style={
                zoomed
                  ? { width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }
                  : { width: '100%', height: '100%', objectFit: 'cover' }
              }
            />
          ) : (
            <div className="text-white p-4">No image</div>
          )}
        </div>

        {/* Right: details */}
        <div className="w-1/2 p-6 overflow-auto relative">
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full p-2 bg-gray-100 hover:bg-gray-200"
          >
            ✕
          </button>

          <div className="h-full flex flex-col justify-center items-start">
            <div>
              <h3 className="text-2xl font-bold" style={{ color: 'var(--text)' }}>{item.name}</h3>
              <div className="text-sm mt-2" style={{ color: 'var(--muted)' }}>{item.price}</div>
            </div>

            <div className="mt-6">
              <a
                href={`https://m.me/YourPageUsername?ref=order_inquiry&item=${encodeURIComponent(item.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block btn-primary px-4 py-2 rounded-full"
              >
                Send Inquiry
              </a>
            </div>

            {item.description ? (
              <div className="mt-6 text-sm text-gray-700" style={{ color: 'var(--muted)' }}>{item.description}</div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
