import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Online shop for Beacon Bay Veterinary Clinic. Coming soon with curated pet essentials.",
};

export default function ShopPage() {
  return (
    <div className="bg-lightBlue">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black">
            Shop
          </p>
          <h1 className="font-display text-4xl text-black">
            Coming soon
          </h1>
          <p className="mt-4 text-black">
            We are preparing a curated online shop with nutrition, parasite
            control, and everyday essentials.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Prescription diets",
            "Parasite prevention",
            "Senior care supplements",
            "Puppy & kitten bundles",
            "Dental hygiene",
            "Clinic-approved grooming",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/60 bg-white p-6 shadow-soft"
            >
              <div className="mb-3 h-1 w-10 rounded-full bg-primaryBlue" />
              <p className="text-base font-semibold text-black">{item}</p>
              <p className="mt-2 text-sm text-black">
                Coming soon. Ask our team for recommendations in the meantime.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
