"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryLightbox from "@/components/GalleryLightbox";

type Category = "location" | "accommodation" | "activities";

const categories: { id: Category; label: string; cover: string }[] = [
  {
    id: "location",
    label: "Location",
    cover:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  },
  {
    id: "accommodation",
    label: "Accommodation",
    cover:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80",
  },
  {
    id: "activities",
    label: "Activities",
    cover:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80",
  },
];

const galleryImages: Record<
  Category,
  { src: string; alt: string }[]
> = {
  location: [
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85",
      alt: "Aerial view of Oravae Island",
    },
    {
      src: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200&q=85",
      alt: "Crystal clear lagoon waters",
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
      alt: "Sunset over the Pacific",
    },
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=85",
      alt: "Tropical coastline at dusk",
    },
    {
      src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=85",
      alt: "Overwater bungalow setting",
    },
    {
      src: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1200&q=85",
      alt: "Palm-fringed island beach",
    },
  ],
  accommodation: [
    {
      src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=85",
      alt: "The Cottage over the lagoon",
    },
    {
      src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=85",
      alt: "The Penthouse elevated view",
    },
    {
      src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&q=85",
      alt: "The Treehouse among palms",
    },
    {
      src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=85",
      alt: "Bungalow verandah",
    },
    {
      src: "https://images.unsplash.com/photo-1501117716987-c8c394bb29df?w=1200&q=85",
      alt: "Island interior details",
    },
    {
      src: "https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=1200&q=85",
      alt: "Traditional craftsmanship",
    },
  ],
  activities: [
    {
      src: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200&q=85",
      alt: "Surfing the reef break",
    },
    {
      src: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=1200&q=85",
      alt: "Diving WWII relics",
    },
    {
      src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=85",
      alt: "Full-day island tour",
    },
    {
      src: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=1200&q=85",
      alt: "Kayaking on the lagoon",
    },
    {
      src: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1200&q=85",
      alt: "Fishing at sunset",
    },
    {
      src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=85",
      alt: "Snorkelling the coral",
    },
  ],
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = activeCategory ? galleryImages[activeCategory] : [];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-72 sm:h-80 mt-16 lg:mt-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80"
          alt="Gallery hero"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-raleway text-white text-4xl sm:text-5xl font-bold tracking-[0.3em] uppercase drop-shadow-lg">
            Gallery
          </h1>
        </div>
      </section>

      {/* Category cards or grid */}
      {!activeCategory ? (
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <p className="font-raleway text-gray-500 text-sm text-center mb-12 tracking-wide">
              Select a category to explore the gallery
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="card-hover group text-left overflow-hidden rounded-sm"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={cat.cover}
                      alt={cat.label}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/30 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h2 className="font-raleway text-white text-xl font-bold tracking-[0.3em] uppercase drop-shadow-lg">
                        {cat.label}
                      </h2>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => setActiveCategory(null)}
                className="font-raleway text-ocean text-sm font-semibold hover:underline flex items-center gap-1"
              >
                ← Back to categories
              </button>
              <span className="text-gray-300">|</span>
              <h2 className="font-raleway text-ocean font-bold text-sm tracking-widest uppercase">
                {categories.find((c) => c.id === activeCategory)?.label}
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className="card-hover relative h-52 sm:h-64 overflow-hidden rounded-sm group"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {lightboxIndex !== null && activeCategory && (
        <GalleryLightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      <Footer />
    </>
  );
}
