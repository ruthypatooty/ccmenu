"use client"
import React, { useState, useRef, useEffect } from 'react';
import { MenuItem as MenuItemType } from '@/data/menuData';

type ItemModalProps = {
  item: MenuItemType;
  isOpen: boolean;
  onClose: () => void;
};

type ProductStory = {
  description: string;
  ingredients: string[];
  pairing: string;
};

function pickFrom(list: string[], seed: number) {
  return list[Math.abs(seed) % list.length];
}

function hashName(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i += 1) {
    h = (h << 5) - h + name.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function buildProductStory(name: string): ProductStory {
  const lower = name.toLowerCase();
  const seed = hashName(name);

  const style = pickFrom(
    [
      'a bakery favorite built with soft, balanced sweetness',
      'a handcrafted treat with a rich but clean finish',
      'a cozy dessert with smooth texture and gentle flavor layers',
      'a signature bake made to feel indulgent without being heavy',
    ],
    seed
  );

  const finish = pickFrom(
    [
      'Perfect for celebrations or a slow afternoon break.',
      'Made to be shared, but easy to keep all to yourself.',
      'Each bite lands soft, creamy, and satisfying.',
      'It is the kind of dessert that keeps you coming back for one more forkful.',
    ],
    seed + 3
  );

  if (lower.includes('black forest')) {
    return {
      description: `Our ${name} is ${style}. We layer deep cocoa sponge with cherry notes and smooth cream for a classic finish. ${finish}`,
      ingredients: ['Dark cocoa sponge', 'Cherry compote'],
      pairing: 'Pairs beautifully with house coffee or a glass of red wine.',
    };
  }

  if (lower.includes('tiramisu')) {
    return {
      description: `Our ${name} is ${style}. Espresso-soaked layers and mascarpone cream create a light, velvety bite with mellow sweetness. ${finish}`,
      ingredients: ['Espresso-soaked sponge', 'Mascarpone cream'],
      pairing: 'Perfect with cappuccino, cold brew, or a nutty latte.',
    };
  }

  if (lower.includes('cheesecake')) {
    return {
      description: `Our ${name} is ${style}. A creamy cheesecake body sits on a buttery base with flavor accents that stay bright and smooth. ${finish}`,
      ingredients: ['Cream cheese filling', 'Buttery crumb base'],
      pairing: 'Best with hot tea, iced americano, or sparkling water with citrus.',
    };
  }

  if (lower.includes('cupcake')) {
    return {
      description: `Our ${name} is ${style}. Moist sponge, silky topping, and a clean finish make it a go-to for gatherings and gifting. ${finish}`,
      ingredients: ['Moist sponge base', 'Whipped frosting'],
      pairing: 'Great with vanilla latte, milk tea, or chilled milk.',
    };
  }

  if (lower.includes('brownie') || lower.includes('bars') || lower.includes('fudge')) {
    return {
      description: `Our ${name} is ${style}. Dense cocoa richness and chewy edges deliver a warm, comforting bite with just enough sweetness. ${finish}`,
      ingredients: ['Dark chocolate batter', 'Brown sugar blend'],
      pairing: 'Excellent with black coffee, oat milk, or a light mocha.',
    };
  }

  if (lower.includes('cookie') || lower.includes('muffin') || lower.includes('crinkles')) {
    return {
      description: `Our ${name} is ${style}. Baked until aromatic and tender, with texture that stays soft in the center and lightly crisp at the edge. ${finish}`,
      ingredients: ['Premium flour blend', 'Real butter and eggs'],
      pairing: 'Pairs nicely with drip coffee, chai, or hot chocolate.',
    };
  }

  if (lower.includes('ube')) {
    return {
      description: `Our ${name} is ${style}. Earthy ube notes and creamy layers create a fragrant, nostalgic dessert profile. ${finish}`,
      ingredients: ['Ube cream blend', 'Soft vanilla sponge'],
      pairing: 'Lovely with milk tea, coconut latte, or jasmine tea.',
    };
  }

  if (lower.includes('pistachio')) {
    return {
      description: `Our ${name} is ${style}. Toasted nut depth and smooth chocolate notes keep every bite balanced and aromatic. ${finish}`,
      ingredients: ['Roasted pistachio paste', 'Chocolate ganache'],
      pairing: 'Try it with espresso, matcha, or lightly sweetened tea.',
    };
  }

  return {
    description: `Our ${name} is ${style}. It is baked fresh with careful layering, balanced sweetness, and a soft finish that feels homemade. ${finish}`,
    ingredients: ['Fresh dairy and eggs', 'House-made flavor blend'],
    pairing: 'Enjoy with coffee, tea, or a simple sparkling drink.',
  };
}

export default function ItemModal({ item, isOpen, onClose }: ItemModalProps) {
  const [zoomed, setZoomed] = useState(false);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const optionsRef = useRef<HTMLDivElement | null>(null);
  const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const fbAccount = process.env.NEXT_PUBLIC_BUSINESS_FB_ACCOUNT;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (optionsRef.current && !optionsRef.current.contains(e.target as Node)) {
        setOptionsOpen(false);
      }
    }

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOptionsOpen(false);
    }

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);
  const story = buildProductStory(item.name);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4" aria-modal="true">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div
        className="relative z-50 flex h-[92vh] w-[95vw] max-w-5xl overflow-hidden rounded-lg shadow-lg flex-col md:flex-row md:h-3/4 md:w-3/4 lg:w-2/3"
        style={{
          backgroundImage: `url('/MODALBG1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Left: image area (mobile: top, desktop: left) */}
        <div className="relative flex h-[42%] w-full items-center justify-center overflow-auto bg-transparent md:h-full md:w-1/2">
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
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute top-4 left-4 z-20 rounded-full p-2 bg-[#ebe3d1] hover:bg-[#dfd6c4]"
          >
            ✕
          </button>
        </div>

        {/* Right: details */}
        <div
          className="relative h-[58%] w-full overflow-auto p-4 pb-8 md:h-full md:w-1/2 md:p-6 md:pb-12"
          style={{ background: 'rgba(9,84,90,0.78)', color: 'white' }}
        >
 

          <div className="h-full flex flex-col items-start pb-8 md:pb-12">
            <div className="w-full pr-10">
              <h3 className="text-3xl font-light leading-tight" style={{ fontFamily: 'var(--font-serif)', color: 'white' }}>
                {item.name}
              </h3>

              <div className="mt-2 flex items-center justify-between gap-4">
                <div className="text-[1.8rem]" style={{ fontFamily: 'var(--font-rounded)', color: 'white', fontWeight: 400 }}>
                  {item.price}
                </div>

                {isMobile ? (
                  <div className="relative inline-block" ref={optionsRef}>
                    <button
                      onClick={() => setOptionsOpen((s) => !s)}
                      aria-haspopup="true"
                      aria-expanded={optionsOpen}
                      className="inline-block rounded-full px-4 py-2 font-medium shadow-sm bg-white"
                      style={{ fontFamily: 'var(--font-rounded)', color: 'var(--primary)', fontWeight: 600 }}
                    >
                      Send Inquiry
                    </button>

                    {optionsOpen && (
                      <div className="absolute right-0 z-40 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black/5">
                        <div className="flex flex-col p-2">
                          <button
                            onClick={() => {
                              const inquiryText = `Hi! I want to inquire about ${item.name}`;
                              const messengerUrl = `https://m.me/${fbAccount}?ref=order_inquiry&text=${encodeURIComponent(inquiryText)}`;
                              window.open(messengerUrl, '_blank', 'noopener');
                              setOptionsOpen(false);
                              onClose();
                            }}
                            className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded"
                            style={{ color: 'var(--primary)' }}
                          >
                            Messenger
                          </button>

                          <button
                            onClick={() => {
                              const inquiryText = `Hi! I want to inquire about ${item.name}`;
                              const phone = process.env.NEXT_PUBLIC_BUSINESS_PHONE || '';
                              const smsUrl = `sms:${phone}?body=${encodeURIComponent(inquiryText)}`;
                              window.location.href = smsUrl;
                              setOptionsOpen(false);
                              onClose();
                            }}
                            className="w-full text-left mt-1 px-3 py-2 hover:bg-gray-50 rounded"
                            style={{ color: 'var(--primary)' }}
                          >
                            Text message
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={`https://m.me/${fbAccount}?ref=order_inquiry&text=${encodeURIComponent(`Hi! I want to inquire about ${item.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full px-4 py-2 font-medium shadow-sm bg-white"
                    style={{ fontFamily: 'var(--font-rounded)', color: 'var(--primary)', fontWeight: 600 }}
                  >
                    Send Inquiry
                  </a>
                )}
              </div>
            </div>

            <section className="mt-7">
              <h4
                className="text-[2rem]"
                style={{ fontFamily: 'var(--font-serif)', color: 'white', fontWeight: 400, fontStyle: 'italic' }}
              >
                Description
              </h4>
              <p className="mt-2 text-[1.05rem] leading-8" style={{ fontFamily: 'var(--font-rounded)', color: 'white', fontWeight: 400 }}>
                {story.description}
              </p>
            </section>

            <section className="mt-7 w-full">
              <h4
                className="text-[2rem]"
                style={{ fontFamily: 'var(--font-serif)', color: 'white', fontWeight: 400, fontStyle: 'italic' }}
              >
                Main Ingredients
              </h4>

              <div className="mt-3 grid grid-cols-2 gap-3">
                {story.ingredients.map((ingredient) => (
                  <div
                    key={ingredient}
                    className="rounded-lg px-3 py-2 text-center"
                    style={{ background: 'rgba(255,255,255,0.08)', color: 'white', fontFamily: 'var(--font-rounded)', fontWeight: 500 }}
                  >
                    {ingredient}
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-7 pr-2">
              <h4
                className="text-[2rem]"
                style={{ fontFamily: 'var(--font-serif)', color: 'white', fontWeight: 400, fontStyle: 'italic' }}
              >
                Perfect Pairing
              </h4>
              <p className="mt-2 text-[1.02rem] leading-7" style={{ fontFamily: 'var(--font-rounded)', color: 'white', fontWeight: 400 }}>
                {story.pairing}
              </p>
            </section>

            <div className="h-16 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
