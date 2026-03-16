"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface BookingWidgetProps {
  bungalow?: string;
  pricePerNight?: string;
  compact?: boolean;
}

export default function BookingWidget({
  bungalow,
  pricePerNight = "850",
  compact = false,
}: BookingWidgetProps) {
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleCheck = () => {
    if (!arrival || !departure) {
      setError("Please select both arrival and departure dates.");
      return;
    }
    if (new Date(departure) <= new Date(arrival)) {
      setError("Departure date must be after arrival date.");
      return;
    }
    setError("");
    const params = new URLSearchParams({
      bungalow: bungalow || "",
      arrival,
      departure,
      adults: adults.toString(),
      children: children.toString(),
    });
    router.push(`/enquiries?${params.toString()}`);
  };

  if (compact) {
    return (
      <div className="flex flex-wrap items-stretch gap-0 border border-ocean/30">
        <div className="flex-1 min-w-[160px] border-r border-ocean/30 p-3">
          <p className="font-raleway text-ocean text-[10px] font-bold tracking-widest uppercase mb-1">
            Arrival Date
          </p>
          <div className="relative">
            <input
              type="date"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              className="w-full font-raleway text-xs text-gray-400 bg-transparent outline-none cursor-pointer"
              placeholder="Choose Your Date"
            />
          </div>
        </div>
        <div className="flex-1 min-w-[160px] border-r border-ocean/30 p-3">
          <p className="font-raleway text-ocean text-[10px] font-bold tracking-widest uppercase mb-1">
            Departure Date
          </p>
          <input
            type="date"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            className="w-full font-raleway text-xs text-gray-400 bg-transparent outline-none cursor-pointer"
          />
        </div>
        <div className="flex border-r border-ocean/30">
          <div className="p-3 border-r border-ocean/30">
            <p className="font-raleway text-ocean text-[10px] font-bold tracking-widest uppercase mb-1">
              Adults
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setAdults(Math.max(1, adults - 1))}
                className="text-ocean font-bold text-sm w-5 h-5 flex items-center justify-center"
              >
                −
              </button>
              <span className="font-raleway text-sm font-semibold w-4 text-center">
                {adults}
              </span>
              <button
                onClick={() => setAdults(adults + 1)}
                className="text-ocean font-bold text-sm w-5 h-5 flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>
          <div className="p-3">
            <p className="font-raleway text-ocean text-[10px] font-bold tracking-widest uppercase mb-1">
              Children
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setChildren(Math.max(0, children - 1))}
                className="text-ocean font-bold text-sm w-5 h-5 flex items-center justify-center"
              >
                −
              </button>
              <span className="font-raleway text-sm font-semibold w-4 text-center">
                {children}
              </span>
              <button
                onClick={() => setChildren(children + 1)}
                className="text-ocean font-bold text-sm w-5 h-5 flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={handleCheck}
          className="bg-ocean text-white font-raleway text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-blue-600 transition-colors"
        >
          Check
          <br />
          Availability
        </button>
      </div>
    );
  }

  return (
    <div className="bg-skyblue p-6 rounded-sm">
      {pricePerNight && (
        <p className="font-playfair text-ocean text-2xl font-bold mb-4">
          From ${pricePerNight}{" "}
          <span className="text-base font-raleway font-normal text-gray-500">
            /night
          </span>
        </p>
      )}
      {error && (
        <p className="text-red-500 text-xs font-raleway mb-3">{error}</p>
      )}
      <div className="space-y-4">
        <div>
          <label className="font-raleway text-ocean text-xs font-bold tracking-widest uppercase block mb-1">
            Arrival Date
          </label>
          <div className="relative border border-ocean/30 bg-white">
            <input
              type="date"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              className="w-full p-3 font-raleway text-sm text-gray-600 bg-transparent outline-none cursor-pointer"
            />
            <svg
              className="absolute right-3 top-3 w-5 h-5 text-ocean pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
        <div>
          <label className="font-raleway text-ocean text-xs font-bold tracking-widest uppercase block mb-1">
            Departure Date
          </label>
          <div className="relative border border-ocean/30 bg-white">
            <input
              type="date"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              className="w-full p-3 font-raleway text-sm text-gray-600 bg-transparent outline-none cursor-pointer"
            />
            <svg
              className="absolute right-3 top-3 w-5 h-5 text-ocean pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="font-raleway text-ocean text-xs font-bold tracking-widest uppercase block mb-1">
              Adults
            </label>
            <div className="flex items-center border border-ocean/30 bg-white">
              <button
                onClick={() => setAdults(Math.max(1, adults - 1))}
                className="px-3 py-3 text-ocean hover:bg-ocean/10 transition-colors font-bold"
              >
                −
              </button>
              <span className="flex-1 text-center font-raleway text-sm font-semibold">
                {adults}
              </span>
              <button
                onClick={() => setAdults(adults + 1)}
                className="px-3 py-3 text-ocean hover:bg-ocean/10 transition-colors font-bold"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex-1">
            <label className="font-raleway text-ocean text-xs font-bold tracking-widest uppercase block mb-1">
              Children
            </label>
            <div className="flex items-center border border-ocean/30 bg-white">
              <button
                onClick={() => setChildren(Math.max(0, children - 1))}
                className="px-3 py-3 text-ocean hover:bg-ocean/10 transition-colors font-bold"
              >
                −
              </button>
              <span className="flex-1 text-center font-raleway text-sm font-semibold">
                {children}
              </span>
              <button
                onClick={() => setChildren(children + 1)}
                className="px-3 py-3 text-ocean hover:bg-ocean/10 transition-colors font-bold"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={handleCheck}
          className="w-full bg-ocean text-white font-raleway text-xs font-bold tracking-widest uppercase py-4 hover:bg-blue-600 transition-colors duration-200"
        >
          Check Availability
        </button>
      </div>
    </div>
  );
}
