import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export const metadata = {
  title: "About Us — Oravae Island Bungalows",
  description:
    "Learn about Oravae Island Bungalows — a private island escape in the Solomon Islands built on genuine hospitality and natural beauty.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-72 sm:h-96 mt-16 lg:mt-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1920&q=80"
          alt="Tropical island sunset"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-raleway text-white text-4xl sm:text-5xl font-bold tracking-[0.3em] uppercase drop-shadow-lg">
            About Us
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-ocean text-2xl sm:text-3xl text-center mb-6 italic">
            A true retreat, built for those who seek the extraordinary
          </h2>
          <p className="font-raleway text-gray-600 text-base leading-relaxed text-center mb-12">
            Oravae Island Bungalows sits on a tiny private islet in the Western
            Province of the Solomon Islands, 20 minutes by boat from the town of
            Gizo. It is a place of complete simplicity — no television, no
            nightclubs, no room service — just the ocean, the sounds of the
            rainforest, and the genuine warmth of the local family who call this
            place home.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            <div className="relative h-72 overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                alt="Sunset over the lagoon"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
            <div className="relative h-72 overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80"
                alt="Traditional bungalow on the water"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="font-raleway text-ocean font-bold text-sm tracking-widest uppercase mb-4">
                Our Story
              </h3>
              <p className="font-raleway text-gray-600 text-sm leading-relaxed mb-4">
                Oravae was built by a local Solomon Island family who wanted to
                share the extraordinary beauty of their home with the world —
                on their own terms. The bungalows are constructed from local
                timber and traditional building techniques, designed to sit
                lightly on the land.
              </p>
              <p className="font-raleway text-gray-600 text-sm leading-relaxed">
                Every meal is prepared fresh from ingredients grown in the
                garden or caught in the surrounding waters. Every interaction
                reflects a warmth and generosity that is uniquely Solomon
                Islander.
              </p>
            </div>
            <div>
              <h3 className="font-raleway text-ocean font-bold text-sm tracking-widest uppercase mb-4">
                The Experience
              </h3>
              <p className="font-raleway text-gray-600 text-sm leading-relaxed mb-4">
                Days at Oravae move at their own pace. You might spend your
                morning snorkelling WWII wreck sites with a local guide, your
                afternoon napping in a hammock over the lagoon, and your
                evening watching the sun dissolve into the Pacific from the
                verandah with a cold drink in hand.
              </p>
              <p className="font-raleway text-gray-600 text-sm leading-relaxed">
                Whether you are a couple seeking seclusion or a group chasing
                adventure, Oravae has a way of revealing itself differently to
                each guest — and leaving a permanent impression on all of them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional photo */}
      <section className="relative h-80 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80"
          alt="Crystal clear waters of the Solomon Islands"
          fill
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 bg-navy/30" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <p className="font-playfair text-white text-2xl sm:text-3xl text-center max-w-2xl italic drop-shadow-lg">
            &ldquo;A place that stays with you long after you&apos;ve left the island.&rdquo;
          </p>
        </div>
      </section>

      <TestimonialCarousel />
      <Footer />
    </>
  );
}
