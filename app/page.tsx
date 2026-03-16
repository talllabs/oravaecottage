"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import BookingWidget from "@/components/BookingWidget";

const bungalows = [
  {
    name: "The Cottage",
    slug: "the-cottage",
    tagline: "Overwater paradise for up to 6",
    image: "/images/cottage.png",
    href: "/bungalows#cottage",
  },
  {
    name: "The Penthouse",
    slug: "the-penthouse",
    tagline: "Elevated luxury with panoramic views",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    href: "/bungalows#penthouse",
  },
  {
    name: "The Treehouse",
    slug: "the-treehouse",
    tagline: "Canopy retreat among the palms",
    image: "/images/treehouse.png",
    href: "/bungalows#treehouse",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar transparent />

      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="Aerial view of Oravae Island"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-navy/50" />


        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* Booking bar */}
      <div className="bg-white shadow-md py-2 px-4 overflow-x-auto">
        <div className="max-w-4xl mx-auto">
          <BookingWidget compact />
        </div>
      </div>

      {/* Intro text */}
      <section className="bg-skyblue py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-playfair text-ocean text-xl sm:text-2xl leading-relaxed mb-8 italic">
            Ever dreamt of escaping to your own private island? Leave the rat
            race well and truly behind at Oravae Cottage – your own Robinson
            Crusoe style bungalow in the heart of the Pacific. Perched on an
            islet 20 minutes from the mainland, there&apos;s nothing to distract you
            here but the gentle sound of waves.
          </p>
          <p className="font-raleway text-gray-600 text-base leading-relaxed mb-4">
            Spend your days relaxing on the wooden verandah, swimming pristine
            lagoons, diving or snorkelling WWII Japanese war relics, feasting on
            traditional island banquets or sinking an ice-cold beer and watching
            the sun go down as the rest of the world becomes nonexistent.
          </p>
          <p className="font-raleway text-gray-600 text-base leading-relaxed">
            Whether you&apos;re after a romantic getaway for two or somewhere for a
            party of 10, Oravae is the perfect escape.
          </p>
        </div>
      </section>

      {/* Video placeholder */}
      <section className="relative h-[420px] sm:h-[520px] overflow-hidden group cursor-pointer">
        <Image
          src="/images/videoplaceholder.png"
          alt="Oravae Island video"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/50 group-hover:bg-navy/40 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border-4 border-white/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg
              className="w-8 h-8 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Bungalows preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-raleway text-ocean text-3xl font-bold tracking-widest uppercase text-center mb-4">
            Bungalows
          </h2>
          <p className="font-playfair text-ocean text-xl text-center mb-4 italic">
            Choose your island retreat
          </p>
          <p className="font-raleway text-gray-500 text-sm text-center max-w-xl mx-auto mb-14">
            Each bungalow offers a unique experience — all share the same
            pristine lagoon, warm hospitality, and the kind of seclusion you
            won&apos;t find anywhere else.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {bungalows.map((b) => (
              <Link key={b.slug} href={b.href} className="card-hover block group">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={b.image}
                    alt={b.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="bg-skyblue p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-raleway text-ocean font-bold text-sm tracking-widest uppercase mb-1">
                      {b.name}
                    </h3>
                    <p className="font-raleway text-gray-500 text-xs uppercase tracking-wider">
                      {b.tagline}
                    </p>
                  </div>
                  <span className="text-ocean text-xl group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel />
      <Footer />
    </>
  );
}
