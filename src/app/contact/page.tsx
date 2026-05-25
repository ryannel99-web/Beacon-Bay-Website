import type { Metadata } from "next";
import { ContactCard } from "@/components/ContactCard";
import { HoursCard } from "@/components/HoursCard";
import { clinicConfig } from "@/config/clinic";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Beacon Bay Veterinary Clinic in East London. Phone bookings, location details, hours, and directions.",
  keywords: [
    "contact Beacon Bay Vet",
    "vet Beacon Bay phone",
    "veterinary clinic East London contact",
  ],
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(clinicConfig.address);
  const embedSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <div className="bg-lightBlue">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <ContactCard />
            <HoursCard />
            <div className="rounded-2xl border border-primaryBlue/10 bg-white p-5">
              <p className="text-sm font-semibold text-black">
                Parking &amp; arrival notes
              </p>
              <p className="mt-2 text-sm text-black">
                Free parking is available directly in front of the clinic on
                Bonza Bay Road. Enter through the main gate and follow signage
                to reception. Please keep pets on a lead or in a carrier when
                entering the building.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-3xl border border-white/60 bg-white shadow-soft">
              <iframe
                title="Beacon Bay Veterinary Clinic on Google Maps"
                src={embedSrc}
                className="h-[420px] w-full"
                loading="lazy"
              />
            </div>
            <a
              href={clinicConfig.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-primaryBlue px-5 py-2 text-sm font-semibold text-white transition hover:bg-primaryBlue/90"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
