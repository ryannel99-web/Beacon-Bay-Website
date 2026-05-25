import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { placeholderReviews } from "@/data/reviews";
import { clinicConfig } from "@/config/clinic";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read reviews and testimonials from Beacon Bay Veterinary Clinic clients in East London.",
  keywords: ["Beacon Bay Vet reviews", "veterinary East London reviews"],
};

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 ${i < count ? "fill-primaryBlue text-primaryBlue" : "fill-primaryBlue/20 text-primaryBlue/20"}`}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-primaryBlue/10 bg-lightBlue">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black">
            Reviews
          </p>
          <h1 className="mt-2 font-display text-4xl text-black">
            Trusted by pet owners across East London
          </h1>
          <p className="mt-4 max-w-xl text-black">
            We are proud of the relationships we build with our clients and their
            pets. Here is what some of them have to say.
          </p>
          <p className="mt-3 text-sm text-black/60">
            Reviews sourced from Google.{" "}
            <a
              href={clinicConfig.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primaryBlue hover:underline"
            >
              Leave your own review on Google &rarr;
            </a>
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {placeholderReviews.map((review) => (
            <div
              key={review.name}
              className="mb-6 break-inside-avoid rounded-2xl border border-primaryBlue/10 bg-white p-6 shadow-soft"
            >
              <StarRating count={review.stars} />
              <p className="mt-4 text-sm leading-relaxed text-black">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-black">{review.name}</p>
                  <p className="text-xs text-black/50">{review.petType}</p>
                </div>
                <span className="rounded-full bg-lightBlue px-2.5 py-1 text-xs font-semibold text-primaryBlue">
                  {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Share your experience"
        description="We appreciate feedback from our Beacon Bay clients. Leave a review on Google or call us to share your thoughts."
      />
    </div>
  );
}
