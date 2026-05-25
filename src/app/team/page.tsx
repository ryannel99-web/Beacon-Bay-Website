import type { Metadata } from "next";
import { TeamGrid } from "@/components/TeamGrid";
import { CTASection } from "@/components/CTASection";
import { clinicConfig } from "@/config/clinic";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the veterinarians and support team at Beacon Bay Veterinary Clinic, East London.",
  keywords: [
    "vet team Beacon Bay",
    "veterinarians East London",
    "exotic vet East London",
  ],
};

export default function TeamPage() {
  return (
    <div className="bg-lightBlue">
      <section className="mx-auto w-full max-w-6xl px-6 pt-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black">
            Team
          </p>
          <h1 className="font-display text-4xl text-black">
            Dedicated clinical professionals
          </h1>
          <p className="mt-4 text-black">
            Our team combines clinical expertise with a genuine love for animals.
            We invest in ongoing training and low-stress handling techniques so
            every visit is as calm and comfortable as possible for your pet.
          </p>
          <p className="mt-4 text-black">
            Our veterinarians and nursing team are committed to gentle handling,
            premium care, and thoughtful guidance for every client.
          </p>
          <p className="mt-3 text-sm text-black">{clinicConfig.afterHours}</p>
        </div>
      </section>

      <TeamGrid />

      <CTASection
        title="Speak directly with our team"
        description="Call to book an appointment or to discuss the best care plan for your pet."
      />
    </div>
  );
}
