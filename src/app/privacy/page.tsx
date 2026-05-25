import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Beacon Bay Veterinary Clinic, including data handling and communication preferences.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-lightBlue">
      <section className="mx-auto w-full max-w-4xl px-6 py-16">
        <div className="rounded-3xl border border-white/60 bg-white p-8 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black">
            Privacy Policy
          </p>
          <h1 className="mt-4 font-display text-4xl text-black">
            How we handle your information
          </h1>
          <p className="mt-4 text-black">
            Beacon Bay Veterinary Clinic respects your privacy and is committed
            to protecting your personal information. This policy explains how we
            collect, use, and store data when you contact or visit the clinic.
          </p>

          <div className="mt-8 space-y-6 text-black">
            <div>
              <h2 className="text-lg font-semibold text-black">
                Information we collect
              </h2>
              <p className="mt-2">
                We collect contact details, pet medical history, and appointment
                notes to deliver veterinary services. This may include phone
                numbers, addresses, and relevant medical information.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-black">
                How we use your information
              </h2>
              <p className="mt-2">
                We use your details to arrange appointments, deliver care,
                provide follow-up guidance, and maintain clinical records. We
                may contact you about appointments, medication updates, or
                important clinic notices.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-black">
                Data storage
              </h2>
              <p className="mt-2">
                Records are stored securely and accessed only by authorised
                clinic staff. We retain information as required for clinical and
                legal obligations.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-black">
                Your choices
              </h2>
              <p className="mt-2">
                You may request access to your information or ask for
                corrections by contacting the clinic. Marketing communications
                are optional and can be opted out of at any time.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-black">Contact</h2>
              <p className="mt-2">
                For privacy questions, please contact the clinic directly.
                (TODO: add email address when available.)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
