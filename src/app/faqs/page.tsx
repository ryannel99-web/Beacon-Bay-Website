import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about appointments, after-hours care, and services.",
};

export default function FAQsPage() {
  return (
    <div className="bg-white">
      <section className="bg-primaryBlue px-6 py-16 text-center lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
          Support
        </p>
        <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-white lg:text-5xl">
          Frequently Asked Questions
        </h1>
      </section>

      <FAQAccordion />
      <CTASection
        title="Still have a question?"
        description="Call our team for immediate guidance and booking support."
      />
    </div>
  );
}
