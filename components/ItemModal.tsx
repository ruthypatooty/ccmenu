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
  const [closing, setClosing] = useState(false);

  const optionsRef = useRef<HTMLDivElement | null>(null);

  const isMobile =
    typeof navigator !== "undefined" &&
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const fbAccount = process.env.NEXT_PUBLIC_BUSINESS_FB_ACCOUNT;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(e.target as Node)
      ) {
        setOptionsOpen(false);
      }
    }

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOptionsOpen(false);
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
     if (isOpen) setClosing(false);
   }, [isOpen]);

  function handleClose() {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClose();
    }, 150);
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
      aria-modal="true"
    >
      {/* Dark overlay */}
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
        className={`relative z-50 flex h-[85vh] w-[92vw] sm:h-[68vh] sm:w-[70vw] max-w-xl overflow-hidden rounded-lg shadow-lg ${
           closing
             ? "animate-[modalOut_0.15s_ease-out]"
             : "animate-[modalIn_0.18s_ease-out]"
         }`}
        style={{
          backgroundImage: `url('/MODALBG1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* PRODUCT IMAGE */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">

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
            <div className="text-white p-4">
              No image
            </div>
          )}

          {/* CLOSE BUTTON */}
          <button
            aria-label="Close"
            onClick={handleClose}
            className="absolute top-4 left-4 z-30 rounded-full p-3 bg-[#ebe3d1] hover:bg-[#dfd6c4] text-black"
          >
            ✕
          </button>

          {/* BOTTOM PRODUCT INFORMATION */}
          <div
            className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-5 md:p-7"
            style={{
              backgroundImage: `url('/MODALBG1.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center bottom",
              backgroundColor: "rgba(9,84,90,0.88)",
              color: "white",
            }}
          >
            {/* Slight teal overlay to make text readable */}
            <div
              className="absolute inset-0"
              style={{
                background: "rgba(9,84,90,0.82)",
              }}
            />

            {/* Content */}
            <div className="relative z-10">

              {/* PRODUCT NAME + INQUIRY */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-5">

                {/* Name + Price */}
                <div>
                  <h3
                    className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight"
                    style={{
                      fontFamily: "var(--font-serif)",
                      color: "white",
                    }}
                  >
                    {item.name}
                  </h3>

                  <div
                    className="mt-1 text-[1.25rem] sm:text-[1.5rem] md:text-[1.8rem]"
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
                {isMobile ? (
                  <div
                    className="relative inline-block shrink-0 self-start sm:self-auto"
                    ref={optionsRef}
                  >
                    <button
                      onClick={() =>
                        setOptionsOpen((s) => !s)
                      }
                      aria-haspopup="true"
                      aria-expanded={optionsOpen}
                      className="inline-block rounded-full px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base font-medium shadow-sm bg-white whitespace-nowrap"
                      style={{
                        fontFamily: "var(--font-rounded)",
                        color: "var(--primary)",
                        fontWeight: 600,
                      }}
                    >
                      Send Inquiry
                    </button>

                    {optionsOpen && (
                      <div className="absolute bottom-full right-0 mb-2 z-40 w-48 rounded-md bg-white shadow-lg ring-1 ring-black/5">
                        <div className="flex flex-col p-2">

                          {/* Messenger */}
                          <button
                            onClick={() => {
                              const inquiryText =
                                `Hi! I want to inquire about ${item.name}`;

                              const messengerUrl =
                                `https://m.me/${fbAccount}?ref=order_inquiry&text=${encodeURIComponent(
                                  inquiryText
                                )}`;

                              window.open(
                                messengerUrl,
                                "_blank",
                                "noopener"
                              );

                              setOptionsOpen(false);
                              onClose();
                            }}
                            className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded"
                            style={{
                              color: "var(--primary)",
                            }}
                          >
                            Messenger
                          </button>

                          {/* Text Message */}
                          <button
                            onClick={() => {
                              const inquiryText =
                                `Hi! I want to inquire about ${item.name}`;

                              const phone =
                                process.env
                                  .NEXT_PUBLIC_BUSINESS_PHONE || "";

                              const smsUrl =
                                `sms:${phone}?body=${encodeURIComponent(
                                  inquiryText
                                )}`;

                              window.location.href = smsUrl;

                              setOptionsOpen(false);
                              onClose();
                            }}
                            className="w-full text-left mt-1 px-3 py-2 hover:bg-gray-50 rounded"
                            style={{
                              color: "var(--primary)",
                            }}
                          >
                            Text message
                          </button>

                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={`https://m.me/${fbAccount}?ref=order_inquiry&text=${encodeURIComponent(
                      `Hi! I want to inquire about ${item.name}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block shrink-0 rounded-full px-5 py-3 font-medium shadow-sm bg-white"
                    style={{
                      fontFamily: "var(--font-rounded)",
                      color: "var(--primary)",
                      fontWeight: 600,
                    }}
                  >
                    Send Inquiry
                  </a>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}