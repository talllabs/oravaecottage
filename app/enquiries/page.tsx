"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function today() {
  return new Date().toISOString().split("T")[0];
}

function EnquiryForm() {
  const searchParams = useSearchParams();

  const [form, setForm] = useState({
    bungalows: [] as string[],
    arrival: "",
    departure: "",
    adults: 1,
    children: 0,
    firstName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Pre-fill from URL params (from booking widget)
  useEffect(() => {
    const bungalow = searchParams.get("bungalow");
    const arrival = searchParams.get("arrival");
    const departure = searchParams.get("departure");
    const adults = searchParams.get("adults");
    const children = searchParams.get("children");

    setForm((prev) => ({
      ...prev,
      bungalows: bungalow ? [bungalow] : prev.bungalows,
      arrival: arrival || prev.arrival,
      departure: departure || prev.departure,
      adults: adults ? parseInt(adults) : prev.adults,
      children: children ? parseInt(children) : prev.children,
    }));
  }, [searchParams]);

  const toggleBungalow = (name: string) => {
    setForm((prev) => ({
      ...prev,
      bungalows: prev.bungalows.includes(name)
        ? prev.bungalows.filter((b) => b !== name)
        : [...prev.bungalows, name],
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.firstName) newErrors.firstName = "First name is required.";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Valid email is required.";
    if (!form.phone) newErrors.phone = "Phone number is required.";
    if (!form.country) newErrors.country = "Country is required.";
    if (form.arrival && form.departure) {
      if (new Date(form.departure) <= new Date(form.arrival)) {
        newErrors.departure = "Departure must be after arrival.";
      }
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="w-16 h-16 bg-ocean/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-ocean"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="font-playfair text-ocean text-3xl mb-4">
          Thank you, {form.firstName}!
        </h2>
        <p className="font-raleway text-gray-600 text-base max-w-md leading-relaxed">
          We&apos;ll be in touch soon to confirm your enquiry. In the meantime, feel
          free to explore our bungalows and activities.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Trip details */}
        <div className="bg-skyblue p-8">
          <h2 className="font-raleway text-ocean font-bold text-sm tracking-widest uppercase mb-6">
            Trip Details
          </h2>

          <div className="mb-6">
            {["The Cottage", "The Penthouse", "The Treehouse"].map((b) => (
              <label
                key={b}
                className="flex items-center gap-3 mb-3 cursor-pointer group"
              >
                <div
                  className={`w-5 h-5 border-2 flex items-center justify-center transition-colors ${
                    form.bungalows.includes(b)
                      ? "border-ocean bg-ocean"
                      : "border-ocean/40 group-hover:border-ocean"
                  }`}
                  onClick={() => toggleBungalow(b)}
                >
                  {form.bungalows.includes(b) && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <span
                  className="font-raleway text-xs font-semibold tracking-widest uppercase text-gray-700"
                  onClick={() => toggleBungalow(b)}
                >
                  {b}
                </span>
              </label>
            ))}
          </div>

          <div className="mb-4">
            <label className="font-raleway text-ocean text-xs font-bold tracking-widest uppercase block mb-2">
              Arrival Date
            </label>
            <input
              type="date"
              value={form.arrival}
              min={today()}
              onChange={(e) => {
                const val = e.target.value;
                setForm((prev) => ({
                  ...prev,
                  arrival: val,
                  // clear departure if now invalid
                  departure: prev.departure && prev.departure <= val ? "" : prev.departure,
                }));
              }}
              className="w-full border border-ocean/30 bg-white p-3 font-raleway text-sm text-gray-600 outline-none focus:border-ocean transition-colors cursor-pointer"
            />
          </div>

          <div className="mb-4">
            <label className="font-raleway text-ocean text-xs font-bold tracking-widest uppercase block mb-2">
              Departure Date
            </label>
            <input
              type="date"
              value={form.departure}
              min={form.arrival || today()}
              onChange={(e) =>
                setForm({ ...form, departure: e.target.value })
              }
              className="w-full border border-ocean/30 bg-white p-3 font-raleway text-sm text-gray-600 outline-none focus:border-ocean transition-colors cursor-pointer"
            />
            {errors.departure && (
              <p className="text-red-500 text-xs mt-1">{errors.departure}</p>
            )}
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="font-raleway text-ocean text-xs font-bold tracking-widest uppercase block mb-2">
                Adults
              </label>
              <div className="flex items-center border border-ocean/30 bg-white">
                <button
                  type="button"
                  onClick={() =>
                    setForm({ ...form, adults: Math.max(1, form.adults - 1) })
                  }
                  className="px-3 py-3 text-ocean hover:bg-ocean/10 font-bold"
                >
                  −
                </button>
                <span className="flex-1 text-center font-raleway text-sm font-semibold">
                  {form.adults}
                </span>
                <button
                  type="button"
                  onClick={() => setForm({ ...form, adults: form.adults + 1 })}
                  className="px-3 py-3 text-ocean hover:bg-ocean/10 font-bold"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex-1">
              <label className="font-raleway text-ocean text-xs font-bold tracking-widest uppercase block mb-2">
                Children
              </label>
              <div className="flex items-center border border-ocean/30 bg-white">
                <button
                  type="button"
                  onClick={() =>
                    setForm({
                      ...form,
                      children: Math.max(0, form.children - 1),
                    })
                  }
                  className="px-3 py-3 text-ocean hover:bg-ocean/10 font-bold"
                >
                  −
                </button>
                <span className="flex-1 text-center font-raleway text-sm font-semibold">
                  {form.children}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setForm({ ...form, children: form.children + 1 })
                  }
                  className="px-3 py-3 text-ocean hover:bg-ocean/10 font-bold"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Your details */}
        <div>
          <h2 className="font-raleway text-ocean font-bold text-sm tracking-widest uppercase mb-6">
            Your Details
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <input
                type="text"
                placeholder="FIRST NAME*"
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
                className={`w-full border p-3 font-raleway text-xs tracking-widest placeholder-gray-400 outline-none focus:border-ocean transition-colors ${
                  errors.firstName ? "border-red-400" : "border-gray-300"
                }`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="EMAIL*"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`w-full border p-3 font-raleway text-xs tracking-widest placeholder-gray-400 outline-none focus:border-ocean transition-colors ${
                  errors.email ? "border-red-400" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <input
                type="tel"
                placeholder="PHONE*"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={`w-full border p-3 font-raleway text-xs tracking-widest placeholder-gray-400 outline-none focus:border-ocean transition-colors ${
                  errors.phone ? "border-red-400" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="COUNTRY*"
                value={form.country}
                onChange={(e) => setForm({ ...form, country: e.target.value })}
                className={`w-full border p-3 font-raleway text-xs tracking-widest placeholder-gray-400 outline-none focus:border-ocean transition-colors ${
                  errors.country ? "border-red-400" : "border-gray-300"
                }`}
              />
              {errors.country && (
                <p className="text-red-500 text-xs mt-1">{errors.country}</p>
              )}
            </div>
          </div>

          <textarea
            placeholder="MESSAGE"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={7}
            className="w-full border border-gray-300 p-3 font-raleway text-xs tracking-widest placeholder-gray-400 outline-none focus:border-ocean transition-colors resize-none mb-4"
          />

          <p className="font-raleway text-gray-500 text-xs leading-relaxed mb-6">
            <strong>NOTE:</strong> Children under 15 get a 20% discount if
            staying with two adults. Excursions and additional visits to Gizo
            are extra.
          </p>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-ocean text-white font-raleway font-bold text-sm tracking-widest uppercase px-12 py-4 hover:bg-blue-600 transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default function EnquiriesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-72 sm:h-96 mt-16 lg:mt-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1920&q=80"
          alt="Floating on the lagoon at sunset"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-raleway text-white text-4xl sm:text-5xl font-bold tracking-[0.3em] uppercase drop-shadow-lg">
            Enquiries
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 px-4 bg-white text-center">
        <h2 className="font-playfair text-ocean text-2xl italic mb-3">
          Check availability or make an enquiry to Oravae.
        </h2>
        <p className="font-raleway text-gray-500 text-sm">
          Fill in your details below and we will get back to you.
        </p>
      </section>

      {/* Form */}
      <section className="pb-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <Suspense fallback={<div className="py-20 text-center text-gray-400">Loading...</div>}>
            <EnquiryForm />
          </Suspense>
        </div>
      </section>

      <Footer />
    </>
  );
}
