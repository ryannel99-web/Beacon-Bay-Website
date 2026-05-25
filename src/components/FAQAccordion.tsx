"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-primaryBlue/10 bg-lightBlue">
      <div className="mx-auto w-full max-w-4xl px-6 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/60 bg-white p-5 shadow-soft"
              >
                <div className="mb-3 h-1 w-10 rounded-full bg-primaryBlue" />
                <button
                  type="button"
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between text-left text-sm font-semibold text-black"
                  onClick={() =>
                    setOpenIndex((prev) => (prev === index ? null : index))
                  }
                >
                  {faq.question}
                  <span className="text-lg text-black">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <p className="mt-3 text-sm text-black">{faq.answer}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
