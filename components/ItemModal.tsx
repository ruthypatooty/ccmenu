"use client";

import { useState, useRef, useEffect } from "react";
import { MenuItem as MenuItemType } from "@/data/menuData";

type ItemModalProps = {
  item: MenuItemType;
  isOpen: boolean;
  onClose: () => void;
};

export default function ItemModal({
  item,
  isOpen,
  onClose,
}: ItemModalProps) {
  const [zoomed, setZoomed] = useState(false);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const optionsRef = useRef<HTMLDivElement | null>(null);
  const inquiryRef = useRef<HTMLDivElement | null>(null);

  const fbAccount =
    process.env.NEXT_PUBLIC_BUSINESS_FB_ACCOUNT || "";

  const phone =
    process.env.NEXT_PUBLIC_BUSINESS_PHONE || "";

  const whatsappPhone =
    process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP || phone;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as Node;

      if (
        optionsRef.current &&
        !optionsRef.current.contains(target)
      ) {
        setOptionsOpen(false);
      }

      if (
        inquiryRef.current &&
        !inquiryRef.current.contains(target)
      ) {
        setInquiryOpen(false);
      }
    }

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOptionsOpen(false);
        setInquiryOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setClosing(false);
      setInquiryOpen(false);
    }
  }, [isOpen]);

  function handleClose() {
    setInquiryOpen(false);
    setClosing(true);

    setTimeout(() => {
      setClosing(false);
      onClose();
    }, 150);
  }

  function openMessenger() {
    if (!fbAccount) {
      alert("Messenger account is not configured.");
      return;
    }

    const url =
      `https://m.me/${fbAccount}?ref=order_inquiry&text=` +
      encodeURIComponent(
        `Hi! I want to inquire about ${item.name}`
      );

    window.open(url, "_blank", "noopener,noreferrer");
    setInquiryOpen(false);
  }

  function openViber() {
    if (!phone) {
      alert("Viber phone number is not configured.");
      return;
    }

    const url =
      `viber://chat?number=${encodeURIComponent(phone)}`;

    window.location.href = url;
    setInquiryOpen(false);
  }

  function openWhatsapp() {
    if (!whatsappPhone) {
      alert("WhatsApp phone number is not configured.");
      return;
    }

    const cleanPhone = whatsappPhone.replace(/[^0-9]/g, "");

    const url =
      `https://wa.me/${cleanPhone}?text=` +
      encodeURIComponent(
        `Hi! I want to inquire about ${item.name}`
      );

    window.open(url, "_blank", "noopener,noreferrer");
    setInquiryOpen(false);
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
      aria-modal="true"
      role="dialog"
    >
      {/* DARK OVERLAY */}
      <div
        className={`absolute inset-0 bg-black/50 ${
          closing
            ? "animate-[fadeOut_0.15s_ease-out]"
            : "animate-[fadeIn_0.15s_ease-out]"
        }`}
        onClick={handleClose}
      />

      {/* MODAL */}
      <div
        className={`relative z-50 flex h-[85vh] w-[94vw] max-w-xl overflow-hidden rounded-lg shadow-lg sm:h-[68vh] sm:w-[70vw] ${
          closing
            ? "animate-[modalOut_0.15s_ease-out]"
            : "animate-[modalIn_0.18s_ease-out]"
        }`}
        style={{
          backgroundImage: "url('/MODALBG1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* PRODUCT IMAGE */}
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
          {item.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.image}
              alt={item.name}
              onClick={() => setZoomed((s) => !s)}
              decoding="async"
              loading="eager"
              className={`transition-all duration-300 ${
                zoomed
                  ? "cursor-zoom-out"
                  : "cursor-zoom-in"
              }`}
              style={
                zoomed
                  ? {
                      width: "auto",
                      height: "auto",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }
                  : {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }
              }
            />
          ) : (
            <div className="p-4 text-white">
              No image
            </div>
          )}

          {/* CLOSE BUTTON */}
          <button
            aria-label="Close"
            onClick={handleClose}
            className="absolute left-4 top-4 z-30 rounded-full bg-[#ebe3d1] p-3 text-black hover:bg-[#dfd6c4]"
          >
            ✕
          </button>

          {/* BOTTOM PRODUCT INFORMATION */}
          <div
            className="absolute bottom-0 left-0 right-0 z-20 p-3 sm:p-5 md:p-7"
            style={{
              backgroundImage: "url('/MODALBG1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center bottom",
              backgroundColor: "rgba(9,84,90,0.88)",
              color: "white",
            }}
          >
            {/* TEAL OVERLAY */}
            <div
              className="absolute inset-0"
              style={{
                background: "rgba(9,84,90,0.82)",
              }}
            />

            {/* CONTENT */}
            <div className="relative z-10">
              {/* PRODUCT NAME + PRICE + INQUIRY */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-5">

                {/* NAME + PRICE */}
                <div>
                  <h3
                    className="text-xl font-light leading-tight sm:text-3xl md:text-4xl"
                    style={{
                      fontFamily: "var(--font-serif)",
                      color: "white",
                    }}
                  >
                    {item.name}
                  </h3>

                  <div
                    className="mt-1 text-lg sm:text-[1.5rem] md:text-[1.8rem]"
                    style={{
                      fontFamily: "var(--font-rounded)",
                      color: "white",
                      fontWeight: 400,
                    }}
                  >
                    {item.price}
                  </div>
                </div>

                {/* SEND INQUIRY */}
                <div
                  ref={inquiryRef}
                  className="relative shrink-0"
                >
                  <button
                    onClick={() =>
                      setInquiryOpen((prev) => !prev)
                    }
                    aria-expanded={inquiryOpen}
                    className="rounded-full bg-white px-5 py-3 text-base font-medium shadow-md transition-transform duration-150 hover:scale-105 active:scale-95"
                    style={{
                      fontFamily: "var(--font-rounded)",
                      color: "var(--primary)",
                    }}
                  >
                    Send Inquiry
                  </button>

                  {/* INQUIRY OPTIONS */}
                  {inquiryOpen && (
                    <div
                      className="absolute bottom-full left-0 mb-3 w-52 overflow-hidden rounded-xl shadow-lg animate-[modalIn_0.15s_ease-out]"
                      style={{
                        background: "white",
                        zIndex: 100,
                      }}
                    >
                      {/* MESSENGER */}
                      <button
                        onClick={openMessenger}
                        className="w-full px-4 py-3 text-left transition hover:bg-gray-100"
                        style={{
                          fontFamily: "var(--font-rounded)",
                          color: "var(--primary)",
                        }}
                      >
                        Messenger
                      </button>

                      {/* VIBER */}
                      <button
                        onClick={openViber}
                        className="w-full border-t px-4 py-3 text-left transition hover:bg-gray-100"
                        style={{
                          fontFamily: "var(--font-rounded)",
                          color: "var(--primary)",
                          borderColor:
                            "rgba(31,77,89,0.1)",
                        }}
                      >
                        Viber
                      </button>

                      {/* WHATSAPP */}
                      <button
                        onClick={openWhatsapp}
                        className="w-full border-t px-4 py-3 text-left transition hover:bg-gray-100"
                        style={{
                          fontFamily: "var(--font-rounded)",
                          color: "var(--primary)",
                          borderColor:
                            "rgba(31,77,89,0.1)",
                        }}
                      >
                        WhatsApp
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}