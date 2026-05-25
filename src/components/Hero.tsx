"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { clinicConfig } from "@/config/clinic";

const heroImages = [
  { src: "/stock/hero-1.jpg", alt: "Labrador puppy on the examination table" },
  { src: "/stock/hero-2.jpg", alt: "African grey parrot in the veterinary clinic" },
  { src: "/stock/hero-3.jpg", alt: "Veterinarian examining a golden retriever" },
  { src: "/stock/hero-4.jpg", alt: "German Shepherd running free" },
];

const SLIDE_IN_MS = 1400;   // how long the slide-in animation takes
const HOLD_MS    = 7000;    // how long the image stays centred
const TOTAL_MS   = SLIDE_IN_MS + HOLD_MS;

export function Hero() {
  const [current, setCurrent] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, TOTAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-on-surface">
      {/* Sliding track — all images in a row, we translate the whole strip */}
      <div
        className="absolute inset-0 flex"
        style={{
          width: `${heroImages.length * 100}%`,
          transform: `translateX(-${(current / heroImages.length) * 100}%)`,
          transition: `transform ${SLIDE_IN_MS}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        }}
      >
        {heroImages.map((img) => (
          <div
            key={img.src}
            className="relative h-full flex-shrink-0"
            style={{ width: `${100 / heroImages.length}%` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dark overlay — sits above the track, below the text */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10 z-10" />

      {/* Text content */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-8">
        <div className="max-w-2xl space-y-8 py-24 animate-fade-up">
          <h1 className="text-6xl font-bold text-white leading-[1.1] tracking-tight sm:text-7xl">
            Friendly, professional veterinary care
          </h1>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/book-appointment"
              className="rounded-xl bg-gradient-to-br from-primaryBlue to-primary-container px-8 py-4 text-base font-bold text-white shadow-2xl transition hover:brightness-110 active:scale-95"
            >
              Book an Appointment
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Contact Us
            </Link>
          </div>

          {/* Opening hours strip */}
          <div className="flex flex-wrap gap-8 border-t border-white/20 pt-6 text-sm">
            <div>
              <p className="font-semibold text-white">Weekdays</p>
              <p className="text-white/70">{clinicConfig.hours.weekdays}</p>
            </div>
            <div>
              <p className="font-semibold text-white">Saturday</p>
              <p className="text-white/70">{clinicConfig.hours.saturday}</p>
            </div>
            <div>
              <p className="font-semibold text-white">Sunday &amp; Holidays</p>
              <p className="text-white/70">{clinicConfig.hours.sunday}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
