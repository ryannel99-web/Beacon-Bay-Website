export function ReviewsSection() {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-primaryBlue tracking-tight mb-3">
            Trusted by East London Pet Owners
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-soft">
          <iframe
            title="Beacon Bay Veterinary Clinic on Google Maps"
            src="https://maps.google.com/maps?q=Beacon+Bay+Veterinary+Clinic,+22+Bonza+Bay+Rd,+Beacon+Bay,+East+London,+South+Africa&z=15&output=embed"
            width="100%"
            height="480"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
