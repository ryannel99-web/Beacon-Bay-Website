import type { Metadata } from "next";
import { resources } from "@/data/resources";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Pet Resources",
  description:
    "Downloadable resources and guidance for Beacon Bay Veterinary Clinic clients.",
};

export default function ResourcesPage() {
  return (
    <div className="bg-lightBlue">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black">
            Pet Resources
          </p>
          <h1 className="font-display text-4xl text-black">
            Helpful guides and downloads
          </h1>
          <p className="mt-4 text-black">
            Access forms and quick guides prepared by our clinical team.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="rounded-2xl border border-white/60 bg-white p-6 shadow-soft"
            >
              <div className="mb-3 h-1 w-10 rounded-full bg-primaryBlue" />
              <p className="text-base font-semibold text-black">
                {resource.title}
              </p>
              <p className="mt-2 text-sm text-black">
                {resource.description}
              </p>
              <a
                href={resource.href}
                className="mt-4 inline-flex text-sm font-semibold text-black"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Need a specific resource?"
        description="Call our team and we will prepare any additional guidance you need."
      />
    </div>
  );
}
