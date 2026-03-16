import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import BookingWidget from "@/components/BookingWidget";

export const metadata = {
  title: "Bungalows — Oravae Island Bungalows",
  description:
    "Choose from The Cottage, The Penthouse, or The Treehouse — three unique island retreats at Oravae in the Solomon Islands.",
};

const bungalows = [
  {
    id: "cottage",
    name: "The Cottage",
    subheading:
      "An authentic over-water escape built from local timber, perched directly above the turquoise lagoon.",
    description:
      "Oravae Cottage is an open-plan wooden bungalow built from local supplies. One bedroom with a double bed, plus four single beds in the living area. Kitchenette with refrigerator, indoor shower and toilet, outdoor shower. The over-water verandah with hammocks and deck chairs overlooks the lagoon directly — wake up to the sound of gentle waves beneath you.",
    sleeps: 6,
    price: "850",
    mainImage:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&q=80",
    thumbs: [
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=300&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80",
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=300&q=80",
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=300&q=80",
    ],
    features: ["Over-water verandah", "Hammocks & deck chairs", "Kitchenette", "Sleeps 6", "Indoor & outdoor shower"],
  },
  {
    id: "penthouse",
    name: "The Penthouse",
    subheading:
      "Elevated above the canopy, The Penthouse delivers sweeping 360° views of the lagoon and surrounding islands.",
    description:
      "The Penthouse sits at the highest point of the islet, offering breathtaking panoramic views that stretch from the lagoon to the open Pacific. Two private bedrooms, a spacious deck with sun loungers, and all modern comforts make this the perfect choice for those seeking luxury without sacrificing remoteness. Full kitchen, open living space, and an outdoor shower under the stars.",
    sleeps: 4,
    price: "1100",
    mainImage:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=80",
    thumbs: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&q=80",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=300&q=80",
      "https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=300&q=80",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=300&q=80",
    ],
    features: ["360° panoramic views", "Two private bedrooms", "Sun lounger deck", "Sleeps 4", "Full kitchen"],
  },
  {
    id: "treehouse",
    name: "The Treehouse",
    subheading:
      "Nestled in the palms, The Treehouse is an intimate hideaway for two — romance and seclusion guaranteed.",
    description:
      "Hidden among the canopy of palms and tropical foliage, The Treehouse is the most private and romantic of all three bungalows. A cosy queen bedroom opens onto a canopy-level deck where you can watch birds glide across the lagoon at eye level. Fully self-contained with kitchenette, ensuite bathroom, and access to all island facilities including kayaks and snorkelling gear.",
    sleeps: 2,
    price: "750",
    mainImage:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900&q=80",
    thumbs: [
      "https://images.unsplash.com/photo-1501117716987-c8c394bb29df?w=300&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=300&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=300&q=80",
    ],
    features: ["Canopy-level deck", "Queen bedroom", "Most private bungalow", "Sleeps 2", "Kitchenette & ensuite"],
  },
];

export default function BungalowsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-72 sm:h-96 mt-16 lg:mt-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1920&q=80"
          alt="Tropical bungalow over water"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-raleway text-white text-4xl sm:text-5xl font-bold tracking-[0.3em] uppercase drop-shadow-lg">
            Bungalows
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-ocean text-2xl italic mb-4">
            Choose your island retreat
          </h2>
          <p className="font-raleway text-gray-500 text-sm leading-relaxed">
            Three distinct bungalows, one extraordinary island. Each is unique
            in character, all are extraordinary in setting. Pick the one that
            matches your style of escape.
          </p>
        </div>
      </section>

      {/* Bungalows */}
      {bungalows.map((b, i) => (
        <section
          key={b.id}
          id={b.id}
          className={`py-16 px-4 ${i % 2 === 0 ? "bg-white" : "bg-skyblue"}`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="font-raleway text-ocean text-3xl font-bold tracking-widest uppercase mb-2">
                {b.name}
              </h2>
              <p className="font-playfair text-ocean text-lg italic max-w-xl mx-auto">
                {b.subheading}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left: Photos */}
              <div>
                <div className="relative h-72 sm:h-96 overflow-hidden rounded-sm mb-3">
                  <Image
                    src={b.mainImage}
                    alt={b.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {b.thumbs.map((thumb, ti) => (
                    <div
                      key={ti}
                      className="relative h-20 overflow-hidden rounded-sm cursor-pointer hover:opacity-90 transition-opacity"
                    >
                      <Image
                        src={thumb}
                        alt={`${b.name} photo ${ti + 1}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
                {/* Features */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {b.features.map((f) => (
                    <span
                      key={f}
                      className="bg-ocean/10 text-ocean font-raleway text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Description + Booking */}
              <div className="flex flex-col gap-6">
                <p className="font-raleway text-gray-600 text-sm leading-relaxed">
                  {b.description}
                </p>
                <BookingWidget bungalow={b.name} pricePerNight={b.price} />
              </div>
            </div>
          </div>
        </section>
      ))}

      <TestimonialCarousel />
      <Footer />
    </>
  );
}
