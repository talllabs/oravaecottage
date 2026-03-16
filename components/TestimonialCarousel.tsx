"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "If you define 'paradise' as cocktails, sunlounges and waiters in Hawaiian shirts, then Oravae isn't you. But for those who consider their paradise to be true seclusion, a warm family welcome and piles of tasty food made from ingredients grown (or caught) on site, then Oravae is indeed your paradise. The setting is spectacular, the water cannot get closer, and from the moment you step foot onto the verandah, it feels like the sort of place you wish you could spend the rest of your days.",
    author: "Thomas Perry, Honiria",
    date: "Oct 2010",
  },
  {
    quote:
      "Oravae is unlike anything I've ever experienced. The silence, the stars, the food — all extraordinary. We swam with turtles, explored WWII wrecks, and slept to the sound of the ocean. A truly magical place that stays with you forever.",
    author: "Sarah Mitchell, Sydney",
    date: "March 2019",
  },
  {
    quote:
      "We celebrated our honeymoon at Oravae and it exceeded every expectation. The hosts treated us like family. The lagoon is stunningly beautiful and the privacy is absolute. We're already planning our return trip.",
    author: "James & Emma Collins, London",
    date: "July 2022",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative py-24 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Decorative quotes */}
        <div className="text-ocean text-8xl font-playfair leading-none mb-4 opacity-60">
          &ldquo;&ldquo;
        </div>

        {/* Title */}
        <h2 className="font-raleway text-white text-2xl font-bold tracking-widest uppercase mb-12">
          What Our Guests Think
        </h2>

        {/* Slide */}
        <div className="relative min-h-[200px] flex items-center justify-center">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${
                i === current ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <p className="text-white/90 font-raleway text-base sm:text-lg leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-ocean font-raleway text-sm font-semibold tracking-widest uppercase">
                — {t.author}, {t.date}
              </p>
            </div>
          ))}
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-3 mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                i === current ? "bg-ocean" : "bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
