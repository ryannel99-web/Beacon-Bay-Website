import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";

const bentoServices = [
  {
    id: "surgery",
    title: "Advanced Surgery",
    description:
      "Specialized soft tissue and orthopedic procedures in our sterile, high-tech surgical suite with comprehensive monitoring.",
    featured: true,
    imageSrc: "/stock/clinic.png",
    imageAlt: "Veterinary surgical suite",
    bg: "bg-surface-container-lowest",
  },
  {
    id: "exotic",
    title: "Exotic Pets",
    description: "Specialized care for birds, reptiles, and small mammals.",
    bg: "bg-primary-container text-white",
    textMuted: "text-primary-fixed/80",
  },
  {
    id: "vaccines",
    title: "Vaccinations",
    description: "Preventative care protocols tailored to your pet's lifestyle.",
    bg: "bg-surface-container-lowest",
  },
  {
    id: "xray",
    title: "Digital X-rays",
    description: "Instant, high-resolution imaging for rapid diagnostics.",
    bg: "bg-surface-container-lowest",
  },
  {
    id: "dentistry",
    title: "Dentistry",
    description: "Professional cleaning and oral surgery for long-term health.",
    bg: "bg-secondary-container",
  },
];

function ServiceIcon({ id }: { id: string }) {
  const cls = "h-10 w-10 text-primaryBlue";
  switch (id) {
    case "surgery":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 6L12 14l-3-3L4 16" /><path d="M20 6l-4 1 3 3 1-4z" />
        </svg>
      );
    case "exotic":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="4" r="2" /><circle cx="18" cy="8" r="2" /><circle cx="20" cy="16" r="2" /><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
        </svg>
      );
    case "vaccines":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 2L22 6" /><path d="M7 12l-3 3 1 1-4 4 1 1 4-4 1 1 3-3" /><path d="M21.5 6.5L11 17l-1.5-1.5 8-8M15.5 3.5l5 5" />
        </svg>
      );
    case "xray":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 8L15 16M15 8L9 16" />
        </svg>
      );
    case "dentistry":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-on-secondary-container" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2C9 2 7 4 7 7c0 2 .5 3.5 1 5 .5 1.6.8 3 .9 5 .1 2 .6 3 1.6 3s1.5-1.5 1.5-3.5c0 2 .5 3.5 1.5 3.5s1.5-1 1.6-3c.1-2 .4-3.4.9-5 .5-1.5 1-3 1-5 0-3-2-5-5-5z" />
        </svg>
      );
    default:
      return null;
  }
}

export function ServiceGrid() {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-primaryBlue tracking-tight mb-3">
              Comprehensive Clinical Services
            </h2>
            <p className="text-on-surface-variant">
              From routine wellness to advanced diagnostics, our medical team provides specialized care for every companion.
            </p>
          </div>
          <Link
            href="/services"
            className="flex items-center gap-1 text-primaryBlue font-bold transition hover:gap-2"
          >
            View all services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {/* Featured tall card */}
          <div className="md:col-span-2 md:row-span-2 bg-surface-container-lowest rounded-2xl p-8 flex flex-col justify-between shadow-soft relative overflow-hidden">
            <div>
              <ServiceIcon id="surgery" />
              <h3 className="text-2xl font-bold mt-5 mb-3 text-on-surface">Advanced Surgery</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Specialized soft tissue and orthopedic procedures in our sterile, high-tech surgical suite with comprehensive patient monitoring.
              </p>
            </div>
            <div className="mt-6 overflow-hidden rounded-xl">
              <Image
                src="/stock/clinic.png"
                alt="Veterinary surgical suite"
                width={520}
                height={200}
                className="h-44 w-full object-cover"
              />
            </div>
          </div>

          {/* Exotic Pets — blue card */}
          <div className="bg-primary-container rounded-2xl p-7 shadow-soft">
            <ServiceIcon id="exotic" />
            <h3 className="text-lg font-bold mt-4 mb-2 text-white">Exotic Pets</h3>
            <p className="text-sm text-primary-fixed/80">
              Specialized care for birds, reptiles, and small mammals.
            </p>
          </div>

          {/* Vaccinations */}
          <div className="bg-surface-container-lowest rounded-2xl p-7 shadow-soft">
            <ServiceIcon id="vaccines" />
            <h3 className="text-lg font-bold mt-4 mb-2 text-on-surface">Vaccinations</h3>
            <p className="text-sm text-on-surface-variant">
              Preventative care protocols tailored to your pet&apos;s lifestyle.
            </p>
          </div>

          {/* Digital X-rays */}
          <div className="bg-surface-container-lowest rounded-2xl p-7 shadow-soft">
            <ServiceIcon id="xray" />
            <h3 className="text-lg font-bold mt-4 mb-2 text-on-surface">Digital X-rays</h3>
            <p className="text-sm text-on-surface-variant">
              Instant, high-resolution imaging for rapid diagnostics.
            </p>
          </div>

          {/* Dentistry — secondary card */}
          <div className="bg-secondary-container rounded-2xl p-7 shadow-soft">
            <ServiceIcon id="dentistry" />
            <h3 className="text-lg font-bold mt-4 mb-2 text-on-surface">Dentistry</h3>
            <p className="text-sm text-on-secondary-container">
              Professional cleaning and oral surgery for long-term health.
            </p>
          </div>
        </div>

        {/* Additional services pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {services
            .filter((s) => !["surgery", "exotic", "vaccines", "xray", "dentistry"].includes(s.id))
            .map((service) => (
              <span
                key={service.id}
                className="rounded-full border border-outline-variant/50 bg-surface-container-lowest px-4 py-1.5 text-sm font-medium text-on-surface-variant"
              >
                {service.title}
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
