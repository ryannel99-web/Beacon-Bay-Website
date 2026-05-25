import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { HoursCard } from "@/components/HoursCard";
import { ReviewsSection } from "@/components/ReviewsSection";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/blog";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* About snippet */}
      <section className="bg-surface py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-16 px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-7">
            <h2 className="text-4xl font-bold text-primaryBlue tracking-tight">
              Redefining the Clinical Experience
            </h2>
            <div>
              <p className="text-lg font-semibold text-on-surface leading-relaxed">
                Beacon Bay Veterinary Clinic exists for one reason: the animals that matter most to you.
              </p>
              <p className="text-lg text-on-surface-variant leading-relaxed mt-2">
                We are a professional, relationship-first practice serving the East London community — a team that takes the medicine seriously and the relationship equally so. The best decisions are made together, balancing clinical excellence, your pet&apos;s individual needs, and what is genuinely right for your family. We call that the <strong className="text-on-surface">gold outcome</strong>.
              </p>
              <p className="text-lg text-on-surface-variant leading-relaxed mt-2">
                This is not just a philosophy, but our mission every day.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl border border-outline-variant/60 px-6 py-3 text-sm font-semibold text-primaryBlue transition hover:bg-surface-container-low"
            >
              Learn more about us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="/stock/about.jpg"
                alt="Veterinarian treating a German Shepherd"
                width={520}
                height={380}
                className="h-72 w-full object-cover"
              />
            </div>
            <HoursCard />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-primaryBlue py-20">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-8 text-center sm:grid-cols-3">
          {[
            { value: "45+", label: "Years in East London" },
            { value: "365", label: "Days a Year" },
            { value: "Gold", label: "Outcomes" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-5xl font-bold text-primary-fixed mb-2">{item.value}</p>
              <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ReviewsSection />

      {/* Blog preview */}
      <section className="bg-surface py-24">
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="flex items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primaryBlue/70 mb-2">
                News
              </p>
              <h2 className="text-4xl font-bold text-primaryBlue tracking-tight">
                Clinic updates &amp; pet care tips
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden items-center gap-1 rounded-xl border border-outline-variant/60 px-5 py-2.5 text-sm font-semibold text-primaryBlue transition hover:bg-surface-container-low md:inline-flex"
            >
              View all posts
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...blogPosts]
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .slice(0, 3)
              .map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to book? Call our team."
        description="Phone bookings only — no online booking required. After-hours calls to the clinic number are routed to the East London on-call vet rota."
      />
    </>
  );
}
