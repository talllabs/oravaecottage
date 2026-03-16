import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocationMap from "@/components/LocationMap";

export const metadata = {
  title: "Location — Oravae Island Bungalows",
  description:
    "Oravae Island Bungalows is located in the Western Province of the Solomon Islands, 20 minutes by boat from Gizo.",
};

export default function LocationPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-72 sm:h-96 mt-16 lg:mt-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
          alt="Aerial view of the Solomon Islands"
          fill
          className="object-cover object-bottom"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-raleway text-white text-4xl sm:text-5xl font-bold tracking-[0.3em] uppercase drop-shadow-lg">
            Location
          </h1>
        </div>
      </section>

      {/* Text section */}
      <section className="py-20 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-ocean text-2xl sm:text-3xl italic mb-6">
            Oravae Bungalows are in the Solomon Islands
          </h2>
          <p className="font-raleway text-gray-600 text-sm leading-relaxed mb-3">
            The Solomon Islands are only a three-hour flight from Brisbane,
            Australia.
          </p>
          <p className="font-raleway text-gray-600 text-sm leading-relaxed">
            Solomon Airlines flies daily to Honiara then onto Gizo. Oravae is
            then a 20-minute boat ride from Gizo.
          </p>
        </div>
      </section>

      {/* Illustrated Map */}
      <LocationMap />

      {/* Getting there details */}
      <section className="py-20 px-4 bg-skyblue">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-raleway text-ocean text-2xl font-bold tracking-widest uppercase text-center mb-12">
            Getting There
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-ocean/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-ocean"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
              <h3 className="font-raleway text-ocean font-bold text-sm tracking-widest uppercase mb-2">
                Step 1 — Fly to Honiara
              </h3>
              <p className="font-raleway text-gray-600 text-sm leading-relaxed">
                Brisbane to Honiara (HIR) with Solomon Airlines. Approximately
                3 hours. Connections available from Auckland, Sydney and Port
                Moresby.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-ocean/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-ocean"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
              <h3 className="font-raleway text-ocean font-bold text-sm tracking-widest uppercase mb-2">
                Step 2 — Fly to Gizo
              </h3>
              <p className="font-raleway text-gray-600 text-sm leading-relaxed">
                Connect via Solomon Airlines from Honiara to Gizo (GZO) in the
                Western Province. Daily flights, approximately 1 hour.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-ocean/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-ocean"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-raleway text-ocean font-bold text-sm tracking-widest uppercase mb-2">
                Step 3 — Boat to Oravae
              </h3>
              <p className="font-raleway text-gray-600 text-sm leading-relaxed">
                We will collect you from Gizo in our boat — a scenic 20-minute
                ride across the lagoon to your island. Arrival transfers are
                included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tip */}
      <section className="py-12 px-4 bg-navy text-center">
        <p className="font-raleway text-white/80 text-sm max-w-xl mx-auto leading-relaxed">
          <span className="text-ocean font-bold">Tip:</span> We recommend
          spending a night in Gizo either side of your stay to allow for flight
          connection flexibility. We can recommend accommodation.
        </p>
      </section>

      <Footer />
    </>
  );
}
