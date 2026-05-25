import Link from "next/link";
import { clinicConfig } from "@/config/clinic";
import { footerLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-outline-variant/30 bg-surface-container-low">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 lg:gap-12 lg:px-8 lg:py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-5">
          <div className="flex items-center gap-4">
            <img src="/logo.jpg" alt="Beacon Bay Veterinary Clinic" className="h-16 w-16 rounded-full object-cover" />
            <div>
              <p className="text-lg font-bold text-on-surface">Beacon Bay Veterinary Clinic</p>
            </div>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Dedicated to the well-being of Beacon Bay&apos;s pets — combining clinical excellence with compassionate care.
          </p>
          {clinicConfig.socials.facebook ? (
            <div className="flex gap-4">
              <a
                href={clinicConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Beacon Bay Vet on Facebook"
                className="text-on-surface-variant/60 transition hover:text-primaryBlue"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          ) : null}
        </div>

        <div>
          <p className="mb-4 text-sm font-bold text-on-surface">Quick Links</p>
          <nav className="flex flex-col gap-2 text-sm text-on-surface-variant">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-primaryBlue"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold text-on-surface">Legal</p>
          <nav className="flex flex-col gap-2 text-sm text-on-surface-variant">
            <Link href="/privacy" className="transition hover:text-primaryBlue">Privacy Policy</Link>
            <Link href="/popia" className="transition hover:text-primaryBlue">POPIA</Link>
          </nav>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold text-on-surface">Location</p>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            {clinicConfig.address}
          </p>
          <p className="mt-1 text-sm text-on-surface-variant">{clinicConfig.city}</p>
          <a
            href={clinicConfig.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-semibold text-primaryBlue transition hover:underline"
          >
            Get Directions →
          </a>
          {clinicConfig.email ? (
            <a
              href={`mailto:${clinicConfig.email}`}
              className="mt-3 flex text-sm text-on-surface-variant transition hover:text-primaryBlue"
            >
              {clinicConfig.email}
            </a>
          ) : null}
        </div>
      </div>

      <div className="border-t border-outline-variant/30">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-2 px-8 py-6 text-xs text-on-surface-variant md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} Beacon Bay Veterinary Clinic. A member of the Beacon Vet Group.</p>
        </div>
      </div>
    </footer>
  );
}
