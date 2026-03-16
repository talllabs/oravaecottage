import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export const metadata = {
  title: "Activities — Oravae Island Bungalows",
  description:
    "Surf, dive, snorkel, fish, and explore the Solomon Islands from Oravae Island Bungalows.",
};

const activities = [
  {
    title: "Surfing",
    description:
      "World-class reef breaks within a short boat ride. The Western Province of the Solomon Islands offers uncrowded waves for all levels.",
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80",
  },
  {
    title: "Diving",
    description:
      "Explore WWII Japanese war relics, vibrant coral gardens, and spectacular wall dives. The Solomon Islands is one of the world's top dive destinations.",
    image:
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&q=80",
  },
  {
    title: "Snorkelling",
    description:
      "Step off the verandah directly into pristine lagoon waters teeming with tropical fish and coral. No boat required.",
    image:
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80",
  },
  {
    title: "Fishing",
    description:
      "Cast a line from the verandah or head out with a local guide to the deeper waters for big game fishing. Fresh catch for dinner is almost guaranteed.",
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800&q=80",
  },
  {
    title: "Village Visits",
    description:
      "Visit traditional villages in the surrounding islands, meet local families, and experience the authentic warmth of Solomon Island culture.",
    image:
      "https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=800&q=80",
  },
  {
    title: "Kayaking & SUP",
    description:
      "Paddle across the glassy lagoon at sunrise or explore the mangroves by kayak. Stand-up paddleboards are available for all skill levels.",
    image:
      "https://images.unsplash.com/photo-1501117716987-c8c394bb29df?w=800&q=80",
  },
  {
    title: "Full Day Tours",
    description:
      "Let your local guide take you on a full-day adventure — WWII battle sites, hidden waterfalls, market visits in Gizo, and more.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
  },
  {
    title: "Island Relaxation",
    description:
      "Sometimes the most rewarding activity is doing absolutely nothing — read in a hammock, nap on the deck, and watch the world drift by.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
  },
];

export default function ActivitiesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-72 sm:h-96 mt-16 lg:mt-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1920&q=80"
          alt="Surfing in the Solomon Islands"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-raleway text-white text-4xl sm:text-5xl font-bold tracking-[0.3em] uppercase drop-shadow-lg mb-4">
            Activities
          </h1>
          <p className="font-raleway text-white/90 text-sm tracking-widest uppercase">
            Surfing · Diving · Snorkelling · Fishing · Full Day Tours · Half Day Tours · Village Visits
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 px-4 bg-skyblue text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-ocean text-2xl italic mb-4">
            Adventure at every turn
          </h2>
          <p className="font-raleway text-gray-600 text-sm leading-relaxed">
            The waters around Oravae are a playground unlike any other. From
            world-class surf breaks to WWII dive sites, from traditional village
            experiences to simply floating in a turquoise lagoon — there is
            always something extraordinary waiting just beyond the verandah.
          </p>
        </div>
      </section>

      {/* Photo grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {activities.map((a) => (
            <div key={a.title} className="card-hover group relative overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/50 transition-colors duration-300" />
              </div>
              <div className="bg-skyblue p-4">
                <h3 className="font-raleway text-ocean font-bold text-sm tracking-widest uppercase mb-2">
                  {a.title}
                </h3>
                <p className="font-raleway text-gray-500 text-xs leading-relaxed">
                  {a.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-skyblue text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-raleway text-ocean text-2xl font-bold tracking-widest uppercase mb-4">
            Plan Your Adventure
          </h2>
          <p className="font-raleway text-gray-600 text-sm leading-relaxed mb-8">
            Activities can be arranged for individual days or as part of a
            multi-day package. Contact us to build your perfect itinerary.
          </p>
          <a
            href="/enquiries"
            className="inline-block bg-ocean text-white font-raleway font-bold text-sm tracking-widest uppercase px-10 py-4 hover:bg-blue-600 transition-colors duration-200"
          >
            Make an Enquiry
          </a>
        </div>
      </section>

      <TestimonialCarousel />
      <Footer />
    </>
  );
}
