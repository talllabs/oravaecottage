"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface BookingWidgetProps {
  bungalow?: string;
  pricePerNight?: string;
  compact?: boolean;
}

function today() {
  return new Date().toISOString().split("T")[0];
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

  const handleArrivalChange = (val: string) => {
    setArrival(val);
    // Clear departure if it's no longer valid
    if (departure && val && departure <= val) {
      setDeparture("");
    }
    setError("");
  };

  const handleCheck = () => {
    if (!arrival) {
      setError("Please select an arrival date.");
      return;
    }
    if (!departure) {
      setError("Please select a departure date.");
      return;
    }
    if (departure <= arrival) {
      setError("Departure must be after arrival.");
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
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-stretch gap-0 border border-ocean/30">
          {/* Arrival */}
          <div className="flex-1 min-w-[160px] border-r border-ocean/30 p-3">
            <p className="font-raleway text-ocean text-[10px] font-bold tracking-widest uppercase mb-1">
              Arrival Date
            </p>
            <input
              type="date"
              value={arrival}
              min={today()}
              onChange={(e) => handleArrivalChange(e.target.value)}
              className="w-full font-raleway text-xs text-gray-600 bg-transparent outline-none cursor-pointer"
            />
          </div>
          {/* Departure */}
          <div className="flex-1 min-w-[160px] border-r border-ocean/30 p-3">
            <p className="font-raleway text-ocean text-[10px] font-bold tracking-widest uppercase mb-1">
              Departure Date
            </p>
            <input
              type="date"
              value={departure}
              min={arrival || today()}
              onChange={(e) => {
                setDeparture(e.target.value);
                setError("");
              }}
              className="w-full font-raleway text-xs text-gray-600 bg-transparent outline-none cursor-pointer"
            />
          </div>
          {/* Adults + Children */}
          <div className="flex border-r border-ocean/30">
            <div className="p-3 border-r border-ocean/30">
              <p className="font-raleway text-ocean text-[10px] font-bold tracking-widest uppercase mb-1">
                Adults
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                  className="text-ocean font-bold text-sm w-5 h-5 flex items-center justify-center hover:text-blue-700"
                >
                  −
                </button>
                <span className="font-raleway text-sm font-semibold w-4 text-center">
                  {adults}
                </span>
                <button
                  type="button"
                  onClick={() => setAdults(adults + 1)}
                  className="text-ocean font-bold text-sm w-5 h-5 flex items-center justify-center hover:text-blue-700"
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
                  type="button"
                  onClick={() => setChildren(Math.max(0, children - 1))}
                  className="text-ocean font-bold text-sm w-5 h-5 flex items-center justify-center hover:text-blue-700"
                >
                  −
                </button>
                <span className="font-raleway text-sm font-semibold w-4 text-center">
                  {children}
                </span>
                <button
                  type="button"
                  onClick={() => setChildren(children + 1)}
                  className="text-ocean font-bold text-sm w-5 h-5 flex items-center justify-center hover:text-blue-700"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          {/* CTA */}
          <button
            type="button"
            onClick={handleCheck}
            className="bg-ocean text-white font-raleway text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-blue-600 transition-colors whitespace-nowrap"
          >
            Check
            <br />
            Availability
          </button>
        </div>
        {error && (
          <p className="font-raleway text-red-500 text-xs pl-1">{error}</p>
        )}
      </div>
    );
  }

  // Full widget (bungalow pages)
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
          <input
            type="date"
            value={arrival}
            min={today()}
            onChange={(e) => handleArrivalChange(e.target.value)}
            className="w-full border border-ocean/30 bg-white p-3 font-raleway text-sm text-gray-600 outline-none focus:border-ocean transition-colors cursor-pointer"
          />
        </div>
        <div>
          <label className="font-raleway text-ocean text-xs font-bold tracking-widest uppercase block mb-1">
            Departure Date
          </label>
          <input
            type="date"
            value={departure}
            min={arrival || today()}
            onChange={(e) => {
              setDeparture(e.target.value);
              setError("");
            }}
            className="w-full border border-ocean/30 bg-white p-3 font-raleway text-sm text-gray-600 outline-none focus:border-ocean transition-colors cursor-pointer"
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="font-raleway text-ocean text-xs font-bold tracking-widest uppercase block mb-1">
              Adults
            </label>
            <div className="flex items-center border border-ocean/30 bg-white">
              <button
                type="button"
                onClick={() => setAdults(Math.max(1, adults - 1))}
                className="px-3 py-3 text-ocean hover:bg-ocean/10 transition-colors font-bold"
              >
                −
              </button>
              <span className="flex-1 text-center font-raleway text-sm font-semibold">
                {adults}
              </span>
              <button
                type="button"
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
                type="button"
                onClick={() => setChildren(Math.max(0, children - 1))}
                className="px-3 py-3 text-ocean hover:bg-ocean/10 transition-colors font-bold"
              >
                −
              </button>
              <span className="flex-1 text-center font-raleway text-sm font-semibold">
                {children}
              </span>
              <button
                type="button"
                onClick={() => setChildren(children + 1)}
                className="px-3 py-3 text-ocean hover:bg-ocean/10 transition-colors font-bold"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={handleCheck}
          className="w-full bg-ocean text-white font-raleway text-xs font-bold tracking-widest uppercase py-4 hover:bg-blue-600 transition-colors duration-200"
        >
          Check Availability
        </button>
      </div>
    </div>
  );
}
