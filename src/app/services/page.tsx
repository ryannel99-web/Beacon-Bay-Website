import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Clinical services at Beacon Bay Veterinary Clinic — from routine wellness to advanced diagnostics and surgery.",
};

const services = [
  {
    title: "Preventative Care Consultations",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
  {
    title: "Puppy & Kitten Wellness Plans",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="4" r="2" />
        <circle cx="18" cy="8" r="2" />
        <circle cx="20" cy="16" r="2" />
        <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
      </svg>
    ),
  },
  {
    title: "Vaccines",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2L22 6" />
        <path d="M7 12l-3 3 1 1-4 4 1 1 4-4 1 1 3-3" />
        <path d="M21.5 6.5L11 17l-1.5-1.5 8-8M15.5 3.5l5 5" />
      </svg>
    ),
  },
  {
    title: "Microchipping",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="7" y="7" width="10" height="10" rx="1" />
        <path d="M10 7V4M14 7V4M10 20v-3M14 20v-3M7 10H4M7 14H4M20 10h-3M20 14h-3" />
      </svg>
    ),
  },
  {
    title: "Nutritional Counselling",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    title: "Emergency & ICU Care",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Advanced Lab Services",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 2v8.5L4 19a2 2 0 0 0 1.7 3h12.6A2 2 0 0 0 20 19L15 10.5V2" />
        <path d="M6.5 15H17" />
        <line x1="8" y1="2" x2="16" y2="2" />
      </svg>
    ),
  },
  {
    title: "Digital Radiology",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="2" width="18" height="20" rx="2" />
        <path d="M9 9L15 15M15 9L9 15" />
        <path d="M6 5h2M6 7h2" />
      </svg>
    ),
  },
  {
    title: "Ultrasound",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 12h3" />
        <path d="M19 12h3" />
        <path d="M6.3 7.3a7 7 0 0 0 0 9.4" />
        <path d="M17.7 7.3a7 7 0 0 1 0 9.4" />
        <path d="M9.4 10.1a3.5 3.5 0 0 0 0 3.8" />
        <path d="M14.6 10.1a3.5 3.5 0 0 1 0 3.8" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Dentistry",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C9 2 7 4 7 7c0 2 .5 3.5 1 5 .5 1.6.8 3 .9 5 .1 2 .6 3 1.6 3s1.5-1.5 1.5-3.5c0 2 .5 3.5 1.5 3.5s1.5-1 1.6-3c.1-2 .4-3.4.9-5 .5-1.5 1-3 1-5 0-3-2-5-5-5z" />
      </svg>
    ),
  },
  {
    title: "Soft Tissue & Orthopaedic Surgery",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 6L12 14l-3-3L4 16" />
        <path d="M20 6l-4 1 3 3 1-4z" />
      </svg>
    ),
  },
  {
    title: "Physiotherapy",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="4" r="2" />
        <path d="M10 10l-2 8h8l-2-8" />
        <path d="M8 10l-3 2M16 10l3 2" />
        <path d="M10 14h4" />
      </svg>
    ),
  },
  {
    title: "Sterilisation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
      </svg>
    ),
  },
  {
    title: "Blood Donations",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        <path d="M12 10v6M9 13h6" />
      </svg>
    ),
  },
  {
    title: "Basic Exotic Care",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z" />
        <line x1="16" y1="8" x2="2" y2="22" />
        <line x1="17.5" y1="15" x2="9" y2="15" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-lightBlue">
      {/* Page header */}
      <section className="px-6 py-24 text-center">
        <h1 className="mx-auto font-display text-5xl font-bold leading-tight text-black">
          Services
        </h1>
      </section>

      {/* Uniform services grid */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col justify-between rounded-2xl bg-primary-container p-6 shadow-soft min-h-[160px]"
            >
              {service.icon}
              <h3 className="font-display text-sm font-semibold text-white leading-snug mt-4">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Discuss a treatment plan"
        description="Phone bookings only. Call our team to discuss your pet's needs and schedule an appointment."
      />
    </div>
  );
}
