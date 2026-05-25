import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { HoursCard } from "@/components/HoursCard";
import { clinicConfig } from "@/config/clinic";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Book an appointment at Beacon Bay Veterinary Clinic in East London. Phone bookings only. Call +27 43 735 1592.",
  keywords: [
    "book vet appointment East London",
    "Beacon Bay Vet appointment",
    "vet booking Beacon Bay",
  ],
};

export default function BookAppointmentPage() {
  const whatsappLink = clinicConfig.whatsappNumber
    ? `https://wa.me/${clinicConfig.whatsappNumber}`
    : "";

  return (
    <div className="bg-white">
      {/* Hero section */}
      <section className="bg-lightBlue">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black">
              Book Appointment
            </p>
            <h1 className="font-display text-4xl text-black">
              Ready to visit? Here&apos;s how to book
            </h1>
            <p className="mt-4 text-black">
              Appointments are booked by phone. Our team will find the right
              time for your pet and guide you through any preparation needed.
              Online booking is coming soon.
            </p>

            {/* Step 1: Call */}
            <div className="mt-8 rounded-2xl bg-white p-6 text-black shadow-soft">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primaryBlue text-sm font-bold text-white">
                  1
                </span>
                <p className="font-semibold text-black">Call us to book</p>
              </div>
              <p className="mt-3 text-2xl font-semibold text-black">{clinicConfig.phone}</p>
              <p className="mt-2 text-sm text-black/70">
                Our reception team will find a suitable slot and confirm details
                with you.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={`tel:${clinicConfig.phoneIntl}`}
                  className="rounded-full bg-primaryBlue px-6 py-3 text-sm font-semibold text-white transition hover:bg-primaryBlue/90"
                >
                  Call now
                </a>
                {clinicConfig.whatsappNumber ? (
                  <a
                    href={whatsappLink}
                    className="rounded-full border border-primaryBlue/30 px-6 py-3 text-sm font-semibold text-black transition hover:border-primaryBlue hover:bg-primaryBlue/5"
                  >
                    WhatsApp us
                  </a>
                ) : null}
              </div>
            </div>
          </div>
          <div>
            <HoursCard />
          </div>
        </div>
      </section>

      {/* Steps 2 & 3 */}
      <section className="bg-lightBlue border-t border-primaryBlue/10">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-3xl text-black">
              What happens next
            </h2>
            <div className="mt-6 grid gap-4">
              {[
                {
                  step: "2",
                  title: "What to bring",
                  detail:
                    "Bring your pet's vaccination card or medical history, a list of any current medications or supplements, and any notes about symptoms you have observed at home. For exotic pets, it helps to bring details of their diet and housing setup.",
                },
                {
                  step: "3",
                  title: "What to expect on the day",
                  detail:
                    "Arrive a few minutes early and keep your pet on a lead or in a secure carrier. Your vet will perform a thorough examination and explain their findings clearly. After your consultation, we will discuss any follow-up care or monitoring needed.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-white/60 bg-white p-5 shadow-soft"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primaryBlue text-sm font-bold text-white">
                      {item.step}
                    </span>
                    <p className="font-semibold text-black">{item.title}</p>
                  </div>
                  <p className="mt-3 text-sm text-black">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-primaryBlue/10 bg-white p-6 shadow-soft">
              <div className="mb-4 h-1 w-10 rounded-full bg-primaryBlue" />
              <p className="font-semibold text-black">After-hours care</p>
              <div className="mt-4 rounded-xl bg-lightBlue p-4">
                <p className="text-sm text-black">{clinicConfig.afterHours}</p>
                <p className="mt-2 text-xs font-semibold text-black">
                  {clinicConfig.surchargeNote}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-primaryBlue/10 bg-white p-6 shadow-soft">
              <div className="mb-4 h-1 w-10 rounded-full bg-primaryBlue" />
              <p className="font-semibold text-black">Online booking</p>
              <p className="mt-2 text-sm text-black">
                We are working on an online booking system. In the meantime,
                calling us is the fastest way to secure an appointment.
              </p>
              <p className="mt-2 text-xs text-black/50">Coming soon</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need urgent guidance?"
        description="If it is after hours, call the clinic number and you will be routed to the on-call veterinarian in East London."
      />
    </div>
  );
}
