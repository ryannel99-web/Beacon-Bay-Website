import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { HoursCard } from "@/components/HoursCard";
import { clinicConfig } from "@/config/clinic";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Beacon Bay Veterinary Clinic, our clinical philosophy, and our commitment to raising the standard of veterinary care in East London and the Eastern Cape.",
  keywords: [
    "about Beacon Bay Vet",
    "veterinary clinic East London",
    "vet Beacon Bay",
    "Beacon Vet Group",
  ],
};

export default function AboutPage() {
  return (
    <div className="bg-lightBlue">
      {/* Hero */}
      <section className="bg-primaryBlue px-6 py-16 text-center lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
          About Us
        </p>
        <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-white lg:text-5xl">
          Small clinic with a big heart
        </h1>
      </section>

      {/* Intro section */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black">
              About Us
            </p>
            <p className="mt-4 text-black">
              Beacon Bay Veterinary Clinic is a modern practice delivering
              preventative care, diagnostics, and surgical services with a
              compassionate approach. We value clear communication and a
              clinical environment designed to reduce stress for pets and their
              families.
            </p>
            <p className="mt-4 text-black">
              Our team serves Beacon Bay and the wider East London community with
              a focus on wellness, long-term health planning, and trusted
              after-hours support.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/60 bg-white p-5 shadow-soft">
                <div className="mb-3 h-1 w-10 rounded-full bg-primaryBlue" />
                <p className="text-sm font-semibold text-black">
                  Clinic philosophy
                </p>
                <p className="mt-2 text-sm text-black">
                  We find the gold outcome — where clinical excellence meets your pet&apos;s needs and your family&apos;s reality.
                </p>
              </div>
              <div className="rounded-2xl border border-white/60 bg-white p-5 shadow-soft">
                <div className="mb-3 h-1 w-10 rounded-full bg-primaryBlue" />
                <p className="text-sm font-semibold text-black">
                  Small Practice, Full Capability
                </p>
                <p className="mt-2 text-sm text-black">
                  The personal feel of a neighbourhood clinic with the diagnostic depth of a larger facility — including ultrasound, ECG and in-house blood analysers.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {/* TODO: Replace /stock/about.png with a real team/clinic photo. */}
            <div className="overflow-hidden rounded-3xl border border-white/60 shadow-soft">
              <Image
                src="/stock/about.jpg"
                alt="German Shepherd running in a field"
                width={520}
                height={620}
                className="h-80 w-full object-cover"
              />
            </div>
            <HoursCard />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="border-t border-primaryBlue/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black">
            Our Story
          </p>
          <h2 className="mt-2 font-display text-3xl text-black">
            Why we started — and where we&apos;re headed
          </h2>
          <p className="mt-6 max-w-2xl text-black">
            Beacon Bay Veterinary Clinic was founded with a single goal: to
            raise the standard of veterinary care in East London. We believe
            that clinical excellence and genuine compassion are not mutually
            exclusive — every pet that walks through our doors deserves both. As
            the founding practice of the Beacon Vet Group, we are building a
            network of clinics that share this philosophy across the Eastern
            Cape.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t border-primaryBlue/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black">
            Why Choose Us
          </p>
          <h2 className="mt-2 font-display text-3xl text-black">
            What sets us apart
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
                  </svg>
                ),
                title: "Modern Facilities",
                description:
                  "A fully equipped clinic with digital radiography, in-house diagnostics, and a clean surgical theatre designed around patient safety.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                ),
                title: "Transparent Communication",
                description:
                  "We explain every diagnosis, treatment option, and cost clearly — so you can make fully informed decisions for your pet.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>
                  </svg>
                ),
                title: "Small Practice, Full Capability",
                description:
                  "The personal feel of a neighbourhood clinic with the diagnostic depth of a larger facility — including ultrasound, ECG and in-house blood analysers.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.3.3 0 1 0 .3.3" /><path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4" /><circle cx="20" cy="10" r="2" />
                  </svg>
                ),
                title: "Expanding Expertise",
                description:
                  "We are committed to staying at the forefront of veterinary medicine, continuously refining our knowledge and embracing the latest diagnostic and treatment advances.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/60 bg-white p-6 shadow-soft"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lightBlue text-primaryBlue">
                  {item.icon}
                </div>
                <p className="font-semibold text-black">{item.title}</p>
                <p className="mt-2 text-sm text-black">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need to speak with a veterinarian?"
        description="Phone bookings only. Call the clinic and our team will guide you through the next steps."
      />
    </div>
  );
}
