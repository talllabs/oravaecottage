"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryLightboxProps {
  images: GalleryImage[];
  initialIndex: number;
  onClose: () => void;
}

export default function GalleryLightbox({
  images,
  initialIndex,
  onClose,
}: GalleryLightboxProps) {
  const [current, setCurrent] = useState(initialIndex);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-6 text-white text-4xl hover:text-ocean transition-colors z-10"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        &times;
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 font-raleway text-sm">
        {current + 1} / {images.length}
      </div>

      {/* Prev arrow */}
      <button
        className="absolute left-4 sm:left-8 text-white hover:text-ocean transition-colors z-10 p-2"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Previous image"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative w-full max-w-5xl max-h-[80vh] mx-16 sm:mx-24"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[current].src}
          alt={images[current].alt}
          width={1200}
          height={800}
          className="object-contain max-h-[80vh] w-full"
          unoptimized
        />
        <p className="text-white/60 font-raleway text-sm text-center mt-3">
          {images[current].alt}
        </p>
      </div>

      {/* Next arrow */}
      <button
        className="absolute right-4 sm:right-8 text-white hover:text-ocean transition-colors z-10 p-2"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Next image"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
