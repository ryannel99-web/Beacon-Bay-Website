import { clinicConfig } from "@/config/clinic";

export function ContactCard() {
  const whatsappLink = clinicConfig.whatsappNumber
    ? `https://wa.me/${clinicConfig.whatsappNumber}`
    : "";

  return (
    <div className="rounded-2xl border border-white/60 bg-white p-6 shadow-soft">
      <div className="mb-4 h-1 w-10 rounded-full bg-primaryBlue" />
      <h3 className="text-2xl font-semibold text-black underline">
        Contact us
      </h3>
      <p className="mt-3 text-sm text-black">{clinicConfig.address}</p>
      <p className="mt-2 text-sm text-black">{clinicConfig.city}</p>
      <div className="mt-4 space-y-2 text-sm text-black">
        <p>
          <span className="font-semibold text-black">Phone:</span>{" "}
          <a className="text-black" href={`tel:${clinicConfig.phoneIntl}`}>
            {clinicConfig.phone}
          </a>
        </p>
        {clinicConfig.email ? (
          <p>
            <span className="font-semibold text-black">Email:</span>{" "}
            <a
              className="text-black"
              href={`mailto:${clinicConfig.email}`}
            >
              {clinicConfig.email}
            </a>
          </p>
        ) : null}
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={`tel:${clinicConfig.phoneIntl}`}
          className="rounded-full bg-primaryBlue px-4 py-2 text-sm font-semibold text-black transition hover:bg-primaryBlue/90"
        >
          Call now
        </a>
        {clinicConfig.whatsappNumber ? (
          <a
            href={whatsappLink}
            className="rounded-full border border-primaryBlue/30 px-4 py-2 text-sm font-semibold text-black transition hover:border-primaryBlue hover:bg-primaryBlue/5"
          >
            WhatsApp
          </a>
        ) : null}
      </div>
    </div>
  );
}
