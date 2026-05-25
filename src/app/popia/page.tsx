import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "POPIA/GDPR Notice",
  description:
    "POPIA and GDPR notice for Beacon Bay Veterinary Clinic. General information only.",
};

export default function PopiaNoticePage() {
  return (
    <div className="bg-lightBlue">
      <section className="mx-auto w-full max-w-4xl px-6 py-16">
        <div className="rounded-3xl border border-white/60 bg-white p-8 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black">
            POPIA/GDPR Notice
          </p>
          <h1 className="mt-4 font-display text-4xl text-black">
            South Africa data protection overview
          </h1>
          <p className="mt-4 text-black">
            This notice provides general information about how Beacon Bay
            Veterinary Clinic approaches data protection in line with the
            Protection of Personal Information Act (POPIA). It is not legal
            advice.
          </p>

          <div className="mt-8 space-y-6 text-black">
            <div>
              <h2 className="text-lg font-semibold text-black">
                Purpose of processing
              </h2>
              <p className="mt-2">
                Personal information is processed to provide veterinary
                services, maintain medical records, and contact clients
                regarding appointments and care.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-black">
                Lawful basis
              </h2>
              <p className="mt-2">
                We process data to fulfil contractual obligations, comply with
                legal requirements, and with client consent where required.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-black">
                Data sharing
              </h2>
              <p className="mt-2">
                Information is shared only with trusted service providers or
                specialists when required for clinical care. We do not sell
                personal data.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-black">
                Retention
              </h2>
              <p className="mt-2">
                Records are retained according to veterinary and legal
                guidelines. You may request access or correction of your
                information by contacting the clinic.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-black">
                Your rights
              </h2>
              <p className="mt-2">
                You may request access, correction, or deletion of personal
                information where applicable. You may also lodge concerns with
                the Information Regulator in South Africa.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-black">Contact</h2>
              <p className="mt-2">
                For POPIA or GDPR-related questions, contact the clinic
                directly. (TODO: add email address when available.)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
