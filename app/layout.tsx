import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://chelles.net'),
  title: {
    default: "Chelle's Menu",
    template: "%s | Chelle's",
  },
  description: 'Homemade Goodness for Everyone',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Chelle's",
              url: "https://chelles.net",
              servesCuisine: ["Desserts", "Pasta", "Pastries"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Quezon City",
                addressRegion: "Metro Manila",
                addressCountry: "PH",
              },
               "areaServed": [
                {
                  "@type": "Place",
                  "name": "Commonwealth, Quezon City"
                },
                {
                  "@type": "City",
                  "name": "Quezon City"
                },
                {
                  "@type": "City",
                  "name": "Manila"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Metro Manila"
                }
              ]
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
