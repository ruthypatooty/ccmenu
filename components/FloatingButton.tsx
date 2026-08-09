// components/FloatingContactButton.tsx
"use client";

import { useState, useRef, useEffect } from "react";

export default function FloatingContactButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const fbAccount = process.env.NEXT_PUBLIC_BUSINESS_FB_ACCOUNT;
  const phone = process.env.NEXT_PUBLIC_BUSINESS_PHONE || ""; // must include leading +, e.g. +639171234567
  const whatsappPhone = process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP || phone;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  function openMessenger() {
    const url = `https://m.me/${fbAccount}?ref=contact_button`;
    window.open(url, "_blank", "noopener");
    setOpen(false);
  }

  function openViber() {
    const url = `viber://chat?number=${encodeURIComponent(phone)}`;
    window.location.href = url;
    setOpen(false);
   }
 
   function openWhatsapp() {
    const url = `https://wa.me/${whatsappPhone.replace(
       /[^0-9]/g,
       ""
    )}`;
     window.open(url, "_blank", "noopener");
     setOpen(false);
   }

  return (
    <div ref={ref} className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {open && (
        <div
          className="w-52 rounded-xl shadow-lg overflow-hidden animate-[modalIn_0.15s_ease-out]"
          style={{ background: "var(--aqua-1)" }}
        >
          <div className="flex flex-col">
            <button
              onClick={openMessenger}
              className="w-full text-left px-4 py-3 rounded-t-xl hover:brightness-95 transition"
              style={{ fontFamily: "var(--font-rounded)", color: "var(--primary)" }}
            >
              Messenger
            </button>
            <button
              onClick={openViber}
              className="w-full text-left px-4 py-3 border-t hover:brightness-95 transition"
              style={{
                fontFamily: "var(--font-rounded)",
                color: "var(--primary)",
                borderColor: "rgba(31,77,89,0.1)",
              }}
            >
              Viber
            </button>
            <button
               onClick={openWhatsapp}
               className="w-full text-left px-4 py-3 border-t hover:brightness-95 transition"
               style={{
                 fontFamily: "var(--font-rounded)",
                 color: "var(--primary)",
                 borderColor: "rgba(31,77,89,0.1)",
               }}
             >
               WhatsApp
             </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((s) => !s)}
        aria-label="Contact us"
        aria-expanded={open}
        className="rounded-full p-4 shadow-lg transition-transform duration-150 active:scale-95"
        style={{ background: "var(--primary)" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {open ? (
            <path d="M18 6 6 18M6 6l12 12" />
          ) : (
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          )}
        </svg>
      </button>
    </div>
  );
}