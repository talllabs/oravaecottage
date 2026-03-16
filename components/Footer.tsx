"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "ABOUT US" },
  { href: "/bungalows", label: "BUNGALOWS" },
  { href: "/activities", label: "ACTIVITIES" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/location", label: "LOCATION" },
  { href: "/enquiries", label: "ENQUIRIES" },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Row 1: CTA */}
      <div className="bg-ocean py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-raleway text-white text-lg sm:text-xl font-semibold tracking-widest uppercase text-center sm:text-left">
            Escape to Your Own Pacific Island
          </p>
          <Link
            href="/enquiries"
            className="border-2 border-white text-white font-raleway font-bold text-sm tracking-widest uppercase px-8 py-3 hover:bg-white hover:text-ocean transition-colors duration-200 whitespace-nowrap"
          >
            Enquire Now
          </Link>
        </div>
      </div>

      {/* Row 2: Nav + copyright */}
      <div className="bg-navy py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-raleway text-white/60 hover:text-white text-xs tracking-widest transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="font-raleway text-white/40 text-xs tracking-wide">
            © Oravae 2018
          </p>
        </div>
      </div>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-ocean text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors duration-200"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
