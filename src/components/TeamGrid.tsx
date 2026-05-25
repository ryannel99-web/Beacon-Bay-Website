import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/data/team";

export function TeamGrid() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto w-full max-w-7xl px-8 text-center">
        <h2 className="text-4xl font-bold text-primaryBlue tracking-tight mb-2">
          Meet Our Clinicians
        </h2>
        <p className="text-on-surface-variant mb-14">
          A calm, experienced team focused on compassionate veterinary care.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-3xl mx-auto">
          {teamMembers.filter((m) => m.name !== "Our Nursing Team").map((member) => (
            <div key={member.name} className="group space-y-5">
              <div className="aspect-square overflow-hidden rounded-full border-4 border-surface-container-high transition-colors duration-500 group-hover:border-primaryBlue mx-auto max-w-[200px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-on-surface">{member.name}</h4>
                <p className="text-sm text-on-surface-variant">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/team"
          className="mt-12 inline-flex items-center gap-2 rounded-xl border border-outline-variant/60 px-6 py-3 text-sm font-semibold text-primaryBlue transition hover:bg-surface-container-low"
        >
          Meet the full team
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
