import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oravae Island Bungalows — Escape to Your Own Pacific Island",
  description:
    "Experience true seclusion at Oravae Island Bungalows in the Solomon Islands. Pristine lagoons, WWII dive sites, and traditional island hospitality await.",
  keywords: "Solomon Islands, island bungalows, Pacific escape, diving, snorkelling, Gizo",
  openGraph: {
    title: "Oravae Island Bungalows",
    description: "Escape to your own Pacific Island",
    images: [
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
        width: 1200,
        height: 630,
      },
    ],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Raleway:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
