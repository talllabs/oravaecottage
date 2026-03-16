"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "ABOUT US" },
  { href: "/bungalows", label: "BUNGALOWS" },
  { href: "/activities", label: "ACTIVITIES" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/location", label: "LOCATION" },
  { href: "/enquiries", label: "ENQUIRIES" },
];

interface NavbarProps {
  transparent?: boolean;
}

export default function Navbar({ transparent = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg =
    transparent && isHome && !scrolled
      ? "bg-transparent"
      : "bg-navy shadow-lg";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo — left on inner pages, hidden on home (centred logo in hero) */}
          {!isHome && (
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo-removebg-preview.png"
                alt="Oravae Island Bungalows"
                width={120}
                height={55}
                className="h-12 w-auto"
              />
            </Link>
          )}

          {/* Desktop nav */}
          <div
            className={`hidden lg:flex items-center gap-8 font-raleway text-xs font-semibold tracking-widest ${
              isHome ? "mx-auto" : "ml-auto"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link transition-colors duration-200 ${
                    isActive ? "text-ocean active" : "text-white hover:text-ocean"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden ml-auto text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-white mb-1.5 transition-all" />
            <div className="w-6 h-0.5 bg-white mb-1.5 transition-all" />
            <div className="w-6 h-0.5 bg-white transition-all" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-6 py-3 font-raleway text-xs font-semibold tracking-widest border-b border-white/5 ${
                  isActive ? "text-ocean" : "text-white hover:text-ocean"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
