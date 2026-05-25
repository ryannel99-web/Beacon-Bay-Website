import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { groupConfig } from "@/config/group";
import { clinicConfig } from "@/config/clinic";

export const metadata: Metadata = {
  title: "Our Locations",
  description:
    "Find a Beacon Vet Group practice near you. Beacon Bay Veterinary Clinic in East London, with more locations coming to the Eastern Cape.",
  keywords: [
    "vet East London",
    "Beacon Bay vet location",
    "Beacon Vet Group practices",
    "veterinary Eastern Cape",
  ],
};

export default function LocationsPage() {
  return (
    <div className="bg-lightBlue">
      {/* Hero */}
      <section className="border-b border-primaryBlue/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black">
            Locations
          </p>
          <h1 className="mt-2 font-display text-4xl text-black sm:text-5xl">
            Find a Beacon Vet Group Practice Near You
          </h1>
          <p className="mt-4 max-w-xl text-black">
            {groupConfig.tagline}. Our flagship practice is based in Beacon Bay,
            East London, with expansion planned across the Eastern Cape.
          </p>
        </div>
      </section>

      {/* Practice cards */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Beacon Bay clinic card */}
          <div className="rounded-3xl border border-white/60 bg-white p-8 shadow-soft">
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              <span className="text-xs font-semibold uppercase tracking-widest text-green-600">
                Open
              </span>
            </div>
            <h2 className="font-display text-2xl text-black">
              Beacon Bay Veterinary Clinic
            </h2>
            <p className="mt-1 text-sm text-black/60">Flagship practice</p>

            <div className="mt-6 space-y-3 text-sm text-black">
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0 text-primaryBlue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span>{clinicConfig.address}</span>
              </div>
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0 text-primaryBlue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href={`tel:${clinicConfig.phoneIntl}`} className="hover:text-primaryBlue transition">
                  {clinicConfig.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0 text-primaryBlue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <p><span className="font-semibold">Weekdays:</span> {clinicConfig.hours.weekdays}</p>
                  <p><span className="font-semibold">Saturday:</span> {clinicConfig.hours.saturday}</p>
                  <p><span className="font-semibold">Sunday:</span> {clinicConfig.hours.sunday}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${clinicConfig.phoneIntl}`}
                className="rounded-full bg-primaryBlue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primaryBlue/90"
              >
                Book Here
              </a>
              <a
                href={clinicConfig.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primaryBlue/30 px-5 py-2.5 text-sm font-semibold text-black transition hover:border-primaryBlue hover:bg-primaryBlue/5"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Coming soon card */}
          <div className="rounded-3xl border border-dashed border-primaryBlue/30 bg-white/60 p-8">
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primaryBlue/40" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primaryBlue/60">
                Coming Soon
              </span>
            </div>
            <h2 className="font-display text-2xl text-black">
              More clinics coming soon
            </h2>
            <p className="mt-3 text-black">
              Beacon Vet Group is expanding across the Eastern Cape. Join our
              mailing list to hear about new locations first.
            </p>

            {/*
              TODO: Wire up this form to a backend API (e.g. Resend, Nodemailer,
              or a mailing list provider like Mailchimp). For now it falls back
              to a mailto: link on submit.
            */}
            <form
              action={`mailto:${clinicConfig.email}?subject=Mailing list sign-up&body=Please add me to the Beacon Vet Group mailing list.`}
              method="GET"
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                className="flex-1 rounded-full border border-primaryBlue/20 bg-white px-5 py-3 text-sm text-black outline-none placeholder:text-black/40 focus:border-primaryBlue focus:ring-2 focus:ring-primaryBlue/10"
              />
              <button
                type="submit"
                className="rounded-full bg-primaryBlue px-6 py-3 text-sm font-semibold text-white transition hover:bg-primaryBlue/90"
              >
                Notify Me
              </button>
            </form>
            <p className="mt-3 text-xs text-black/50">
              We&apos;ll only send you updates about new Beacon Vet Group locations.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to book at Beacon Bay?"
        description="Phone bookings only. Our team is ready to help you find the right time for your pet's visit."
      />
    </div>
  );
}
