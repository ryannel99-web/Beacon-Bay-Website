import Link from "next/link";
import { clinicConfig } from "@/config/clinic";

type CTASectionProps = {
  title: string;
  description: string;
};

export function CTASection({ title, description }: CTASectionProps) {
  const whatsappLink = clinicConfig.whatsappNumber
    ? `https://wa.me/${clinicConfig.whatsappNumber}`
    : "";

  return (
    <section className="mx-auto w-full max-w-7xl px-8 pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-tertiary-fixed p-14 text-center shadow-glow">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-on-tertiary-fixed/5" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-on-tertiary-fixed/5" />

        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-on-tertiary-fixed mb-4">
            {title}
          </h2>
          <p className="text-lg text-on-tertiary-fixed/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primaryBlue px-9 py-4 text-base font-bold text-white shadow-xl transition hover:brightness-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call Now
            </Link>
            {clinicConfig.whatsappNumber ? (
              <a
                href={whatsappLink}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-on-tertiary-fixed/20 bg-surface-container-lowest px-9 py-4 text-base font-bold text-primaryBlue shadow-soft transition hover:bg-surface-container-low"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.122 1.524 5.855L.057 23.875l6.194-1.625A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.946 0-3.764-.537-5.316-1.469L3.25 21.4l1.082-3.318A9.807 9.807 0 0 1 2.182 12C2.182 6.577 6.577 2.182 12 2.182S21.818 6.577 21.818 12 17.423 21.818 12 21.818z" />
                </svg>
                WhatsApp Us
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
